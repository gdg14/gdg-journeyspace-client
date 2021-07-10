import { WeekWrapper, DayText } from '../../common/Calender';

const weekdayList = [
  { id: 0, name: '일' },
  { id: 1, name: '월' },
  { id: 2, name: '화' },
  { id: 3, name: '수' },
  { id: 4, name: '목' },
  { id: 5, name: '금' },
  { id: 6, name: '토' },
] as const;

function Weekday() {
  return (
    <WeekWrapper>
      {weekdayList.map((item) => (
        <DayText key={item.id}>{item.name}</DayText>
      ))}
    </WeekWrapper>
  );
}

export default Weekday;
