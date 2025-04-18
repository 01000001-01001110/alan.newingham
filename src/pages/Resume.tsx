import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import skills from '../data/skills';
import jobs from '../data/jobs';

const ResumeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${props => props.theme.space.lg} ${props => props.theme.space.md};
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes['4xl']};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.md};
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.lightBlue};
  margin-bottom: ${props => props.theme.space.md};
  text-align: center;
`;

const ResumeSection = styled(motion.section)`
  margin-bottom: ${props => props.theme.space.xl};
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radii.lg};
  padding: ${props => props.theme.space.lg};
  box-shadow: ${props => props.theme.shadows.md};
`;

const SectionTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.lightestBlue};
  padding-bottom: ${props => props.theme.space.xs};
  border-bottom: 1px solid ${props => props.theme.colors.blueGray};
  margin-bottom: ${props => props.theme.space.md};
`;

const PersonalInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.space.md};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const PersonalInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.space.sm};
`;

const PersonalInfoLabel = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.lightBlue};
  margin-right: ${props => props.theme.space.sm};
  min-width: 100px;
`;

const PersonalInfoValue = styled.span`
  color: ${props => props.theme.colors.textSecondary};
`;

const PersonalInfoLink = styled.a`
  color: ${props => props.theme.colors.lightBlue};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.lightestBlue};
    text-decoration: underline;
  }
`;

const Summary = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  line-height: ${props => props.theme.lineHeights.loose};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.space.lg};
  text-align: justify;
`;

const ExperienceContainer = styled.div`
  margin-top: ${props => props.theme.space.md};
`;

const ExperienceItem = styled.div`
  margin-bottom: ${props => props.theme.space.lg};
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space.sm};
  flex-wrap: wrap;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const ExperienceTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.lightBlue};
  margin: 0;
`;

const ExperienceCompany = styled.div`
  display: flex;
  align-items: center;
`;

const ExperienceCompanyName = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.lightestBlue};
`;

const ExperienceLocation = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  margin-left: ${props => props.theme.space.sm};
`;

const ExperienceDuration = styled.span`
  color: ${props => props.theme.colors.textTertiary};
  font-size: ${props => props.theme.fontSizes.sm};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin-top: ${props => props.theme.space.xs};
  }
`;

const ExperienceDetails = styled.ul`
  list-style-type: disc;
  margin-left: ${props => props.theme.space.lg};
  color: ${props => props.theme.colors.textSecondary};
`;

const ExperienceDetail = styled.li`
  margin-bottom: ${props => props.theme.space.xs};
