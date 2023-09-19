import { useEffect, useState } from "react";
import { SkillSearchBar } from "./SkillSearchMolecule";
import { SkillsMolecule } from "./SkillsMolecule";
import { skillsData } from "./skillsData";
import { Parallax } from "react-scroll-parallax";

export const SkillListSearchMolecule = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const filteredSkills = skillsData.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (searchTerm ) {
      setSearchTerm(searchTerm);
    }
  }, [searchTerm]);
    return (
        <div id="skills-section" className="w-11/12 mx-auto mt-3  text-[1em] md:text-[1.125em] lg:text-[1em] flex flex-col pb-20">
         <Parallax className={searchTerm?"pb-2":"-mb-5 lg:mb-0"} easing={"easeOut"} speed={6} opacity={[0.7, 1]}>
        <h1 className="text-[1.5em] lg:text-[2em] text-wide mb-1">Skills</h1>
        <h2 className="text-[1.35em] lg:text-[1.75em] text-wide mb-8 leading-[1.125em] ">Emma is a verstatile frontend developer with full-stack knowledge. Her experience in sales, digital marketing, UX optimisation and user analytics is a valuable asset for optimising digital products to increase conversions, paid traffic and organic traffic.</h2>
        <SkillSearchBar handleSearch={setSearchTerm} />
        </Parallax>
        <SkillsMolecule searchTerm={searchTerm} skills={filteredSkills} />

      </div>
    );
}