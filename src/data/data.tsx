import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
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
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
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
  Contact: 'contact',
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
        I'm a Guadalajara Based <strong className="text-stone-100">Full Stack Developer</strong>, currently working
        at <strong className="text-stone-100">HP Inc.</strong> 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me coding for <strong className="text-stone-100">Sabarobe Studios</strong> or playing video games.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
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
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
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
    ],
  },
  {
    name: 'Backend development',
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
    ],
  },
  {
    name: 'Miscellaneous',
    skills: [
      {
        name: 'Selenium',
        level: 9,
      },
      {
        name: '3D Modeling',
        level: 4,
      },
      {
        name: 'Three.js',
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
    description: 'React Web page for Sabarobe Studios',
    url: 'https://www.sabarobestudios.io/',
    image: porfolioImage4,
  },
  {
    title: 'Pixel Homies',
    description: 'React Web page for Pixel Homies NFT Collection',
    url: 'https://www.pixelhomies.io/',
    image: porfolioImage4,
  },
  {
    title: 'Boda Daniel & Cinthia',
    description: 'Wedding invitation Website',
    url: 'https://bodacinthiaydaniel.webflow.io/',
    image: porfolioImage4,
  },
  {
    title: 'Instagram Scraper',
    description: 'Instagram Scraper Using Selenium',
    url: 'https://github.com/jinjernot/Jinjernot',
    image: porfolioImage4,
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
    date: 'Oct 2018 - Present',
    location: 'HP Inc',
    title: 'Global Content Support',
    content: (
      <p>
      • Immediate attention to critical cases on the content for product pages.
      • Monitoring the flow of content (images, specs, descriptions, release dates) for the support pages.
      • Publisher engagement and escalation management. 
      • Management of content tools 
      • Review of content for new products.
      • Monitoring the performance of web pages (JavaScript, HTML, CSS)
      • Interaction with IT to solve problems and improve assets
      </p>
    ),
  },
  {
    date: 'March 2020 - Present',
    location: 'Sabaraobe Studios',
    title: 'FullStack Developer',
    content: (
      <p>
      • Design and develop web applications using React.js
      • Development of trading algorithms using PineScript and Python
      • Development of  web scraping and automation using Selenium
      • 3D Asset modeling for NFT collections and Three.js projects
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
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
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jinjernot'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jinjernot/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jinjernot/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/jinjernot'},
];
