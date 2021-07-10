import moment from 'moment';

export interface IDiaryByMonth {
  id: number;
  feelings: string;
  regDtm: moment.Moment;
}
