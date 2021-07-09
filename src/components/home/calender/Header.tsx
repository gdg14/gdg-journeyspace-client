import styled from 'styled-components';
import moment from 'moment';

const DateTitle = styled.h1`
  text-align: center;
  padding: 20px;
  font-size: 40px;

  cursor: pointer;
`;

interface IProps {
  nowDate: moment.Moment;
  selectDate: (selectedDate: moment.Moment) => void;
}

function Header({ nowDate, selectDate }: IProps) {
  return <DateTitle onClick={() => selectDate(moment())}>{nowDate.format('yyyy.MM')}</DateTitle>;
}

export default Header;
