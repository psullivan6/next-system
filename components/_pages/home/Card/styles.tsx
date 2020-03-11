import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { darken, transparentize } from 'polished';

// Components
import Box, { BoxProps } from '../../../Box';

type CardProps = {
  href?: string;
};

const Card = styled(Box).attrs(() => ({
  as: 'a'
  // }))<BoxProps & CardProps>`
}))<CardProps>`
  display: block;
  padding: ${themeGet('space.3')}px;
  color: #434343;
  border: 1px solid ${themeGet('colors.gray')};
  text-decoration: none;
  border-radius: ${themeGet('space.1')}px;
  /* [NOTE] The way to do it if we don't need to use the result of themeGet */
  /* box-shadow: 0 4px 6px 0 ${transparentize(0.8, darken(0.1, '#ddd'))}; */
  box-shadow: 0 4px 6px 0 ${props =>
    transparentize(0.8, darken(0.1, themeGet('colors.gray')(props)))};

  &:hover {
    border-color: ${themeGet('colors.primary')};
    box-shadow: 0 4px 6px 0 ${props =>
      transparentize(0.8, darken(0.1, themeGet('colors.primary')(props)))};
  }
`;

export default Card;
