import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import skills from '../data/skills';
import jobs from '../data/jobs';
import html2pdf from 'html2pdf.js';

const ResumeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${props => props.theme.space.lg} ${props => props.theme.space.md};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.space.md};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes['4xl']};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.md};
  text-align: center;
`;

const DownloadButton = styled.button`
  position: absolute;
  right: 0;
  top: 10px;
  background-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.dark};
  border: none;
  border-radius: ${props => props.theme.radii.md};
  padding: ${props => `${props.theme.space.sm} ${props.theme.space.md}`};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space.xs};
  
  &:hover {
    background-color: ${props => props.theme.colors.accentLight};
  }
  
  @media print {
    display: none;
  }
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
  
  &.pdf-page-break-before {
    page-break-before: always;
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space.sm};
  flex-wrap: wrap;
  page-break-after: avoid;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const ExperienceTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.lightBlue};
  margin: 0;
  page-break-after: avoid;
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
  orphans: 2;
  widows: 2;
`;

// Add PDF-specific styles
const PdfStyles = styled.div`
  display: none;
  
  @media print {
    display: none;
  }
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
  
  const resumeRef = useRef<HTMLDivElement>(null);
  
  const handleDownloadPDF = () => {
    if (!resumeRef.current) return;
    
    // Create a new element to modify for PDF generation without affecting the displayed resume
    const element = resumeRef.current.cloneNode(true) as HTMLElement;
    
    // Add explicit page break classes to job sections for better PDF formatting
    const jobElements = element.querySelectorAll(ExperienceItem.toString().split(' ')[0]); // Get the CSS class name
    
    // Add page breaks before certain positions (except the first one)
    jobElements.forEach((job, index) => {
      // Add page break before some elements to force better page layout
      if (index > 0 && index % 2 === 0) {
        job.classList.add('pdf-page-break-before');
      }
    });
    
    // Add styles specifically for PDF generation
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @page {
        margin: 15mm;
        size: A4;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          background-color: #1a1e20 !important;
          color: #e6f5f3 !important;
        }
        html {
          background-color: #1a1e20 !important;
        }
        h1, h2, h3, h4, h5, h6 {
          page-break-after: avoid;
          break-after: avoid;
        }
        .pdf-page-break-before {
          page-break-before: always;
          break-before: page;
        }
        ul, ol, dl {
          page-break-inside: auto;
          break-inside: auto;
        }
        li, dt, dd {
          page-break-inside: avoid;
          break-inside: avoid;
          orphans: 2;
          widows: 2;
        }
        p {
          orphans: 3;
          widows: 3;
        }
        section {
          page-break-inside: auto;
          break-inside: auto;
        }
      }
    `;
    element.appendChild(styleElement);
    
    // Set up options for PDF generation with better page break handling
    const options = {
      margin: [15, 15, 15, 15],
      filename: 'Alan_Newingham_Resume.pdf',
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        letterRendering: true,
        backgroundColor: '#1a1e20'
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      },
      pagebreak: { 
        mode: ['avoid-all', 'css', 'legacy'],
        before: '.pdf-page-break-before'
      }
    };
    
    // Before generating the PDF, apply background styles to the clone
    element.style.backgroundColor = '#1a1e20';
    
    // Find all section elements and ensure they have the correct background
    const sectionElements = element.querySelectorAll('section');
    sectionElements.forEach(section => {
      section.style.backgroundColor = '#252a2d';
    });
    
    // Remove the download button from the PDF
    const downloadButton = element.querySelector('button');
    if (downloadButton) {
      downloadButton.remove();
    }
    
    // Generate PDF with improved formatting
    html2pdf().from(element).set(options).save();
  };

  return (
    <ResumeContainer ref={resumeRef}>
      <HeaderContainer>
        <Title>Alan Newingham</Title>
        <Subtitle>Platform Engineer</Subtitle>
        <DownloadButton onClick={handleDownloadPDF}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM0 16V11H2V14H14V11H16V16H0Z" fill="currentColor"/>
          </svg>
          Download PDF
        </DownloadButton>
      </HeaderContainer>
      
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
              <ExperienceItem key={job.id} className="job-item">
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
      
      {/* Add hidden styles that will be used in the PDF */}
      <PdfStyles>
        <style type="text/css" dangerouslySetInnerHTML={{ __html: `
          @media print {
            h1, h2, h3, h4, h5, h6 {
              page-break-after: avoid;
              break-after: avoid;
            }
            li, dt, dd {
              page-break-inside: avoid;
              break-inside: avoid;
            }
            p {
              orphans: 3;
              widows: 3;
            }
          }
        `}} />
      </PdfStyles>
    </ResumeContainer>
  );
};

export default Resume;
