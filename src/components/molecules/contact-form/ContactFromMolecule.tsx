import React, { useEffect, useCallback, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { Parallax } from "react-scroll-parallax";
import { DownArrowIconMolecule } from "../icon-components/DownArrowIconMolecule";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || "";

export const ContactFormMolecule: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [name, setName] = useState<string | undefined>(undefined);
  const [nameValid, setNameValid] = useState<boolean | null>(null);
  const [messageValid, setMessageValid] = useState<boolean | null>(null);
  const [formMessage, setFormMessage] = useState<string | null>(null);

  emailjs.init(EMAILJS_USER_ID);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    setEmailValid(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    if (name !== undefined) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
    if (formMessage !== null) {
      setMessageValid(true);
    } else {
      setMessageValid(false);
    }
  }, [name, formMessage]);

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleFormMessageChange = (event: any) => {
    setFormMessage(event.target.value);
  };

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
    <div className="w-full flex flex-col justify-center items-center pb-20 lg:pb-20">
      <Parallax
        className="mx-auto text-[1em]  md:text-[1.125em] lg:text-[1em] w-full lg:w-11/12 flex pb-2 min-h-[70vh] md:min-h-[65vh] lg:min-h-[60vh]  xl:min-h-min xl:pt-[8em] justify-end flex-col"
        translateY={[3, -3]}
        easing={"easeIn"}
      >
        <div className="w-[95%]   md:w-1full  max-w-[1200px] h-full lg:min-h-[20vh] flex flex-col lg:mt-4 justify-center">
        <h1 className=" text-[1.5em] lg:mt-3 lg:text-[2em] tracking-wide leading-[1.125em]">
            Contact.
          </h1>
          <h2 className=" text-[1.35em] mt-3 lg:text-1.75em] tracking-wide leading-[1.125em]">
            Please feel free to use the form below to get in touch, request a
            resume, or ask any questions. Emma is currently available for freelance web and app development.
          </h2>
        
          <Parallax
          className="mt-4 mb-5 pb-8 pt-2 lg:pt-4 lg:pb-0"
          easing={"easeIn"}
          opacity={[1, 0.8]}
          translateY={[-3, 3]}
        >
              <div className="w-[1em] lg:w-[1.125em] mt-[1em]  lg:mb-[1em]">
                <DownArrowIconMolecule /></div>
        </Parallax>
        </div>
       
      </Parallax>
      <Parallax
        className="pt-4 w-full justify-start items-start flex flex-col pb-12"
        easing={"easeIn"}
        opacity={[1, 0.7]}
        translateY={[-3, 3]}
      >
        <form
          id="contact-form"
          className="lg:mt-[0.2em] mb-20 text-[1.25em] lg:text-[1.125em] w-full  lg:w-11/12 flex flex-col lg:flex-row mx-auto justify-start items-start"
        >
          <div className="flex-col w-full lg:w-1/3">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className=" bg-[#FAFAFA] placeholder:text-dark placeholder:font-light mb-4  text-dark blur-none focus-visible:bg-[#FAFAFA] resize-none w-full lg:w-11/12 max-w-[800px] px-3 py-1.5 border-[1.5px] border-[#221C07]"
              required
              onChange={handleNameChange}
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email"
              className=" resize-none placeholder:text-dark placeholder:font-light  text-dark bg-[#FAFAFA] w-full lg:w-11/12 mb-4 max-w-[800px] px-3 py-1.5 border-[1.5px] border-[#221C07]"
              required
              onChange={handleEmailChange}
            />
            <div className="flex flex-col w-full lg:w-11/12 -mt-3 mb-2 max-w-[800px]">
              {emailValid === false && email.length > 2 && (
                <p className="text-[0.7em] tracking-wide font-light italic text-dark opacity-80">
                  Please enter a valid email address.
                </p>
              )}
            </div>
          </div>
          <div className="flex-col w-full flex lg:w-2/3">
            <textarea
              rows={7}
              name="message"
              className=" resize-none placeholder:text-dark w-full  lg:w-11/12  bg-[#fafafa] text-dark placeholder:font-light max-w-[800px] px-3 mb-0 py-1.5 border-[1.5px] border-[#221C07]"
              placeholder="Type your message here."
              required
              onChange={handleFormMessageChange}
            />
            <input
              className="mt-6 disabled:opacity-50 w-full lg:w-11/12 lg:max-w-[300px]  text-[1.125em] lg:text-[1.25em] lg:mt-8 border-[1.5px] text-dark border-[#2B2308] bg-[#fafafa]  hover:duration-300 hover:bg-[#221C07] hover:text-white  hover:tracking-widest  transition  duration-300 ease-in-out  cursor-pointer rounded-full py-1 px-[4em] tracking-wider shadow-sm"
              type="submit"
              value="Send"
              disabled={
                emailValid === false ||
                nameValid === false ||
                messageValid === false
              }
            />
            {message && (
              <p className="mt-[1.25em] mx-auto lg:mx-0 lg:mt-8   text-[1em]">
                {message}
              </p>
            )}
          </div>
        </form>
      </Parallax>
    </div>
  );
};
