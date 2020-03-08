import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './style';

export const Card = (props) => (
  <StyledCard {...props}>
    <h2>{props.title}</h2>
    <p>{props.subtitle}</p>
  </StyledCard>
);

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
