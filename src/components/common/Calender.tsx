import styled from 'styled-components';

export const WeekWrapper = styled.div<{ isWeekday?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-around;

  margin-bottom: ${({ isWeekday }) => (isWeekday ? 40 : 30)}px;
`;

export const DayText = styled.p<{ otherMonth?: boolean }>`
  width: 40px;
  font-size: 22px;
  color: ${({ otherMonth }) => (otherMonth ? '#AAAAAA' : '#000000')};

  text-align: center;
`;
