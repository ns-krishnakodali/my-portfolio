export const HOME_ABOUT_ME =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lacinia scelerisque. In sagittis lectus eget faucibus finibus. Nullam sit amet nunc.';

  export const MY_EXPERIENCE =
  'I specialize in developing scalable, high-performance systems with a strong focus on software design and architecture. I have led architectural transformations to enhance scalability and efficiency. Proficient in the full development lifecycle, I also build responsive, accessible user interfaces for seamless experiences. I am dedicated to creating resilient, adaptable solutions through system design and performance optimization.';

export const EDUCATION_SUMMARY =
  'I specialize in developing scalable, high-performance systems with a strong focus on software design and architecture. I have led architectural transformations to enhance scalability and efficiency. Proficient in the full development lifecycle, I also build responsive, accessible user interfaces for seamless experiences. I am dedicated to creating resilient, adaptable solutions through system design and performance optimization.';

export const MY_EMAIL = 'krishnakodali81@gmail.com';

export const APP_SECTIONS = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/experience',
    name: 'Experience',
  },
  {
    path: '/education',
    name: 'Education',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/contact-me',
    name: 'Contact Me',
  },
];

export const LOGO_DETAILS = [
  {
    href: 'https://www.linkedin.com/in/krishnakodali9/',
    src: 'src/assets/logos/linkedin-logo.png',
    alt: 'LinkedIn Logo',
  },
  {
    href: 'https://github.com/ns-krishnakodali',
    src: 'src/assets/logos/github-logo.svg',
    alt: 'GitHub Logo',
  },
  {
    href: 'https://medium.com/@krishnakodali9',
    src: 'src/assets/logos/medium-logo.png',
    alt: 'Medium Logo',
  },
  {
    href: `mailto:${MY_EMAIL}`,
    src: 'src/assets/logos/gmail-logo.png',
    alt: 'Gmail Logo',
  },
  {
    href: 'https://x.com/KodaliK9',
    src: 'src/assets/logos/x-logo.png',
    alt: 'X Logo',
  },
];

export const EXPERIENCE_DETAILS = [
  {
    'Full Time': [
      {
        imageSrc: 'src/assets/logos/algosec-logo.png',
        imageAlt: 'Algosec Logo',
        imageWidth: 106.05,
        position: 'Software Engineer',
        company: 'AlgoSec',
        companyURL: 'https://www.algosec.com/',
        ePoints: [
          'As a Software Engineer in the Customer Focus R&D Team, they designed and built scalable, high-performance systems tailored to meet customer needs. They modernized legacy systems by converting them into reliable, fault-tolerant microservices, improving efficiency and scalability. Additionally, they optimized cloud-based components to streamline deployments and minimize downtime, delivering customized solutions that enhanced system reliability and reduced issue resolution time.',
        ],
        date: '09/2022 - 08/2024',
        location: 'Gurugram, India',
      },
      {
        imageSrc: 'src/assets/logos/publicis-sapient-logo.png',
        imageAlt: 'Publicis Sapient Logo',
        imageWidth: 66.25,
        position: 'Associate Software Development Engineer 2',
        company: 'Publicis Sapient',
        companyURL: 'https://www.publicissapient.com/',
        ePoints: [
          'Working as an Associate Software Development Engineer, I developed software solutions for clients, contributing to both front-end and back-end development. I created responsive user interfaces for a Health & Wellness application and designed libraries for efficient data querying, improving processing time and system efficiency. I also developed scalable frameworks for data management and enhanced system performance and reliability.',
        ],
        date: '06/2021 - 09/2022',
        location: 'Bengaluru, India',
      },
    ],
    Internship: [
      {
        imageSrc: 'src/assets/logos/gep-worldwide-logo.png',
        imageAlt: 'GEP Worldwide Logo',
        imageWidth: 90,
        position: 'Technology Intern',
        company: 'GEP Worldwide',
        companyURL: 'https://www.gep.com/',
        ePoints: [
          'I focused on improving system reliability and efficiency by building modules to forecast application outages. My responsibilities included automating the extraction, processing, and classification of event logs, streamlining log management workflows. I also designed and developed a mobile application for encoding and scanning QR codes with secure data handling, in line with internal requirements.',
        ],
        date: '05/2020 - 07/2020',
        location: 'Navi Mumbai, India',
      },
    ],
    Research: [
      {
        imageSrc: 'src/assets/logos/ieee-logo.png',
        imageAlt: 'IEEE Logo',
        imageWidth: 90,
        position: 'LiPI: Lightweight Privacy-Preserving Data Aggregation in IoT',
        company: 'DSSRG, IIT Bhubaneswar',
        companyURL: 'https://ieeexplore.ieee.org/document/10538564',
        ePoints: [
          "I co-developed and implemented LiPI, a privacy-preserving IoT/WSN data aggregation protocol, at DSSRG, IIT Bhubaneswar, and co-authored the research paper, which was published at IEEE TrustCom 2023. I also optimized LiPI's performance in D-Cube by implementing concurrent programming techniques and advanced IoT/WSN data segmentation and de-segmentation mechanisms.",
        ],
        date: '01/2021 - 08/2023',
        location: 'Bhubaneswar, India',
      },
    ],
  },
];

export const DEGREES_DETAILS = [
  {
    imageSrc: 'src/assets/logos/university-of-florida-logo.png',
    imageAlt: 'University of Florida Logo',
    imageWidth: 71,
    imageHeight: 70,
    universityName: 'University of Florida',
    degree: ' M.S. in Computer Science',
    websiteURL: 'https://www.ufl.edu/',
    courses: [
      'Advanced Data Structures',
      'Machine Learning',
      'Natural Language Processing',
      'Applied Linear Algebra',
    ],
    dPoints: ['Point1', 'Point2'],
    date: '08/2024 - 05/2026',
  },
  {
    imageSrc: 'src/assets/logos/iit-bbs-logo.png',
    imageAlt: 'IIT Bhubaneswar Logo',
    imageWidth: 86,
    imageHeight: 80,
    universityName: 'Indian Institute of Technology Bhubaneswar',
    degree: 'B.Tech in Computer Science & Engineering',
    websiteURL: 'https://www.iitbbs.ac.in/',
    courses: [
      'Analysis of Algorithms',
      'Operating Systems',
      'Database Systems',
      'Software Engineering',
      'Compiler Design',
    ],
    dPoints: ['Point1', 'Point2'],
    date: '07/2017 - 05/2021',
  },
];
