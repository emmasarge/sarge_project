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
      <Parallax
        className="mx-auto text-[1em] md:text-[1.125em] lg:text-[1em] w-full lg:w-11/12 flex pb-2  lg:mb-[5%] flex-col"
        speed={4}
        opacity={[1, 0.7]}
        easing={"easeOut"}

      >
        <div className="w-[95%] lg:w-10/12 mt-[20%]">
          <h1 className=" text-[1.75em] lg:text-[2.25em] tracking-wide">
            Contact.
          </h1>
          <h2 className=" text-[1.5em] lg:text-[2em] tracking-wide leading-[1.125em]">
            Please feel free to use the form below to get in touch, request a
            resume, or ask any questions.
          </h2>
          <h2 className=" text-[1.5em] mt-3 lg:text-[2em] tracking-wide leading-[1.125em]">
            Emma is currently available for freelance web and app development.
          </h2>
        </div>
        <Parallax
          className="mt-4 pb-8 lg:pt-8"
          easing={"easeOut"}
          speed={6}
          opacity={[0.7, 1]}
          translateY={[-3, 3]}
        >
          <div
            id="hero-arrow"
            className="flex   pt-[12%] md:mt-[13%] w-10/12 lg:w-full "
          >
            <DownArrowIcon
              parent_container_id={"hero-arrow"}
              height_size={66}
              width_size={18}
            />
          </div>
        </Parallax>
      </Parallax>
      <Parallax
        className="pt-4 w-full justify-start items-start lg:mt-4 flex flex-col pb-12"
        easing={"easeOut"}
        speed={4}
        opacity={[1, 0.7]}
        translateY={[-3, 4]}
      >
        <form
          id="contact-form"
          className=" -mt-[17%] lg:mt-[1em] mb-20 text-[1.25em] lg:text-[1.125em] w-full  lg:w-11/12 flex flex-col lg:flex-row mx-auto justify-start items-start"
        >
          <div className="flex-col w-full lg:w-1/3">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className=" bg-[#FAFAFA] placeholder:text-dark placeholder:font-light mb-4  text-dark blur-none focus-visible:bg-[#FAFAFA] resize-none w-full lg:w-11/12 max-w-[800px] px-3 py-1.5 border-[1.5px] border-[#221C07]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className=" resize-none placeholder:text-dark placeholder:font-light  text-dark bg-[#FAFAFA] w-full lg:w-11/12 mb-4 max-w-[800px] px-3 py-1.5 border-[1.5px] border-[#221C07]"
              required
            />
          </div>
          <div className="flex-col w-full flex lg:w-2/3">
            <textarea
              rows={7}
              name="message"
              className=" resize-none placeholder:text-darkw-full lg:w-11/12  bg-[#fafafa] text-dark placeholder:font-light max-w-[800px] px-3 mb-0 py-1.5 border-[1.5px] border-[#221C07]"
              placeholder="Type your message here."
              required
            />
            <input
              className="mt-6 w-full lg:w-11/12 lg:max-w-[300px]  text-[1.125em] lg:text-[1.25em] lg:mt-5 border-[1.5px] text-dark border-[#2B2308] bg-[#fafafa]  hover:duration-300 hover:bg-[#221C07] hover:text-white  hover:tracking-widest  transition  duration-300 ease-in-out  cursor-pointer rounded-full py-1 px-[4em] tracking-wider shadow-sm"
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