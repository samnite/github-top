import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledError = styled.h1`
  color: red;
`;

const Alert = ({ errors }) => {
  return <StyledError>{errors}</StyledError>;
};

const mapStateToProps = state => ({
  errors: state.data.errors,
});

export default connect(mapStateToProps)(Alert);
