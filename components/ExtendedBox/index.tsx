import React from 'react';
import styled from 'styled-components';
import { StyledBox } from '../Box';

type ExtendedBoxProps = {
  href?: string;
};

const ExtendedBox = styled(StyledBox)<ExtendedBoxProps>`
  background-color: rebeccapurple;
`;

export default ExtendedBox;
