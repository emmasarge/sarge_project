import { PortfolioExampleSectionOrganism } from "../components/organsims/portfolio/PortfolioExampleSection";
import { PortfolioHeroOrgansim } from "../components/organsims/portfolio/PortfolioHero";
import { useApiRequest } from "../hooks/API";

export const Portfolio = () => {
  const url = "https://sarge-api-23-8cdf3807bdf0.herokuapp.com/jobs/";
  const { data, loading, error } = useApiRequest(url);

  const contentOrder = ["SOJO", "Paua", "Waldo", "Imaara", "Spirit of indulgence"];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return null; // or display a message or fallback content
  }

  const customSort = (a:any, b:any) => {
    const indexA = contentOrder.indexOf(a.company_name);
    const indexB = contentOrder.indexOf(b.company_name);

    if (indexA === -1) return 1; // If not found in contentOrder, move to the end
    if (indexB === -1) return -1; // If not found in contentOrder, move to the end

    return indexA - indexB; // Sort based on the index in contentOrder
  };

  const sortedData = data.sort(customSort);
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen py-20  overflow-y-scroll">
      <div className="flex flex-col w-full  lg:w-11/12 mx-autp">
      <PortfolioHeroOrgansim />
      <div className="w-full justify-center pt-10 pb-20">
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
        </div>)})}
      </div></div>
     
    </div>
  );
};
