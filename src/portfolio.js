//SEO Related settings
const seo = {
  title: "Portfolio de Kylian",
  description:
    "Étudiant en 5ème année à l'EPITECH Paris, passionné par la culture de l'informatique et par les nouvelles technologies.",
  og: {
    title: "Portfolio de Kylian",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Kylian Cadet",
  logo_name: "KylianCadet",
  nickname: null,
  subTitle:
    "Étudiant en 5ème année à l'Epitech Paris, passionné par l'informatique et par la culture numérique.",
  resumeLink:
    "https://drive.google.com/file/d/1q6UtMRplty3iIhfIx0qHIDXvDaxETcnv/view?usp=sharing",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/KylianCadet",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kyliancadet/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    id: 3,
    name: "Gmail",
    link: "mailto:kyliancadet@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Développeur Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developpement backend en Node, Express, Flask & Django",
        "⚡ Développement front-end réactif",
        "⚡ Mise en place de test unitaire et documentation d'API",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "logos:sass",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "vscode-icons:file-type-vue",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "logos:rust",
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "logos:graphql",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:file-type-mongo",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "EPITECH Paris",
      subtitle: "Expert en technologies de l'information",
      logo_path: "epitech-logo.png",
      alt_name: "EpitechLogo",
      duration: "2017 - Ajourd'hui",
      descriptions: [
        "⚡ Le programme Grande Ecole est le cursus historique d’Epitech et se déroule en 5 ans.",
        "⚡ J'ai pu, grâce à la pédagogie par projet, réalisé plus d'une cinquantaine de projets qui vont d'une simple bataille navale en C à des jeux en 3D en C++.",
      ],
      website_link: "https://www.epitech.eu/fr/pedagogie-projets/",
    },
    {
      title: "Chung-Ang University",
      subtitle: "",
      logo_path: "cau-logo.png",
      alt_name: "CAULogo",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Année à l'étranger dans le cadre de mon cursus Epitech.",
        "⚡ J'y ai étudiée de l'algorithmie, de la programmation multicore, de la programmation web.",
      ],
      website_link: "https://neweng.cau.ac.kr/index.do",
    }
  ],
};

// Experience Page
const experience = {
  experiences:
    [
      {
        title: "Polaris",
        subtitle: "Développeur Full Stack",
        logo_path: "polaris.png",
        alt_name: "PolarisLogo",
        duration: "Septembre 2019 - Ajourd'hui",
        descriptions: [
          "• Réalisation d'un site web d'administration en Nuxt.js",
          "• Écriture de request GrahpQL en javascript",
          "• Écriture de script permettant l'automatisation de taches",
          "• Écriture de query sur le serveur backend (Rust + Juniper)"
        ],
        website_link: "https://polaris-web.herokuapp.com",
      },
      {
        title: "El System",
        subtitle: "Développeur Full Stack",
        logo_path: "ElSystem.png",
        alt_name: "ElSystemLogo",
        duration: "Septembre 2019 - Mars 2020",
        descriptions: [
          "• Concéption et développement d'une boutique en ligne sur mersure en Django",
        ],
        website_link: "https://elsystem.fr",
      },
      {
        title: "PHB Paris",
        subtitle: "Développeur Full Stack",
        logo_path: "PHBParis.png",
        alt_name: "PHBParisLogo",
        duration: "Septembre 2018 - Janvier 2019",
        descriptions: [
          "• Mise en place d'un seeveur en Node.js relié à une base de données",
          "• Migration d'une base de donnée MongoDB en PostgreSQL",
          "• Écriture d'endpoint et de request SQL (architecture REST)"
        ],
        website_link: "https://www.phb.paris/custom",
      }
    ]
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Mes projets personnels et ceux réalisés dans le cadre de mes études",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      "name": "missing-video-finder",
      "createdAt": "2021-04-23T00:00:00Z",
      "url": "https://github.com/KylianCadet/missing-video-finder",
      "description": "Youtube playlists missing video finder",
      "languages": [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        }
      ]
    },
    {
      "name": "bustabit-bot",
      "createdAt": "2020-03-19T00:00:00Z",
      "url": "https://github.com/KylianCadet/bustabit-bot",
      "description": "Simple app to run your bustabit script in a Docker container (without graphical environment)",
      "languages": [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        }, {
          "name": "Docker",
          "iconifyClass": "logos-docker"
        }
      ]
    },
    {
      "name": "epitech-zia",
      "createdAt": "2020-03-6T00:00:00Z",
      "url": "https://github.com/KylianCadet/epitech-zia",
      "description": "C++ modular server with php and ssl module implementation",
      "languages": [
        {
          "name": "C++",
          "iconifyClass": "vscode-icons:file-type-cpp"
        }
      ]
    },
    {
      "name": "epitech-dashboard",
      "createdAt": "2020-03-01T00:00:00Z",
      "url": "https://github.com/KylianCadet/epitech-dashboard",
      "description": "Dashboard is an online application where user can indentifies themself to other services in order to view several usefull informations",
      "languages": [
        {
          "name": "NodeJS",
          "iconifyClass": "logos-nodejs"
        },
        {
          "name": "Javascript",
          "iconifyClass": "logos-javascript"
        },
        {
          "name": "Docker",
          "iconifyClass": "logos-docker"
        }
      ]
    }
  ]
}

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  projects
};
