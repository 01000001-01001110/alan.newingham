import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const ProjectsContainer = styled.div`
  padding: ${props => props.theme.space.lg} 0;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes['4xl']};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.lg};
  text-align: center;
`;

const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 800px;
  margin: 0 auto ${props => props.theme.space.xl};
  text-align: center;
  line-height: ${props => props.theme.lineHeights.loose};
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.space.md};
  margin-bottom: ${props => props.theme.space.xl};
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${props => `${props.theme.space.sm} ${props.theme.space.md}`};
  background-color: ${props => props.$active ? props.theme.colors.lightBlue : props.theme.colors.blueGray};
  color: ${props => props.theme.colors.lightestBlue};
  border: none;
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.darkBlue};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${props => props.theme.space.xl};
  margin-top: ${props => props.theme.space.xl};
`;

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radii.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Helper function to fix image paths for deployment
const fixImagePath = (path: string) => {
  // Replace %PUBLIC_URL% with the actual public URL path
  return path.replace('%PUBLIC_URL%', process.env.PUBLIC_URL || '');
};

const ProjectContent = styled.div`
  padding: ${props => props.theme.space.lg};
`;

const ProjectTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.sm};
`;

const ProjectDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.space.md};
  line-height: ${props => props.theme.lineHeights.normal};
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space.xs};
  margin-bottom: ${props => props.theme.space.md};
`;

const TechTag = styled.span`
  background-color: ${props => props.theme.colors.darkestBlue};
  color: ${props => props.theme.colors.textSecondary};
  padding: ${props => `${props.theme.space.xs} ${props.theme.space.sm}`};
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.xs};
`;

const LinksContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.space.md};
  margin-top: ${props => props.theme.space.md};
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${props => `${props.theme.space.xs} ${props.theme.space.md}`};
  background-color: ${props => props.theme.colors.blueGray};
  color: ${props => props.theme.colors.lightestBlue};
  text-decoration: none;
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.sm};
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.darkBlue};
  }
`;

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'personal' | 'professional'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <ProjectsContainer>
      <Title>Project Portfolio</Title>
      <Description>
        Explore a selection of projects I've worked on throughout my career,
        from web applications to infrastructure automation tools.
      </Description>
      
      <FilterContainer>
        <FilterButton
          $active={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          All Projects
        </FilterButton>
        <FilterButton
          $active={filter === 'professional'}
          onClick={() => setFilter('professional')}
        >
          Professional Projects
        </FilterButton>
        <FilterButton
          $active={filter === 'personal'}
          onClick={() => setFilter('personal')}
        >
          Personal Projects
        </FilterButton>
      </FilterContainer>
      
      <ProjectsGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} variants={itemVariants}>
            <ProjectImage 
              src={project.thumbnail ? fixImagePath(project.thumbnail) : `${process.env.PUBLIC_URL || ''}/transcriber.png`} 
              alt={project.name} 
            />
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechContainer>
                {project.technologies.slice(0, 5).map(tech => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
                {project.technologies.length > 5 && (
                  <TechTag>+{project.technologies.length - 5} more</TechTag>
                )}
              </TechContainer>
              
              <LinksContainer>
                {project.repository && (
                  <ProjectLink href={project.repository} target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                  </ProjectLink>
                )}
                {project.link && (
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </ProjectLink>
                )}
              </LinksContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
