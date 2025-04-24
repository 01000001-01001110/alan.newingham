import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import introParagraph from '../data/intro';

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

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.lightBlue};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  
  &:hover {
    text-decoration: underline;
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
          {introParagraph}
        </Paragraph>
      </Section>

      <Section variants={itemVariants}>
        <SectionTitle>Philosophy & Approach</SectionTitle>
        <Paragraph>
          I believe in building systems that are not only functional but also maintainable, adaptable, 
          and forward-looking. My approach to software development and infrastructure design is guided 
          by these core principles:
        </Paragraph>
        <List>
          <li>Automation is essential for reliability, consistency, and freeing human creativity</li>
          <li>Documentation should be thorough, accessible, and continuously maintained alongside code</li>
          <li>Solutions should balance simplicity of understanding with robustness and scalability</li>
          <li>AI and machine learning should enhance human capabilities, not replace human judgment</li>
          <li>Continuous learning and experimentation are non-negotiable in our rapidly evolving field</li>
        </List>
        <Quote>
          "The best technology is invisible, reliable, and empowers people to focus on what truly matters."
        </Quote>
      </Section>

      <Section variants={itemVariants}>
        <SectionTitle>Beyond Code</SectionTitle>
        <Paragraph>
          When I'm not immersed in code or managing infrastructure, I'm a father to three amazing kids (16, 11, and 7) 
          who keep me both grounded and inspired. I'm deeply passionate about artificial intelligence and its 
          practical applications, regularly building Discord bots, automation tools, and experimental projects 
          that push the boundaries of what's possible with current technology.
        </Paragraph>
        <Paragraph>
          I share my technical adventures and insights on my blog at <ExternalLink href="https://automateanddeploy.com" target="_blank" rel="noopener noreferrer">automateanddeploy.com</ExternalLink>, 
          where I document everything from infrastructure solutions to AI experiments. My GitHub contains over 117 
          repositories spanning Python utilities, PowerShell automation scripts, Discord bots, data processing tools, 
          and infrastructure-as-code implementations—reflecting my philosophy that if something can be automated, 
          it probably should be.
        </Paragraph>
        <Paragraph>
          I'm always open to discussing new projects, innovative ideas, or potential collaborations. Whether it's 
          cloud architecture, automation challenges, or exploring the latest in AI and machine learning, I'm eager 
          to connect and share knowledge.
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
