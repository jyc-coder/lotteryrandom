import styled from '@emotion/styled';
import React, { useState } from 'react';
import Button from './components/Button';
import NumberBox from './components/NumberBox';
import Title from './components/Title';

const NumberBoxContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 30px;
`;

function App() {
  const [num, setNum] = useState<
    [number, number, number, number, number, number, number]
  >([1, 2, 3, 4, 5, 6, 7]);

  const [randNum, setRandNum] = useState<
    [number, number, number, number, number, number] | null
  >(null);
  return (
    <div className="App">
      <Title>정답 번호</Title>
      <NumberBoxContainer>
        {Array(8)
          .fill(1)
          .map((_, idx) => {
            if (idx === 6) return <NumberBox />;
            if (idx === 7) idx = 6;
            return (
              <NumberBox
                key={idx}
                num={num[idx]}
                setNum={(value) => {
                  if (num.includes(value)) return;
                  setNum((prev) => {
                    prev[idx] = value;
                    return [...prev];
                  });
                }}
              />
            );
          })}
      </NumberBoxContainer>

      <Button
        onClick={() => {
          const li: number[] = [];
          while (li.length < 6) {
            const v = Math.floor(Math.random() * 45 + 1);

            if (li.includes(v)) continue;

            li.push(v);
          }
          setRandNum(li as [number, number, number, number, number, number]);
        }}
        style={{ marginTop: '162px' }}
      >
        랜덤 번호 추천
      </Button>

      {randNum && (
        <>
          <Title style={{ marginTop: '72px' }}>번호 추첨 결과</Title>
          <NumberBoxContainer style={{ marginTop: '50px' }}>
            {Array(6)
              .fill(1)
              .map((value, idx) => {
                return <NumberBox key={idx} num={randNum[idx]} />;
              })}
          </NumberBoxContainer>
        </>
      )}
    </div>
  );
}

export default App;
