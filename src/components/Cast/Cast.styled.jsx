import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
  /* align-items: center; */
`;

export const CastItem = styled.li`
  width: calc((100% - 150px) / 6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  display: block;
  height: auto;
  width: 100%;
`;
