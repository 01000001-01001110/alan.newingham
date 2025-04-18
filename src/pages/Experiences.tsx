import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import ExperienceList from '../components/organisms/ExperienceList';
import jobs from '../data/jobs';
import skills from '../data/skills';

const ExperiencesContainer = styled.div`
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

// Two-column grid layout
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px; // Main content and 300px fixed sidebar
  gap: ${props => props.theme.space.xl};
  
  // On mobile, switch to single column
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

// Left column for job listing
const MainContent = styled.div`
  width: 100%;
`;

// Right column for filters
const Sidebar = styled.div`
  width: 100%;
`;

// Vertical filter sidebar
const FilterSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space.md};
  position: sticky;
  top: ${props => props.theme.space.xl};
  background-color: ${props => props.theme.colors.surface};
  padding: ${props => props.theme.space.lg};
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.md};
  
  // On mobile, remove sticky behavior
  @media (max-width: 1024px) {
    position: static;
    margin-bottom: ${props => props.theme.space.xl};
  }
`;

const FilterTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.md};
`;

const FilterDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.space.lg};
  line-height: ${props => props.theme.lineHeights.normal};
`;

const FilterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space.sm};
  max-height: 500px;
  overflow-y: auto;
  padding-right: ${props => props.theme.space.sm};
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.darkestBlue};
    border-radius: ${props => props.theme.radii.full};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.darkBlue};
    border-radius: ${props => props.theme.radii.full};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.blueGray};
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${props => `${props.theme.space.sm} ${props.theme.space.md}`};
  background-color: ${props => props.$active ? props.theme.colors.lightBlue : props.theme.colors.blueGray};
  color: ${props => props.$active ? props.theme.colors.dark : props.theme.colors.lightestBlue};
  border: none;
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  text-align: left;
  
  &:hover {
    background-color: ${props => props.$active ? props.theme.colors.lightBlue : props.theme.colors.darkBlue};
  }
`;

const SelectedTechInfo = styled.div`
  margin-bottom: ${props => props.theme.space.xl};
  padding: ${props => props.theme.space.md};
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radii.md};
  box-shadow: ${props => props.theme.shadows.sm};
`;

const SelectedTechTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.sm};
`;

const SelectedTechDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.lineHeights.normal};
`;

const ResetFilterButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.lightBlue};
  padding: ${props => `${props.theme.space.xs} ${props.theme.space.md}`};
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  margin-top: ${props => props.theme.space.md};
  
  &:hover {
    background-color: ${props => props.theme.colors.darkestBlue};
  }
`;

const Experiences: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const techFromUrl = searchParams.get('tech');
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(techFromUrl);
  
  // Update state when URL parameters change
  useEffect(() => {
    if (techFromUrl !== selectedTechnology) {
      setSelectedTechnology(techFromUrl);
    }
  }, [techFromUrl]);
  
  // Extract all unique technologies from all jobs
  const technologies = useMemo(() => {
    const allTechnologies = jobs.flatMap(job => job.technologies);
    return ['All', ...Array.from(new Set(allTechnologies))].sort();
  }, []);
  
  // Get related skills for the selected technology
  const relatedSkills = useMemo(() => {
    if (!selectedTechnology || selectedTechnology === 'All') return null;
    
    const matchingSkills = skills.filter(skill => 
      skill.name.toLowerCase() === selectedTechnology.toLowerCase() ||
      skill.id.toLowerCase() === selectedTechnology.toLowerCase() ||
      selectedTechnology.toLowerCase().includes(skill.id.toLowerCase())
    );
    
    return matchingSkills.length > 0 ? matchingSkills : null;
  }, [selectedTechnology]);
  
  // Handle technology selection
  const handleTechnologySelect = (tech: string) => {
    if (tech === 'All') {
      setSelectedTechnology(null);
      setSearchParams({});
    } else {
      setSelectedTechnology(tech);
      setSearchParams({ tech });
    }
  };

  // Reset filter
  const resetFilter = () => {
    setSelectedTechnology(null);
    setSearchParams({});
  };
  
  return (
    <ExperiencesContainer>
      {/* Full-width header */}
      <Title>Professional Experience</Title>
      <Description>
        I am a results-driven Platform Engineer with 25+ years in IT, specializing in cloud architecture, 
        infrastructure automation, and modern DevOps methodologies. I combine deep technical expertise in 
        Azure/AWS environments with strong security implementation practices to deliver innovative solutions 
        that enhance operational efficiency while reducing costs. My core strength lies in building scalable 
        infrastructure and automating complex processes through code, consistently achieving measurable 
        improvements in deployment time and system reliability.
      </Description>
      
      {/* Two-column layout: main content (left) and sidebar (right) */}
      <ContentGrid>
        {/* Main content column */}
        <MainContent>
          {selectedTechnology && relatedSkills && relatedSkills.length > 0 && (
            <SelectedTechInfo>
              <SelectedTechTitle>About {selectedTechnology}</SelectedTechTitle>
              <SelectedTechDescription>
                {relatedSkills[0].description || `${selectedTechnology} is one of my technical skills with experience spanning multiple projects.`}
              </SelectedTechDescription>
            </SelectedTechInfo>
          )}
          
          <ExperienceList 
            jobs={jobs} 
            selectedTechnology={selectedTechnology} 
          />
        </MainContent>
        
        {/* Sidebar column */}
        <Sidebar>
          <FilterSidebar>
            <FilterTitle>Filter by Technology</FilterTitle>
            <FilterDescription>
              Filter my experience by specific technologies to see where I've applied them professionally.
            </FilterDescription>
            
            <FilterButtonContainer>
              {technologies.map(tech => (
                <FilterButton
                  key={tech}
                  $active={selectedTechnology === tech || (tech === 'All' && !selectedTechnology)}
                  onClick={() => handleTechnologySelect(tech)}
                >
                  {tech}
                </FilterButton>
              ))}
            </FilterButtonContainer>
            
            {selectedTechnology && (
              <ResetFilterButton onClick={resetFilter}>
                Clear Filter
              </ResetFilterButton>
            )}
          </FilterSidebar>
        </Sidebar>
      </ContentGrid>
    </ExperiencesContainer>
  );
};

export default Experiences;
