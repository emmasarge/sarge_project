import React, { useEffect, useCallback, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { Parallax } from "react-scroll-parallax";
import { DownArrowIcon } from "../icon-components/DownArrowIcon";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || "";

export const ContactFormMolecule: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  emailjs.init(EMAILJS_USER_ID);

  const handleSubmit = useCallback((event: any) => {
    event.preventDefault();

    const form = event.currentTarget;
    const btn = form.querySelector('[type="submit"]') as HTMLInputElement;
    btn.value = "Sending...";

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form).then(
      (response: EmailJSResponseStatus) => {
        btn.value = "Send";
        setMessage("Email sent successfully.");
      },
      (error) => {
        btn.value = "Send";
        setMessage("Error sending email. Please try again later.");
        console.error("EmailJS error:", error);
      }
    );
  }, []);

  useEffect(() => {
    const handleFormSubmit = (event: Event) => {
      handleSubmit(event);
    };

    const form = document.getElementById("contact-form") as HTMLFormElement;
    form.addEventListener("submit", handleFormSubmit);

    return () => {
      form.removeEventListener("submit", handleFormSubmit);
    };
  }, [handleSubmit]);

  return (
    <div className="w-full flex flex-col justify-center items-center py-20">
      <Parallax className="mx-auto w-11/12 flex flex-col" speed={0} translateY={[2, -2]} opacity={[1, 0.9]}>
        <div className="w-11/12 lg:w-10/12 mt-20">
          <h1 className=" text-[1.75em] lg:text-[2.25em] tracking-wide">
            Contact.
          </h1>
          <h2 className=" text-[1.5em] lg:text-[2em] tracking-wide leading-[1.125em]">
            If you are interested in working with Emma Sargeant for a freelance
            developer and digital marketing consultancy for web or app project,
            please get in touch with the form below.
          </h2>
        </div>
        <Parallax easing={'easeInOut'} translateY={[-3, 3]}>
        <div id="hero-arrow" className="flex mt-10 w-10/12 lg:w-full ">
          <DownArrowIcon parent_container_id={'hero-arrow'} height_size={66} width_size={18} />
        </div>
        </Parallax>
      </Parallax>
      <Parallax className="w-full justify-start items-start flex flex-col pb-12" speed={2} translateY={[10, -10]} opacity={[1, 0.7]}>
        <form
          id="contact-form"
          className=" mt-[-0.75em] lg:mt-[1em] mb-20 text-[1.25em] lg:text-[1.5em] w-11/12 flex flex-col lg:flex-row mx-auto justify-start items-start"
        >
          <div className="flex-col w-full lg:w-1/3">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className=" bg-[#FAFAFA] placeholder:text-dark placeholder:font-light mb-4  text-dark blur-none focus-visible:bg-[#FAFAFA] resize-none w-11/12 max-w-[800px] px-3 py-1.5 border-2 border-[#221C07]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className=" resize-none placeholder:text-dark placeholder:font-light  text-dark bg-[#FAFAFA] w-11/12 mb-4 max-w-[800px] px-3 py-1.5 border-2 border-[#221C07]"
              required
            />
          </div>
          <div className="flex-col w-full flex lg:w-2/3">
            <textarea
              rows={7}
              name="message"
              className=" resize-none placeholder:text-dark w-11/12 bg-[#fafafa] text-dark placeholder:font-light max-w-[800px] px-3 mb-0 py-1.5 border-2 border-[#221C07]"
              placeholder="Type your message here."
              required
            />
            <input
              className="mt-6 w-11/12 lg:max-w-[300px] lg:mt-5 border-2 text-dark border-[#2B2308] bg-[#fafafa]  hover:duration-300 hover:bg-[#221C07] hover:text-white  hover:tracking-widest  transition  duration-300 ease-in-out  cursor-pointer rounded-full py-1 px-[4em] tracking-wider shadow-sm"
              type="submit"
              value="Send"
            />
            {message && (
              <p className="mt-[1.25em] lg:mt-2 font-light text-[1em]">
                {message}
              </p>
            )}
          </div>
        </form>
      </Parallax>
    </div>
  );
};
