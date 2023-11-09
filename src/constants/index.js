import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  ExpressJS,
  StyledComponents,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  WhatsAppClone,
  YoloCafe,
  emailsocial,
  githubsocial,
  linkedinsocial,
  twittersocial,
  myphoto
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "MERN Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: ExpressJS,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "StyledComponents",
    icon: StyledComponents,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Car Rental Store",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Styled-Components",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "JWT token",
        color: "green-text-gradient",
      },
      {
        name: "Bcrypt.js ",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: {
      github: "https://github.com/kartikgothwal/Car-Rental",
      link: "https://car-rental-five-indol.vercel.app/",
    },
  },
  {
    name: "WhatsApp Clone",
    description:
      "Allowing users to interact through a chat box for dynamic conversations. Implemented user authentication through email/password and Google Sign-In. Real-time Chat.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],

    image: WhatsAppClone,
    source_code_link: {
      github: "https://github.com/kartikgothwal/WhatsApp-Clone",
      link: "https://whatsapp-clone-97e3c.firebaseapp.com/",
    },
  },
  {
    name: "Yolo Cafe",
    description:
      "This is a online web application for a local cafe to gow their bussiness and help consumers to place orders and get it delivered to their home.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Styled-Components",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],

    image: YoloCafe,
    source_code_link: {
      github: "https://github.com/kartikgothwal/Car-Rental",
      link: "https://car-rental-five-indol.vercel.app/",
    },
  },
];
const socials = [
  {
    name: "LinkedIn",
    icon: linkedinsocial,
    link: "https://www.linkedin.com/in/kartikgothwal/",
  },
  {
    name: "Github",
    icon: githubsocial,
    link: "https://github.com/kartikgothwal",
  },
  {
    name: "Twitter",
    icon: twittersocial,
    link: "https://twitter.com/KartikGothwal28",
  },
  {
    name: "email",
    icon: emailsocial,
    link: "mailto:kartikgothwal28@gmail.com",
  },
];

export { services, socials, technologies, experiences, projects };
