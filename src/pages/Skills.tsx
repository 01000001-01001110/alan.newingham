import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import skills from '../data/skills';
import jobs from '../data/jobs';

const SkillsContainer = styled.div`
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

// Two-column layout
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px; // Main content and 300px fixed sidebar
  gap: ${props => props.theme.space.xl};
  
  // On mobile, switch to single column
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

// Left column for skills grid
const MainContent = styled.div`
  width: 100%;
`;

// Right column for category filters
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

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${props => `${props.theme.space.sm} ${props.theme.space.md}`};
  background-color: ${props => props.$active ? props.theme.colors.lightBlue : props.theme.colors.blueGray};
  color: ${props => props.$active ? props.theme.colors.dark : props.theme.colors.lightestBlue};
  border: none;
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  margin-bottom: ${props => props.theme.space.sm};
  text-align: left;
  
  &:hover {
    background-color: ${props => props.$active ? props.theme.colors.lightBlue : props.theme.colors.darkBlue};
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.space.lg};
`;

const SkillCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radii.lg};
  padding: ${props => props.theme.space.lg};
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillName = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.sm};
`;

const SkillCategory = styled.span`
  display: inline-block;
  font-size: ${props => props.theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.textTertiary};
  margin-bottom: ${props => props.theme.space.md};
`;

const ProficiencyBar = styled.div`
  height: 8px;
  background-color: ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.radii.full};
  margin: ${props => props.theme.space.md} 0;
  overflow: hidden;
`;

const ProficiencyFill = styled.div<{ width: number }>`
  height: 100%;
  width: ${props => `${props.width}%`};
  background-color: ${props => props.theme.colors.lightBlue};
  border-radius: ${props => props.theme.radii.full};
`;

const SkillDetail = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textSecondary};
  margin-top: ${props => props.theme.space.md};
`;

const RelatedSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space.xs};
  margin-top: ${props => props.theme.space.md};
`;

const RelatedSkillTag = styled.span<{ $isClickable: boolean }>`
  background-color: ${props => props.theme.colors.darkestBlue};
  color: ${props => props.theme.colors.textSecondary};
  padding: ${props => `${props.theme.space.xs} ${props.theme.space.sm}`};
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.xs};
  transition: all ${props => props.theme.transitions.fast};
  cursor: ${props => props.$isClickable ? 'pointer' : 'default'};
  
  &:hover {
    background-color: ${props => props.$isClickable ? props.theme.colors.darkBlue : props.theme.colors.darkestBlue};
    color: ${props => props.$isClickable ? props.theme.colors.lightestBlue : props.theme.colors.textSecondary};
  }
`;

const JobsSection = styled.div`
  margin-top: ${props => props.theme.space.md};
`;

const JobsLabel = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textTertiary};
  display: block;
  margin-bottom: ${props => props.theme.space.xs};
`;

