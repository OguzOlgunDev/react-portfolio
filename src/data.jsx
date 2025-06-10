// data.jsx
import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text_en: "home", text_tr: "anasayfa" },
  { id: nanoid(), href: "#about", text_en: "about", text_tr: "hakkımda" },
  { id: nanoid(), href: "#projects", text_en: "projects", text_tr: "projeler" },
  { id: nanoid(), href: "#skills", text_en: "skills", text_tr: "yetenekler" },
  { id: nanoid(), href: "#contact", text_en: "contact", text_tr: "iletişim" },
];

export const skills = [
  {
    id: nanoid(),
    title_en: "HTML & CSS",
    title_tr: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text_en:
      "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites.",
    text_tr:
      "HTML & CSS konusunda yetkin, görsel olarak etkileyici ve duyarlı web siteleri geliştirir.",
  },
  {
    id: nanoid(),
    title_en: "JavaScript",
    title_tr: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text_en:
      "Expertise in JavaScript, building dynamic web applications with smooth user interactions.",
    text_tr:
      "JavaScript konusunda uzman, kullanıcı dostu ve dinamik web uygulamaları geliştirir.",
  },
  {
    id: nanoid(),
    title_en: "React",
    title_tr: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text_en:
      "Advanced in React, creating scalable and modular front-end applications.",
    text_tr:
      "React konusunda ileri düzeyde, ölçeklenebilir ve modüler ön yüz uygulamaları geliştirir.",
  },
  {
    id: nanoid(),
    title_en: "Node.js",
    title_tr: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text_en:
      "Proficient in Node.js, developing robust back-end systems and APIs.",
    text_tr:
      "Node.js konusunda yetkin, güçlü arka uç sistemleri ve API'ler geliştirir.",
  },
];

export const projects = [
  {
    id: nanoid(),
    title_en: "Weather App",
    title_tr: "Hava Durumu Uygulaması",
    description_en:
      "A sleek weather forecast app using OpenWeather API, built with React and Tailwind CSS.",
    description_tr:
      "React ve Tailwind CSS ile geliştirilen şık bir hava durumu tahmin uygulaması. OpenWeather API kullanılmıştır.",
    video_url: "https://www.youtube.com/embed/P-aeQSTotEM",
  },
  {
    id: nanoid(),
    title_en: "Task Manager",
    title_tr: "Görev Yöneticisi",
    description_en:
      "A responsive to-do list web app with dark mode, built using JavaScript and local storage.",
    description_tr:
      "JavaScript ve localStorage ile geliştirilmiş, karanlık mod destekli duyarlı bir yapılacaklar listesi uygulaması.",
    video_url: "https://www.youtube.com/embed/Q4axtMZOCzo",
  },
  {
    id: nanoid(),
    title_en: "E-commerce Template",
    title_tr: "E-ticaret Şablonu",
    description_en:
      "A front-end template for e-commerce websites featuring React Router and reusable components.",
    description_tr:
      "React Router ve yeniden kullanılabilir bileşenlerle hazırlanmış bir e-ticaret web sitesi şablonu.",
    video_url: "https://www.youtube.com/embed/ZyPgG7atmb8",
  },
];
