import VideoCard from "./VideoCard.jsx";
import { projects } from "../data";
import SectionTitle from "./SectionTitle.jsx";
import { useLanguage } from "../LanguageContext";

const Projects = () => {
  const { language } = useLanguage();
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="projects" />

      <div class=" py-16 grid md:grid-cols-1 lg:grid-cols-1 gap-8">
        {projects.map((project) => {
          const {
            id,
            description_en,
            description_tr,
            video_url,
            title_en,
            title_tr,
          } = project;
          return (
            <VideoCard
              key={id}
              title={language === "en" ? title_en : title_tr}
              text={language === "en" ? description_en : description_tr}
              video_url={video_url}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
