// Theme file for Alan's Interactive Portfolio

export const theme = {
  colors: {
    // Original color scheme from static resume
    dark: '#1f2426',
    gray: '#4b5859',
    blueGray: '#293e41',
    lightestBlue: '#b4dad7',
    lightBlue: '#519ca4',
    blue: '#2196a7',
    darkBlue: '#307982',
    darkestBlue: '#215961',
    
    // Additional colors for extended UI
    background: '#1a1e20',
    surface: '#252a2d',
    accent: '#2196a7',
    accentLight: '#64c2cc',
    accentDark: '#0d6875',
    text: '#e6f5f3',
    textSecondary: '#b4dad7',
    textTertiary: '#6b7280',
    error: '#cf6679',
    success: '#4caf50',
    warning: '#ff9800',
  },
  
  fonts: {
    primary: '"Bitter", serif',
    secondary: '"Open Sans", sans-serif',
    code: '"Fira Code", monospace',
  },
  
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },
  
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.8,
  },
  
  space: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },
  
  radii: {
    none: '0',
    sm: '0.125rem',   // 2px
    md: '0.25rem',    // 4px
    lg: '0.5rem',     // 8px
    xl: '1rem',       // 16px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 4px 6px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    xl: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  },
  
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
  
  zIndices: {
    hide: -1,
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1600,
    tooltip: 1700,
  },
};

export type Theme = typeof theme;

export default theme;
