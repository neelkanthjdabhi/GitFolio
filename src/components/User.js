import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const User = () => {
  return <section className="section">
    <Wrapper className="section-center">
      <Card></Card>
    </Wrapper>
  </section>;
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;

  /* align-items: start; */
`;

export default User;
