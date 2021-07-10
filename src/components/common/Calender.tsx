import styled from 'styled-components';

export const WeekWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const DayText = styled.p<{ otherMonth?: boolean }>`
  width: 40px;
  font-size: 30px;
  color: ${({ otherMonth }) => (otherMonth ? '#bbbbbb' : '#505050')};

  text-align: center;
`;
