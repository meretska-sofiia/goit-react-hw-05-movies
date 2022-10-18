import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus {
    color: rgb(84, 117, 201);
  }
`;
