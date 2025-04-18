import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => `${props.theme.space.md} ${props.theme.space.lg}`};
  background-color: ${props => props.theme.colors.surface};
  position: sticky;
  top: 0;
  z-index: ${props => props.theme.zIndices.sticky};
  box-shadow: ${props => props.theme.shadows.sm};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => `${props.theme.space.md}`};
  }
`;

const Logo = styled(Link)`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.lightestBlue};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.accentLight};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${props => props.theme.space.md};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.xl};
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${props => (props.$isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.surface};
  flex-direction: column;
  padding: ${props => props.theme.space.md};
  box-shadow: ${props => props.theme.shadows.md};
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? props.theme.colors.lightestBlue : props.theme.colors.textSecondary};
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.md};
  padding: ${props => `${props.theme.space.xs} ${props.theme.space.sm}`};
  border-bottom: 2px solid ${props => props.$active ? props.theme.colors.lightestBlue : 'transparent'};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.lightestBlue};
    border-bottom-color: ${props => props.theme.colors.lightestBlue};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.space.md};
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Resume', path: '/resume' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo to="/">Alan Newingham</Logo>
      
      <Nav>
        {navigationItems.map(item => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            $active={location.pathname === item.path || 
              (item.path !== '/' && location.pathname.startsWith(item.path))}
          >
            {item.label}
          </NavLink>
        ))}
      </Nav>
      
      <MobileMenuButton onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>
      
      <MobileMenu $isOpen={isMenuOpen}>
        {navigationItems.map(item => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            $active={location.pathname === item.path || 
              (item.path !== '/' && location.pathname.startsWith(item.path))}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
