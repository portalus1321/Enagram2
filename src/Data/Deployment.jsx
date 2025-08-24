// src/Data/Deployment.js


export const getProjects = () => {
 const data = [
  {
    id: 1,
    href: 'https://en.wikipedia.org/wiki/Main_Page',
    projectName: 'JLPT-master',
    teamName: 'Rod Studio Div-1',
    status: 'offline',
    statusText: 'Initiated 1m 32s ago',
    description: 'Fetch from Supabase',
    environment: 'info',
    information: 'This project is focused on creating a comprehensive learning platform for the JLPT exam, integrating various resources and tools to aid in preparation.',
  },
  {
    id: 2,
    href: 'https://codepen.io/team/codepen/embed/preview/PNaGbb',
    projectName: 'AI chat',
    teamName: 'Rod Studio Div-1',
    status: 'online',
    statusText: 'Deployed 3m ago',
    description: 'Fetch from Supabase',
    environment: 'Production',
    information: 'This project involves developing an AI-powered chat application that provides users with interactive and intelligent responses, enhancing user engagement and support.',
  },
  {
    id: 3,
    href: 'https://play.tailwindcss.com/',
    projectName: 'Component Master',
    teamName: 'Rod Studio Div-2',
    status: 'offline',
    statusText: 'Deployed 3h ago',
    description: 'Fetch from Supabase',
    environment: 'info',
    information: 'This project focuses on creating a library of reusable components that can be utilized across various applications, promoting consistency and efficiency in development.',
  },
  {
    id: 4,
    href: 'https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples',
    projectName: 'Tools',
    teamName: 'Rod Studio Div-2',
    status: 'online',
    statusText: 'Failed to deploy 6d ago',
    description: 'Fetch from Supabase',
    environment: 'info',
    information: 'This project aims to develop a suite of tools that assist developers in their daily tasks, improving productivity and streamlining workflows.',
  },
  {
    id: 5,
    href: 'https://getbootstrap.com/docs/5.0/examples/',
    projectName: 'api protocol chat',
    teamName: 'Protocol',
    status: 'working',
    statusText: 'Working hard 💪',
    description: 'Fetch from Supabase',
    environment: 'info',
    information: 'This project is centered around building a robust API for chat functionalities, enabling seamless communication and data exchange between users and applications.',
  },
];

  return Array.isArray(data) ? data : [];
};