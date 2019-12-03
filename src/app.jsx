import React from 'react';
import styled from 'styled-components';
import Users from './components/users';
import Alert from './components/alert';

const StyledContainer = styled.div`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const App = () => {
  return (
    <StyledContainer>
      <Alert />
      <Users />
    </StyledContainer>
  );
};

export default App;
