import { Link } from "react-router-dom";

export const CookiePolicyOrganism = () => {
  return (
    <div className="flex flex-col justify-between items-start w-full">
      <div className="flex justify-end lg:pb-[3em] mb-[8em] flex-col w-[90%] items-start h-[30vh] lg:h-[40vh]">
        <h1 className="text-[1.5em] lg:mt-8 lg:text-[2em] text-dark tracking-wide leading-[1.2em]">
          Cookies policy.
        </h1>
        <p className="text-[0.85em] mt-1 lg:text-[0.95em] font-light italic text-dark tracking-wide leading-[1.125em] flex flex-wrap">
          Effective from Thursday, September 21 2023.
        </p>
      </div>
      <div className="w-11/12 justify-start items-start max-w-[1100px] flex flex-col text-[0.95em]  mb-36">
        <div className="mb-10">
          <h2 className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark sm:w-11/12 tracking-wide leading-[1.125em] flex flex-wrap">
            Introduction.
          </h2>
          <p className="text-[1em] mt-[0.75em] lg:text-[1.35em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
            Welcome to emmasarge-developer.com. We use cookies on our website
            [https://emmasarge-developer.com] (the "Service"). By using the
            Service, you consent to the use of cookies. This is a personal site
            for the intendend purpose of being a portfolio to demonstrate
            skills.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark sm:w-11/12 tracking-wide leading-[1.125em] flex flex-wrap">
            How we use cookies.
          </h2>
          <p className="text-[1em] mt-[0.5em] lg:text-[1.35em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
            We use cookies for the following purposes:
          </p>
          <ul className="text-[0.9em] mt-[0.75em] lg:text-[1.25em] w-11/12 text-dark tracking-wide leading-[1.2em] flex flex-wrap">
            <li className="mb-3">
              Essential Cookies:{" "}
              <span className="font-light">
                These cookies are necessary for the Service to function
                properly. They enable core functionality such as page
                navigation, security, and access to logged-in areas.
              </span>
            </li>

            <li className="mb-3">
              Performance Cookies:{" "}
              <span className="font-light">
                These cookies collect anonymous information about how visitors
                use our website. They help us improve the performance and
                usability of our website.
              </span>
            </li>
            <li className="mb-3">
              Functionality Cookies:
              <span className="font-light">
                {" "}
                These cookies remember choices you make, such as language
                preferences and settings, to enhance your experience.
              </span>
            </li>
            <li className="mb-3">
              Advertising Cookies:
              <span className="font-light">
                {" "}
                We may use third-party advertising cookies to deliver
                advertisements relevant to your interests.
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark sm:w-11/12 tracking-wide leading-[1.125em] flex flex-wrap">
            Types of cookies we use.
          </h2>
          <p className="text-[1em] mt-[0.5em] lg:text-[1.35em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
            Session Cookies:{" "}
            <span className="font-light">
              {" "}
              These are temporary cookies that are deleted from your device when
              you close your web browser.
            </span>{" "}
          </p>
          <p className="text-[1em] mt-[0.25em] lg:text-[1.35em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
            Persistent Cookies:{" "}
            <span className="font-light">
              {" "}
              These cookies remain on your device for a specified period, even
              after you close your browser.{" "}
            </span>
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark sm:w-11/12 tracking-wide leading-[1.125em] flex flex-wrap">
            Managing cookies.
          </h2>
          <p className="text-[1em] mt-[0.5em] lg:text-[1.35em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
            You can control and manage cookies in your web browser's settings.
            You can choose to block or delete cookies, but this may affect the
            functionality of our website.{" "}
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark sm:w-11/12 tracking-wide leading-[1.125em] flex flex-wrap">
            Third-party cookies.
          </h2>
          <p className="text-[1em] mt-[0.5em] lg:text-[1.35em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
            Some of our web pages may contain content from third-party websites
            (e.g., social media buttons, embedded videos) that may use their own
            cookies. We have no control over these cookies and recommend
            reviewing the cookie policies of the respective third-party
            websites.{" "}
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark sm:w-11/12 tracking-wide leading-[1.125em] flex flex-wrap">
            Changes to our cookie policy.
          </h2>
          <p className="text-[1em] mt-[0.5em] lg:text-[1.35em] text-dark tracking-wide leading-[1.125em] flex flex-wrap">
            We may update our Cookie Policy from time to time. Any changes will
            be posted on this page with an updated effective date.{" "}
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-[1.35em] mt-[0.5em] lg:text-[1.75em] text-dark sm:w-11/12 tracking-wide leading-[1.125em] flex flex-wrap">
            Contact us.
          </h2>
          <p className="text-[1em] mt-[0.5em] lg:text-[1.35em] text-dark tracking-wide leading-[1.125em] ">
            If you have any questions or concerns about our Cookie Policy,
            please contact us {"   "}{" "}
            <Link className="underline" to="/contact">
              {"  "}here.
            </Link>{" "}
            By using our website, you agree to the use of cookies as described
            in this Cookie Policy.{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};
