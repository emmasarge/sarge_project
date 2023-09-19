import { Helmet } from "react-helmet";
import { AboutOrganism } from "../components/organsims/about-page/AboutOrganism";
export const About = () => {

  return (
    <>
      <Helmet>
        <title>Emma Sargeant | About </title>
        <meta
          name="description"
          content="Emma Sargeant is a frontend web developer with backend, SEO, UX and digital marketing knowledge based in London."
        />
      </Helmet>
      <div className="min-h-screen flex w-full flex-col max-w-[1900px] justify-center mb-20 h-max">
        <AboutOrganism />
      </div>
    </>
  );
};