import styled from 'styled-components';

import Calender from './calender';

const Wrapper = styled.article`
  width: 600px;
  height: 630px;

  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #333333;

  margin-bottom: 24px;
`;

function HomeMain() {
  return (
    <Wrapper>
      <HeaderText>반가워요 랜덤일기님! 오늘은 어떤 하루를 보내셨나요?</HeaderText>
      <Calender />
    </Wrapper>
  );
}

export default HomeMain;
