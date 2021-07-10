import { makeVar } from '@apollo/client';
import moment from 'moment';

export interface IDiaryByMonth {
  id: number;
  feelings: string;
  regDtm: moment.Moment;
}

const calenderDate = makeVar(moment());
export const nowMonthDiaries = makeVar<IDiaryByMonth[]>([]);

export const selectCalenderDate = (selectedDate: moment.Moment) => {
  calenderDate(selectedDate);
};

export const setNowMonthDiaries = (newDiaries: IDiaryByMonth[]) => {
  nowMonthDiaries([...newDiaries]);
};

export default calenderDate;
