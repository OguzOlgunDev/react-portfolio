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
    title_en: "Organic Food",
    title_tr: "Organik Gıda",
    description_en:
      "A responsive front-end website built with HTML and Sass using the 7-1 architecture. The layout system is powered by Bootstrap’s grid only, and all styles are written in Sass and compiled to vanilla CSS.",
    description_tr:
      "7-1 mimarisiyle HTML ve Sass kullanılarak oluşturulmuş duyarlı bir ön yüz projesidir. Yerleşim sistemi yalnızca Bootstrap grid sistemiyle sağlanmıştır. Tüm stiller Sass ile yazılmış ve vanilla CSS’e derlenmiştir.",
    video_url: "https://www.youtube.com/embed/uVq8H_loDl8",
  },
  {
    id: nanoid(),
    title_en: "Basic Task Manager",
    title_tr: "Temel Görev Yöneticisi",
    description_en:
      "A simple full-stack task management application built with Node.js, Express, and MongoDB. Users can create, update, and delete tasks. No authentication or JWT is implemented — just a basic CRUD application.",
    description_tr:
      "Node.js, Express ve MongoDB ile geliştirilmiş basit bir full-stack görev yönetim uygulamasıdır. Kullanıcılar görev ekleyebilir, güncelleyebilir ve silebilir. Kimlik doğrulama ya da JWT gibi gelişmiş özellikler bulunmamaktadır — yalnızca temel bir CRUD projesidir.",
    video_url: "https://www.youtube.com/embed/TBiT6c6Hoxs",
  },
];

