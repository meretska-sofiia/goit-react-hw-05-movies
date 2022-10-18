import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  border-bottom: 1px solid rgb(84, 117, 201);
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const LingGoBack = styled(NavLink)`
  display: block;
  text-decoration: none;
  text-align: center;
  margin-bottom: 30px;
  max-width: 100px;

  padding: 10px;
  color: rgb(84, 117, 201);
  border-radius: 7px;
  background-color: #fff;
  border: 1px solid rgb(84, 117, 201);
  font-weight: 500;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 33px -10px rgba(0, 0, 84, 0.64);
  }
`;

export const Image = styled.img`
  width: 300px;
`;

export const Navigation = styled.div``;

export const Description = styled.div`
  width: 700px;
`;
