import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContactFormMolecule } from "../components/molecules/contact-form/ContactFromMolecule";

export const Contact = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Emma Sargeant | Contact </title>
        <meta
          name="description"
          content="Get in touch with Emma Sargeant for freelance web and mobile app development."
        />
      </Helmet>
      <div className="w-full  mx-auto  flex max-w-[1900px] justify-center min-h-screen flex-col">
        <div className="w-11/12 mx-auto flex justify-center items-center">
          <ContactFormMolecule />
        </div>
      </div>
    </HelmetProvider>
  );
};
