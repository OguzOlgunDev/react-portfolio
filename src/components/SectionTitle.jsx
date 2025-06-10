import { useLanguage } from "../LanguageContext";

const SectionTitle = ({ text }) => {
  const { language } = useLanguage();
  const translations = {
    "about me": {
      en: "about me",
      tr: "hakkımda",
    },
    projects: {
      en: "projects",
      tr: "projeler",
    },
    "tech stack": {
      en: "tech stack",
      tr: "yetenekler",
    },
  };
  const title = translations[text?.toLowerCase?.()]?.[language] || text;

  return (
    <div className="border-b border-gray-200 pb-5">
      <h2 className="text-3xl font-medium tracking-wider capitalize">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
