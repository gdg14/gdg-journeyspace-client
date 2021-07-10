import moment from 'moment';
import { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Body from './Body';

const Wrapper = styled.div`
  position: absolute;
  background-color: white;

  top: 0px;
  right: -200px;

  width: 150px;
  height: 230px;

  box-shadow: 0px 0px 10px #949494;
  padding: 10px;

  display: flex;
  flex-direction: column;
`;

function MonthSelector() {
  const [selectedDate, setSelectedDate] = useState(moment().clone());

  const increaseYear = () => {
    setSelectedDate(selectedDate.clone().add(1, 'y'));
  };

  const decreaseYear = () => {
    setSelectedDate(selectedDate.clone().subtract(1, 'y'));
  };

  return (
    <Wrapper>
      <Header selectedDate={selectedDate} increaseYear={increaseYear} decreaseYear={decreaseYear} />
      <Body selectedDate={selectedDate} />
    </Wrapper>
  );
}

export default MonthSelector;
