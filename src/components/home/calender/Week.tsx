import moment from 'moment';
import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';

import calenderDate from '../../../stores/Calender';
import { WeekWrapper, DayText } from '../../common/Calender';

const DayWrapper = styled.div`
  position: relative;

  z-index: 1;
`;

const TodayCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  border: 1px solid black;
  border-radius: 100%;
  z-index: 2;
`;

interface IProps {
  firstDayOfThisWeek: moment.Moment;
}

function Week({ firstDayOfThisWeek }: IProps) {
  const date = useReactiveVar(calenderDate);

  return (
    <WeekWrapper>
      {Array.from(Array(7).keys()).map((item) => {
        const day = moment(firstDayOfThisWeek).add(item, 'd');

        return (
          <DayWrapper>
            <DayText key={item} otherMonth={!date.isSame(day, 'month')}>
              {day.format('D')}
            </DayText>
            {day.isSame(moment(), 'day') && <TodayCircle />}
          </DayWrapper>
        );
      })}
    </WeekWrapper>
  );
}

export default Week;
