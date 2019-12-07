import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Title = styled.h1`
  margin: 0;
  width: 100%;
  margin-top: ${themeGet('space.7')}px;
  padding: 0.25em;
  line-height: 0.8;
  font-size: 48px;
  color: ${themeGet('colors.primary')};
  text-align: center;

  &:hover {
    color: ${themeGet('colors.secondary')};
    background-color: black;
  }
`;

export default Title;
