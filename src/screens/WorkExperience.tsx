import { TestComponent } from "../components/organsims/TestComponent"
import { PortfolioHeroOrgansim } from "../components/organsims/portfolio/PortfolioHero"

export const Portfolio = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center min-h-screen py-20  overflow-y-scroll">
          <PortfolioHeroOrgansim />
          <div className="w-10/12 py-20">  <TestComponent /></div>
        </div>
    )

}