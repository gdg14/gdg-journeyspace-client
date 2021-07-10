import styled from 'styled-components';

import Header from './Header';
import Body from './Body';

import MonthSelector from '../monthSelector';

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  background-color: white;

  box-shadow: 0px 0px 10px #949494;

  padding: 0px 50px;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

function Calender() {
  return (
    <Wrapper>
      <Header />
      <Body />
      <MonthSelector />
    </Wrapper>
  );
}

export default Calender;
