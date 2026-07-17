import List from "@/components/List";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import ApplicationForm from "@/components/ApplicationForm";

export default function Home() {
  const socialIcons = [
    "sharethis_32.png",
    "facebook_32.png",
    "twitter_32.png",
    "linkedin_32.png",
    "googleplus_32.png",
    "email_32.png",
  ];

  const jobDetails = [
    {
      title: "Job Location",
      details: "-- United States --",
    },
    {
      title: "Salary",
      details: "$25 - $27/hour",
    },
    {
      title: "Company",
      details: "Ecruit : Clients : US Clients : Monsieur Touton Selection",
    },
    {
      title: "Posted",
      details: "12/3/2024",
    },
  ];

  const jobResponsibilities = [
    "Handle customer inquiries via phone, email, or chat support",
    "Perform Data Entry tasks with accuracy and attention to detail",
    "Engage in sales-related tasks depending on your skill set",
    "Collaborate effectively with other team members and departments to ensure high-quality results",
    "Keep up good contact with supervisors and adhere to project guidelines",
  ];

  const jobBenefits = [
    "Competitive pay, ranging from $25 to $27 per hour, based on the work and experience",
    "100% remote - telecommute or anywhere with an internet connection",
    "Flexible hours - you choose your schedule and workload",
    "Extra side gig opportunities to earn extra income",
    "Work-life balance - set your own schedule and workload",
  ];

  const jobRequirements = [
    "Strong communication skills",
    "Capability to work independently and stay organized",
    "Basic proficiency in using computers, email, and online tools",
    "A stable internet connection and your own computer",
    "A proactive attitude and eagerness to learn new skills",
  ];

  return (
    <main>
      <header className="bg-gradient-to-b to-[#e4e4e4] from-slate-100 border-b-2">
        <div className="max-w-7xl px-16 py-3 flex-between m-auto max-md:px-5 max-md:gap-2 max-md:py-3">
          <div className="text-base text-slate-700 flex items-center gap-3">
            <Image
              src={`/images/ecruit.svg`}
              alt="ecruit"
              width={90}
              height={30}
              className="cursor-pointer hover:opacity-80 object-contain"
            />
            {/* <Image
              src={`/images/Indeed_logo.png`}
              alt="indeed"
              width={90}
              height={30}
              className="cursor-pointer hover:opacity-80 object-contain"
            /> */}
          </div>
          <div className="flex gap-4">
            {socialIcons.map((icon, index) => (
              <Image
                src={`/images/${icon}`}
                alt="icon"
                width={30}
                height={30}
                key={index}
                className=" cursor-pointer rounded-md hover:opacity-80 max-md:w-6 max-md:h-6 object-contain"
              />
            ))}
          </div>
        </div>
      </header>

      <section className="flex-center max-md:px-5">
        <div className="w-[1024px] max-md:w-full col-flex gap-10">
          {/* <section>
            <h1 className="text-3xl text-slate-700 pt-14 pb-8 max-md:pt-10 max-md:pb-7 ">
              Data Entry/Remote Customer Service Representative Full & Part Time
              Needed
            </h1>
            <div className="border-2 border-[#f5f5f5] rounded-xl">
              <div className="bg-[#f5f5f5] px-7 py-6 max-md:px-5 max-md:py-5 rounded-t-lg">
                <table className="w-full">
                  <tbody>
                    {jobDetails.map((item, index) => (
                      <tr key={index}>
                        <td className="font-semibold text-base text-slate-700 w-[30%] max-md:w-auto pb-2 max-md:pr-3 ">
                          {item.title}
                        </td>
                        <td className="text-base text-slate-700 max-md:pb-2">
                          {item.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-7 py-7">
                <h1 className="font-bold text-base text-slate-600 mb-5">{`Data Entry/Customer Service Representative, Full & Part Time - $25.00-$27.00 per hour - Remote, US`}</h1>
                <div className="col-flex gap-5 pl-3">
                  <div>
                    <Title text={`Job Overview`} />
                    <p className="text-slate-700 text-base">
                      {`
                        Our team is in need of enthusiastic individuals to join our team in various remote roles,including support roles, data management, and sales. It's an excellent chance for anyone seeking remote work that can be done from the comfort of your own.No matter if you're an experienced professional or just beginning your career, this position allows you to take on tasks that align with your abilities and interests.`}
                    </p>
                  </div>
                  <div>
                    <Title text={`Job Responsibilities:`} />
                    <List items={jobResponsibilities} />
                  </div>
                  <div>
                    <Title text={`Benefits:`} />
                    <List items={jobBenefits} />
                  </div>
                  <div>
                    <Title text={`Job Requirements:`} />
                    <List items={jobRequirements} />
                  </div>
                  <div className="text-slate-700 text-base col-flex gap-2">
                    <p>
                      Working with us, you can decide your work hours, and
                      the tasks we offer are straightforward and manageable.
                      This role is ideal for individuals who appreciate 
                      flexibility and want to maintain a work-life balance.
                      You can contribute to impactful projects while being
                      free to work on your terms.
                      
                    </p>
                    <p>
                      {`Don't worry if you lack direct experience - this is an junior-level position! We will provide extensive training to equip you with the knowledge and tools for success. The crucial qualifications are a strong work ethic and desire to expand your skills. If you are prepared to embark on an rewarding vocational adventure, we want you on our team! We are a varied company and have people from wide-ranging backgrounds including, remote Data Entry clerk, administrative assistant, receptionist, sales assistant, customer service agent, warehouse or factory workers, driver, medical assistant, nurse, call center representative, etc. working with our company`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <ApplicationForm />
        </div>
      </section>

      <footer className="flex-center pt-24 pb-7 max-md:pt-10 max-md:pb-5 max-md:px-5 max-md:text-base">
        <div>
          Powered by{" "}
          <Link
            href={`https://logicmelon.com/`}
            target="_black"
            className="cursor-pointer text-blue-600"
          >
            Job Advert Distribution
          </Link>{" "}
          and{" "}
          <Link
            href={`https://logicmelon.com/`}
            target="_black"
            className="cursor-pointer text-blue-600"
          >
            Candidate Response Tracking{" "}
          </Link>{" "}
          •{" "}
          <Link
            href={`https://logicmelon.com/`}
            target="_black"
            className="cursor-pointer text-blue-600"
          >
            Job Board Multiposting
          </Link>{" "}
          and{" "}
          <Link
            href={`https://logicmelon.com/`}
            target="_black"
            className="cursor-pointer text-blue-600"
          >
            Applicant Tracking Software
          </Link>{" "}
          •{" "}
          <Link
            href={`https://logicmelon.com/`}
            target="_black"
            className="cursor-pointer text-blue-600"
          >
            LogicMelon
          </Link>{" "}
          © Copyright 2024
        </div>
      </footer>
    </main>
  );
}
