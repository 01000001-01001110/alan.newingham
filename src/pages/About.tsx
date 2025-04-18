import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: ${props => props.theme.space.lg} 0;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes['4xl']};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.lg};
  text-align: center;
`;

const Section = styled(motion.section)`
  margin-bottom: ${props => props.theme.space.xl};
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.lightBlue};
  margin-bottom: ${props => props.theme.space.md};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  padding-bottom: ${props => props.theme.space.xs};
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.lineHeights.loose};
  margin-bottom: ${props => props.theme.space.md};
`;

const List = styled.ul`
  margin-left: ${props => props.theme.space.lg};
  margin-bottom: ${props => props.theme.space.md};
  
  li {
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: ${props => props.theme.space.sm};
    font-size: ${props => props.theme.fontSizes.md};
    line-height: ${props => props.theme.lineHeights.normal};
  }
`;

const Quote = styled.blockquote`
  border-left: 4px solid ${props => props.theme.colors.lightBlue};
  padding-left: ${props => props.theme.space.md};
  font-style: italic;
  color: ${props => props.theme.colors.lightestBlue};
  margin: ${props => props.theme.space.lg} 0;
`;

const ContactButton = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.dark};
  padding: ${props => `${props.theme.space.sm} ${props.theme.space.lg}`};
  border-radius: ${props => props.theme.radii.md};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: ${props => props.theme.space.md};
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.accentLight};
  }
`;

const About: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <AboutContainer>
      <Title>About Me</Title>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Section variants={itemVariants}>
          <SectionTitle>Professional Journey</SectionTitle>
          <Paragraph>
            I'm Alan Newingham, a Platform Engineer and Software Developer with a passion for creating 
            efficient, scalable solutions to complex problems. With over a decade of experience in the 
            tech industry, I've developed expertise in cloud infrastructure, DevOps practices, and 
            full stack development.
          </Paragraph>
          <Paragraph>
            My career has taken me from IT support roles to platform engineering, allowing me to 
            develop a comprehensive understanding of technology stacks from the ground up. This 
            diverse background enables me to bridge the gap between development and operations, 
            creating solutions that are both technically sound and practical to implement.
          </Paragraph>
        </Section>
        
        <Section variants={itemVariants}>
          <SectionTitle>Philosophy & Approach</SectionTitle>
          <Paragraph>
            I believe in building systems that are not only functional but also maintainable and 
            adaptable. My approach to software development and infrastructure design is guided by 
            these principles:
          </Paragraph>
          <List>
            <li>Automation is key to reliability and consistency</li>
            <li>Documentation should be thorough, accessible, and kept up-to-date</li>
            <li>Solutions should be simple enough to understand, but robust enough to scale</li>
            <li>Continuous learning and adaptation are essential in a rapidly evolving field</li>
          </List>
          <Quote>
            "The best technology is invisible, reliable, and empowers people to focus on what truly matters."
          </Quote>
        </Section>
        
        <Section variants={itemVariants}>
          <SectionTitle>Beyond Code</SectionTitle>
          <Paragraph>
            When I'm not immersed in code or managing infrastructure, I enjoy exploring emerging 
            technologies, contributing to open-source projects, and mentoring aspiring developers. 
            I'm particularly interested in how technology can be leveraged to solve real-world 
            problems and improve everyday experiences.
          </Paragraph>
          <Paragraph>
            I'm always open to discussing new projects, innovative ideas, or potential collaborations. 
            Feel free to reach out if you'd like to connect!
          </Paragraph>
          <ContactButton href="mailto:contact@alannewingham.com">
            Get In Touch
          </ContactButton>
        </Section>
      </motion.div>
    </AboutContainer>
  );
};

export default About;
