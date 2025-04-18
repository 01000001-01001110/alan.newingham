import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import jobs from '../data/jobs';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: ${props => props.theme.space.xl};
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  margin-bottom: ${props => props.theme.space.lg};
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.lightestBlue};
  }
`;

const JobHeader = styled.div`
  margin-bottom: ${props => props.theme.space.xl};
`;

const JobTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['4xl']};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.sm};
`;

const CompanyName = styled.h2`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.lightBlue};
  margin-bottom: ${props => props.theme.space.md};
`;

const JobDetails = styled.div`
  display: flex;
  gap: ${props => props.theme.space.md};
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.space.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${props => props.theme.space.xs};
  }
`;

const JobDetail = styled.span`
  display: inline-flex;
  align-items: center;
  
  &:not(:last-child)::after {
    content: "•";
    margin: 0 ${props => props.theme.space.sm};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      display: none;
    }
  }
`;

const ContentSection = styled(motion.section)`
  margin-bottom: ${props => props.theme.space.xl};
`;

const SectionTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.md};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  padding-bottom: ${props => props.theme.space.xs};
`;

const List = styled.ul`
  margin-left: ${props => props.theme.space.lg};
  
  li {
    margin-bottom: ${props => props.theme.space.sm};
  }
`;

const Paragraph = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.md};
  line-height: ${props => props.theme.lineHeights.loose};
  margin-bottom: ${props => props.theme.space.md};
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space.sm};
  margin-top: ${props => props.theme.space.md};
`;

const TechTag = styled.span`
  background-color: ${props => props.theme.colors.blueGray};
  color: ${props => props.theme.colors.lightestBlue};
  padding: ${props => `${props.theme.space.xs} ${props.theme.space.sm}`};
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const NotFound = styled.div`
  text-align: center;
  padding: ${props => props.theme.space.xl};
  
  h2 {
    font-size: ${props => props.theme.fontSizes['3xl']};
    color: ${props => props.theme.colors.lightestBlue};
    margin-bottom: ${props => props.theme.space.md};
  }
  
  p {
    font-size: ${props => props.theme.fontSizes.lg};
    margin-bottom: ${props => props.theme.space.lg};
  }
`;

// Helper function to determine if a text is paragraph style or list item style
const isParagraphStyle = (text: string): boolean => {
  return false; // Always use bullet points for consistency across job pages
};

const Experience: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  
  const job = useMemo(() => {
    return jobs.find(j => j.id === jobId);
  }, [jobId]);
  
  // Animations
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
  
  if (!job) {
    return (
      <NotFound>
        <h2>Job Not Found</h2>
        <p>The job experience you're looking for could not be found.</p>
        <BackLink to="/">&larr; Back to Timeline</BackLink>
      </NotFound>
    );
  }
  
  const formattedStartDate = new Date(job.startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
  
  const formattedEndDate = job.endDate === 'Present' ? 'Present' : new Date(job.endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
  
  return (
    <ExperienceContainer>
      <BackLink to="/">&larr; Back to Timeline</BackLink>
      
      <JobHeader>
        <JobTitle>{job.title}</JobTitle>
        <CompanyName>{job.company}</CompanyName>
        <JobDetails>
          <JobDetail>{formattedStartDate} - {formattedEndDate}</JobDetail>
          <JobDetail>{job.location}</JobDetail>
        </JobDetails>
      </JobHeader>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContentSection variants={itemVariants}>
          <SectionTitle>Responsibilities</SectionTitle>
          {job.responsibilities.some(isParagraphStyle) ? (
            // If any responsibility is paragraph style, render all as paragraphs
            job.responsibilities.map((responsibility, index) => (
              <Paragraph key={index}>{responsibility}</Paragraph>
            ))
          ) : (
            // Otherwise render as list
            <List>
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </List>
          )}
        </ContentSection>
        
        <ContentSection variants={itemVariants}>
          <SectionTitle>Key Achievements</SectionTitle>
          {job.achievements.some(isParagraphStyle) ? (
            // If any achievement is paragraph style, render all as paragraphs
            job.achievements.map((achievement, index) => (
              <Paragraph key={index}>{achievement}</Paragraph>
            ))
          ) : (
            // Otherwise render as list
            <List>
              {job.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </List>
          )}
        </ContentSection>
        
        <ContentSection variants={itemVariants}>
          <SectionTitle>Technologies</SectionTitle>
          <TechList>
            {job.technologies.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechList>
        </ContentSection>
        
        {job.notes && (
          <ContentSection variants={itemVariants}>
            <SectionTitle>Additional Notes</SectionTitle>
            <Paragraph>{job.notes}</Paragraph>
          </ContentSection>
        )}
      </motion.div>
    </ExperienceContainer>
  );
};

export default Experience;
