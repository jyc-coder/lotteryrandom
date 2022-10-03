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

function getRank(
  resNum: [number, number, number, number, number, number, number],
  num: [number, number, number, number, number, number],
) {
  const isBonus = num.includes(resNum[6]);

  resNum.splice(6, 1);

  let matchedNum = 0;

  for (const value of num) {
    if (resNum.includes(value)) matchedNum++;
  }
  switch (matchedNum) {
    case 6:
      return '축하해요!! 1등입니다!';
    case 5:
      return isBonus ? '2등입니다! 그래도 괜찮네요' : '3등입니다';
    case 4:
      return '4등입니다';
    case 3:
      return '5등입니다';
    default:
      return '안타깝지만, 낙첨되셨습니다.';
  }
}

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
          <Title style={{ marginTop: '45px' }}>
            {getRank([...num], [...randNum])}
          </Title>
        </>
      )}
    </div>
  );
}

export default App;
