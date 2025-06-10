import heroImg from "../assets/hero.svg";
import { useLanguage } from "../LanguageContext";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

const Hero = () => {
  const { language } = useLanguage();

  const title = language === "en" ? "I'm Oguz" : "Ben Oğuz";
  const subtitle =
    language === "en"
      ? "Full-stack web developer"
      : "Full-stack web geliştiricisi";
  const description =
    language === "en"
      ? "Turning ideas into interactive reality"
      : "Fikirleri etkileşimli gerçekliğe dönüştürüyorum";

  return (
    <section className="bg-emerald-100 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">{title}</h1>
          <p className="mt-6 text-3xl text-slate-700 capitalize tracking-wide">
            {subtitle}
          </p>
          <p className="mt-4 text-lg text-slate-700 capitalize tracking-wide">
            {description}
          </p>
          <div className="flex gap-x-4 mt-6">
            <a href="https://github.com/OguzOlgunDev" target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/o%C4%9Fuz-olgun-dev/"
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.youtube.com/@OguzOlgunDev" target="_blank">
              <FaYoutube className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>

        <article className="hidden md:block my-10">
          <img src={heroImg} className="h-80 lg:h-96" alt="Hero" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
