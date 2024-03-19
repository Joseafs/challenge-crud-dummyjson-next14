interface PropsMediaResponsiveType {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface PropsMediaType {
  maxW: PropsMediaResponsiveType;
  minW: PropsMediaResponsiveType;
  maxH: PropsMediaResponsiveType;
  minH: PropsMediaResponsiveType;
}