`;

const Resume: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <ResumeContainer>
      <Title>Alan Newingham</Title>
      <Subtitle>Platform Engineer</Subtitle>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ResumeSection variants={itemVariants}>
          <SectionTitle>Personal Information</SectionTitle>
          <PersonalInfoContainer>
            <div>
              <PersonalInfoItem>
                <PersonalInfoLabel>Phone:</PersonalInfoLabel>
                <PersonalInfoValue>3868460955</PersonalInfoValue>
              </PersonalInfoItem>
              <PersonalInfoItem>
                <PersonalInfoLabel>Email:</PersonalInfoLabel>
                <PersonalInfoValue>alan.newingham@gmail.com</PersonalInfoValue>
              </PersonalInfoItem>
            </div>
            <div>
              <PersonalInfoItem>
                <PersonalInfoLabel>LinkedIn:</PersonalInfoLabel>
                <PersonalInfoLink href="https://www.linkedin.com/in/alan-newingham" target="_blank" rel="noopener noreferrer">
                  www.linkedin.com/in/alan-newingham
                </PersonalInfoLink>
              </PersonalInfoItem>
              <PersonalInfoItem>
                <PersonalInfoLabel>GitHub:</PersonalInfoLabel>
                <PersonalInfoLink href="https://github.com/01000001-01001110" target="_blank" rel="noopener noreferrer">
                  github.com/01000001-01001110
                </PersonalInfoLink>
              </PersonalInfoItem>
            </div>
          </PersonalInfoContainer>
          
          <Summary>
            I am a results-driven Platform Engineer with 25+ years in IT, specializing in cloud architecture, infrastructure automation, and modern DevOps methodologies. I combine deep technical expertise in Azure/AWS environments with strong security implementation practices to deliver innovative solutions that enhance operational efficiency while reducing costs. My core strength lies in building scalable infrastructure and automating complex processes through code, consistently achieving measurable improvements in deployment time and system reliability.
          </Summary>
        </ResumeSection>
        
        <ResumeSection variants={itemVariants}>
          <SectionTitle>Experience</SectionTitle>
          
          <ExperienceContainer>
            {[...jobs].sort((a, b) => {
              // Custom ordering for specific position pairs
              
              // Place Cloud Migration Engineer after Sanford Airport but before Embry-Riddle
              if (a.id === 'cloud-migration-engineer' && b.id === 'sanford-airport') {
                return 1; // Cloud Migration Engineer comes after Sanford Airport
              }
              if (a.id === 'sanford-airport' && b.id === 'cloud-migration-engineer') {
                return -1; // Sanford Airport comes before Cloud Migration Engineer
              }
              
              // Place Cloud Migration Engineer before Embry-Riddle
              if (a.id === 'cloud-migration-engineer' && b.id === 'embry-riddle') {
                return -1; // Cloud Migration Engineer comes before Embry-Riddle
              }
              if (a.id === 'embry-riddle' && b.id === 'cloud-migration-engineer') {
                return 1; // Embry-Riddle comes after Cloud Migration Engineer
              }
              
              // Default sorting by end date for other positions
              const endDateA = a.endDate === 'Present' ? new Date().getFullYear().toString() : a.endDate.split('-')[0];
              const endDateB = b.endDate === 'Present' ? new Date().getFullYear().toString() : b.endDate.split('-')[0];
              return endDateB.localeCompare(endDateA);
            }).map(job => (
              <ExperienceItem key={job.id}>
                <ExperienceHeader>
                  <div>
                    <ExperienceTitle>{job.title}</ExperienceTitle>
                    <ExperienceCompany>
                      <ExperienceCompanyName>{job.company}</ExperienceCompanyName>
                      <ExperienceLocation>{job.location}</ExperienceLocation>
                    </ExperienceCompany>
                  </div>
                  <ExperienceDuration>
                    {job.startDate.split('-')[0]} — {job.endDate === 'Present' ? 'Present' : job.endDate.split('-')[0]}
                  </ExperienceDuration>
                </ExperienceHeader>
                <ExperienceDetails>
                  {job.id === 'fullsteam' && (
                    <>
                      <ExperienceDetail>
                        Architected and deployed infrastructure-as-code solutions using Terraform and Bicep for payments gateway and multiple business units.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Developed Flask applications and engineering tools that improved team productivity.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Implemented a comprehensive certificate management and renewal process, including payment services integration.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Created C# function app automating certificate version synchronization between key vaults.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Reorganized technical documentation, significantly improving knowledge sharing and onboarding.
                      </ExperienceDetail>
                    </>
                  )}
                  
                  {job.id === 'sanford-airport' && (
                    <>
                      <ExperienceDetail>
                        As Information Systems Security Officer, I monitored and maintained computer security systems including surveillance, access control, and monitoring systems.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Fixed a Cisco ASA issue within my first week that had been causing regular outages, resulting in over a year of continuous uptime afterward.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Deployed Docker containers, servers and swarm to host internal applications including Grafana, MongoDB, and BitWarden.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Implemented LAPS password management solution with a web portal using Docker, enhancing security through automated credential management.
                      </ExperienceDetail>
                    </>
                  )}
                  
                  {job.id === 'embry-riddle' && (
                    <>
                      <ExperienceDetail>
                        Led projects involving technology and application deployments within the university while applying experience and judgment to ensure efficient use of resources.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Created and managed a library with over 700 scripts in Bash, DOS, AppleScript, and PowerShell, plus 10+ C# applications to address inconsistencies in processes.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Successfully completed the Summer Refresh 2018 project, upgrading 500+ computers with SSDs and reinstalling all software in just eight days with a three-person team.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Led the COVID-19 Wellness Check Project, deploying 74 wellness check stations across campus in just two working days.
                      </ExperienceDetail>
                    </>
                  )}
                  
                  {job.id === 'adventist-health' && (
                    <>
                      <ExperienceDetail>
                        Managed two four-person teams across two different hospital locations (DeLand & Orange City), balancing technical work with leadership responsibilities.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Created an inventory system and processes that was adopted throughout the organization, significantly improving resource allocation.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Transformed customer satisfaction ratings from 67% to 99% through improved processes, better communication, and more direct engagement with staff.
                      </ExperienceDetail>
                    </>
                  )}
                  
                  {job.id === 'cloud-migration-engineer' && (
                    <>
                      <ExperienceDetail>
                        Led the migration of on-premises infrastructure and applications to cloud platforms with minimal to zero downtime.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Developed comprehensive migration plans and implemented necessary changes to infrastructure, applications, and processes.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Successfully reduced infrastructure costs by an average of 30% through cloud optimization strategies.
                      </ExperienceDetail>
                      <ExperienceDetail>
                        Established best practices for ongoing cloud management and maintenance.
                      </ExperienceDetail>
                    </>
                  )}
                </ExperienceDetails>
              </ExperienceItem>
            ))}
          </ExperienceContainer>
          
          <SectionTitle style={{ marginTop: '40px' }}>Skills</SectionTitle>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Technical Skills */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ 
                color: '#519ca4', 
                fontSize: '18px', 
                marginBottom: '15px',
                borderBottom: '1px solid rgba(81, 156, 164, 0.3)',
                paddingBottom: '8px'
              }}>
                Technical Skills
              </h4>
              <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {skills
                  .filter(skill => skill.category === 'technical')
                  .sort((a, b) => b.proficiency - a.proficiency)
                  .map(skill => (
                    <span 
                      key={skill.id}
                      style={{ 
                        backgroundColor: 'rgba(32, 64, 81, 0.8)', 
                        color: '#e3f6f9',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      {skill.name}
                      <span style={{ 
                        marginLeft: '8px', 
                        backgroundColor: '#519ca4',
                        borderRadius: '12px',
                        padding: '2px 8px',
                        fontSize: '12px'
                      }}>
                        {skill.proficiency >= 0.9 ? 'Expert' : 
                         skill.proficiency >= 0.8 ? 'Advanced' : 'Intermediate'}
                      </span>
                    </span>
                  ))
                }
              </div>
            </div>
            
            {/* Tools */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ 
                color: '#519ca4', 
                fontSize: '18px', 
                marginBottom: '15px',
                borderBottom: '1px solid rgba(81, 156, 164, 0.3)',
                paddingBottom: '8px'
              }}>
                Tools & Platforms
              </h4>
              <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {skills
                  .filter(skill => skill.category === 'tool')
                  .sort((a, b) => b.proficiency - a.proficiency)
                  .map(skill => (
                    <span 
                      key={skill.id}
                      style={{ 
                        backgroundColor: 'rgba(32, 64, 81, 0.8)', 
                        color: '#e3f6f9',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      {skill.name}
                      <span style={{ 
                        marginLeft: '8px', 
                        backgroundColor: '#519ca4',
                        borderRadius: '12px',
                        padding: '2px 8px',
                        fontSize: '12px'
                      }}>
                        {skill.proficiency >= 0.9 ? 'Expert' : 
                         skill.proficiency >= 0.8 ? 'Advanced' : 'Intermediate'}
                      </span>
                    </span>
                  ))
                }
              </div>
            </div>
            
            {/* Soft Skills */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ 
                color: '#519ca4', 
                fontSize: '18px', 
                marginBottom: '15px',
                borderBottom: '1px solid rgba(81, 156, 164, 0.3)',
                paddingBottom: '8px'
              }}>
                Soft Skills
              </h4>
              <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {skills
                  .filter(skill => skill.category === 'soft')
                  .sort((a, b) => b.proficiency - a.proficiency)
                  .map(skill => (
                    <span 
                      key={skill.id}
                      style={{ 
                        backgroundColor: 'rgba(32, 64, 81, 0.8)', 
                        color: '#e3f6f9',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      {skill.name}
                      <span style={{ 
                        marginLeft: '8px', 
                        backgroundColor: '#519ca4',
                        borderRadius: '12px',
                        padding: '2px 8px',
                        fontSize: '12px'
                      }}>
                        {skill.proficiency >= 0.9 ? 'Expert' : 
                         skill.proficiency >= 0.8 ? 'Advanced' : 'Intermediate'}
                      </span>
                    </span>
                  ))
                }
              </div>
            </div>
            
            {/* Methodologies */}
            <div>
              <h4 style={{ 
                color: '#519ca4', 
                fontSize: '18px', 
                marginBottom: '15px',
                borderBottom: '1px solid rgba(81, 156, 164, 0.3)',
                paddingBottom: '8px'
              }}>
                Methodologies
              </h4>
              <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {skills
                  .filter(skill => skill.category === 'methodology')
                  .sort((a, b) => b.proficiency - a.proficiency)
                  .map(skill => (
                    <span 
                      key={skill.id}
                      style={{ 
                        backgroundColor: 'rgba(32, 64, 81, 0.8)', 
                        color: '#e3f6f9',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      {skill.name}
                      <span style={{ 
                        marginLeft: '8px', 
                        backgroundColor: '#519ca4',
                        borderRadius: '12px',
                        padding: '2px 8px',
                        fontSize: '12px'
                      }}>
                        {skill.proficiency >= 0.9 ? 'Expert' : 
                         skill.proficiency >= 0.8 ? 'Advanced' : 'Intermediate'}
                      </span>
                    </span>
                  ))
                }
              </div>
            </div>
          </motion.div>
        </ResumeSection>
      </motion.div>
    </ResumeContainer>
  );
};

export default Resume;
