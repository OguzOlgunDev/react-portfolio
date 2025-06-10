import SkillsCard from "./SkillsCard";
import { skills } from "../data";
import SectionTitle from "./SectionTitle.jsx";
import { useLanguage } from "../LanguageContext";

const Skills = () => {
  const { language } = useLanguage();
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="tech stack" />

      <div class=" py-16 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skills.map((skill) => {
          const { id, icon, title_en, title_tr, text_en, text_tr } = skill;
          return (
            <SkillsCard
              key={skill.id}
              title={language === "en" ? title_en : title_tr}
              text={language === "en" ? text_en : text_tr}
              icon={icon}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Skills;
