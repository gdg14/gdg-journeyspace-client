import styled from 'styled-components';

import Calender from './calender';

const Wrapper = styled.article`
  width: 70%;
  height: 85%;
`;

const HeaderText = styled.h1`
  font-size: 28px;
  text-align: center;
  color: #505050;

  height: 10%;
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
