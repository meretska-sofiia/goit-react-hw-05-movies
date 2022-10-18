import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid rgb(84, 117, 201);
`;

export const Container = styled.div`
  padding: 20px 30px;
  margin: 0 auto;
  max-width: 1480px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  padding: 5px 10px;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &:hover,
  &:focus {
    color: rgb(40, 58, 103);
  }

  &.active {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: rgb(84, 117, 201);
    }
  }
`;
