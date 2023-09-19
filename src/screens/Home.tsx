import { Helmet } from "react-helmet";
import { LandingOrgansim } from "../components/organsims/home-landing/LandingOrganism";

export const Home = () => {

  return (
    <>
      <Helmet>
        <title>Emma Sargeant | Frontend Developer </title>
        <meta
          name="description"
          content="Emma Sargeant is a frontend developer based in London."
        />
      </Helmet>
      <div className="flex h-full min-h-screen max-w-[1900px] justify-center mt-10 flex-col items-center w-full ">
        <LandingOrgansim />
      </div>
    </>
  );
};
