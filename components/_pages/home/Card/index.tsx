import React from 'react';
import { default as StyledCard } from './styles';
import { BoxProps } from '../../../Box';

type CardProps = {
  href?: string;
};

const Card: React.FC<CardProps & BoxProps> = ({ children, ...props }) => (
  <StyledCard {...props}>{children}</StyledCard>
);

export default Card;
