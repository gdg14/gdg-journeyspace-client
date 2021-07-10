import moment from 'moment';
import { WeekWrapper, DayText } from '../../common/Calender';

interface IProps {
  nowDate: moment.Moment;
  firstDayOfThisWeek: moment.Moment;
}

function Week({ nowDate, firstDayOfThisWeek }: IProps) {
  return (
    <WeekWrapper>
      {Array.from(Array(7).keys()).map((item) => {
        const day = moment(firstDayOfThisWeek).add(item, 'd');

        return (
          <DayText key={item} otherMonth={!nowDate.isSame(day, 'month')}>
            {day.format('D')}
          </DayText>
        );
      })}
    </WeekWrapper>
  );
}

export default Week;
