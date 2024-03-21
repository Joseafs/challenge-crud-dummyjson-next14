import styled, { css } from 'styled-components';

import { Grid } from '~/components';
import { Select } from '~/components/Select';
import { useMediaQuery } from '~/theme/utils';

export const SelectRoot = styled(Select)`
  min-width: 200px;
`;

export const GridTemplateInputs = styled(Grid)`
  ${() => css`
    @media ${useMediaQuery().maxW.xs} {
      flex-direction: column;
    }
  `}
`;
