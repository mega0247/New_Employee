import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(req) {
  const data = await req.json();

  const subject = `${process.env.SUBJECT_BEFORE_NAME} ${data.fullName} ${process.env.SUBJECT_AFTER_NAME}`;

  try {
    const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

await transporter.verify();

console.log("SMTP connection verified successfully.");

    const formBody = `
    <div style="margin: 0px; padding: 0px">
  <table
    id="m_-365141887954085853m_19811627159379075mainContainer"
    width="100%"
    border="0"
    cellspacing="0"
    cellpadding="0"
  >
    <tbody>
      <tr>
        <td
          align="center"
          style="padding: 25px 0 25px; background: #f1f3f4 none"
          id="m_-365141887954085853m_19811627159379075bodyPadding"
        >
          <table
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="
              border-collapse: collapse;
              background-color: #ffffff;
              margin: 0 auto;
              border: 1px solid #d1d4d5;
            "
            id="m_-365141887954085853m_19811627159379075mainContent"
          >
            <tbody>
              <tr>
                <td
                  style="
                    background-color: #ffffff;
                    padding-top: 0px;
                    padding: 10px;
                    padding-bottom: 20px;
                  "
                >
                  <table
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="
                      width: 100%;
                      border-collapse: collapse;
                      background-color: #ffffff;
                      border-bottom: 1px solid #d1d4d5;
                    "
                    id="m_-365141887954085853m_19811627159379075header"
                  >
                    <tbody>
                      <tr>
                        <td
                          valign="middle"
                          align="left"
                          width="50%"
                          style="
                            background-color: #ffffff;
                            padding: 20px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                          id="m_-365141887954085853m_19811627159379075logo"
                        >
                          <a
                            href="https://www.ziprecruiter.com/?source=email-remarketing-Trans-new-response--all-else--"
                            title="Sign In to ZipRecruiter"
                            target="_blank"
                            data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/?source%3Demail-remarketing-Trans-new-response--all-else--&amp;source=gmail&amp;ust=1735298618321000&amp;usg=AOvVaw3AlxyM1s7Ck0RW2-SA94UG"
                            ><img
                              src="https://ci3.googleusercontent.com/meips/ADKq_NZKiKtkde2am0R4r1mXL4foqb-9lCOJdOBUVE1P6fv1Pl6cjPRDY1K1hwnveYRAnBwYMfFIrd8Ai4_hBX2vVfE9GMpA7W9Pu-Z5dK2VWuH2ACb54JCdh9iKZ2QsrrKkNJ6OwbZo6Xk=s0-d-e1-ft#https://www.ziprecruiter.com/zrs/086d5dd4/img/logos/logo-ziprecruiter-280x112.png"
                              style="margin-top: 5px"
                              width="140"
                              height="56"
                              alt="ZipRecruiter"
                              border="0"
                              class="CToWUd"
                              data-bit="iit"
                          /></a>
                        </td>

                        <td
                          valign="middle"
                          align="right"
                          width="50%"
                          style="
                            background-color: #ffffff;
                            padding-top: 25px;
                            padding-right: 20px;
                            padding-bottom: 25px;
                            text-align: right;
                            vertical-align: middle;
                          "
                          id="m_-365141887954085853m_19811627159379075signin"
                        >
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="right"
                            style="width: 200px; width: 100px"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    color: #2f3639;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    text-align: center;
                                    padding: 5px;
                                    width: 200px;
                                    background: #f5f6f7;
                                    border-radius: 20px;
                                    min-height: 28px;
                                    border: 1px solid #d1d4d5;
                                    width: 100px;
                                  "
                                >
                                  <a
                                    href="https://www.ziprecruiter.com/dashboard/?source=email-remarketing-Trans-new-response--all-else--"
                                    style="
                                      white-space: nowrap;
                                      border: none;
                                      text-decoration: none;
                                      text-align: center;
                                      display: block;
                                      color: #2f3639;
                                      font-family: Arial, sans-serif;
                                      padding-left: 15px;
                                      padding-right: 15px;
                                      padding-top: 2px;
                                      padding-bottom: 2px;
                                    "
                                    target="_blank"
                                    data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/dashboard/?source%3Demail-remarketing-Trans-new-response--all-else--&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw0eIDcuRjA0CJuRGeTyICoJ"
                                  >
                                    Sign In
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="
                      width: 680px;
                      background-color: #ffffff;
                      border-collapse: collapse;
                    "
                  >
                    <tbody>
                      <tr>
                        <td
                          valign="top"
                          align="left"
                          style="
                            background-color: #ffffff;
                            padding: 30px;
                            padding-bottom: 15px;
                            font-family: Arial, sans-serif;
                            font-size: 15px;
                            line-height: 1.4;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              border-collapse: collapse;
                              margin-bottom: 20px;
                              width: 100%;
                            "
                          >
                            <tbody>
                              <tr>
                                <td
                                  valign="top"
                                  align="left"
                                  style="
                                    background-color: #ffffff;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-size: 15px;
                                    width: 100%;
                                    line-height: 22px;
                                  "
                                >
                                  <a
                                    href=""
                                    style="color: #067ac1"
                                    target="_blank"
                                    data-saferedirecturl=""
                                    >${data?.fullName}</a
                                  >

                                  has applied to your job posted through
                                  ZipRecruiter.
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              border-collapse: collapse;
                              margin-bottom: 20px;
                              width: 100%;
                            "
                          >
                            <tbody>
                              <tr>
                                <td
                                  colspan="2"
                                  style="
                                    text-align: left;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-weight: 700;
                                    font-size: 13px;
                                    padding: 10px;
                                    background: #f1f3f4;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  General Info
                                </td>
                              </tr>
                              <tr>
                                <td
                                  width="23%"
                                  style="
                                    text-align: right;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-weight: 700;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    background: #f5f6f7;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  Name:
                                </td>
                                <td
                                  width="77%"
                                  style="
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-size: 13px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                    style="border-collapse: collapse"
                                  >
                                    <tbody>
                                      <tr>
                                        <td valign="middle">${data?.fullName}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  width="23%"
                                  style="
                                    text-align: right;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-weight: 700;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    background: #f5f6f7;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  Email:
                                </td>
                                <td
                                  width="77%"
                                  style="
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  <a
                                    style="color: #067ac1"
                                    href="mailto:${data?.email}"
                                    target="_blank"
                                    >${data?.email}</a
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td
                                  width="23%"
                                  style="
                                    text-align: right;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-weight: 700;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    background: #f5f6f7;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  Phone:
                                </td>
                                <td
                                  width="77%"
                                  style="
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  <a
                                    style="
                                      color: #2f3639;
                                      text-decoration: none;
                                    "
                                    >${data?.phone}</a
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td
                                  width="23%"
                                  style="
                                    text-align: right;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-weight: 700;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    background: #f5f6f7;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  Job Title:
                                </td>
                                <td
                                  width="77%"
                                  style="
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  <a
                                    href="https://www.ziprecruiter.com/quiz/preview/61dbbcad?source=email-remarketing-Trans-new-response--all-else--"
                                    style="color: #067ac1"
                                    target="_blank"
                                    data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/quiz/preview/61dbbcad?source%3Demail-remarketing-Trans-new-response--all-else--&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw1G6K8KZtySyh2Cyu6_L1PQ"
                                    >${process.env.JOB_TITLE}</a
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td
                                  width="23%"
                                  style="
                                    text-align: right;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-weight: 700;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    background: #f5f6f7;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  Job Location:
                                </td>
                                <td
                                  width="77%"
                                  style="
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  ${process.env.JOB_LOCATION}
                                </td>
                              </tr>

                              <tr>
                                <td
                                  width="23%"
                                  style="
                                    text-align: right;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-weight: 700;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    background: #f5f6f7;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  Hiring Company:
                                </td>
                                <td
                                  width="77%"
                                  style="
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  ${process.env.HIRING_COMPANY}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  width="23%"
                                  style="
                                    text-align: right;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-weight: 700;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    background: #f5f6f7;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  Source:
                                </td>
                                <td
                                  width="77%"
                                  style="
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-size: 13px;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  <a
                                    href="${process.env.SOURCE_URL}"
                                    target="_blank"
                                    data-saferedirecturl=""
                                    >${process.env.SOURCE_URL}</a
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td
                                  valign="middle"
                                  align="center"
                                  width="100%"
                                  style="
                                    text-align: center;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-size: 13px;
                                    padding: 10px;
                                    padding-top: 20px;
                                    border: 1px solid #d1d4d5;
                                  "
                                  colspan="2"
                                >
                                  <table
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                    style="
                                      border-collapse: collapse;
                                      width: 420px;
                                      margin: 0 auto;
                                      display: block;
                                    "
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="middle"
                                          align="center"
                                          style="
                                            text-align: center;
                                            padding: 5px;
                                          "
                                          width="210"
                                        >
                                          <table
                                            border="0"
                                            cellspacing="0"
                                            cellpadding="0"
                                            align="center"
                                            style="
                                              width: 200px;
                                              margin-right: auto;
                                              margin-left: auto;
                                            "
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    color: #fff;
                                                    font-family: Arial,
                                                      sans-serif;
                                                    font-size: 15px;
                                                    text-align: center;
                                                    padding: 5px;
                                                    width: 200px;
                                                    background: #71af05;
                                                    border-radius: 20px;
                                                    min-height: 28px;
                                                  "
                                                >
                                                  <a
                                                    href="https://www.ziprecruiter.com/contact/response/61dbbcad/a45bdc0a?_from_email_=1&amp;source=email-remarketing-Trans-new-response--all-else--"
                                                    style="
                                                      white-space: nowrap;
                                                      border: none;
                                                      text-decoration: none;
                                                      color: #fff;
                                                      text-align: center;
                                                      display: block;
                                                      font-weight: bold;
                                                      font-family: Arial,
                                                        sans-serif;
                                                      padding-left: 15px;
                                                      padding-right: 15px;
                                                      padding-top: 2px;
                                                      padding-bottom: 2px;
                                                    "
                                                    target="_blank"
                                                    data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/contact/response/61dbbcad/a45bdc0a?_from_email_%3D1%26source%3Demail-remarketing-Trans-new-response--all-else--&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw3H1vkUOqbZwnpd6LAAutlm"
                                                  >
                                                    <span
                                                      >View Full
                                                      Application</span
                                                    >
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                        <td
                                          valign="middle"
                                          align="center"
                                          style="
                                            text-align: center;
                                            padding: 5px;
                                          "
                                          width="210"
                                        >
                                          <table
                                            border="0"
                                            cellspacing="0"
                                            cellpadding="0"
                                            align="center"
                                            style="width: 200px"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    color: #2f3639;
                                                    font-family: Arial,
                                                      sans-serif;
                                                    font-size: 15px;
                                                    text-align: center;
                                                    padding: 5px;
                                                    width: 200px;
                                                    background: #f5f6f7;
                                                    border-radius: 20px;
                                                    min-height: 28px;
                                                    border: 1px solid #d1d4d5;
                                                  "
                                                >
                                                  <a
                                                    href="https://www.ziprecruiter.com/candidates?quiz_id=61dbbcad&amp;_from_email_=1&amp;source=email-remarketing-Trans-new-response--all-else--"
                                                    style="
                                                      white-space: nowrap;
                                                      border: none;
                                                      text-decoration: none;
                                                      text-align: center;
                                                      display: block;
                                                      color: #2f3639;
                                                      font-family: Arial,
                                                        sans-serif;
                                                      padding-left: 15px;
                                                      padding-right: 15px;
                                                      padding-top: 2px;
                                                      padding-bottom: 2px;
                                                    "
                                                    target="_blank"
                                                    data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/candidates?quiz_id%3D61dbbcad%26_from_email_%3D1%26source%3Demail-remarketing-Trans-new-response--all-else--&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw3AqVXb46102_2ZGwrnST7g"
                                                  >
                                                    View All Candidates (${process.env.SUM_OF_CANDIDATE})
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <table
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                    style="
                                      border-collapse: collapse;
                                      width: 550px;
                                      margin: 0 auto;
                                    "
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            width: 100%;
                                            border-collapse: collapse;
                                            padding-top: 15px;
                                          "
                                        >
                                          <table
                                            border="0"
                                            cellspacing="0"
                                            cellpadding="0"
                                            style="
                                              font-family: Arial, sans-serif;
                                              width: 550px;
                                              color: #2f3639;
                                              margin: 0 auto;
                                              display: block;
                                            "
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  valign="middle"
                                                  align="left"
                                                  style="
                                                    border-collapse: collapse;
                                                    width: 180px;
                                                  "
                                                >
                                                  <img
                                                    src="https://ci3.googleusercontent.com/meips/ADKq_NbHjMaLF3nQl4rrf_euzsh0q7utHejtYxh7XIgIWPY3X9WEIdFJYQ9dqvy9glX5rMjR7zniC22yP3_9n9TTygmJdKhTsLMJzXNcI3ya33rKL7rqyds=s0-d-e1-ft#https://www.ziprecruiter.com/zrs/13fe7b16/img/email/1px-ddd.png"
                                                    alt="-----"
                                                    width="100%"
                                                    height="1"
                                                    style="display: block"
                                                    class="CToWUd"
                                                    data-bit="iit"
                                                  />
                                                </td>
                                                <td
                                                  valign="middle"
                                                  align="center"
                                                  style="
                                                    background-color: #ffffff;
                                                    text-align: center;
                                                    border-collapse: collapse;
                                                    color: #2f3639;
                                                    font-size: 15px;
                                                    font-family: Georgia, serif;
                                                    font-style: italic;
                                                    white-space: nowrap;
                                                    width: 180px;
                                                  "
                                                >
                                                  Rate this candidate:
                                                </td>
                                                <td
                                                  valign="middle"
                                                  align="right"
                                                  style="
                                                    border-collapse: collapse;
                                                    width: 180px;
                                                  "
                                                >
                                                  <img
                                                    src="https://ci3.googleusercontent.com/meips/ADKq_NbHjMaLF3nQl4rrf_euzsh0q7utHejtYxh7XIgIWPY3X9WEIdFJYQ9dqvy9glX5rMjR7zniC22yP3_9n9TTygmJdKhTsLMJzXNcI3ya33rKL7rqyds=s0-d-e1-ft#https://www.ziprecruiter.com/zrs/13fe7b16/img/email/1px-ddd.png"
                                                    alt="-----"
                                                    width="100%"
                                                    height="1"
                                                    style="display: block"
                                                    class="CToWUd"
                                                    data-bit="iit"
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <table
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                    style="
                                      border-collapse: collapse;
                                      width: 300px;
                                      margin: 10px auto 0;
                                    "
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="middle"
                                          align="center"
                                          style="
                                            padding: 5px;
                                            text-align: center;
                                            font-family: Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            font-size: 13px;
                                          "
                                          width="33%"
                                        >
                                          <a
                                            href="https://www.ziprecruiter.com/rating/response/bb97d7ca/save-rating?_token=U2FsdGVkX1/KeRDtt4r0LM8535t4F3gcrRwMZRn0gw0fcdMPsjV+MECWdgDRdlHy&amp;rating=no&amp;email=1&amp;source=email-remarketing-Trans-new-response--all-else--"
                                            style="
                                              color: #067ac1;
                                              font-size: 13px;
                                              line-height: 25px;
                                              display: block;
                                              text-align: center;
                                            "
                                            title="Not interested in this candidate"
                                            target="_blank"
                                            data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/rating/response/bb97d7ca/save-rating?_token%3DU2FsdGVkX1/KeRDtt4r0LM8535t4F3gcrRwMZRn0gw0fcdMPsjV%2BMECWdgDRdlHy%26rating%3Dno%26email%3D1%26source%3Demail-remarketing-Trans-new-response--all-else--&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw1BmV0Q87dCP31Lrr0bnPDl"
                                          >
                                            <img
                                              src="https://ci3.googleusercontent.com/meips/ADKq_NadsgEU4u-Tiy6brqsDGsYEmDye_oW-p4HmHCUiNbzSlbi-itj3WUMXB1gyJDCbjGea6a_Hahpm9-g1k-b-1oh4q7wleWqSzBPhpe2MAKCBzE08U4YMCPeJ=s0-d-e1-ft#https://www.ziprecruiter.com/zrs/d30bc463/img/email/thumbs-down.png"
                                              width="72"
                                              height="72"
                                              alt="Thumbs Down"
                                              style="
                                                margin: 0 auto;
                                                display: block;
                                                font-size: 20px;
                                              "
                                              class="CToWUd"
                                              data-bit="iit"
                                            />
                                          </a>
                                        </td>
                                        <td
                                          valign="middle"
                                          align="center"
                                          style="
                                            padding: 5px;
                                            text-align: center;
                                            font-family: Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            font-size: 13px;
                                          "
                                          width="33%"
                                        >
                                          <a
                                            href="https://www.ziprecruiter.com/rating/response/bb97d7ca/save-rating?_token=U2FsdGVkX1/KeRDtt4r0LM8535t4F3gcrRwMZRn0gw0fcdMPsjV+MECWdgDRdlHy&amp;rating=maybe&amp;email=1&amp;source=email-remarketing-Trans-new-response--all-else--"
                                            style="
                                              color: #067ac1;
                                              font-size: 13px;
                                              line-height: 25px;
                                              display: block;
                                              text-align: center;
                                            "
                                            title="Unsure about this candidate"
                                            target="_blank"
                                            data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/rating/response/bb97d7ca/save-rating?_token%3DU2FsdGVkX1/KeRDtt4r0LM8535t4F3gcrRwMZRn0gw0fcdMPsjV%2BMECWdgDRdlHy%26rating%3Dmaybe%26email%3D1%26source%3Demail-remarketing-Trans-new-response--all-else--&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw03NmkicJIVMFfoWj88kVnP"
                                          >
                                            <img
                                              src="https://ci3.googleusercontent.com/meips/ADKq_NYgOArK4QaiFDSVaPGj7JaIcR-F64eyLO_EBysY0ogSnQs871snGmo62Ozu04qRdkVHsqBIQ5003Dx24OjDe8_bF3aaYP0BhiCFNrwds1xrVTnvhg=s0-d-e1-ft#https://www.ziprecruiter.com/zrs/88b41537/img/email/unsure.png"
                                              width="72"
                                              height="72"
                                              alt="Unsure"
                                              style="
                                                margin: 0 auto;
                                                display: block;
                                                font-size: 20px;
                                              "
                                              class="CToWUd"
                                              data-bit="iit"
                                            />
                                          </a>
                                        </td>
                                        <td
                                          valign="middle"
                                          align="center"
                                          style="
                                            padding: 5px;
                                            text-align: center;
                                            font-family: Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            font-size: 13px;
                                          "
                                          width="33%"
                                        >
                                          <a
                                            href="https://www.ziprecruiter.com/rating/response/bb97d7ca/save-rating?_token=U2FsdGVkX1/KeRDtt4r0LM8535t4F3gcrRwMZRn0gw0fcdMPsjV+MECWdgDRdlHy&amp;rating=yes&amp;email=1&amp;source=email-remarketing-Trans-new-response--all-else--"
                                            style="
                                              color: #067ac1;
                                              font-size: 13px;
                                              line-height: 25px;
                                              display: block;
                                              text-align: center;
                                            "
                                            title="Interested in this candidate"
                                            target="_blank"
                                            data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/rating/response/bb97d7ca/save-rating?_token%3DU2FsdGVkX1/KeRDtt4r0LM8535t4F3gcrRwMZRn0gw0fcdMPsjV%2BMECWdgDRdlHy%26rating%3Dyes%26email%3D1%26source%3Demail-remarketing-Trans-new-response--all-else--&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw0TuEnJCf2FVePXWrV3Ejrt"
                                          >
                                            <img
                                              src="https://ci3.googleusercontent.com/meips/ADKq_Nbe9iEVC_7R9p9Rjpyy3iTAKzxIY3MuC6ctVMm9TUpGuLgbBxXCCzBNJZ3XSnBLETR8CdgQ5lpINjXxKiKZYorkanc-dTTliDDgAF47RGMxJ2CsvdvM5A=s0-d-e1-ft#https://www.ziprecruiter.com/zrs/d9c6b043/img/email/thumbs-up.png"
                                              width="72"
                                              height="72"
                                              alt="Thumbs Up"
                                              style="
                                                margin: 0 auto;
                                                display: block;
                                                font-size: 20px;
                                              "
                                              class="CToWUd"
                                              data-bit="iit"
                                            />
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="middle"
                                          align="center"
                                          style="
                                            padding: 8px;
                                            text-align: center;
                                            font-family: Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            font-size: 13px;
                                          "
                                          width="100%"
                                          colspan="3"
                                        >
                                          <a
                                            href="https://www.ziprecruiter.com/contact/hide/response/bb97d7ca?source=email-remarketing-Trans-new-response--all-else--"
                                            style="
                                              color: #2f3639;
                                              font-size: 13px;
                                              line-height: 25px;
                                              display: block;
                                            "
                                            title="Hide candidate"
                                            target="_blank"
                                            data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/contact/hide/response/bb97d7ca?source%3Demail-remarketing-Trans-new-response--all-else--&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw2fSy3Z1qoe_wTqsgEUwcjG"
                                          >
                                            Hide candidate
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              margin-top: 15px;
                              margin-bottom: 20px;
                              border-collapse: collapse;
                              width: 100%;
                            "
                          >
                            <tbody>
                              <tr>
                                <td
                                  colspan="2"
                                  style="
                                    text-align: left;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-weight: 700;
                                    font-size: 13px;
                                    padding: 10px;
                                    background: #f1f3f4;
                                    border: 1px solid #d1d4d5;
                                  "
                                >
                                  Previous Job
                                </td>
                              </tr>
                              <tr>
                                <td
                                  valign="top"
                                  align="left"
                                  style="
                                    border: 1px solid #d1d4d5;
                                    padding: 15px;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-size: 13px;
                                    line-height: 19px;
                                  "
                                >
                                  <a
                                    href="https://www.ziprecruiter.com/contact/response/61dbbcad/a45bdc0a?source=email-remarketing-Trans-new-response--all-else--#tabOriginalResume"
                                    style="color: #067ac1"
                                    target="_blank"
                                    data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/contact/response/61dbbcad/a45bdc0a?source%3Demail-remarketing-Trans-new-response--all-else--%23tabOriginalResume&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw1aIi88iw9-GiLSN15pjWsF"
                                    >View full resume
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              border-collapse: collapse;
                              margin-bottom: 0px;
                              width: 100%;
                            "
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    text-align: left;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-weight: 700;
                                    font-size: 13px;
                                    padding: 10px;
                                    background: #f1f3f4;
                                    border: 1px solid #d1d4d5;
                                    border-bottom: none;
                                  "
                                >
                                  Cover Letter
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="width: 100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="width: 100%; border: 1px solid #d1d4d5"
                                >
                                  <table
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                    style="width: 100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="
                                            font-family: Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            font-size: 13px;
                                            padding: 15px;
                                            width: 100%;
                                            color: #2f3639;
                                          "
                                        >
                                          Candidate has not included a cover
                                          letter at this time.
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="border-collapse: collapse; margin-top: 20px"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  valign="top"
                                  align="center"
                                  style="
                                    background-color: #f5f6f7;
                                    border: 2px dashed #d1d4d5;
                                    padding: 15px;
                                    padding-bottom: 12px;
                                    font-family: Arial, sans-serif;
                                    font-size: 15px;
                                    line-height: 1.4;
                                    font-size: 13px;
                                  "
                                >
                                  <b
                                    >Did you know you can get $100 or more off
                                    your next renewal?</b
                                  >
                                  <br />
                                  <span
                                    style="font-size: 13px; line-height: 22px"
                                    >Get a $100 credit towards your ZipRecruiter
                                    subscription for every new subscriber you
                                    refer.<br />
                                    <a
                                      href="https://www.ziprecruiter.com/refer-a-friend?cvosrc=email-remarketing-Trans-new-response--raf-control--&amp;source=email-remarketing-Trans-new-response--all-else--"
                                      style="color: #067ac1"
                                      target="_blank"
                                      data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/refer-a-friend?cvosrc%3Demail-remarketing-Trans-new-response--raf-control--%26source%3Demail-remarketing-Trans-new-response--all-else--&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw0Yu9SjxIFFpulKifCZ23Rp"
                                      >Invite your friends and get credit!</a
                                    ></span
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <br />
                          To no longer receive new candidate emails for this
                          job,
                          <a
                            href="https://www.ziprecruiter.com/quiz/unsubscribe/61dbbcad?source=email-remarketing-Trans-new-response--all-else--"
                            style="color: #067ac1"
                            title="Stop receiving new candidate notifications for this job only"
                            target="_blank"
                            data-saferedirecturl="https://www.google.com/url?q=https://www.ziprecruiter.com/quiz/unsubscribe/61dbbcad?source%3Demail-remarketing-Trans-new-response--all-else--&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw1IXdUA4L-TC1Jf0JfhEEBv"
                            >unsubscribe</a
                          >.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <img
                    src="https://ci3.googleusercontent.com/meips/ADKq_NYAZVTBuN6n135ewe7Crp_1AknX9YDcHp3FBhmw4emHgcY6uH-QtcOkggyajXtLnRL5WpJkGefCz3SxuZVEO7ItJaIw9yc0ckxfxa38DLxUakmWZB-o90O6JNHH3CiAGxgJ_1iqM0M7NEUOv3TuN4Ssu_uTup50ubED9XuepLz_JRezr95vXfPJPlwlipY1JV24=s0-d-e1-ft#https://www.ziprecruiter.com/pixel/response/viewed/bb97d7ca/1c05cc45?source=email-remarketing-Trans-new-response--all-else--"
                    width="1"
                    height="1"
                    alt=""
                    class="CToWUd"
                    data-bit="iit"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td
          valign="top"
          align="center"
          style="
            padding: 5px 10px 45px;
            background: #f1f3f4 none;
            font-family: Arial, sans-serif;
            font-size: 15px;
            line-height: 1.4;
            color: #2f3639;
            font-size: 13px;
          "
          id="m_-365141887954085853m_19811627159379075footer"
        >
          ZipRecruiter, Inc. © All Rights Reserved Worldwide
          <br />
          <table
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="margin: 5px auto"
          >
            <tbody>
              <tr>
                <td width="24" height="auto" style="padding: 6px 14px 0 0">
                  <a
                    href="http://blog.ziprecruiter.com/"
                    title="Read the ZipRecruiter Blog"
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?q=http://blog.ziprecruiter.com/&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw11qQfF6XRtX_DVlMT0CXRi"
                    ><img
                      src="https://ci3.googleusercontent.com/meips/ADKq_NZjt3GqKFFV7mHLmMNrbHexIFeudGL3ehRDdzsv1c8xf4awdcGNZ8kDhYtGJBcFLvWeAt3ZLUQz8bs9tLwbbm7DEvsVkmZYBJDHycZa09GyDtrnMW0OFn_Y=s0-d-e1-ft#https://www.ziprecruiter.com/zrs/92cfb90a/img/email/soc-blog-dk.png"
                      width="24"
                      height="auto"
                      border="0"
                      style="display: block; width: 24px; height: auto"
                      alt="ZipRecruiter"
                      class="CToWUd"
                      data-bit="iit"
                  /></a>
                </td>

                <td width="24" height="auto" style="padding: 6px 14px 0 0">
                  <a
                    href="http://www.linkedin.com/company/967124"
                    title="Follow ZipRecruiter on LinkedIn"
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?q=http://www.linkedin.com/company/967124&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw2FxtVA5GkQBf56AaXrwao3"
                    ><img
                      src="https://ci3.googleusercontent.com/meips/ADKq_NaEpq_VbAk77nBS3QlaiXDlAhQUUt7tjmooJkwpLWZXrCW-k9WNb2OGRgkNGC5SXQiZeqTkcbwBwpQPWamKLmtnRqp2AFudlaBsLywbK-uDEpB3EO95iPEnllRBjg=s0-d-e1-ft#https://www.ziprecruiter.com/zrs/aa662e79/img/email/soc-linkedin-dk.png"
                      width="24"
                      height="auto"
                      border="0"
                      style="display: block; width: 24px; height: auto"
                      alt="LinkedIn"
                      class="CToWUd"
                      data-bit="iit"
                  /></a>
                </td>
                <td width="24" height="auto" style="padding: 6px 14px 0 0">
                  <a
                    href="http://www.facebook.com/ziprecruiter"
                    title="Like ZipRecruiter on Facebook"
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?q=http://www.facebook.com/ziprecruiter&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw2u6YS-HWzuGj4YOVCpVFCe"
                    ><img
                      src="https://ci3.googleusercontent.com/meips/ADKq_NY-78-qsPTKOQ4NOhmZZQTqZcQj3uzN7brIoQgvLk4Ijjh9AZTrRawJZnM4X-Nc6eI2n1S5_EG4IGSZI0oHMFnfpM7Ihylh_rANXisQaIWnbh-keYwoVRh4i2lLYw=s0-d-e1-ft#https://www.ziprecruiter.com/zrs/a40953d4/img/email/soc-facebook-dk.png"
                      width="24"
                      height="auto"
                      border="0"
                      style="display: block; width: 24px; height: auto"
                      alt="Facebook"
                      class="CToWUd"
                      data-bit="iit"
                  /></a>
                </td>
                <td width="24" height="auto" style="padding: 6px 14px 0 0">
                  <a
                    href="http://www.twitter.com/ziprecruiter"
                    title="Follow ZipRecruiter on Twitter"
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?q=http://www.twitter.com/ziprecruiter&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw2Qlq3WujZ5WgGk3SFBrywF"
                    ><img
                      src="https://ci3.googleusercontent.com/meips/ADKq_NYfPsV2Gf0w6sdk_Nffl-PTBRIimTrne_uF14NnZncex752awa4Ikg-UDdmsrzuN6M4xrbW43mkzKaRFyB29eyMXcw6I5ShNqNpjobv85Ga1rfBaNbDsMd3xuQ5=s0-d-e1-ft#https://www.ziprecruiter.com/zrs/9b9197c2/img/email/soc-twitter-dk.png"
                      width="24"
                      height="auto"
                      border="0"
                      style="display: block; width: 24px; height: auto"
                      alt="Twitter"
                      class="CToWUd"
                      data-bit="iit"
                  /></a>
                </td>
                <td width="24" height="auto" style="padding: 6px 0 0 0">
                  <a
                    href="https://plus.google.com/104650830071607252119/"
                    title="Follow ZipRecruiter on Google+"
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?q=https://plus.google.com/104650830071607252119/&amp;source=gmail&amp;ust=1735298618322000&amp;usg=AOvVaw0jbN78W4t0ZtoZEWlHBFoC"
                    ><img
                      src="https://ci3.googleusercontent.com/meips/ADKq_NZTG53nNVtNxK5Klp4TUp4QaubCzAPJz8Uu7ZoPUdT-JmMiPpJVHFtYjom4SqZfCDDaSEHlJkU2Ui8HLhUJ5Y0--w-xbxSKdh-PK_UsWC3tf998giF6YNuaUgb7bsHs=s0-d-e1-ft#https://www.ziprecruiter.com/zrs/1007be0f/img/email/soc-googleplus-dk.png"
                      width="24"
                      height="auto"
                      border="0"
                      style="display: block; width: 24px; height: auto"
                      alt="ZipRecruiter"
                      class="CToWUd"
                      data-bit="iit"
                  /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>

  <img
    src="https://ci3.googleusercontent.com/meips/ADKq_Nb4lY9Yz9hFbuwBbGTxotFn00LaBCk-Em6bXzmVdGFhz6n9LeaS1W-wrS1WoI-j6E9vdm6rzQCowP-sJl5RMOTbqoAGOFeQr1833EE-a0DnX7waCo6vSuUsqKov5n4T9BLc8KJWo_CxYKFS1a1CtMB_yHfQTuMdyD1Q0wRoyZbS9-mv6i0ba_J333JBUp7AJf2NxnY0mJ8qjbj0DiBKaHyjUmCMw9tUsWSYPr3l9PXuRh054E9SUtEAs3PR4TA-Ce_lbDDKekUSkVcYjTu1CQUHXZBvKiTPDEh2S2oM2zgEssFiMzQA-yCvR0Z_tyvsQ4axo-sW5SV2rH-yuqJ5-iM9Kg6RAxXNw8TICE9YLYnzZ9vD4c18DTeToYdHZCGzwWDeZlLeua_G34hebqZdx-wJcte9z61lAr6cvwuK30-lU1SjuTuTms6qVuOF7ptmgPdOxhgn-RJ2T3er1ru3OARUEGjWliTecMD3ZiDyVwoLpEXu9fG3uqs7DV_o6NvmQKvhM1xgNV0tLumbHX_RNe96MjbXdnnA7APCtd78RqwTSmtDsrUCAOfvLvmO3FtaI5fHFdSQmMq2rGkQ4BnErkdVIgEt=s0-d-e1-ft#https://www.ziprecruiter.com/pxl/aX9pdIaz_mW-v5-hMbOUWCAlVQAAMgAalL3rLlX63FphrSBjo0XtzbLXDmiZJHfQjtCofbLcGmNNnGSdSd98a1d3qMu5y45TbtAmHQc9Z9EALEcyXJdFHy-AVXg1ZmwcACB4of6ssOi7NxzjYHriMvaGUVh89dLX3Z8ETI3aQVGMUL5-AZioO7CxPIp-tDK5JiLgBY0jdFf0OT9yqgwvHyOYHEswW-c6Fq14t_LNmwllxdCjgQ9RebcuvH7-XPwC5kJK5eaGKupK_JBRNiuJwguKFQsfwmz9zBsBrNj5wxyDSjd_dkTXshQUR63Jd1iDC6r2eOJXR363xIyfWndrWtd8ZWMxWAiGqhjC57hopbE.e9a0e6bcd5d3116c0fd1ee8aedfa8a03"
    width="1"
    height="1"
    alt=""
    class="CToWUd"
    data-bit="iit"
  />

  <img
    src="https://ci3.googleusercontent.com/meips/ADKq_NYVHhGYMewPZ5rSPxmgTvjgRkS7un_PoYcbNHyoXF_vljAVopde4FIe56DPdGArP8ErTjrluw7T9sa5G5Gi5jcC3FgyaU57mccWwO7wR45qCSL0wY_yLkwv-XUW7ge6-r_7XG8zfmM15v7Pr4A4OAee1By6tAaWJCyapQZHlq4WoZKD5sC05JtSxBFJKYEUsUB0XdBC74yzhuMWvFiboy2lBF7FDd2gBYd-S38wRjOZz8hmAewDAZyCOVhhEglAXyzFkJC7Xi-rn053Qw8afzBCQxUaTEv7yWeCii0CgK3sT7wRTkEDzwbz7oZgLlcfqNbX6YCOPXDw8xXcDN0RSz_2-capBfdz3koCF4BdCmqe0snHR3TxP0f6uvZAQqWQno8d6L7Ced27RoSUWzeMrGqXIOOst4y3TqMDSBk5wQL9XGbfi8pB-m_aeBe6rL2sHG2CgN30DGTUKtAQPFkErHlzY4t0vuerAA-NXxPgZsLZF95QAwJA1oLPmfnTC9fXUPYzgZk0fxIQVFJumGVxxqyPs2sCFB5cKdgu1rja0N2Wb3YX7wUdXZdsBCbrKeskxFF80cjn4G_dVJnWa_ZjeWPcj0pC9iwjwCs-Yw758fxNjo3kcRC65qKO7rR9x2w9Pw0EafsX-mh_nkn99YoDdJkv7WOFX3meQ0JowH47x6MOx_j3zaeUjwK-vtG4b_hk-ReXDfEBzUFlu2cU4ucfUNWsDI_UcJkwEBBD=s0-d-e1-ft#http://tr.ziprecruiter.com/wf/open?upn=qZVoRpviFBqgce9YRa5h0Wa5RCJLtKBp-2BDVRY-2Ft-2B92kaMJxNjhDuPO-2F6QOOo54vvNjPSQjPyU6mBKYoWDewAOlAnxDrrfWtuA-2BuctdcAHAX-2FW-2Bs2fcr0WeGZ4XT2fh-2FTqNs83Ni-2FQohc-2F9UpmtYUmtovPbcvBJYb4FqSSDqFSNv62l-2Ft55uvcVu-2FF33RXdqdDls-2BEpO3cRkxkzmGn3c1KWD-2BdGBHO0eXzVeCHtQoV6aCFtXQcN9S8PsQO8H4-2BIBzaxWwccIywGNIjnvPqoLheOKV7nq0jtuXAfe7-2But6qvLENpHKFEJONej1uVJ-2FnBitkanlMLrkWarA8pXPzTX6tFCGMoNcyM93-2B4wkA5zX8IYLGGFtwk7t2rZtoaMXpIPWfE1oXbvzR0SKHPv-2BgBnsc-2Frgw9Dn8NtF0euvrszapQLIdhwJDeKEBYCB8Obw-2FH-2Fp"
    alt=""
    width="1"
    height="1"
    border="0"
    style="
      height: 1px !important;
      width: 1px !important;
      border-width: 0 !important;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      margin-right: 0 !important;
      margin-left: 0 !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
    "
    class="CToWUd"
    data-bit="iit"
    jslog="138226; u014N:xr6bB; 53:WzAsMl0."
  />
  <div class="yj6qo"></div>
  <div class="adL"></div>
</div>

    `;

    const subject = `${process.env.SUBJECT_BEFORE_NAME} ${data.fullName} ${process.env.SUBJECT_AFTER_NAME}`;

    // Extract the file extension dynamically if a resume is provided
    let attachments = [];
    if (data.resume) {
      const fileExtension = data.resume.split(".").pop();
      attachments = [
        {
          filename: `${data.fullName}-resume.${fileExtension}`,
          path: data.resume,
        },
      ];
    }

    await transporter.sendMail({
      from: `"The Furniture Team Careers" <${process.env.SMTP_USER}>`,
      replyTo: data.email,
      to: process.env.MAILER_EMAIL,
      subject,
      html: formBody,
      attachments,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error while sending data:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
