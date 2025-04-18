import { Skill } from '../types';

export const skills: Skill[] = [
  // Technical skills
  {
    id: 'powershell',
    name: 'PowerShell',
    category: 'technical',
    proficiency: 0.85, // Advanced
    yearStarted: 2012,
    projects: ['automation', 'tooling'],
    relatedSkills: ['windows', 'azure', 'scripting'],
    description: 'Advanced automation scripting for Windows environments and Azure management'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'technical',
    proficiency: 0.90,
    yearStarted: 2020,
    projects: ['flask-tools', 'automation'],
    relatedSkills: ['flask', 'django', 'automation'],
    description: 'Extensive experience with Python for web development, automation, and data processing'
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'technical',
    proficiency: 0.90,
    yearStarted: 2020,
    projects: ['engineering-tools', 'web-apps'],
    relatedSkills: ['python', 'web-development', 'api-design'],
    description: 'Built multiple Flask applications for internal tools and public-facing services'
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'technical',
    proficiency: 0.80,
    yearStarted: 2019,
    projects: ['azure-functions', 'certificate-management'],
    relatedSkills: ['.net', 'azure-functions', 'application-development'],
    description: 'Developed C# applications for automation and Azure Functions'
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'technical',
    proficiency: 0.70, // Intermediate
    yearStarted: 2024,
    projects: ['cloud-infrastructure', 'deployment-automation'],
    relatedSkills: ['cloud', 'infrastructure', 'terraform'],
    description: 'Experience with AWS cloud services, infrastructure design, and deployment'
  },
  {
    id: 'azure',
    name: 'Azure Infrastructure Management',
    category: 'technical',
    proficiency: 0.85, // Advanced
    yearStarted: 2020,
    projects: ['azure-key-vault', 'certificate-management'],
    relatedSkills: ['cloud', 'bicep', 'terraform', 'powershell'],
    description: 'Comprehensive expertise in Azure platform management and service deployment'
  },
  {
    id: 'terraform',
    name: 'Terraform',
    category: 'technical',
    proficiency: 0.80,
    yearStarted: 2021,
    projects: ['infrastructure-as-code', 'cloud-deployment'],
    relatedSkills: ['aws', 'azure', 'infrastructure'],
    description: 'Infrastructure as Code implementation for cloud environments'
  },
  {
    id: 'bicep',
    name: 'Bicep',
    category: 'technical',
    proficiency: 0.75,
    yearStarted: 2020,
    projects: ['azure-infrastructure', 'deployment-automation'],
    relatedSkills: ['azure', 'infrastructure-as-code', 'arm-templates'],
    description: 'Azure-native infrastructure as code implementation'
  },
  {
    id: 'jira',
    name: 'Jira Service Management',
    category: 'tool',
    proficiency: 0.95, // Expert
    yearStarted: 2014,
    projects: ['process-automation', 'team-management'],
    relatedSkills: ['project-management', 'agile', 'confluence'],
    description: 'Expert configuration and management of Jira for service management and project tracking'
  },
  {
    id: 'ai-wrappers',
    name: 'AI Wrappers (OpenAI, Anthropic, Google)',
    category: 'technical',
    proficiency: 0.85, // Advanced
    yearStarted: 2018,
    projects: ['ai-integration', 'process-automation'],
    relatedSkills: ['python', 'api-integration', 'llm'],
    description: 'Integration of AI services into applications and workflows'
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    category: 'tool',
    proficiency: 0.95, // Expert
    yearStarted: 2022,
    projects: ['ci-cd', 'deployment-automation'],
    relatedSkills: ['ci-cd', 'automation', 'deployment'],
    description: 'Expert configuration and management of Jenkins CI/CD pipelines'
  },
  {
    id: 'ansible',
    name: 'Ansible',
    category: 'tool',
    proficiency: 0.70, // Intermediate
    yearStarted: 2021,
    projects: ['configuration-management', 'deployment-automation'],
    relatedSkills: ['automation', 'linux', 'infrastructure'],
    description: 'Configuration management and deployment automation with Ansible'
  },
  {
    id: 'bash',
    name: 'Bash',
    category: 'technical',
    proficiency: 0.70, // Intermediate
    yearStarted: 2015,
    projects: ['scripting', 'automation'],
    relatedSkills: ['linux', 'shell-scripting', 'automation'],
    description: 'Shell scripting for Linux environments and automation tasks'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'tool',
    proficiency: 0.85,
    yearStarted: 2022,
    projects: ['version-control', 'collaboration'],
    relatedSkills: ['github', 'devops', 'source-control'],
    description: 'Version control and collaboration using Git'
  },
  {
    id: 'certificate-management',
    name: 'Certificate Management',
    category: 'technical',
    proficiency: 0.90,
    yearStarted: 2020,
    projects: ['security', 'infrastructure'],
    relatedSkills: ['security', 'pki', 'azure-key-vault'],
    description: 'Comprehensive certificate lifecycle management and automation'
  },
  {
    id: 'vmware',
    name: 'VMware',
    category: 'tool',
    proficiency: 0.80,
    yearStarted: 2015,
    projects: ['virtualization', 'infrastructure'],
    relatedSkills: ['virtualization', 'infrastructure', 'datacenter'],
    description: 'Server virtualization and infrastructure management'
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'technical',
    proficiency: 0.80,
    yearStarted: 2015,
    projects: ['server-administration', 'deployment'],
    relatedSkills: ['bash', 'server-management', 'security'],
    description: 'Linux system administration and configuration management'
  },
  {
    id: 'windows-server',
    name: 'Windows Server',
    category: 'technical',
    proficiency: 0.85,
    yearStarted: 1997,
    projects: ['active-directory', 'server-management'],
    relatedSkills: ['active-directory', 'powershell', 'infrastructure'],
    description: 'Windows Server administration and infrastructure management'
  },
  {
    id: 'active-directory',
    name: 'Active Directory',
    category: 'tool',
    proficiency: 0.85,
    yearStarted: 1997,
    projects: ['identity-management', 'security'],
    relatedSkills: ['windows-server', 'security', 'identity'],
    description: 'Active Directory design, implementation, and management'
  },
  
  // Soft skills
  {
    id: 'interpersonal-skills',
    name: 'Interpersonal Skills',
    category: 'soft',
    proficiency: 0.95, // Expert
    yearStarted: 2000,
    projects: ['team-leadership', 'collaboration'],
    relatedSkills: ['communication', 'leadership', 'collaboration'],
    description: 'Building and maintaining effective working relationships across teams and organizations'
  },
  {
    id: 'collaboration',
    name: 'Collaboration',
    category: 'soft',
    proficiency: 0.95, // Expert
    yearStarted: 2000,
    projects: ['cross-functional-teams', 'project-management'],
    relatedSkills: ['teamwork', 'communication', 'project-management'],
    description: 'Working effectively with diverse teams to achieve common goals'
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    category: 'soft',
    proficiency: 0.95, // Expert
    yearStarted: 2000,
    projects: ['infrastructure', 'application-support'],
    relatedSkills: ['problem-solving', 'critical-thinking', 'analytical-skills'],
    description: 'Systematic approach to identifying and resolving complex technical issues'
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    category: 'soft',
    proficiency: 0.85, // Advanced
    yearStarted: 2000,
    projects: ['process-improvement', 'automation'],
    relatedSkills: ['critical-thinking', 'analytical-skills', 'creativity'],
    description: 'Developing innovative solutions to complex technical and organizational challenges'
  },
  {
    id: 'project-management',
    name: 'Project Management',
    category: 'methodology',
    proficiency: 0.80,
    yearStarted: 2010,
    projects: ['team-leadership', 'deployment-projects'],
    relatedSkills: ['leadership', 'planning', 'resource-management'],
    description: 'Planning, executing, and closing projects efficiently while meeting stakeholder needs'
  },
  {
    id: 'devops',
    name: 'DevOps',
    category: 'methodology',
    proficiency: 0.85,
    yearStarted: 2020,
    projects: ['ci-cd', 'automation'],
    relatedSkills: ['ci-cd', 'infrastructure-as-code', 'automation'],
    description: 'Implementing DevOps practices to improve software delivery and infrastructure reliability'
  },
  {
    id: 'agile',
    name: 'Agile Methodologies',
    category: 'methodology',
    proficiency: 0.80,
    yearStarted: 2022,
    projects: ['scrum', 'kanban'],
    relatedSkills: ['team-leadership', 'project-management', 'continuous-improvement'],
    description: 'Implementing agile methodologies to enhance team productivity and project outcomes'
  }
];

export default skills;
