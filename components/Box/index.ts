import styled from 'styled-components';

import {
  background,
  border,
  color,
  flexbox,
  grid,
  typography,
  layout,
  position,
  space
} from 'styled-system';

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0
  },
  background,
  border,
  color,
  flexbox,
  grid,
  typography,
  layout,
  position,
  space
);

export default Box;
