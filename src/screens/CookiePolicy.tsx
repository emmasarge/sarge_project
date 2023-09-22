import { Helmet, HelmetProvider } from "react-helmet-async";
import { CookiePolicyOrganism } from "../components/organsims/cookie-policy/CookiePolicyOrganism";

export const CookiePolicy=()=>{
        return (
            <HelmetProvider>
              <Helmet>
                <title>Emma Sargeant | Cookie Policy </title>
                <meta
                  name="description"
                  content="Cookie policy."
                />
              </Helmet>
              <div className="w-full  mx-auto  flex max-w-[1900px] justify-center min-h-screen flex-col">
                <div className="w-11/12 mx-auto flex justify-center items-center">
                    <CookiePolicyOrganism/>
                </div>
              </div>
            </HelmetProvider>
          );
    
}