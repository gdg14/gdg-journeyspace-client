import moment from 'moment';
import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';

import calenderDate from '../../../stores/Calender';
import Weekday from './Weekday';
import Week from './Week';

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const MonthWrapper = styled.div`
  height: 100%;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

function Body() {
  const date = useReactiveVar(calenderDate);

  return (
    <Wrapper>
      <Weekday />
      <MonthWrapper>
        {Array.from(Array(6).keys()).map((item: number) => {
          const firstDayOfMonth = moment(date).startOf('month');
          const firstWeekDayOfMonth = firstDayOfMonth.get('d');

          const firstDayOfWeek = firstDayOfMonth.clone().subtract(firstWeekDayOfMonth, 'd');

          return <Week key={item} firstDayOfThisWeek={firstDayOfWeek.clone().add(item * 7, 'd')} />;
        })}
      </MonthWrapper>
    </Wrapper>
  );
}

export default Body;