const ViewExperiencesButton = styled.button`
  background-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.dark};
  padding: ${props => `${props.theme.space.xs} ${props.theme.space.md}`};
  border-radius: ${props => props.theme.radii.md};
  border: none;
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  margin-top: ${props => props.theme.space.sm};
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.accentLight};
  }
`;

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(skills.map(skill => skill.category)));
    return ['All', ...uniqueCategories];
  }, []);
  
  const filteredSkills = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'All') {
      return skills;
    }
    return skills.filter(skill => skill.category === selectedCategory);
  }, [selectedCategory]);

  // Get all technology tags from jobs
  const allJobTechnologies = useMemo(() => {
    return Array.from(new Set(jobs.flatMap(job => job.technologies)));
  }, []);
  
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
  
  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  
  const getExperienceYears = (yearStarted: number) => {
    const currentYear = new Date().getFullYear();
    return currentYear - yearStarted;
  };

  // Map of exact skills to job technologies - computed once
  const skillToJobTechMap = useMemo(() => {
    const map = new Map<string, string[]>();
    
    // Define skill-to-tech mappings based on our data
    map.set('powershell', ['PowerShell']);
    map.set('python', ['Python', 'Flask']);
    map.set('flask', ['Flask', 'Python']);
    map.set('csharp', ['C#']);
    map.set('aws', ['AWS']);
    map.set('azure', ['Microsoft Azure', 'Azure', 'Azure App Services', 'Azure Functions', 'Azure PaaS']);
    map.set('terraform', ['Terraform', 'Infrastructure as Code']);
    map.set('bicep', ['Bicep']);
    map.set('jira', []);
    map.set('ai-wrappers', []);
    map.set('jenkins', ['Jenkins', 'CI/CD Pipelines']);
    map.set('ansible', ['Ansible']);
    map.set('bash', ['Bash']);
    map.set('git', ['Git']);
    map.set('certificate-management', ['Certificate Management']);
    map.set('vmware', ['VMWare']);
    map.set('linux', ['Linux']);
    map.set('windows-server', ['Windows Server']);
    map.set('active-directory', ['Active Directory', 'Entra ID']);
    map.set('devops', ['DevOps']);
    
    return map;
  }, []);

  const getRelatedJobs = (skillId: string, skillName: string) => {
    // First try exact mappings from our map
    const exactMappings = skillToJobTechMap.get(skillId);
    
    if (exactMappings && exactMappings.length > 0) {
      return jobs.filter(job => 
        job.technologies.some(tech => 
          exactMappings.includes(tech)
        )
      );
    }
    
    // Fall back to exact name matches only
    return jobs.filter(job => 
      job.technologies.some(tech => 
        tech.toLowerCase() === skillName.toLowerCase()
      )
    );
  };

  const handleRelatedSkillClick = (skillTag: string) => {
    // Look for exact matches with job technologies
    const matchingTechnology = allJobTechnologies.find(tech => 
      tech.toLowerCase() === skillTag.toLowerCase()
    );
    
    if (matchingTechnology) {
      navigate(`/experiences?tech=${encodeURIComponent(matchingTechnology)}`);
    }
  };

  const navigateToExperiences = (skillName: string, skillId: string) => {
    // First try exact mappings from our map
    const exactMappings = skillToJobTechMap.get(skillId);
    
    if (exactMappings && exactMappings.length > 0) {
      // Use the first mapping in our list
      navigate(`/experiences?tech=${encodeURIComponent(exactMappings[0])}`);
      return;
    }
    
    // Fall back to direct name match
    const matchingTechnology = allJobTechnologies.find(tech => 
      tech.toLowerCase() === skillName.toLowerCase()
    );

    if (matchingTechnology) {
      navigate(`/experiences?tech=${encodeURIComponent(matchingTechnology)}`);
    } else {
      navigate('/experiences');
    }
  };
  
  return (
    <SkillsContainer>
      {/* Full-width header */}
      <Title>Skills & Technologies</Title>
      <Description>
        Throughout my career, I've developed expertise in a range of technical and soft skills.
        Use the filters to explore my skills by category. Click on related skills or the "View Experiences" button to see job experiences where I've applied these skills.
      </Description>
      
      {/* Two-column layout: main content (left) and sidebar (right) */}
      <ContentGrid>
        {/* Main content - Skills grid */}
        <MainContent>
          <SkillsGrid
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredSkills.map(skill => {
              const relatedJobs = getRelatedJobs(skill.id, skill.name);
              const hasRelatedJobs = relatedJobs.length > 0;
              
              return (
                <SkillCard key={skill.id} variants={itemVariants}>
                  <SkillName>{skill.name}</SkillName>
                  <SkillCategory>{formatCategory(skill.category)}</SkillCategory>
                  
                  <ProficiencyBar>
                    <ProficiencyFill width={skill.proficiency * 100} />
                  </ProficiencyBar>
                  
                  <SkillDetail>
                    {getExperienceYears(skill.yearStarted)}+ years of experience
                  </SkillDetail>
                  
                  {skill.description && (
                    <SkillDetail>{skill.description}</SkillDetail>
                  )}
                  
                  {skill.relatedSkills && skill.relatedSkills.length > 0 && (
                    <RelatedSkillsContainer>
                      {skill.relatedSkills.map(relatedSkill => {
                        // Only make clickable if this is a direct match to a job technology
                        const isClickable = allJobTechnologies.some(tech => 
                          tech.toLowerCase() === relatedSkill.toLowerCase()
                        );
                        
                        return (
                          <RelatedSkillTag 
                            key={relatedSkill} 
                            $isClickable={isClickable}
                            onClick={() => isClickable && handleRelatedSkillClick(relatedSkill)}
                          >
                            {relatedSkill}
                          </RelatedSkillTag>
                        );
                      })}
                    </RelatedSkillsContainer>
                  )}
                  
                  {hasRelatedJobs && (
                    <JobsSection>
                      <JobsLabel>Used in {relatedJobs.length} job{relatedJobs.length !== 1 ? 's' : ''}</JobsLabel>
                      <ViewExperiencesButton onClick={() => navigateToExperiences(skill.name, skill.id)}>
                        View Experiences
                      </ViewExperiencesButton>
                    </JobsSection>
                  )}
                </SkillCard>
              );
            })}
          </SkillsGrid>
        </MainContent>
        
        {/* Sidebar - Category filters */}
        <Sidebar>
          <FilterSidebar>
            <FilterTitle>Filter by Category</FilterTitle>
            <FilterDescription>
              View my skills grouped by category to better understand my expertise areas.
            </FilterDescription>
            
            {categories.map(category => (
              <FilterButton
                key={category}
                $active={selectedCategory === category || (category === 'All' && !selectedCategory)}
                onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              >
                {category === 'All' ? 'All Skills' : formatCategory(category)}
              </FilterButton>
            ))}
          </FilterSidebar>
        </Sidebar>
      </ContentGrid>
    </SkillsContainer>
  );
};

export default Skills;
