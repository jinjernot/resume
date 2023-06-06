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
  description: "Resume - Developer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about me',
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
        I'm a <a href='https://goo.gl/maps/v8M4rLLJoQoJHVnc6' target="_blank">Zapopan</a> Based <strong className="text-stone-100">Web Developer</strong>, working
        at <strong className="text-stone-100">HP Inc.</strong><br /> I'm currently learning <strong className="text-stone-100"><a href="https://app.datacamp.com/learn/career-tracks/data-engineer-with-python">Data Engineer with Python</a></strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me coding for <a href='https://www.sabarobestudios.io/' target="_blank"><strong className="text-stone-100">Sabarobe Studios</strong></a>, playing video games or trading crypto.
        
      </p>
    </>
  ),
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a multidisciplinary professional with experience in development, support engineering, and content management,
                I have a unique perspective that enables me to quickly learn new technologies and develop expertise in them.`,
  aboutItems: [
    {label: 'Location', text: 'Zapopan, Jalisco', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Mexican', Icon: FlagIcon},
    {label: 'Interests', text: 'Video Games, Music, Cats, Cryptocurrency', Icon: SparklesIcon},
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
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 6,
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
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 6,
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
    title: 'sachiel.py',
    description: 'Instagram and Twitter Scrapper',
    url: 'https://github.com/jinjernot/sachiel',
    image: porfolioImage,
  },
  {
    title: 'gaghiel.py',
    description: 'Document Assembly Tool',
    url: 'https://github.com/jinjernot/gaghiel',
    image: porfolioImage,
  },
  {
    title: 'shamshel.py',
    description: 'Data Mining Tool',
    url: 'https://github.com/jinjernot/shamshel',
    image: porfolioImage,
  },
  {
    title: 'matarael.py',
    description: 'Data Scrubbing Tool',
    url: 'https://github.com/jinjernot/matarael',
    image: porfolioImage,
  },
  {
    title: 'ramiel.py',
    description: 'Data Scrubbing Tool',
    url: 'https://github.com/jinjernot/ramiel',
    image: porfolioImage,
  },
  {
    title: 'tabris.py',
    description: 'Web Scrapper and Database Management',
    url: 'https://github.com/jinjernot/tabris',
    image: porfolioImage,
  },
  {
    title: 'sandalphon.py',
    description: 'Telegram Crypto Alerts Bot - WIP',
    url: 'https://github.com/jinjernot/sandalphon',
    image: porfolioImage,
  },
    {
    title: 'sahaquiel.py',
    description: 'Crypto Database - WIP',
    url: 'https://github.com/jinjernot/sahaquiel',
    image: porfolioImage,
  },

  {
    title: 'Sabarobe Studios',
    description: 'Website for Sabarobe Studios',
    url: 'https://www.sabarobestudios.io/',
    image: porfolioImage,
  },
  {
    title: 'Pixel Homies',
    description: 'Minting site for Pixel Homies NFT Collection - WIP',
    url: 'https://www.pixelhomies.io/',
    image: porfolioImage,
  },
  {
    title: 'Boda Daniel & Cinthia',
    description: 'Wedding invitation static page',
    url: 'https://bodacinthiaydaniel.webflow.io/',
    image: porfolioImage,
  },
  {
    title: 'Adriana Armenta Interiorismo',
    description: 'Portfolio page for Adriana - WIP',
    url: 'https://adriana-interiorismo.netlify.app',
    image: porfolioImage,
  },
  {
    title: 'Sabarobe Indicator',
    description: 'Trade signals on price action including moving averages',
    url: 'https://www.tradingview.com/script/JOaA4dXY-Sabarobe/',
    image: porfolioImage,
  },
  {
    title: '',
    description: '',
    url: '',
    image: porfolioImage,
  },
  {
    title: '',
    description: '',
    url: '',
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
    date: '2023 - Present',
    location: 'HP Inc',
    title: 'Web Developer',
    content: (
      <p>
      • Develop HyperX Brand showcase pages, ensuring that all pages are visually appealing and user-friendly.<br/>
      • Redesign the HP Web Content Solutions for Partners page, working closely with the team to develop a visually appealing and user-friendly layout.<br/>
      • Maintain and update existing pages as necessary, and ensure that all pages are up-to-date and relevant to our target audience.<br/>
      </p>
    ),
  },
  {
    date: '2018 - 2023',
    location: 'HP Inc',
    title: 'Global Content Support',
    content: (
      <p>
      • Prioritize and address critical cases on product pages to ensure that content is accurate and up-to-date.<br/>
      • Monitor the flow of content (including images, specs, descriptions, and release dates) for support pages, and ensure that all information is accurate and relevant.<br/>
      • Engage with publishers and manage escalations to ensure that all content is of high quality and meets our standards.<br/>
      • Manage content tools to ensure that content is easily accessible and up-to-date.<br/>
      • Review content for new products and ensure that all information is accurate and relevant.<br/>
      • Monitor the performance of web pages (including JavaScript, HTML, and CSS) and work with IT to identify and solve any problems or issues that arise.<br/>
      </p>
    ),
  },

  {
    date: '2020 - Present',
    location: 'Sabarobe Studios',
    title: 'FullStack Developer',
    content: (
      <p>
      • Design and develop web applications using React.js, ensuring that all applications are visually appealing, user-friendly, and optimized for performance.<br/>
      • Develop trading algorithms using PineScript, ensuring that all algorithms are effective and efficient.<br/>
      • Perform web scraping and automation with Selenium, ensuring that all data is accurately and efficiently retrieved.<br/>
      • Create 3D asset models for NFT collections and Three.js projects, ensuring that all models are visually stunning and optimized for performance.<br/>
      </p>
    ),
  },

  {
    date: '2017 - 2018',
    location: 'HP Inc',
    title: 'Quickspecs Specialist',
    content: (
      <p>
      • Work closely with product managers, engineers, and other stakeholders to gather information and develop Quickspecs documents for our Business Notebook and Desktop products.<br/>
      • Develop Datasheets documents for our Commercial accessories, ensuring that all information is accurate and up-to-date.<br/>
      • Collaborate with cross-functional teams to ensure that all documentation meets our standards and is of high quality.<br/>
      •Maintain and update existing documentation as necessary, and ensure that all documentation is easily accessible and up-to-date.<br/>
      </p>
    ),
  },

  {
    date: '2015 - 2017',
    location: 'Hewlett Packard Enterprise',
    title: 'Video Upload Coordinator',
    content: (
      <p>
      • Receive requests for video upload and publishing through the Marketing Asset Publishing portal.<br/>
      • Manage video upload and publishing to HPE Video Gallery / YouTube, inputting all necessary metadata and ensuring that all videos are accurately and efficiently published.<br/>
      • Collaborate with cross-functional teams to ensure that all videos meet our standards and are of high quality.<br/>
      • Work with the support team to fix technical issues and ensure that all videos are accessible and easily viewable.<br/>
      • Track video performance and issues, and provide regular updates to stakeholders.<br/>
      </p>
    ),
  },

  {
    date: '2015 - 2017',  
    location: 'Hewlett Packard Enterprise',
    title: 'Image Acquisition Lead',
    content: (
      <p>
      • Ensure the automated delivery of product images and dynamic links in support of new product introductions and updates.<br/>
      • Engage with AMS, EMEA & APJ businesses and publishers to drive new business requirements, capabilities, and processes that improve customer experience and end-to-end efficiency.<br/>
      • Collaborate with cross-functional teams to ensure that all processes are streamlined and optimized for efficiency.<br/>
      • Troubleshoot issues under tight deadlines, keeping track using a ticketing system to ensure customer satisfaction.<br/>
      • Provide regular updates to stakeholders and ensure that all processes meet our standards and are of high quality.<br/>
      </p>
    ),
  },

  {
    date: '2013 - 2017',  
    location: 'HP',
    title: 'Product Catalog Operations',
    content: (
      <p>
      • Manage and publish content for the HPE.com product catalog worldwide.<br/>
      • Develop web solutions for internal HPE clients worldwide.<br/>
      • Coordinate and launch new products for the HPE.com online catalog.<br/>
      • Perform daily end-to-end product content update status checks to ensure that each system is working properly.<br/>
      • Participate in a migration project from SDL Tridion to Adobe Enterprise Manager.<br/>
      • Collaborate with cross-functional teams to ensure that all processes are streamlined and optimized for efficiency.<br/>
      • Troubleshoot issues under tight deadlines, keeping track using a ticketing system to ensure customer satisfaction.<br/>
      • Provide regular updates to stakeholders and ensure that all processes meet our standards and are of high quality.<br/>
      </p>
    ),
  },

  {
    date: '2011 - 2013',  
    location: 'Red Movil',
    title: 'Technical Support Engineer',
    content: (
      <p>
      • Perform remote network monitoring and proactive activities to ensure guests have the proper internet service in hotels all across Mexico.<br/>
      • Coordinate with local IT to fix problems in a fast way.<br/>
      • Use a ticketing system to track issues and ensure that all issues are resolved in a timely manner.<br/>
      • Provide 24/7 support coverage via a call center to help guests with issues related to the internet service.<br/>
      • Collaborate with cross-functional teams to ensure that all processes are streamlined and optimized for efficiency.<br/>
      • Troubleshoot issues under tight deadlines and ensure customer satisfaction.<br/>
      • Maintain accurate documentation of network infrastructure and support processes.<br/>
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
      name: 'Data Engineer with Python',
      text: 'Learning:',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'The Legend of Zelda: Tears of the Kingdom',
      text: 'Playing:',
      image: '▲',
    },
    {
      name: 'Chris Christodoulou',
      text: 'Listenig:',
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