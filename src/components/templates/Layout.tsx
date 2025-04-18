import React from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.textSecondary};
`;

const Main = styled.main`
  flex: 1;
  padding: ${props => props.theme.space.lg};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.space.md};
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
