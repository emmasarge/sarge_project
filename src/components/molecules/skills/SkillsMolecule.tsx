import { Parallax } from "react-scroll-parallax";

export const SkillsMolecule = ({ skills, searchTerm }: any) => {
  console.log(searchTerm);
  return (
    <div className="w-full flex flex-col mb-10 ">
      <Parallax easing={"easeOut"} speed={6} opacity={[0.7, 1]}>
        <div className="flex flex-row break-inside-avoid-column max-w-fit  flex-wrap justify-start items-start min-h-fit ">
          {skills?.map((skill: any, index: number) => {
            return (
              <div
                key={index}
                className="flex max-w-fit  items-center mb-[0.125em] justify-start text-[1.35em] lg:text-[1.75em]  leading-[1.125em] lg:leading-[1.125em]"
                style={{
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                  lineBreak: "inherit",
                  flexWrap: "wrap",
                  hyphens: "auto",
                  wordWrap: "normal",
                }}
              >
                <div
                  className=
                       "text-dark  w-fit flex flex-wrap mr-[0.175em]"
                  
                >
                  <p
                    className={
                      searchTerm
                        ? "bg-[#F1B417] px-2 mb-[0.125em] lg:mb-2  text-dark w-fit flex flex-wrap mr-[0.175em] "
                        : "text-dark mb-0  w-fit flex flex-wrap  "
                    }
                  >
{index !== skills.length - 1 ? <span > {skill},</span> : <span > {skill}</span>}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Parallax>
    </div>
  );
};
