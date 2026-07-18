"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import Title from "./Title";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resumeRef = useRef(null);

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) newErrors.email = "Email address is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";

    // if (!formData.phone) {
    //   newErrors.phone = "Phone number is required.";
    // } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
    //   newErrors.phone = "Please enter a valid phone number.";
    // }

    // if (formData.resume === )
    //   newErrors.resume = "Please upload your resume.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      title: formData.title,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      resume: formData.resume,
    };

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send the application");

      alert("Application submitted successfully!");

      setFormData({
        title: "",
        fullName: "",
        email: "",
        phone: "",
        resume: null,
        consent: false,
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit the application. Please try again.");
    } finally {
      setIsSubmitting(false);
      window.location.href =
        "https://thefurnitureteam.com/Careers/";
    }
  };

  const handleResumeUpload = (result) => {
    const fileUrl = result?.info?.url;
    const fileType = result?.info?.format;
    const fileSize = result?.info?.bytes; // In bytes

    // if (!["pdf", "doc", "docx", "rtf"].includes(fileType)) {
    //   alert("Only PDF, DOC, DOCX, or RTF files are allowed. Please select a");
    //   return;
    // }

    if (["png", "jpg", "jpeg", "svg", "webp"].includes(fileType)) {
      alert("Only PDF, DOC, DOCX, or RTF files are allowed. Please select a");
      return;
    }

    if (fileSize > 5 * 1024 * 1024) {
      // 5MB limit
      alert("File size must be less than 5MB.");
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      resume: fileUrl, // Save file URL
    }));
  };

  return (
    <section className="bg-[#f5f5f5] px-7 py-8 max-md:px-4 max-md:py-4 rounded-lg mt-16">
      <form onSubmit={handleSubmit}>
  <div className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
    <h2 className="text-2xl font-semibold text-slate-800 mb-3">
      Complete Your Application
    </h2>

    <p className="text-slate-700 leading-7">
      Please complete the application below using accurate and up-to-date
      information, including your contact details, and upload your most recent
      resume. Every application is carefully reviewed by our hiring team.
      Qualified candidates will be contacted regarding the next steps in the
      hiring process.
    </p>

    <p className="mt-3 text-slate-700 leading-7">
      <strong>Compensation:</strong> $22.00 – $28.00 per hour, based on experience.
    </p>
  </div>

  {/* <h1 className="text-3xl text-slate-700">Application Details</h1> */}
        <div className="border-2 border-[#f5f5f5] rounded-xl">
          <div className="px-7 py-6 max-md:px-0 max-md:py-0">
            <h1 className="font-bold text-lg text-slate-600 mb-5 max-md:mt-5">{`Want to apply faster?`}</h1>
            <div className="bg-yellow-100 rounded-md border px-3 py-2 flex gap-3">
              <Image
                src={`/images/info.gif`}
                alt="info"
                width={20}
                height={20}
                className="cursor-pointer rounded-md hover:opacity-80 object-contain"
                title="Advert details"
              />
              <h1 className="font-bold max-md:font-semibold text-sm text-slate-700">
                Fields marked * are mandatory and must be completed.
              </h1>
            </div>

            <div className="flex gap-32 mt-10 max-md:flex-col max-md:gap-3 max-md:mt-5">
              <div className="flex gap-2">
                <Title text={`Upload your Resume`} noUnder={true} />
                <Image
                  src={`/images/info.gif`}
                  alt="info"
                  width={20}
                  height={20}
                  className="cursor-pointer rounded-md hover:opacity-80 mt-[-10px] object-contain"
                  title="Please attach your a Resume in .doc (or .docx) (Microsoft Word) or .rtf (Rich Text File) or .pdf (Portable Document Format) format (less than 5000KB)."
                />
              </div>
              <div className="">
                <CldUploadWidget
                  uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
                  onSuccess={handleResumeUpload}
                >
                  {({ open }) => (
                    <div
                      onClick={() => open()}
                      className="bg-gradient-to-tr to-[#e4e4e4] from-slate-300 rounded-md text-center p-3 text-sm cursor-pointer shadow-sm w-[200px] max-md:w-full flex-center"
                    >
                      {formData.resume ? "Resume Uploaded" : "Select File"}
                    </div>
                  )}
                </CldUploadWidget>
                {errors.resume && (
                  <p className="text-[#f31260] text-xs pt-2">{errors.resume}</p>
                )}
              </div>
            </div>

            <h1 className="text-3xl text-slate-700 ml-[-20px] max-md:ml-0 max-md:mt-6 max-md:mb-5 mt-8 mb-8">
              Personal details
            </h1>
            <div className="col-flex gap-5 max-md:gap-4 pl-3 max-md:pl-0">
              <table className="w-full">
                <tbody className="max-md:block">
                  <tr className="max-md:flex max-md:flex-col">
                    <td className="w-[30%]">
                      <label htmlFor="title">
                        <Title text={`Title`} noUnder={true} />
                      </label>
                    </td>
                    <td>
                      <select
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="input-style"
                      >
                        <option value="">Select</option>
                        <option value="Dr">Dr</option>
                        <option value="Individual">Individual</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                        <option value="Mx">Mx</option>
                        <option value="Prof">Prof</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="max-md:flex max-md:flex-col">
                    <td>
                      <Title text={`Full Name*`} noUnder={true} />
                    </td>
                    <td>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="input-style"
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="text-[#f31260] text-xs">
                          {errors.fullName}
                        </p>
                      )}
                    </td>
                  </tr>
                  <tr className="max-md:flex max-md:flex-col">
                    <td>
                      <Title text={`Email Address*`} noUnder={true} />
                    </td>
                    <td>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-style"
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-[#f31260] text-xs">{errors.email}</p>
                      )}
                    </td>
                  </tr>
                  <tr className="max-md:flex max-md:flex-col">
                    <td>
                      <Title text={`Mobile Phone*`} noUnder={true} />
                    </td>
                    <td>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input-style"
                        placeholder="Enter your contact number"
                      />
                      {errors.email && (
                        <p className="text-[#f31260] text-xs">{errors.phone}</p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div>
                <Title text={`Privacy Notice`} noUnder={true} />
                <p className="text-slate-700 text-base max-md:text-xs">
                  We take your privacy seriously and will only use your
                  information to administer your application. To process your
                  application we may contact you by telephone or email. We may
                  include your details in our talent pool database for
                  recruiting purposes. Click{" "}
                  <Link
                    href={`https://thefurnitureteam.com/Careers`}
                    target="_black"
                    className="cursor-pointer text-blue-600"
                  >
                    here
                  </Link>{" "}
                  to view our privacy policy.
                </p>
              </div>

              <div className="flex items-center gap-7 mt-2 max-md:mt-0 max-md:gap-4">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="w-5 h-5 -mt-2 max-md:w-7 max-md:h-7"
                />
                <Title
                  text={`I wish to receive a copy of this application`}
                  noUnder={true}
                />
              </div>

              <div className="text-slate-700 text-lg col-flex gap-2 mt-5 max-md:mt-1 max-md:pb-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-lg px-10 py-5 text-slate-100 bg-blue-700 rounded-md font-semibold hover:bg-blue-600"
                >
                  {isSubmitting ? `Submitting...` : `Apply Now`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ApplicationForm;
