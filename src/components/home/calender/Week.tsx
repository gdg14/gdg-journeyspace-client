import moment from 'moment';
import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import calenderDate, { nowMonthDiaries } from '../../../stores/Calender';
import { WeekWrapper, DayText } from '../../common/Calender';

const DayWrapper = styled.div`
  position: relative;
`;

const TodayCircle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;

  border: 2.5px solid black;
  border-radius: 100%;

  top: -15px;
  left: -4px;
`;

const DayPlanet = styled.img`
  position: absolute;
  top: -25px;
  left: -14px;

  width: 70px;
  height: 70px;

  opacity: 0.4;
  cursor: pointer;
`;

interface IProps {
  firstDayOfThisWeek: moment.Moment;
}

function Week({ firstDayOfThisWeek }: IProps) {
  const date = useReactiveVar(calenderDate);
  const diaries = useReactiveVar(nowMonthDiaries);
  const history = useHistory();

  return (
    <WeekWrapper>
      {Array.from(Array(7).keys()).map((item) => {
        const day = moment(firstDayOfThisWeek).add(item, 'd');
        const diary = diaries.filter((item) => item.regDtm.isSame(day, 'day'));

        return (
          <DayWrapper key={item}>
            <DayText otherMonth={!date.isSame(day, 'month')}>{day.format('D')}</DayText>
            {day.isSame(moment(), 'day') && <TodayCircle />}
            {diary.length > 0 && (
              <DayPlanet
                onClick={() => history.push(`/journey/${diary[0].id}`)}
                alt={`diary_planet_${item}`}
                src={`${process.env.PUBLIC_URL}/planet/selected/${diary[0].feelings}.png`}
              />
            )}
          </DayWrapper>
        );
      })}
    </WeekWrapper>
  );
}

export default Week;
