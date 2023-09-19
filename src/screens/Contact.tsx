import { ContactFormMolecule } from "../components/molecules/contact-form/ContactFromMolecule";

export const Contact = () => {
  return (
    <div className="w-full flex max-w-[1900px] justify-center min-h-screen flex-col">
      <div className="w-11/12 mx-auto flex justify-center items-center">
        <ContactFormMolecule />
      </div>
    </div>
  );
};
