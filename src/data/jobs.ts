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
      'Lead and execute the migration of on-premises infrastructure and applications to the cloud',
      'Assess current state of organizations\' IT environments and identify migration opportunities',
      'Develop comprehensive migration plans with minimal to zero downtime',
      'Implement necessary changes to infrastructure, applications, and organizational processes',
      'Coordinate with stakeholders including IT teams, business units, and vendors',
      'Identify and mitigate migration risks associated with cloud migration',
      'Manage and monitor migration processes to ensure successful completion',
      'Provide guidance and best practices for ongoing cloud management and optimization'
    ],
    technologies: [
      'Azure', 'AWS', 'Infrastructure as Code', 'Terraform', 'Bicep', 
      'PowerShell', 'Bash', 'Cloud Architecture', 'Migration Planning',
      'CI/CD', 'DevOps', 'Lift and Shift'
    ],
    achievements: [
      'Successfully migrated multiple organizations to cloud platforms with zero downtime',
      'Reduced infrastructure costs by an average of 30% through cloud optimization',
      'Implemented scalable cloud solutions that improved performance and reliability',
      'Established best practices for ongoing cloud management'
    ],
    notes: 'Specializing in Lift and Shift Solutions for Organizations'
  },
  {
    id: 'fullsteam',
    title: 'Platform Engineer, Enterprise Services',
    company: 'Fullsteam LLC',
    startDate: '2022-09',
    endDate: 'Present',
    location: 'Remote, Florida',
    responsibilities: [
      'Architected and deployed infrastructure-as-code solutions using Terraform and Bicep for payments gateway and multiple business units',
      'Implemented and maintained Microsoft 365 ecosystem across the organization with 1,700+ employees',
      'Designed and implemented security measures including data protection, identity management, and access controls',
      'Created automated certificate scanning, reporting, and incident creation system that significantly improved security posture',
      'Developed QA Jenkins pipeline that transformed manual testing into automated processes with more reliable results',
      'Served as scrum master for the team, leading meetings and improving delivery velocity through streamlined processes',
      'Implemented comprehensive certificate management and renewal process for payment services (Visa and Apple Pay)'
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
      'Implemented security frameworks adhering to NIST CSF and PCI DSS requirements',
      'Created automated deployment playbooks that reduced implementation time by 60%',
      'Developed multiple engineering tools that improved team productivity by 30%',
      'Created a C# function app that automatically copies certificate versions between key vaults',
      'Designed role-based Identity and Access Management solutions improving security posture',
      'Implemented certificate management automation that reduced manual certificate handling by 80%',
      'Established seamless connectivity between multiple enterprise business systems',
      'Developed a Platform Tools beta Python project providing quick access to crucial information',
      'Received Outstanding Performance rating for critical thinking and continuous development'
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
      "When I started at Sanford Airport Authority, my main focus was ensuring the security and stability of all IT systems while adhering to strict FAA, TSA, and airport certification requirements. I basically became the airport's tech guardian—watching over everything from surveillance systems to network infrastructure.",
      
      "One of my first big wins was fixing a Cisco ASA firewall that had been constantly restarting. The issue had been frustrating the team for weeks, but I managed to diagnose and fix it within my first week. That firewall went on to have over a year of uninterrupted uptime, which felt pretty satisfying.",
      
      "As the Information Systems Security Officer, my days were filled with monitoring security systems, maintaining access controls, and ensuring all our processes met regulatory requirements. I created daily reports that tracked failed logins, lockouts, and successful logins—this helped us spot potential security issues before they became problems.",
      
      "I really enjoyed implementing Docker at the airport. We set up a Docker server hosting Grafana for visualizing data, MongoDB for databases, and BitWarden for secure password management. Later, we expanded this into a Docker Swarm, which made our applications much more resilient and easier to manage.",
      
      "Patching was a big part of my role—I handled updates for Windows Servers (2012r2 through 2022), Linux systems, VMware environments, and network appliances like SonicWall and Cisco devices. To make this safer, I built a test environment where we could verify patches before deploying them to production systems.",
      
      "One of my favorite projects was implementing a Local Administrator Password Solution (LAPS) with its own web portal running in Docker. This dramatically improved our security posture by automatically managing and rotating local admin passwords across all machines.",
      
      "I also loved automating repetitive tasks. I created PowerShell scripts for system inventory gathering, streamlined the new hire process, and built automation that would report on domain health weekly. My proudest automation was probably the GUI application I built for remotely managing and troubleshooting computers across the airport—it saved us countless trips across the terminal."
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
      "Fixed a chronic Cisco ASA firewall issue within my first week that had been causing regular outages, resulting in over a year of continuous uptime afterward.",
      
      "Established a comprehensive Docker environment that evolved into a Docker Swarm, hosting critical applications like Grafana, MongoDB, and BitWarden that improved system visibility and security.",
      
      "Implemented LAPS (Local Administrator Password Solution) with a custom web portal, significantly enhancing the airport's security posture by automatically managing local administrator credentials.",
      
      "Designed and deployed a robust MFA/2FA authentication system for critical airport systems, protecting sensitive operations and data.",
      
      "Created a suite of PowerShell automation tools including system inventory collection, new hire processing, and domain health reporting that saved hours of manual work each week.",
      
      "Built a custom GUI application that allowed remote troubleshooting and management of computers throughout the airport facilities, dramatically reducing response time for IT issues.",
      
      "Collaborated with HR to modernize the employee onboarding process using Microsoft Forms and Power Automate, reducing processing time from over 2 hours to just under 7 minutes.",
      
      "Maintained 99.9% uptime for critical airport infrastructure including all security, communication, and operations systems.",
      
      "Successfully managed the upgrade of the VMware environment from 6.0 U2 to 6.7, including the vSphere server and three hypervisors, with minimal service disruption."
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
      "My time at Embry-Riddle was incredibly fulfilling and allowed me to blend technical problem-solving with larger-scale project leadership. I became known as the automation guy—if there was a repetitive task causing headaches, I'd find a way to script it.",
      
      "Over the course of my two and a half years there, I built up a massive library of 777 scripts across multiple platforms (PowerShell, Bash, DOS, AppleScript) and developed more than 10 C# applications. These weren't just small utilities—they addressed serious process inconsistencies across the university.",
      
      "One of my favorite creations was the PowerShell Profile Backup Script. What started as a simple backup tool evolved into a comprehensive solution that could handle 30+ data directories, automatically manage applications during the backup process, verify file integrity, and provide detailed logging. It transformed a two-page manual process into a streamlined operation that saved countless hours and prevented data loss incidents.",
      
      "I really enjoyed leading the Raspbian Project, where we deployed Atrium software on 10 Raspberry Pi devices across campus. The challenge was making these consumer devices comply with our IT security standards, so I wrote a custom 'hardening' script that locked them down while still keeping them functional for their intended purpose.",
      
      "The Summer Refresh of 2018 was probably my most intense project. I was handed a list of over 500 computers that needed hardware upgrades (replacing HDDs with SSDs) and complete software reinstallation. With just a small team of three people including myself, we managed to complete this enormous undertaking in just eight days—a timeline that initially seemed impossible.",
      
      "When COVID-19 hit, my experience with the Raspberry Pi devices proved invaluable. We quickly pivoted to create 74 wellness check stations across campus. I updated our Raspbian image and created a new hardening script in under four hours from the moment we got the project brief. The entire deployment—all 74 stations—was completed in just two working days.",
      
      "Throughout my time at Embry-Riddle, I supported an incredibly diverse technology landscape. On any given day, I might troubleshoot issues on Windows, macOS, or various Linux distributions like Ubuntu, RedHat, and Raspbian. This broad exposure kept me constantly learning and adapting."
    ],
    technologies: [
      'PowerShell', 'C#', 'Bash', 'AppleScript', 'DOS', 'Windows 7/10',
      'MacOS 10.13/10.14', 'Raspbian Linux', 'Linux RedHat 6/7.7',
      'Ubuntu Linux 16.04.4/18.04.2 LTS', 'Active Directory',
      'Lambda Functions', 'Deployment Technologies', 'Duo 2FA',
      'IT Support', 'Hardware Troubleshooting'
    ],
    achievements: [
      "Created what became known as 'The Library'—a collection of 777 scripts across multiple platforms (PowerShell, Bash, DOS, AppleScript) and over 10 C# applications that solved numerous process inefficiencies across the university.",
      
      "Developed a comprehensive PowerShell Profile Backup Script that revolutionized the university's backup process, handling 30+ directories, providing automated application management, integrity verification, and detailed logging capabilities. Check it out at github.com/01000001-01001110/PowershellProfileBackup",
      
      "Led the Summer Refresh 2018 project, where my team of just three people successfully upgraded over 500 computers (replacing HDDs with SSDs and reinstalling all software) in a mere eight days, far exceeding expected timelines.",
      
      "Spearheaded the COVID-19 Wellness Check Project, creating and deploying 74 wellness check stations across campus in just two working days, crafting a custom Raspbian image and hardening script in under four hours from project inception.",
      
      "Conceptualized and began development on an IoT solution using Amazon 1-Touch buttons and Lambda functions to provide instant alerts when classroom technology failed, improving response times and reducing class disruptions.",
      
      "Established myself as a Knowledge Engineer by creating and maintaining an IT Blog in Delve that shared technical insights, command explanations, and best practices, significantly increasing knowledge sharing across teams.",
      
      "Successfully managed the university's Duo 2FA implementation, ensuring secure access to critical systems while maintaining ease of use for students, faculty, and staff."
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
      "My seven years at Adventist Health Systems were transformative, as I grew from a Tier 2 Tech into a Lead Technician, skipping the Senior Technician role entirely due to my performance. I found myself responsible for two four-person teams across two separate hospitals (DeLand and Orange City), handling everything from day-to-day troubleshooting to larger strategic planning.",
      
      "A typical day might start with reviewing the previous night's tickets and triaging any urgent matters among my team members. I'd check in with each technician to make sure they had what they needed to succeed that day. Throughout the day, I would balance my own technical responsibilities with leadership duties—jumping in to help with complex problems while also handling management tasks like scheduling, evaluations, and process improvements.",
      
      "One of my earliest wins was identifying a major gap in our inventory management. We were wasting significant time and resources due to poor tracking, so I designed and implemented a new inventory system that proved so effective it was adopted organization-wide. This involved not just the technical solution but also training staff and creating new workflows that everyone could follow easily.",
      
      "I got to lead some exciting large-scale projects, including hospital expansions and new building openings. These were complex undertakings where we'd need to coordinate many moving parts—from network infrastructure to workstation deployment to application access—often under tight deadlines as opening dates approached.",
      
      "The budget planning process was always an interesting challenge. Each year, I'd help forecast a $3.5 million budget for each hospital, analyzing trends, planning for hardware refreshes, accounting for software licensing, and anticipating growth needs. This required close collaboration with hospital administrators and finance teams to make the case for necessary investments.",
      
      "What I'm perhaps most proud of is how we transformed the customer satisfaction metrics. When I started, our customer satisfaction rate on the CEO survey was at 67%—not terrible, but certainly not where we wanted to be. Through focused improvements in processes, response times, and especially face-to-face interactions with hospital staff, we steadily raised that number until we consistently achieved 99% satisfaction rates year after year."
    ],
    technologies: [
      'Windows', 'Active Directory', 'Healthcare IT Systems',
      'Inventory Management', 'ITIL', 'Project Management',
      'Team Leadership', 'Electronic Medical Records'
    ],
    achievements: [
      "Made a dramatic career advancement by being promoted directly from Tier 2 Tech to Lead Technician, skipping the Senior Technician level entirely—a very rare occurrence that recognized exceptional performance and leadership potential.",
      
      "Transformed customer satisfaction ratings from a mediocre 67% to an outstanding 99% on the CEO's organizational survey through improved processes, better communication, and more direct engagement with hospital staff.",
      
      "Created and implemented an inventory management system that was so effective it was adopted throughout the entire Adventist Health organization, significantly reducing waste and improving resource allocation.",
      
      "Successfully managed and mentored two four-person technical teams across separate hospital locations (DeLand and Orange City), balancing hands-on technical work with leadership responsibilities.",
      
      "Led multiple hospital expansion projects and new building integrations, ensuring seamless technology deployment from network infrastructure to end-user computing under tight deadlines.",
      
      "Contributed to annual budget planning for $3.5 million technology expenditures per hospital, developing forecasting models that accurately predicted growth needs and maintenance requirements.",
      
      "Established standardized processes for training, onboarding, and knowledge transfer that improved team performance and consistency across multiple hospital locations."
    ],
    notes: 'Promoted from Tier 2 Tech, skipping Senior Technician position'
  }
];

export default jobs;
