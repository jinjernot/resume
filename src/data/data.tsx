import {
  AcademicCapIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage from '../images/portfolio/portfolio.png';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Gilberto Garcia',
  description: "Resume - FullStack Developer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Gilberto Garcia`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <a href='https://goo.gl/maps/v8M4rLLJoQoJHVnc6' target="_blank">Zapopan</a> Based <strong className="text-stone-100">Developer</strong>, currently working
        at <strong className="text-stone-100">HP Inc.</strong><br /> I'm currently learning Python and Javascript
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me coding for <a href='https://www.sabarobestudios.io/' target="_blank"><strong className="text-stone-100">Sabarobe Studios</strong></a> or flipping shitcoins.
        
      </p>
    </>
  ),
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` I am a multidisciplinary professional with experience as Developer, Support Engineer and Content Management.
  Able to quickly learn new technologies or tools and develop expertise quickly,
  Creative problem-solving skills, familiar with scrum methodology.`,
  aboutItems: [
    {label: 'Location', text: 'Zapopan, Jalisco', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Mexican', Icon: FlagIcon},
    {label: 'Interests', text: 'Video Games, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Guadalajara', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'HP inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 6,
      },
      {
        name: 'HTML / CSS',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'Node.JS',
        level: 5,
      },
      {
        name: 'SQL',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Sabarobe Studios Web page',
    description: 'Web page for Sabarobe Studios',
    url: 'https://www.sabarobestudios.io/',
    image: porfolioImage,
  },
  {
    title: 'Pixel Homies',
    description: 'Web page for Pixel Homies NFT Collection',
    url: 'https://www.pixelhomies.io/',
    image: porfolioImage,
  },
  {
    title: 'Boda Daniel & Cinthia',
    description: 'Wedding invitation Website',
    url: 'https://bodacinthiaydaniel.webflow.io/',
    image: porfolioImage,
  },
  {
    title: 'Jinjernot',
    description: 'Instagram and Twitter Scraper Using Selenium',
    url: 'https://github.com/jinjernot/Jinjernot',
    image: porfolioImage,
  },

  {
    title: 'Atzayacatol',
    description: 'Web Scrapper and Database Management',
    url: 'https://github.com/jinjernot/Atzayacatol',
    image: porfolioImage,
  },

  {
    title: 'Brigadier',
    description: 'Telegram Bot',
    url: 'https://github.com/jinjernot/Brigadier',
    image: porfolioImage,
  },
  
 
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2004 - 2009',
    location: 'Universidad de Guadalajara',
    title: 'Computer Science',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2018 - Present',
    location: 'HP Inc',
    title: 'Global Content Support',
    content: (
      <p>
      • Immediate attention to critical cases on the content for product pages.<br/>
      • Monitoring the flow of content (images, specs, descriptions, release dates) for the support pages.<br/>
      • Publisher engagement and escalation management.<br/>
      • Management of content tools.<br/>
      • Review of content for new products.<br/>
      • Monitoring the performance of web pages.<br/>
      • Interaction with IT to solve problems and improve assets<br/><br/>
      <b>Skills:</b> Service Desk · Data Management · XML · Troubleshooting · Help Desk Support · Technical Support · Multitasking · Microsoft Office · Content Management · Data Analysis
      </p>
    ),
  },

  {
    date: '2020 - Present',
    location: 'Sabarobe Studios',
    title: 'FullStack Developer',
    content: (
      <p>
      • Design and develop web applications using React.js<br/>
      • Development of trading algorithms using PineScript and Python<br/>
      • Development of  web scraping and automation using Selenium<br/>
      • 3D Asset modeling for NFT collections and Three.js projects<br/><br/>
      <b>Skills:</b> Blender · Three.js · Jira · Web Development · Git · HTML · CSS · React.js · JavaScript · XML · Selenium · Data Science · Python · Multitasking · Web Design · Adobe Photoshop · Blockchain
      </p>
    ),
  },

  {
    date: '2017 - 2018',
    location: 'HP Inc',
    title: 'Quickspecs Specialist',
    content: (
      <p>
      • Development of Quickspecs documents for Business Notebook and Desktop.<br/>
      • Development of Datasheets documents for Commercial accesories.<br/><br/>
      <b>Skills:</b> Data Management · Multitasking · Microsoft Office · Graphic Design · Content Management · Adobe Photoshop
      </p>
    ),
  },

  {
    date: '2015 - 2017',
    location: 'Hewlett Packard Enterprise',
    title: 'Video Upload Coordinator',
    content: (
      <p>
    • Provide video upload and publishing services to ~100 HPE marketing stakeholders across regions.<br/>
    • Manage video upload  and publishing to HPE Video Gallery / YouTube, input all necessary metadata, update status to stakeholders.<br/>
    • Work with support team to fix technical issues.<br/>
    • Track performance and issues.<br/>
    • Meet standard TAT.<br/><br/>
    <b>Skills:</b> Asset Management · Data Management · XML · Multitasking · Microsoft Office · Content Management · Project Management · Data Analysis
      </p>
    ),
  },

  {
    date: '2015 - 2017',  
    location: 'Hewlett Packard Enterprise',
    title: 'Image Acquisition Lead',
    content: (
      <p>
    • Ensure the automated delivery of product images and dynamic links in support of new product introductions and product updates.<br/>
    • Engage with AMS, EMEA & APJ Businesses and Publishers to drive new business requirements, capabilities and processes that improve customer experience and end to end efficiency.<br/>
    • Solve issues under tight deadlines, keeping track using a ticketing system to ensure customer satisfaction.<br/><br/>
    <b>Skills:</b> Asset Management · Data Management · XML · Troubleshooting · Multitasking · Microsoft Office · Graphic Design · Content Management · Adobe Photoshop · Project Management
      </p>
    ),
  },

  {
    date: '2013 - 2017',  
    location: 'HP',
    title: 'Product Catalog Operations',
    content: (
      <p>
      • Management and publishing content for the HPE.com product catalog worldwide.<br/>
      • Development of web solutions for internal HPE clients.<br/>
      • Coordination and launch of new products for the HPE.com online catalog.<br/>
      • Web solutions for internal clients worldwide.<br/>
      • Perform daily end to end product content update status check to ensure each system works properly.<br/>
      • Participated in migration project from SDL Tridion to Adobe Enterprise Manager.<br/><br/>
    <b>Skills:</b> Web Development · HTML · JavaScript · Data Management · XML · Troubleshooting · Multitasking · Microsoft Office · Content Management
      </p>
    ),
  },

  {
    date: '2011 - 2013',  
    location: 'Red Movil',
    title: 'Technical Support Engineer',
    content: (
      <p>
      • Remote Network Monitoring  and proactive activities to ensure guests have the proper Internet service in hotels all across Mexico.<br/>
      • Coordinate with local IT to fix problems in a fast way.<br/>
      • Issue tracking using a ticketing system.<br/>
      • Support  Coverage 24/7 via call center to help with issues related to the Internet Service.<br/><br/>
      <b>Skills:</b> TCP/IP · Network Security · Service Desk · Troubleshooting · Help Desk Support · Technical Support · Multitasking · Microsoft Office
      </p>
    ),
  },

];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '',
      text: '',
      image: '',
    },
    {
      name: '',
      text: '',
      image: '',
    },
    {
      name: '',
      text: '',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

/* export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can reach me at:',
  items: [
    {
      type: ContactType.Email,
      text: 'jinjernot@gmail.com',
      href: 'mailto:jinjernot@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Zapopan, Jalisco',
      href: 'https://goo.gl/maps/nmoKKZX2fjkkXT23A',
    },
    {
      type: ContactType.Instagram,
      text: '@jinjernot',
      href: 'https://www.instagram.com/jinjernot/',
    },
    {
      type: ContactType.Github,
      text: 'jinjernot',
      href: 'https://github.com/jinjernot',
    },
  ],
}; */

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jinjernot'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jinjernot/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jinjernot/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/jinjernot'},
];
