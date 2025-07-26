import VideoCard from "./VideoCard.jsx";
import { projects } from "../data";
import SectionTitle from "./SectionTitle.jsx";
import { useLanguage } from "../LanguageContext";
import { div } from "framer-motion/client";

const Projects = () => {
  const { language } = useLanguage();
  return (
    <div>
      <section className="py-20 align-element" id="projects">
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
              github_url,
              website_url,
            } = project;
            return (
              <VideoCard
                key={id}
                title={language === "en" ? title_en : title_tr}
                text={language === "en" ? description_en : description_tr}
                video_url={video_url}
                githubUrl={github_url}
                websiteUrl={website_url}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Projects;
