import styled from 'styled-components';
import { useEffect } from 'react';
import { useLazyQuery, useReactiveVar } from '@apollo/client';
import moment from 'moment';
import calenderDate, { setNowMonthDiaries } from '../../stores/Calender';
import { GET_DIARY_MONTH } from './gql';

import Calender from './calender';

const Wrapper = styled.article`
  width: 600px;
  height: 630px;

  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #333333;

  margin-bottom: 24px;
`;

function HomeMain() {
  const date = useReactiveVar(calenderDate);
  const [getDiaryByMonth, { data, loading }] = useLazyQuery(GET_DIARY_MONTH, {
    fetchPolicy: 'no-cache',
    variables: { yyyymm: date.format('YYYYMM') },
    onCompleted: (item) => {
      console.log(item);
      console.log(date.format('YYYYMM'));
      setNowMonthDiaries([
        ...item.getDiaryByMonth.map((item: any) => ({
          id: item.id,
          feelings: item.feelings,
          regDtm: moment(item.regDtm.substring(0, 8)),
        })),
      ]);
    },
  });

  useEffect(() => {
    getDiaryByMonth();
  }, []);

  return (
    <Wrapper>
      <HeaderText>반가워요 랜덤일기님! 오늘은 어떤 하루를 보내셨나요?</HeaderText>
      {!loading && data !== undefined && <Calender />}
    </Wrapper>
  );
}

export default HomeMain;
