/* eslint-disable sort-keys */
import theme from '~/theme/config';

import { PropsMediaType } from './types';

export const getMediaQuery = (): PropsMediaType => {
  const { breakpoints } = theme;

  const maxWidth = {
    xs: `(max-width: ${breakpoints.values.xs}px)`,
    sm: `(max-width: ${breakpoints.values.sm}px)`,
    md: `(max-width: ${breakpoints.values.md}px)`,
    lg: `(max-width: ${breakpoints.values.lg}px)`,
    xl: `(max-width: ${breakpoints.values.xl}px)`,
  };
  const minWidth = {
    xs: `(min-width: ${breakpoints.values.xs + 1}px)`,
    sm: `(min-width: ${breakpoints.values.sm + 1}px)`,
    md: `(min-width: ${breakpoints.values.md + 1}px)`,
    lg: `(min-width: ${breakpoints.values.lg + 1}px)`,
    xl: `(min-width: ${breakpoints.values.xl + 1}px)`,
  };

  const maxHeight = {
    xs: `(max-height: ${breakpoints.values.xs}px)`,
    sm: `(max-height: ${breakpoints.values.sm}px)`,
    md: `(max-height: ${breakpoints.values.md}px)`,
    lg: `(max-height: ${breakpoints.values.lg}px)`,
    xl: `(max-height: ${breakpoints.values.xl}px)`,
  };
  const minHeight = {
    xs: `(min-height: ${breakpoints.values.xs + 1}px)`,
    sm: `(min-height: ${breakpoints.values.sm + 1}px)`,
    md: `(min-height: ${breakpoints.values.md + 1}px)`,
    lg: `(min-height: ${breakpoints.values.lg + 1}px)`,
    xl: `(min-height: ${breakpoints.values.xl + 1}px)`,
  };

  return { maxW: maxWidth, minW: minWidth, maxH: maxHeight, minH: minHeight };
};
