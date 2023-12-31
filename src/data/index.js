// import { FaHammer, FaTools } from "react-icons/fa";
// import { BsGraphUp, BsFillBugFill } from "react-icons/bs";
// import { MdSecurity } from "react-icons/md";
// import { GiTestTubes, GiCycle } from "react-icons/gi";
// import { HiOutlineDocumentText } from "react-icons/hi";
// import { ImArrowUpRight, ImArrowDownRight } from "react-icons/im";
// import { LuFileSearch } from "react-icons/lu";

import { Icon } from "astro-icon";

// SEO data
export const seoData = {
  title: "Eric Schön - Tech Debt",
  description: "Augmenter la Fiabilité et la Qualité de votre code React",
  author: [{ name: "Eri Schön", url: "https://www.erischon.dev" }],
  url: "https://techdebt.erischon.dev/",
  image: "https://techdebt.erischon.dev/favicon.ico",
  twitter: "@erischon",
};

export const services = [
  {
    title: "Analyse",
    description: "Analyse d'application",
    icon: "",
    isActive: true,
  },
  {
    title: "Testing",
    description: "Tests fonctionnels et end-to-end",
    icon: "",
    isActive: true,
  },
  {
    title: "Documentation",
    description: "Documentation du code",
    icon: "",
    isActive: true,
  },
  {
    title: "Performance",
    description: "Analyse et optimisation",
    icon: "",
    isActive: false,
  },
  {
    title: "Sécurité",
    description: "Analyse et correction",
    icon: "",
    isActive: false,
  },
  {
    title: "Mise à jour",
    description: "Mise à jour des dépendances",
    icon: "",
    isActive: false,
  },
  {
    title: "Processus",
    description: "Création de process QA",
    icon: "",
    isActive: false,
  },
  {
    title: "Debugging",
    description: "Correction de bugs",
    icon: "",
    isActive: false,
  },
];

export const metrics = [
  {
    title: "Tests créés",
    value: "100+",
    icon: "file-icons:test-react",
  },
  {
    title: "Code documenté",
    value: "30+",
    icon: "heroicons-outline:document-text",
  },
  {
    title: "Expérience",
    value: "3+",
    icon: "vaadin:tools",
  },
];

export const testimonials = [
  {
    name: "Julien D.",
    title: "CTO",
    company: "B-Sharpe",
    image: "/images/testimonials/b-sharpe.jpg",
    quote:
      "Approche rigoureuse et centrée sur les tests. Très bon relationnel pour s'intégrer efficacement dans l'équipe.",
  },
  {
    name: "Thomas C.",
    title: "CEO",
    company: "Butterfl.ai",
    image: "/images/testimonials/butterflai.png",
    quote:
      "Eri a développé pour nous une super API REST sous Django, je le recommande vivement !",
  },
  {
    name: "Michel S.",
    title: "DA",
    company: "Terre d'avance",
    image: "/images/testimonials/terre-davance.png",
    quote: "",
  },
];

export const gains = [
  {
    icon: "",
    title: "Satisfaction utilisateurs",
    color: "indigo-500",
  },
  {
    icon: "",
    title: "Bugs en production",
    color: "amber-500",
  },
  {
    icon: "",
    title: "Possibilité d'évolution",
    color: "indigo-500",
  },
];

export const sections = {
  problem: {
    header: "Un problème",
    title:
      "Votre application React est devenu complexe et difficile à maintenir ?",
  },
  solution: {
    header: "Une solution",
    title: "Augmenter la Fiabilité et la Qualité de votre code",
  },
  services: {
    header: "Ce que nous faisons pour vous",
    title: "Augmenter la Qualité et Optimiser le Processus",
  },
  expertise: {
    header: "Notre expertise",
    title: "Le Front-end React.js",
  },
  testimonials: {
    header: "Testimonials",
    title: "Ce que nos clients disent de nous",
  },
  about: {
    header: "A propos",
    title: "Qui sommes-nous ?",
  },
};

export const problems = [
  {
    title: "Des maintenances difficiles",
    description:
      "Vous avez remis à demain la création des tests, quand vous aurez plus de temps et de ressources à leur accorder. Malheureusement ce demain n’arrive jamais et votre code grossi à vue d’oeil sans tests convenables.",
  },
  {
    title: "Beaucoup de bugs",
    description:
      "Vous avez remis à demain la création des tests, quand vous aurez plus de temps et de ressources à leur accorder. Malheureusement ce demain n’arrive jamais et votre code grossi à vue d’oeil sans tests convenables.",
  },
  {
    title: "Une évolution ralentie",
    description:
      "Vous avez remis à demain la création des tests, quand vous aurez plus de temps et de ressources à leur accorder. Malheureusement ce demain n’arrive jamais et votre code grossi à vue d’oeil sans tests convenables.",
  },
];

export const solutions = [
  {
    title: "Analyse",
    description:
      "Analyser votre application pour identifier les points à améliorer.",
    icon: "vaadin:tools",
  },
  {
    title: "Documentation",
    description: "Documenter votre code de manière claire et concise.",
    icon: "heroicons-outline:document-text",
  },
  {
    title: "Tests Unitaires",
    description:
      "Créer des tests unitaires pour garantir le bon fonctionnement de votre code.",
    icon: "file-icons:test-react",
  },
  {
    title: "Tests End-to-End",
    description:
      "Créer des tests end-to-end pour tester les interactions des utilisateurs avec votre application",
    icon: "mdi:test-tube",
  },
];

export const cta = {
  title: "Prêt à améliorer la qualité de votre application ?",
  button: "En savoir plus",
  internalUrl: "/#cta",
  url: "https://calendly.com/erischon/contact",
};

// Blog Informations
