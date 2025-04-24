import React from 'react';
import styled from 'styled-components';
import Timeline from '../components/organisms/Timeline';
import jobs from '../data/jobs';
import introParagraph from '../data/intro';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  text-align: center;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.space.xl} 0;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes['5xl']};
  margin-bottom: ${props => props.theme.space.lg};
  color: ${props => props.theme.colors.lightestBlue};
`;

const Subtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  max-width: 800px;
  margin: 0 auto ${props => props.theme.space.xl};
  text-align: justify;
`;

const TimelineSection = styled.section`
  width: 100%;
  margin-top: ${props => props.theme.space.xl};
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['3xl']};
  color: ${props => props.theme.colors.lightestBlue};
  margin-bottom: ${props => props.theme.space.lg};
  text-align: center;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>Alan Newingham</Title>
        <Subtitle>
          {introParagraph}
        </Subtitle>
      </HeroSection>
      
      <TimelineSection>
        <SectionTitle>Professional Journey</SectionTitle>
        <p>Welcome to the site about me, feel free to interact below, or in the menu.</p>
        <Timeline jobs={jobs} />
      </TimelineSection>
    </HomeContainer>
  );
};

export default Home;
