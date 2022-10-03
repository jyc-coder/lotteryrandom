import styled from '@emotion/styled';
import { useState } from 'react';

const StyledNumberBox = styled.select<{
  num: number;
}>`
  min-width: 60px;
  min-height: 60px;
  background: #d9d9d9;
  border: black solid 1px;
  color: black;
  font-size: 25px;
  text-align: center;
  appearance: none;

  &:disabled {
    opacity: 1 !important;
  }
`;

const NumberBox = ({
  num,
  setNum,
}: {
  num?: number;
  setNum?: (num: number) => void;
}) => {
  return (
    <StyledNumberBox
      num={num ?? 0}
      value={num}
      disabled={!setNum}
      onChange={(event) => {
        if (setNum) setNum(parseInt(event.currentTarget.value));
      }}
    >
      {Array(45)
        .fill(0)
        .map((value, idx) =>
          !num ? (
            <option key={idx}>+</option>
          ) : (
            <option key={idx}>{idx + 1}</option>
          ),
        )}
    </StyledNumberBox>
  );
};

export default NumberBox;
