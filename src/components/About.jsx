import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import { useLanguage } from "../LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const paragraphText =
    language === "en"
      ? "I'm a passionate web developer with a strong foundation in both frontend and backend technologies. From crafting responsive user interfaces with HTML, CSS, and React to building robust backend services using Node.js and Express. I believe in continuous learning and love solving real-world problems through technology. Whether it’s building a personal project or collaborating on a team, I always aim for quality, performance, and great user experience."
      : "Hem frontend hem de backend teknolojilerinde güçlü temellere sahip, tutkulu bir web geliştiricisiyim. HTML, CSS ve React ile duyarlı kullanıcı arayüzleri geliştirirken; Node.js ve Express ile sağlam backend servisleri oluşturuyorum. Sürekli öğrenmeye inanıyorum ve gerçek dünya problemlerini teknolojiyle çözmeyi seviyorum. İster kişisel bir proje, ister ekip çalışması olsun; her zaman kalite, performans ve iyi bir kullanıcı deneyimini hedeflerim.";

  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" alt="About illustration" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">{paragraphText}</p>
        </article>
      </div>
    </section>
  );
};

export default About;
