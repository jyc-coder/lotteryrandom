import styled from '@emotion/styled';
import { useState } from 'react';

const Button = styled.button`
  width: 269px;
  height: 97px;
  background: #6574ff;
  color: black;
  font-size: 36px;
  text-align: center;
  appearance: none;
  transition: all 0.5s;

  &:hover {
    background: #447321;
  }
  &:disabled {
    opacity: 1 !important;
  }
`;

export default Button;
