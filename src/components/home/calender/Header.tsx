import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';

import calenderDate, { selectCalenderDate } from '../../../stores/Calender';

const DateTitle = styled.h1`
  text-align: center;
  padding: 22px 0px;
  font-size: 32px;
  font-weight: bold;

  cursor: pointer;

  margin-bottom: 20px;
`;

function Header() {
  const date = useReactiveVar(calenderDate);

  return (
    <DateTitle
      onClick={() => {
        const selectedDate = date.clone().subtract(1, 'month');

        selectCalenderDate(selectedDate);
      }}
    >
      {date.format('YYYY.MM')}
    </DateTitle>
  );
}

export default Header;
