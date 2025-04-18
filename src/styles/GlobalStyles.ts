import { createGlobalStyle } from 'styled-components';

// Using consistent props naming helps with TypeScript inference
const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.textSecondary};
    line-height: ${props => props.theme.lineHeights.normal};
    font-weight: ${props => props.theme.fontWeights.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: ${props => props.theme.lineHeights.tight};
    margin-bottom: ${props => props.theme.space.md};
  }
  
  h1 {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
  
  h2 {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
  
  h3 {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
  
  h4 {
    font-size: ${props => props.theme.fontSizes.xl};
  }
  
  h5 {
    font-size: ${props => props.theme.fontSizes.lg};
  }
  
  h6 {
    font-size: ${props => props.theme.fontSizes.md};
  }
  
  p {
    margin-bottom: ${props => props.theme.space.md};
  }
  
  a {
    color: ${props => props.theme.colors.lightBlue};
    text-decoration: none;
    transition: color ${props => props.theme.transitions.fast};
    
    &:hover, &:focus {
      color: ${props => props.theme.colors.accentLight};
      text-decoration: underline;
    }
  }
  
  ul, ol {
    margin-bottom: ${props => props.theme.space.md};
    padding-left: ${props => props.theme.space.lg};
  }
  
  li {
    margin-bottom: ${props => props.theme.space.xs};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
    
    &:disabled {
      cursor: not-allowed;
    }
  }
  
  /* Special styling to maintain parts of the original design */
  h2 {
    /* Original resume had bordered h2 elements */
    border: 2px solid ${props => props.theme.colors.lightestBlue};
    padding: 0.5em;
    display: inline-block;
  }
  
  hr {
    border: 1px solid ${props => props.theme.colors.lightestBlue};
    margin: ${props => props.theme.space.md} 0;
  }
  
  /* Add responsive typography */
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    html {
      font-size: 14px;
    }
    
    h1 {
      font-size: ${props => props.theme.fontSizes['3xl']};
    }
    
    h2 {
      font-size: ${props => props.theme.fontSizes['2xl']};
    }
    
    h3 {
      font-size: ${props => props.theme.fontSizes.xl};
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    html {
      font-size: 12px;
    }
  }
`;

export default GlobalStyles;
