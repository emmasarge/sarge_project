import { SkillListSearchMolecule } from "../components/molecules/skills/SkillListSearchMolecule";
import { PortfolioExampleSectionOrganism } from "../components/organsims/portfolio/PortfolioExampleSection";
import { PortfolioHeroOrgansim } from "../components/organsims/portfolio/PortfolioHero";
import { useApiRequest } from "../hooks/API";
import { ReactComponent as Spinner } from "../assets/icons/spinner.svg";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Portfolio = () => {
  const url = process.env.REACT_APP_API_URL || "";
  const { data, loading, error } = useApiRequest(url);

  const contentOrder = [
    "SOJO",
    "Paua",
    "Waldo",
    "Imaara",
    "Spirit of indulgence",
  ];

  if (loading) {
    return (
      <div className=" min-h-screen max-w-[1900px] mx-auto bg-[#fafafa] justify-center  flex  w-full items-center">
        <div className="w-full flex flex-col justify-center">
          <div className="flex flex-col w-full lg:w-11/12 pt-20  mx-auto">
            <PortfolioHeroOrgansim />
          </div>
          <div className="mx-auto w-fit pt-4 pb-20 mb-20">
            <Spinner className=" max-w-[5em] w-8/12"  />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flec-col w-full justify-center items-center">
        <div className="mb-20 w-10/12 flex items-center justify-center">
          <p className="text-[1.5em] mx-auto text-dark leading-[1.2em]">
            Error: {error}
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const customSort = (a: any, b: any) => {
    const indexA = contentOrder.indexOf(a.company_name);
    const indexB = contentOrder.indexOf(b.company_name);

    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  }; 
   const sortedData = data.sort(customSort);


  return (
    <HelmetProvider>
      <Helmet>
        <title>Emma Sargeant | Portfolio & Skills </title>
        <meta
          name="description"
          content="Emma Sargeant is an experienced frontend developer. She builds web and mobile iOS and Android apps using React, React Native, Python, MongoDB, Shopify and more.  "
        />

      </Helmet>
      <div className="w-full max-w-[1900px] mx-auto flex flex-col justify-center items-center min-h-screen py-20  overflow-y-scroll">
        <div className="flex flex-col w-full  lg:w-11/12 mx-auto">
          <PortfolioHeroOrgansim />
          <div className="w-full justify-center lg:pt-10 pb-3">
            {sortedData.map((job: any, index: number) => {
              return (
                <div key={index}>
                  <PortfolioExampleSectionOrganism
                    companyName={job.company_name}
                    companyURL={job.company_url}
                    companyDescription={job.company_description}
                    projectDescription_1={job.project_description.paragraph_1}
                    projectDescription_2={job.project_description.paragraph_2}
                    videos={job.project_videos}
                    jobTitle={job.title}
                 
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full justify-center flex">
          <SkillListSearchMolecule />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};
