import { makeVar } from '@apollo/client';

export interface IRandomJourney {
  id: number;
  usr: {
    id: string;
    name: string;
  };
  title: string;
  content: string;
  feelings: string;
  photo1: string;
  photo2: string;
  photo3: string;
  category: string;
  publicYN: string;
  regDtm: string;
}

const randomyJourney = makeVar<IRandomJourney | null>(null);

export const setRandomJourney = (newJourney: IRandomJourney) => {
  randomyJourney(newJourney);
};

export default randomyJourney;
