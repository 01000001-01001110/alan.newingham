// styled.d.ts
import 'styled-components';
import theme, { Theme } from './theme';

// Extend the DefaultTheme interface
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
