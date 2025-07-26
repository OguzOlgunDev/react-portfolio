// data.jsx
import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text_en: "home", text_tr: "anasayfa" },
  { id: nanoid(), href: "#about", text_en: "about", text_tr: "hakkımda" },
  { id: nanoid(), href: "#skills", text_en: "skills", text_tr: "yetenekler" },
  { id: nanoid(), href: "#projects", text_en: "projects", text_tr: "projeler" },
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
    title_en: "CMS Project Portfolio (React & Contentful)",
    title_tr: "CMS Proje Portföyü (React & Contentful)",
    description_en:
      "A React-based CMS project portfolio that demonstrates how to fetch and display my projects using Contentful API. It integrates a headless CMS into a React frontend to manage and render content dynamically.",
    description_tr:
      "Projelerimi Contentful API ile çekip gösteren, React tabanlı bir CMS proje portföyü. Headless CMS’i React ön yüzde entegre ederek içeriği dinamik olarak yönetip render ediyor.",
    video_url: "https://www.youtube.com/embed/LUC1eyRqyxA",
    github_url: "https://github.com/OguzOlgunDev/cms-portfolio",
    website_url: "https://oguz-olgun-project-portfolio.netlify.app/",
  },
  {
    id: nanoid(),
    title_en: "Store-First E-commerce Project (Next.js)",
    title_tr: "Store-First E-Ticaret Projesi (Next.js )",
    description_en:
      "A full-featured e-commerce platform built with modern web technologies. The project is developed using Next.js, styled with Tailwind CSS and Shadcn UI. It uses Supabase for database management and Prisma ORM for secure and scalable data access. Clerk is integrated for authentication, allowing users to manage accounts, add products to favorites or cart, and access protected admin routes.",
    description_tr:
      "Modern web teknolojileriyle geliştirilmiş, tam işlevli bir e-ticaret platformu. Next.js kullanılarak geliştirilen proje, Tailwind CSS ve Shadcn UI ile tasarlanmıştır. Veritabanı yönetiminde Supabase, veri modelleme ve güvenli erişimde ise Prisma ORM tercih edilmiştir. Kimlik doğrulama için Clerk entegre edilmiştir. Kullanıcılar hesaplarını yönetebilir, ürünleri favorilere veya sepete ekleyebilir, korumalı admin paneline erişebilir.",
    video_url: "https://www.youtube.com/embed/2fmbMBqXG10",
    github_url: "https://github.com/OguzOlgunDev/store-first-ecommerce",
    website_url: "https://store-first-next-o76r.vercel.app/",
  },

  {
    id: nanoid(),
    title_en: "Organic Food",
    title_tr: "Organik Gıda",
    description_en:
      "A responsive front-end website built with HTML and Sass using the 7-1 architecture. The layout system is powered by Bootstrap’s grid only, and all styles are written in Sass and compiled to vanilla CSS.",
    description_tr:
      "7-1 mimarisiyle HTML ve Sass kullanılarak oluşturulmuş duyarlı bir ön yüz projesidir. Yerleşim sistemi yalnızca Bootstrap grid sistemiyle sağlanmıştır. Tüm stiller Sass ile yazılmış ve vanilla CSS’e derlenmiştir.",
    video_url: "https://www.youtube.com/embed/uVq8H_loDl8",
    github_url: "https://github.com/OguzOlgunDev/organic-food",
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
    github_url: "https://github.com/OguzOlgunDev/basic-task-manager",
  },
];
