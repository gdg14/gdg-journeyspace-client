import { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Header from './Header';
import Body from './Body';

const Wrapper = styled.div`
  width: 100%;
  height: 90%;

  background-color: white;

  box-shadow: 0px 0px 10px #949494;

  padding: 0px 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Calender() {
  const [nowDate, setNowDate] = useState(moment());

  const selectDate = (selectedDate: moment.Moment) => {
    setNowDate(moment(selectedDate));
  };

  return (
    <Wrapper>
      <Header nowDate={nowDate} selectDate={selectDate} />
      <Body />
    </Wrapper>
  );
}

export default Calender;
