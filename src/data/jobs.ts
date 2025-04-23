import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: 'cloud-migration-engineer',
    title: 'Cloud Migration Engineer',
    company: 'Freelance',
    startDate: '2018-03',
    endDate: 'Present',
    location: 'Remote',
    responsibilities: [
      'Assess on-premises IT environments and identify strategic cloud migration opportunities while considering business objectives and technical constraints.',
      'Develop comprehensive migration strategies that align with business goals while ensuring minimal disruption to ongoing operations and existing workflows.',
      'Design scalable and resilient cloud architecture solutions specifically tailored to meet unique organizational needs and future growth requirements.',
      'Implement infrastructure-as-code methodologies using Terraform and Bicep to enable consistent deployments, version control, and simplified management.',
      'Utilize CI/CD pipelines and DevOps practices to automate deployment, testing, and validation processes across cloud migration projects.',
      'Configure and continuously optimize cloud resources for maximum cost efficiency while maintaining necessary performance and reliability standards.',
      'Establish robust security protocols and compliance measures for cloud environments that address industry regulations and organizational security policies.',
      'Coordinate effectively with diverse stakeholders throughout migration processes, including IT teams, business units, and third-party vendors.',
      'Identify potential technical risks associated with cloud migrations and develop comprehensive mitigation strategies to ensure successful transitions.',
      'Provide detailed documentation and comprehensive knowledge transfer sessions for client teams responsible for maintaining cloud systems post-migration.',
      'Develop sophisticated automation solutions for ongoing cloud management that reduce manual intervention and improve operational efficiency.',
      'Conduct in-depth training sessions for client teams on cloud technologies, best practices, and management procedures to build internal capabilities.',
      'Monitor and optimize cloud performance post-migration using advanced analytics and performance metrics to ensure optimal resource utilization.',
      'Document lessons learned and best practices from each migration project to continuously improve methodologies for future cloud transformations.'
    ],
    technologies: [
      'Azure', 'AWS', 'Infrastructure as Code', 'Terraform', 'Bicep', 
      'PowerShell', 'Bash', 'Cloud Architecture', 'Migration Planning',
      'CI/CD', 'DevOps', 'Lift and Shift'
    ],
    achievements: [
      'Successfully migrated 8 mid-sized organizations to cloud platforms with zero downtime, using comprehensive pre-flight assessments and meticulously planned migration windows',
      'Reduced infrastructure costs by an average of 37% through strategic resource optimization and implementation of auto-scaling policies',
      'Developed reusable IaC templates that accelerated migration timelines by 60% for subsequent projects while ensuring consistent deployments',
      'Implemented cloud-native disaster recovery solutions for a financial services client, reducing recovery time from 24+ hours to under 45 minutes',
      'Created automated DevOps pipelines that decreased deployment time by 78% and virtually eliminated configuration errors',
      'Designed hybrid cloud architecture for a healthcare provider that maintained HIPAA compliance while enabling phased migration of sensitive patient data',
      'Established comprehensive cloud governance frameworks with automated compliance checking for multiple regulatory standards including SOC2, PCI-DSS, and GDPR',
      'Implemented cost optimization strategies that identified and eliminated $350,000 in annual cloud waste across multiple client environments',
      'Designed and delivered customized cloud training programs that reduced post-migration support tickets by 65% through improved internal capabilities',
      'Created automated monitoring systems with predictive alerting that prevented five potential major outages by identifying resource constraints before they affected production'
    ],
    notes: 'Specializing in Lift and Shift Solutions for Organizations'
  },
  {
    id: 'fullsteam',
    title: 'Platform Engineer',
    company: 'Fullsteam LLC',
    startDate: '2022-09',
    endDate: 'Present',
    location: 'Remote, Alabama',
    responsibilities: [
      'Design and implement infrastructure-as-code solutions for payment gateway and business units',
      'Develop and maintain security protocols for data protection and access management',
      'Lead certificate management processes for business-critical payment services',
      'Build and optimize CI/CD pipelines and automated testing frameworks',
      'Serve as scrum master facilitating team meetings and sprint planning',
      'Create and maintain internal development tools and utilities',
      'Collaborate with cross-functional teams to deliver technical solutions',
      'Provide technical documentation and knowledge transfer sessions',
      'Support troubleshooting and incident response across platforms',
      'Develop automation solutions to improve operational efficiency',
      'Implement standardized development environments and practices',
      'Architect secure connectivity between enterprise business systems'
    ],
    technologies: [
      'Microsoft Azure', 'Microsoft 365', 'Entra ID', 'Exchange Online', 
      'SharePoint Online', 'Teams', 'Power Platform', 'Microsoft Defender',
      'Infrastructure as Code', 'Terraform', 'Bicep', 'ARM Templates',
      'Azure PaaS', 'Azure App Services', 'Azure SQL', 'Azure Kubernetes',
      'WAF', 'DevOps', 'Git', 'Jenkins', 'CI/CD Pipelines',
      'Python', 'Flask', 'PowerShell', 'Bash', 'C#', 'Azure Functions',
      'API Management', 'RESTful APIs', 'Certificate Management', 
      'Identity & Access Management', 'SSO', 'MFA', 'Ansible'
    ],
    achievements: [
      'Implemented enterprise automation framework using Jenkins, Ansible, Bicep, Terraform, and GitHub Actions, streamlining Azure resource deployment while maintaining reliable success rates',
      'Engineered automated deployments that substantially decreased implementation time while improving consistency and eliminating manual configuration errors',
      'Created Apple Pay Payment Processing Automation Flask App that significantly reduced manual handling and elimiated processing errors, enhancing payment processing efficiency',
      'Implimented secure connectivity between enterprise business systems, ensuring seamless integration and data flow while maintaining stringent security standards',
      'Designed C# function app enabling automated certificate synchronization between key vaults, resulting in consistent security configuration across all environments',
      'Implemented role-based Identity and Access Management (IAM) solution that enhanced security protocols while maintaining operational efficiency, meeting compliance standards',
      'Architected automated certificate scanning system with incident creation following critical security event, delivering daily SSL certificate expiration reports that improved detection and response times',
      'Developed QA Jenkins pipeline that transformed manual testing into automated processes, improving test reliability and reducing QA team workload through centralized testing infrastructure',
      'Created comprehensive internal documentation system and delivered multiple knowledge transfer sessions, resulting in faster onboarding and reduction in support tickets',
      'Implemented standardized Python development practices, tools and testing frameworks that improved code quality metrics and increased team collaboration efficiency',
      'Demonstrated leadership versatility by serving as scrum master, leading daily meetings and sprint planning that improved team delivery velocity',
      'Architected infrastructure-as-code solution using Jenkins and Ansible, automating provisioning across Kubernetes clusters, Azure services, and ephemeral environments',
      'Designed and implemented CI/CD pipelines for multiple business units, improving deployment frequency and reducing defect rates through automated testing',
      'Created Platform Tools_beta Python project providing rapid access to crucial enterprise data, enhancing troubleshooting efficiency and reducing mean time to resolution',
      'Developed enterprise AI research tool utilizing OpenAI API, Gemini, and custom orchestrator, enabling faster information retrieval and improvement in resource discovery',
      'Led Platform Engineering Hardware Security Initiative, managing implementation of HSM infrastructure that secured private keys and certificates, achieving industry compliance',
      'Served as principal engineer for design and implementation of Amazon Q and Bedrock systems, delivering enterprise LLM capabilities that improved productivity across departments'
    ],
    notes: 'Key contributor to the Platform Engineering team'
  },
  {
    id: 'sanford-airport',
    title: 'Systems Administrator / IT Security Administrator',
    company: 'Sanford Airport Authority',
    startDate: '2020-07',
    endDate: '2022-08',
    location: 'Sanford, FL',
    responsibilities: [
      'Oversee security and stability of all airport IT systems in compliance with FAA, TSA, and airport certification requirements',
      'Serve as Information Systems Security Officer, managing access controls and security monitoring',
      'Administer firewall systems including Cisco ASA and SonicWall appliances',
      'Maintain and troubleshoot Windows Server and Linux environments',
      'Manage VMware virtualization infrastructure',
      'Implement and maintain containerized applications using Docker and Docker Swarm',
      'Develop automation solutions using PowerShell for system management and reporting',
      'Conduct regular patching and updates across all systems and network infrastructure',
      'Create and maintain security documentation and compliance reporting',
      'Design and implement authentication systems including MFA/2FA solutions',
      'Provide technical support and troubleshooting for airport-wide computer systems',
      'Develop and maintain test environments for patch validation and system upgrades'
    ],
    technologies: [
      'VMWare', 'SonicWall', 'Cisco ASA', 'Linux', 'Windows Server',
      'Active Directory', 'MFA/2FA', 'LAPS', 'Security Systems', 'CCTV',
      'Network Infrastructure', 'System Patching', 'PowerShell', 'Docker',
      'Azure', 'Office 365', 'Security Onion', 'Grafana', 'MongoDB',
      'BitWarden', 'IPAM', 'WSUS', 'Microsoft Forms', 'Power Automate',
      'SD-WAN', 'OpenVPN'
    ],
    achievements: [
      "Resolved chronic Cisco ASA firewall issue within first week that had been causing regular outages, resulting in over a year of continuous uptime",
      "Established comprehensive Docker environment that evolved into Docker Swarm, hosting critical applications like Grafana, MongoDB, and BitWarden",
      "Implemented LAPS (Local Administrator Password Solution) with custom web portal, significantly enhancing security by automating credential management",
      "Designed and deployed robust MFA/2FA authentication system for critical airport systems, protecting sensitive operations and data",
      "Created suite of PowerShell automation tools including system inventory collection, new hire processing, and domain health reporting",
      "Built custom GUI application for remote troubleshooting of computers throughout the airport, dramatically reducing response time for IT issues",
      "Collaborated with HR to modernize employee onboarding process using Microsoft Forms and Power Automate, reducing processing time from 2+ hours to under 7 minutes",
      "Maintained 99.9% uptime for critical airport infrastructure including security, communication, and operations systems",
      "Successfully managed VMware environment upgrade from 6.0 U2 to 6.7, including vSphere server and three hypervisors, with minimal service disruption",
      "Implemented comprehensive security monitoring with daily reports tracking authentication events to identify potential security incidents",
      "Developed and deployed test environment for validating patches before production implementation, reducing system downtime risk"
    ],
    notes: 'Responsible for security and compliance with FAA, TSA, and airport certification requirements'
  },
  {
    id: 'embry-riddle',
    title: 'IT Support Associate',
    company: 'Embry-Riddle Aeronautical University',
    startDate: '2018-01',
    endDate: '2020-07',
    location: 'Daytona Beach, Florida',
    responsibilities: [
      'Provide technical support across diverse platforms including Windows, macOS, and multiple Linux distributions',
      'Create automation solutions using PowerShell, Bash, AppleScript, and other scripting languages',
      'Develop custom applications using C# to address process inefficiencies',
      'Implement and maintain backup systems for user profiles and critical data',
      'Deploy and secure specialized hardware solutions including Raspberry Pi devices',
      'Conduct hardware upgrades and software installations across campus computing resources',
      'Support COVID-19 response initiatives through technology deployment',
      'Configure and troubleshoot systems to meet IT security standards',
      'Share technical knowledge through documentation and knowledge base contributions',
      'Manage 2FA implementation and security protocols'
    ],
    technologies: [
      'PowerShell', 'C#', 'Bash', 'AppleScript', 'DOS', 'Windows 7/10',
      'MacOS 10.13/10.14', 'Raspbian Linux', 'Linux RedHat 6/7.7',
      'Ubuntu Linux 16.04.4/18.04.2 LTS', 'Active Directory',
      'Lambda Functions', 'Deployment Technologies', 'Duo 2FA',
      'IT Support', 'Hardware Troubleshooting'
    ],
    achievements: [
      "Created 'The Library'—a collection of 777 scripts across multiple platforms (PowerShell, Bash, DOS, AppleScript) and over 10 C# applications that solved numerous process inefficiencies",
      "Developed comprehensive PowerShell Profile Backup Script handling 30+ directories with automated application management, integrity verification, and detailed logging capabilities",
      "Led Summer Refresh 2018 project, upgrading over 500 computers with SSDs and software reinstallation in just eight days with a three-person team",
      "Spearheaded COVID-19 Wellness Check Project, creating and deploying 74 wellness check stations across campus in two working days",
      "Created custom Raspbian image and hardening script in under four hours from project inception",
      "Began development on IoT solution using Amazon 1-Touch buttons and Lambda functions for instant classroom technology failure alerts",
      "Established IT Blog in Delve sharing technical insights, command explanations, and best practices",
      "Successfully managed university's Duo 2FA implementation, ensuring secure access while maintaining usability"
    ],
    notes: 'Created 777 scripts and 10+ C# applications to solve university process inefficiencies'
  },
  {
    id: 'adventist-health',
    title: 'Lead Technician',
    company: 'Adventist Health Systems',
    startDate: '2010-09',
    endDate: '2017-11',
    location: 'DeLand, FL',
    responsibilities: [
      'Lead and manage two four-person technical teams across two hospital locations',
      'Oversee daily operations including ticket review, triage, and assignment',
      'Provide technical support for complex healthcare IT systems',
      'Develop and implement inventory management solutions',
      'Lead technology deployment for hospital expansions and new facilities',
      'Participate in annual budget planning and forecasting for IT expenditures',
      'Conduct performance evaluations and professional development for team members',
      'Improve technical support processes and customer service procedures',
      'Collaborate with hospital administrators and department heads on IT initiatives',
      'Ensure compliance with healthcare IT regulations and security requirements'
    ],
    technologies: [
      'Windows', 'Active Directory', 'Healthcare IT Systems',
      'Inventory Management', 'ITIL', 'Project Management',
      'Team Leadership', 'Electronic Medical Records'
    ],
    achievements: [
      "Advanced from Tier 2 Tech directly to Lead Technician, skipping Senior Technician level due to exceptional performance",
      "Transformed customer satisfaction ratings from 67% to 99% on CEO's organizational survey through improved processes and engagement",
      "Created and implemented inventory management system adopted throughout the entire Adventist Health organization",
      "Successfully managed technical teams across separate hospital locations while balancing hands-on work with leadership responsibilities",
      "Led multiple hospital expansion projects ensuring seamless technology deployment under tight deadlines",
      "Contributed to annual budget planning for $3.5 million technology expenditures per hospital with accurate forecasting models",
      "Established standardized processes for training, onboarding, and knowledge transfer improving team performance across locations"
    ],
    notes: 'Promoted from Tier 2 Tech, skipping Senior Technician position'
  }
];

export default jobs;
