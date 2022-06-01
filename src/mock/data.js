import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alex Swiggum | Full Stack Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My Name is ',
  name: 'Alex Swiggum',
  subtitle: 'I am a Full-Stack Software Engineer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'alex2crop.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1oKwHW18nSjuWBViVqjob8CCGZ7BSLQ-4/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Carbon Galaxy',
    info: 'A full-stack, multi-page Carbon calculation app with a React frontend and Flask backend that allows users to calculate the Carbon Emissions of inputted website urls and shows the environmental impact their web presence has',
    info2: 'Tech Stack: React, Redux, Custom-Hooks, Flask, PostgreSQL, Google Firebase',
    url: 'https://carbon-galaxy-app.web.app/',
    repo: 'https://github.com/swigguma5776/Carbon_Galaxy-React-Flask-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Personal Portfolio',
    info: 'My personal portfolio is an experiment with the React framework to further grow my skills as a front-end developer. It is an interactive Resume to showcase my skills and learn more about myself and my journey in the tech world.',
    info2: 'Tech Stack: React, SCSS, Gatsby',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Famous Artist [ Database ]',
    info: 'An Artist Inventory Database where users can add, update, and delete Artists in their user authenticated profile. I utilized Flask Framework, PostgreSQL database and HTML/CSS display.',
    info2: 'Tech Stack: Flask, HTML, CSS, PostgreSQL, Heroku',
    url: 'https://artist-inventory-api.herokuapp.com/',
    repo: 'https://github.com/swigguma5776/Artist-Database-Api_Flask-Heroku_assignment', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alex-swiggum-profile/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/swigguma5776',
    },
    {
      id: nanoid(),
      name: 'interior design portfolio',
      url: 'https://ashleyswiggum.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
