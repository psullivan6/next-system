import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  width: 100%;
  margin-top: ${({ theme }) => theme.space[7]}px;
  padding: 0.25em;
  line-height: 0.8;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: black;
  }
`;

export default Title;
