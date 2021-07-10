import { makeVar } from '@apollo/client';
import moment from 'moment';

const calenderDate = makeVar(moment());

export const selectCalenderDate = (selectedDate: moment.Moment) => {
  calenderDate(selectedDate);
};

export default calenderDate;
