import styled from 'styled-components';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import moment from 'moment';

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

const IconButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

interface IProps {
  selectedDate: moment.Moment;
  increaseYear: () => void;
  decreaseYear: () => void;
}

function Header({ selectedDate, increaseYear, decreaseYear }: IProps) {
  return (
    <Wrapper>
      <IconButton onClick={decreaseYear}>
        <ChevronLeftIcon />
      </IconButton>
      <YearTitle>{selectedDate.format('YYYY')}</YearTitle>
      <IconButton onClick={increaseYear}>
        <ChevronRightIcon />
      </IconButton>
    </Wrapper>
  );
}

export default Header;
