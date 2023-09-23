import { Helmet, HelmetProvider } from "react-helmet-async";
import { AboutOrganism } from "../components/organsims/about-page/AboutOrganism";
import { AboutSiteOrganism } from "../components/organsims/about-page/AboutSiteOrganism";
export const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Emma Sargeant | About </title>
        <meta
          name="description"
          content="Emma Sargeant is a frontend web developer with backend, SEO, UX and digital marketing knowledge based in London."
        />
        <link rel="canonical" href="https://emmasarge-developer.com/about" />
      </Helmet>
      <div className="min-h-screen flex w-full flex-col mx-auto max-w-[1900px] justify-center items-center mb-20 h-max">
        <AboutOrganism />
        <div className="w-full flex justify-center items-center">
          <AboutSiteOrganism />
        </div>
      </div>
    </HelmetProvider>
  );
};
