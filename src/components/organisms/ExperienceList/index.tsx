import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Job } from '../../../types';

interface ExperienceListProps {
  jobs: Job[];
  selectedTechnology?: string | null;
}

const ExperienceListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.space.xl};
  justify-content: center;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(400px, 1fr));
  }
`;

const JobCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radii.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform ${props => props.theme.transitions.normal};
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const JobHeader = styled.div`
  padding: ${props => props.theme.space.lg};
  background-color: ${props => props.theme.colors.blueGray};
  border-bottom: 1px solid ${props => props.theme.colors.darkBlue};
`;

const JobTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.xs};
`;

const CompanyName = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.lightBlue};
  margin-bottom: ${props => props.theme.space.sm};
`;

const JobDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
`;

const JobDetail = styled.span`
  display: inline-flex;
  align-items: center;
`;

const JobContent = styled.div`
  padding: ${props => props.theme.space.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ResponsibilitiesList = styled.ul`
  margin-left: ${props => props.theme.space.lg};
  margin-bottom: ${props => props.theme.space.md};
  
  li {
    margin-bottom: ${props => props.theme.space.xs};
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space.xs};
  margin-top: auto;
  padding-top: ${props => props.theme.space.md};
`;

const TechTag = styled.span<{ $highlighted?: boolean }>`
  background-color: ${props => props.$highlighted ? props.theme.colors.lightBlue : props.theme.colors.darkestBlue};
  color: ${props => props.$highlighted ? props.theme.colors.dark : props.theme.colors.textSecondary};
  padding: ${props => `${props.theme.space.xs} ${props.theme.space.sm}`};
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.xs};
  transition: all ${props => props.theme.transitions.fast};
`;

const ViewButton = styled(Link)`
  display: inline-block;
  margin-top: ${props => props.theme.space.lg};
  background-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.dark};
  padding: ${props => `${props.theme.space.xs} ${props.theme.space.md}`};
  border-radius: ${props => props.theme.radii.md};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  text-align: center;
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.accentLight};
  }
`;

const SectionTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.sm};
  margin-top: ${props => props.theme.space.md};
`;

const NoResultsContainer = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: ${props => props.theme.space.xl};
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.lg};
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.sm};
`;

const ExperienceList: React.FC<ExperienceListProps> = ({ jobs, selectedTechnology }) => {
  // Filter jobs by selected technology if one is provided
  const filteredJobs = selectedTechnology 
    ? jobs.filter(job => job.technologies.includes(selectedTechnology))
    : jobs;

  // Sort jobs by start date (most recent first)
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

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

  const formatDate = (dateStr: string): string => {
    if (dateStr === 'Present') {
      return 'Present';
    }
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  if (sortedJobs.length === 0) {
    return (
      <NoResultsContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        No job experiences found with the selected technology. Try selecting a different filter.
      </NoResultsContainer>
    );
  }

  return (
    <ExperienceListContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {sortedJobs.map(job => (
        <JobCard key={job.id} variants={itemVariants}>
          <JobHeader>
            <JobTitle>{job.title}</JobTitle>
            <CompanyName>{job.company}</CompanyName>
            <JobDetails>
              <JobDetail>
                {formatDate(job.startDate)} - {formatDate(job.endDate)}
              </JobDetail>
              <JobDetail> • {job.location}</JobDetail>
            </JobDetails>
          </JobHeader>
          <JobContent>
            <SectionTitle>Key Responsibilities</SectionTitle>
            <ResponsibilitiesList>
              {job.responsibilities.slice(0, 3).map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
              {job.responsibilities.length > 3 && (
                <li key="more">And {job.responsibilities.length - 3} more responsibilities...</li>
              )}
            </ResponsibilitiesList>
            
            {job.technologies && job.technologies.length > 0 && (
              <>
                <SectionTitle>Technologies</SectionTitle>
                <TechContainer>
                  {job.technologies.slice(0, 10).map((tech, index) => (
                    <TechTag 
                      key={index} 
                      $highlighted={selectedTechnology === tech}
                    >
                      {tech}
                    </TechTag>
                  ))}
                  {job.technologies.length > 10 && (
                    <TechTag>+{job.technologies.length - 10} more</TechTag>
                  )}
                </TechContainer>
              </>
            )}
            
            <ViewButton to={`/experience/${job.id}`}>
              View Details
            </ViewButton>
          </JobContent>
        </JobCard>
      ))}
    </ExperienceListContainer>
  );
};

export default ExperienceList;
