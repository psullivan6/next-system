// import styled from 'styled-components';
// import { color, shadow, space, typography } from 'styled-system';

// const Text = styled.p({}, color, shadow, space, typography);

// export default Text;

import React from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system';

export type TextProps =
  | ColorProps
  | ShadowProps
  | SpaceProps
  | TypographyProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { as?: keyof JSX.IntrinsicElements | React.ComponentType<any> };

const StyledText = styled.p({}, color, shadow, space, typography);

const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <StyledText {...props}> {children} </StyledText>
);

export default Text;
