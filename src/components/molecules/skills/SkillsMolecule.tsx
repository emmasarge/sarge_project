import { Parallax } from "react-scroll-parallax";

export const SkillsMolecule = ({ skills, searchTerm }: any) => {
  console.log(searchTerm);
  return (
    <div className="w-full flex flex-col mb-10 ">
      <Parallax easing={"easeOut"} speed={6} opacity={[0.7, 1]}>
        <div className="flex flex-row break-inside-avoid-column w-full  flex-wrap justify-start items-start min-h-fit ">
          {skills?.map((skill: any, index: number) => {
            return (
              <div
                key={index}
                className="flex max-w-fit font-light  items-center mb-[0.125em] justify-start text-[1.125em] lg:text-[1.25em] tracking-wide  uppercase leading-[1.125em] lg:leading-[1.125em]"
                style={{
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                  lineBreak: "inherit",
                  flexWrap: "wrap",
                  hyphens: "auto",
                  wordWrap: "normal",
                }}
              >
                <div className="text-dark  w-fit flex flex-wrap mr-[0.175em]">
                  <p
                    className={
                      searchTerm
                        ? "bg-[#F1B417] py-1 px-2 mb-[0.125em]  normal-case text-[1.2em] lg:text-[1.25em] first-letter:capitalize  tracking-normal  font-normal lg:mb-2  text-dark w-fit flex flex-wrap mr-[0.175em] "
                        : "text-dark mb-[0.125em] lg:mb-1  w-fit flex flex-wrap leading-[1.2em]  "
                    }
                  >
                    {index !== skills.length - 1 ? (
                      <span className="mr-1 "> {skill},</span>
                    ) : (
                      <span className="mr-1 "> {skill}</span>
                    )}
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
