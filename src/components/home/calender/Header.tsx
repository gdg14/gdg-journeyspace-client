import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ArrowIconButton } from '../../common/Calender';
import calenderDate, { selectCalenderDate } from '../../../stores/Calender';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
  padding: 22px 0px;
`;

const DateTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

function Header() {
  const date = useReactiveVar(calenderDate);

  return (
    <Wrapper>
      <ArrowIconButton onClick={() => selectCalenderDate(date.clone().subtract(1, 'M'))}>
        <ChevronLeftIcon />
      </ArrowIconButton>
      <DateTitle>{date.format('YYYY.MM')}</DateTitle>
      <ArrowIconButton onClick={() => selectCalenderDate(date.clone().add(1, 'M'))}>
        <ChevronRightIcon />
      </ArrowIconButton>
    </Wrapper>
  );
}

export default Header;
