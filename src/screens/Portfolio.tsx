import { SkillListSearchMolecule } from "../components/molecules/skills/SkillListSearchMolecule";
import { PortfolioExampleSectionOrganism } from "../components/organsims/portfolio/PortfolioExampleSection";
import { PortfolioHeroOrgansim } from "../components/organsims/portfolio/PortfolioHero";
import { useApiRequest } from "../hooks/API";
import { ReactComponent as Spinner } from "../assets/icons/spinner.svg";
import { Helmet } from "react-helmet";

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
      <div className="h-[100vh] min-h-screen bg-[#fafafa] justify-center  flex  w-full items-center">
        <div className="w-full flex flex-col justify-center">
          <div className="flex flex-col w-full py-20  mx-auto">
            <PortfolioHeroOrgansim />
          </div>
          <div className="mx-auto w-fit pt-4 mb-20">
            <Spinner />
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
    <>
      <Helmet>
        <title>Emma Sargeant | Portfolio & Skills </title>
        <meta
          name="description"
          content="Emma Sargeant is an experienced frontend developer. She builds web and mobile iOS and Android apps using React, React Native, Python, MongoDB, Shopify and more.  "
        />
      </Helmet>
      <div className="w-full flex flex-col justify-center items-center min-h-screen py-20  overflow-y-scroll">
        <div className="flex flex-col w-full  lg:w-11/12 mx-auto">
          <PortfolioHeroOrgansim />
          <div className="w-full justify-center lg:pt-10 pb-0">
            {sortedData.map((job: any, index: number) => {
              return (
                <div key={index}>
                  <PortfolioExampleSectionOrganism
                    companyName={job.company_name}
                    companyURL={job.company_url}
                    companyDescription={job.company_description}
                    projectDescription_1={job.project_description.paragraph_1}
                    projectDescription_2={job.project_description.paragraph_2}
                    video_title_1={job.video_title_1}
                    videos={job.project_videos}
                    video_url_1={job.video_url_1}
                  />
                </div>
              );
            })}
          </div>
          <SkillListSearchMolecule />
        </div>
      </div>
    </>
  );
};
