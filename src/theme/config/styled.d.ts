import 'styled-components';
import { PropsTheme } from './types';

declare module 'styled-components' {
  export interface DefaultTheme extends PropsTheme {}
}
