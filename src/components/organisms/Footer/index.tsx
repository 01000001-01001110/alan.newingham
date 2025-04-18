import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.surface};
  padding: ${props => `${props.theme.space.lg} ${props.theme.space.lg}`};
  margin-top: auto;
  box-shadow: ${props => props.theme.shadows.sm};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.space.md};
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${props => props.theme.space.lg};
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  color: ${props => props.theme.colors.lightestBlue};
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: ${props => props.theme.space.md};
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  margin-bottom: ${props => props.theme.space.sm};
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.lightestBlue};
  }
`;

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  margin-bottom: ${props => props.theme.space.sm};
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.lightestBlue};
  }
`;

const Copyright = styled.div`
  color: ${props => props.theme.colors.textTertiary};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-top: ${props => props.theme.space.lg};
  text-align: center;
  padding-top: ${props => props.theme.space.md};
  border-top: 1px solid ${props => props.theme.colors.gray};
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <SectionTitle>Navigation</SectionTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/experience">Experience</FooterLink>
            <FooterLink to="/skills">Skills</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/about">About</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>Connect</SectionTitle>
            <ExternalLink href="https://github.com/01000001-01001110" target="_blank" rel="noopener noreferrer">
              GitHub
            </ExternalLink>
            <ExternalLink href="https://linkedin.com/in/alan-newingham" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </ExternalLink>
            <ExternalLink href="mailto:alan.newingham@gmail.com">
              Email
            </ExternalLink>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>Resources</SectionTitle>
            <FooterLink to="/resume">
              Resume
            </FooterLink>
            <FooterLink to="/skills">Skills & Technologies</FooterLink>
            <FooterLink to="/projects">Project Portfolio</FooterLink>
          </FooterSection>
        </FooterTop>
        
        <Copyright>
          © {currentYear} Alan Newingham. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
