import { useTheme } from 'styled-components';

export const useSpaceTheme = (space: number[] = [], type: 'margin' | 'padding') => {
  const theme = useTheme();

  const calc = (value: number) => value * theme.space;

  return space.length === 1
    ? `${type}: ${calc(space[0])}px`
    : space.length === 2
      ? `${type}: ${calc(space[0])}px ${calc(space[1])}px`
      : space.length === 3
        ? `${type}: ${calc(space[0])}px ${calc(space[1])}px ${calc(space[2])}px`
        : space.length === 4
          ? `${type}: ${calc(space[0])}px ${calc(space[1])}px ${calc(space[2])}px ${calc(space[3])}px`
          : ``;
};
