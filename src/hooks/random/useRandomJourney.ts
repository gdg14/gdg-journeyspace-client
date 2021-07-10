import { useLazyQuery } from '@apollo/client';
import moment from 'moment';
import { GET_RANDOM_JOURNEY } from '../../components/random/gql';
import { setRandomJourney } from '../../stores/RandomJourney';

export default function useRandomJourney() {
  const [getRandomJourney] = useLazyQuery(GET_RANDOM_JOURNEY, {
    fetchPolicy: 'no-cache',
    onCompleted: (item) => {
      if (item !== undefined && item.getDiaryRandom !== undefined) {
        const joureny = item.getDiaryRandom;

        setRandomJourney({
          ...joureny,
          usr:
            joureny.usr === null
              ? {
                  id: 0,
                  name: '익명',
                }
              : joureny.usr,
          regDtm: moment(joureny.regDtm.substring(0, 8)).format('M.DD'),
        });
      }
    },
  });

  return {
    getRandomJourney,
  };
}
