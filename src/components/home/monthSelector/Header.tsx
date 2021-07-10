import styled from 'styled-components';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import moment from 'moment';
import { ArrowIconButton } from '../../common/Calender';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 10px;
`;

const YearTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

interface IProps {
  selectedDate: moment.Moment;
  increaseYear: () => void;
  decreaseYear: () => void;
}

function Header({ selectedDate, increaseYear, decreaseYear }: IProps) {
  return (
    <Wrapper>
      <ArrowIconButton onClick={decreaseYear}>
        <ChevronLeftIcon />
      </ArrowIconButton>
      <YearTitle>{selectedDate.format('YYYY')}</YearTitle>
      <ArrowIconButton onClick={increaseYear}>
        <ChevronRightIcon />
      </ArrowIconButton>
    </Wrapper>
  );
}

export default Header;
