import React from 'react';
import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system';

export type BoxProps =
  | BackgroundProps
  | BorderProps
  | ColorProps
  | FlexboxProps
  | GridProps
  | LayoutProps
  | PositionProps
  | SpaceProps
  | TypographyProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { as?: any };
// | { as?: keyof JSX.IntrinsicElements | React.ComponentType<any> };

export const StyledBox = styled.div(
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

const Box: React.FC<BoxProps> = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
);

export default Box;
