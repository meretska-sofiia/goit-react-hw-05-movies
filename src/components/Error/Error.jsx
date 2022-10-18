import React from 'react';
import { Container } from 'pages/Layout/Layout.styled';
import { LingGoBack } from 'pages/MovieCard/MovieCard.styled';
import { Title } from 'pages/Home/Home.styled';

const Error = () => {
  return (
    <Container>
      <Title>Unfortunately, we didn't find anything for this query;(</Title>
      <LingGoBack to={'/'}>To the main page</LingGoBack>
    </Container>
  );
};

export default Error;
