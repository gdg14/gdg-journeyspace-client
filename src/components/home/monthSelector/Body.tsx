import { useReactiveVar } from '@apollo/client';
import moment from 'moment';
import styled from 'styled-components';
import calenderDate, { selectCalenderDate } from '../../../stores/Calender';

const Wrapper = styled.div`
  display: flex;
  flex: 1;

  justify-content: space-around;
  flex-flow: row wrap;
  justify-content: center;
`;

const MonthWrapper = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex: 0 1 30%;
  cursor: pointer;
  font-size: 18px;

  color: ${({ selected }) => (selected ? '#000000' : '#AAAAAA')};
`;

interface IProps {
  selectedDate: moment.Moment;
}

const monthArray = Array.from(Array(12).keys());

function Body({ selectedDate }: IProps) {
  const date = useReactiveVar(calenderDate);

  const selectMonth = (selectedMonth: moment.Moment) => {
    selectCalenderDate(selectedMonth);
  };

  return (
    <Wrapper>
      {monthArray.map((item) => {
        const nowDate = selectedDate.clone().set('month', item);

        const displayMonth = item + 1;

        return (
          <MonthWrapper onClick={() => selectMonth(nowDate)} selected={nowDate.isSame(date, 'month')}>
            {displayMonth < 10 ? `0${displayMonth}` : displayMonth}
          </MonthWrapper>
        );
      })}
    </Wrapper>
  );
}

export default Body;
