import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'shouldideploy',
    name: 'Should I Deploy',
    description: 'A humorous but practical tool that helps teams decide if it is a good time to deploy code based on various factors like day of the week, time, and deployment risk metrics.',
    thumbnail: '%PUBLIC_URL%/shouldideploy.png',
    link: 'https://shouldideploy.dev/',
    repository: 'https://github.com/alannewingham/shouldideploy',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Deployment Risk Analysis'],
    startDate: '2021-06',
    endDate: '2025-03',
    highlights: [
      'Developed interactive UI for deployment risk assessment',
      'Implemented algorithms to calculate deployment risk based on various factors',
      'Created responsive design for all device types',
      'Deployed with high-availability hosting'
    ],
    category: 'professional'
  },
  {
    id: 'learntochess',
    name: 'Learn To Chess',
    description: 'This was written as an interactive platform for learning and practicing chess for my seven year old daughter. The site features AI-powered opponents, using ChatGPT for a more natural playing experience.',
    thumbnail: '%PUBLIC_URL%/learn2chess.png',
    link: 'https://learntochess.com/',
    technologies: ['JavaScript', 'React', 'Chess.js', 'OpenAI API', 'AI Integration'],
    startDate: '2022-09',
    endDate: '2025-03',
    highlights: [
      'Developed interactive chess learning platform',
      'Implemented AI-powered chess opponent using ChatGPT',
      'Created intuitive user interface for chess practice',
      'Built responsive design for all device types'
    ],
    category: 'personal'
  },
  {
    id: 'chaoscoders',
    name: 'Chaos Coders',
    description: 'A development consulting firm website showcasing various code projects, technical articles, and consulting services we are capable of completing for software engineering projects.',
    thumbnail: '%PUBLIC_URL%/chaoscoders.png',
    link: 'https://chaoscoders.com/',
    technologies: ['JavaScript', 'React', 'Node.js', 'CSS', 'Responsive Design'],
    startDate: '2021-10',
    endDate: '2025-02',
    highlights: [
      'Developed professional consulting firm website',
      'Showcased portfolio of random code projects',
      'Implemented responsive design for optimal viewing across devices',
      'Created content management system for technical articles'
    ],
    category: 'professional'
  },
  {
    id: 'datadiver',
    name: 'DataDiver',
    description: 'A specialized web scraper and image gatherer for Discord that enables automated collection and organization of data from Discord channels.',
    thumbnail: '%PUBLIC_URL%/datadiver.png',
    repository: 'https://github.com/01000001-01001110/DataDiver',
    technologies: ['JavaScript', 'Node.js', 'Discord API', 'Web Scraping', 'Image Processing'],
    startDate: '2022-08',
    endDate: '2025-02',
    highlights: [
      'Built intelligent scraping system for Discord channels',
      'Implemented image gathering and processing capabilities',
      'Created modular architecture for extensibility',
      'Developed filtering and sorting algorithms for collected data'
    ],
    category: 'personal'
  },
  {
    id: 'gemini-transcriber',
    name: 'Gemini Transcriber',
    description: 'A Python application that records live audio from your microphone, periodically processes the audio, and transcribes it using the Google Gemini API.',
    thumbnail: '%PUBLIC_URL%/transcriber.png',
    repository: 'https://github.com/01000001-01001110/Gemini-Transcriber',
    technologies: ['Python', 'Google Gemini API', 'Audio Processing', 'Machine Learning', 'Transcription'],
    startDate: '2023-12',
    endDate: '2025-03',
    highlights: [
      'Developed real-time audio recording system',
      'Integrated with Google Gemini API for advanced transcription',
      'Implemented periodic processing for efficiency',
      'Created user-friendly interface for controlling recording sessions'
    ],
    category: 'personal'
  },
  {
    id: 'local-ai-docker-cluster',
    name: 'Local AI Docker Cluster',
    description: 'A containerized environment for running AI models locally using Docker, providing a scalable infrastructure for machine learning applications.',
    thumbnail: '%PUBLIC_URL%/dockercontainers.png',
    repository: 'https://github.com/01000001-01001110/local-ai-docker-cluster',
    technologies: ['Docker', 'Kubernetes', 'AI/ML', 'Python', 'Containerization'],
    startDate: '2023-09',
    endDate: '2025-01',
    highlights: [
      'Created containerized environment for AI model deployment',
      'Implemented cluster management for scalable AI applications',
      'Developed configuration system for different AI models',
      'Optimized resource allocation for high-performance inference'
    ],
    category: 'personal'
  },
  {
    id: 'flask-weather',
    name: 'Flask Weather App',
    description: 'A web application built with Flask that provides weather forecasts and historical weather data with an intuitive user interface.',
    thumbnail: '%PUBLIC_URL%/flaskweather.png',
    repository: 'https://github.com/01000001-01001110/flask_weather',
    technologies: ['Python', 'Flask', 'Weather API', 'HTML', 'CSS', 'JavaScript'],
    startDate: '2022-04',
    endDate: '2024-12',
    highlights: [
      'Built responsive web application using Flask framework',
      'Integrated with weather APIs for forecast data',
      'Implemented historical weather data visualization',
      'Designed intuitive user interface for easy navigation'
    ],
    category: 'personal'
  },
  {
    id: 'dark-macro-tool',
    name: 'Dark Macro Tool',
    description: 'An automation tool for creating and managing macros for various applications, featuring a dark mode interface for extended usage sessions.',
    thumbnail: '%PUBLIC_URL%/darkmacro.png',
    repository: 'https://github.com/01000001-01001110/dark_macro_tool',
    technologies: ['Python', 'Automation', 'UI/UX Design', 'Cross-platform'],
    startDate: '2023-02',
    endDate: '2024-10',
    highlights: [
      'Developed cross-platform macro automation system',
      'Implemented dark mode interface for reduced eye strain',
      'Created intuitive macro recording and editing tools',
      'Built scheduling system for automated macro execution'
    ],
    category: 'personal'
  },
  {
    id: 'techno-rabbit',
    name: 'Techno Rabbit',
    description: 'A project that combines hardware and software to create interactive light shows synchronized with music, using LED controllers and real-time audio analysis.',
    thumbnail: '%PUBLIC_URL%/datarabbit.png',
    repository: 'https://github.com/01000001-01001110/Techno-Rabbit',
    technologies: ['Python', 'Arduino', 'LED Control', 'Audio Analysis', 'Real-time Processing'],
    startDate: '2023-06',
    endDate: '2024-11',
    highlights: [
      'Developed real-time audio analysis algorithms',
      'Created synchronized LED light show system',
      'Implemented hardware interface for LED controllers',
      'Built customizable patterns and effects library'
    ],
    category: 'personal'
  },
  {
    id: 'dnd-npc-generator',
    name: 'D&D NPC Generator',
    description: 'A tool for Dungeon Masters to generate detailed Non-Player Characters for tabletop roleplaying games, complete with backgrounds, personalities, and statistics.',
    thumbnail: '%PUBLIC_URL%/dndnpcgenerator.png',
    repository: 'https://github.com/01000001-01001110/DnD_NPC_Generator',
    technologies: ['JavaScript', 'React', 'D&D Rules Implementation', 'UI/UX Design'],
    startDate: '2022-11',
    endDate: '2024-09',
    highlights: [
      'Created comprehensive D&D NPC generation system',
      'Implemented complex rules and statistics calculations',
      'Developed dynamic character background generator',
      'Built intuitive interface for character customization'
    ],
    category: 'personal'
  },
  {
    id: 'pixel-pal-discord-bot',
    name: 'Pixel Pal Discord Bot',
    description: 'A customizable Discord bot designed to enhance server engagement with moderation tools, games, and community-building features.',
    thumbnail: '%PUBLIC_URL%/pixelpal.png',
    repository: 'https://github.com/01000001-01001110/pixel_pal_discord_bot',
    technologies: ['JavaScript', 'Node.js', 'Discord.js', 'Database Integration', 'Bot Development'],
    startDate: '2022-07',
    endDate: '2024-12',
    highlights: [
      'Developed versatile Discord bot with multiple features',
      'Implemented moderation tools for server management',
      'Created interactive games and community engagement tools',
      'Built extensible plugin system for custom commands'
    ],
    category: 'personal'
  },
  {
    id: 'certificate-manager',
    name: 'Certificate Management System',
    description: 'An automated system for managing SSL/TLS certificates across multiple environments with features for automated renewal, validation, and synchronization between key vaults.',
    thumbnail: '%PUBLIC_URL%/certificates.png',
    technologies: ['C#', 'Azure Functions', 'Azure Key Vault', 'Certificate Management', 'PowerShell'],
    startDate: '2022-10',
    endDate: '2023-03',
    highlights: [
      'Created C# function app for certificate version synchronization between key vaults',
      'Implemented automated certificate renewal workflows',
      'Developed monitoring and alerting for certificate expiration',
      'Reduced manual certificate handling by 80%'
    ],
    category: 'professional'
  },
  {
    id: 'engineering-tools',
    name: 'Engineering Tools Platform',
    description: 'A suite of Flask-based applications to streamline engineering workflows, providing tools for process automation, documentation generation, and system monitoring.',
    thumbnail: '%PUBLIC_URL%/platformtools.png',
    technologies: ['Python', 'Flask', 'JavaScript', 'Docker', 'Jenkins'],
    startDate: '2022-11',
    endDate: '2023-06',
    highlights: [
      'Developed multiple Flask applications for engineering teams',
      'Created unified platform for accessing various engineering tools',
      'Implemented CI/CD pipeline for continuous deployment',
      'Improved team productivity by 30% through workflow automation'
    ],
    category: 'professional'
  }
];

export default projects;
