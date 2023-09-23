import { Helmet, HelmetProvider } from "react-helmet-async";
import { LandingOrgansim } from "../components/organsims/home-landing/LandingOrganism";

export const Home = () => {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Emma Sargeant | Frontend Developer </title>
        <meta
          name="description"
          content="Emma Sargeant is a frontend developer based in London."
        />
                <link rel="canonical" href="https://emmasarge-developer.com"/>

      </Helmet>
      <div className="flex h-full  mx-auto  min-h-screen max-w-[1900px] justify-center mt-10 flex-col items-center w-full ">
        <LandingOrgansim />
      </div>
    </HelmetProvider>
  );
};
