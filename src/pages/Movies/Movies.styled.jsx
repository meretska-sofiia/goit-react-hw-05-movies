import styled from 'styled-components';

export const Form = styled.form``;

export const Input = styled.input`
  min-width: 300px;
  font-size: 16px;
  padding: 5px 10px;
  border: 2px solid #5475c9;
  border-radius: 5px;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 33px -10px rgba(0, 0, 84, 0.64);
  }
`;

export const Button = styled.button`
  min-width: 150px;
  margin-left: 20px;
  font-size: 16px;
  padding: 5px 10px;
  border: 2px solid rgb(84, 117, 201);
  border-radius: 5px;
  background-color: rgb(84, 117, 201);
  color: #fff;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 33px -10px rgba(0, 0, 84, 0.64);
  }
`;
