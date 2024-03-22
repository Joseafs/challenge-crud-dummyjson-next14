import styled, { css } from 'styled-components';

import { Button, Grid } from '~/components';
import { Select } from '~/components/Select';
import { useMediaQuery } from '~/theme/utils';

export const GridRoot = styled(Grid)`
  ${() => css`
    @media ${useMediaQuery().maxW.xs} {
      flex-wrap: wrap;
    }
  `}
`;

export const ButtonRoot = styled(Button)`
  ${() => css`
    @media ${useMediaQuery().maxW.xs} {
      flex: 1;
    }
  `}
`;
export const SelectRoot = styled(Select)`
  min-width: 120px;

  ${() => css`
    @media ${useMediaQuery().maxW.xs} {
      flex: 1;
    }
  `}
`;
