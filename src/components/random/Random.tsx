import { useEffect } from 'react';
import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';
import randomJourney from '../../stores/RandomJourney';
import useRandomJourney from '../../hooks/random/useRandomJourney';

import useBoolean from '../../hooks/common/useBoolean';

import Header from './Header';
import Article from './Article';
import CommentSelect from './CommentSelect';
import CommentModal from '../commentModal/CommentModal';

const Wrapper = styled.article`
  width: 950px;
`;

function Random() {
  const { data: showingComment, setTrue: onShowComment } = useBoolean(false);
  const journey = useReactiveVar(randomJourney);
  const { getRandomJourney } = useRandomJourney();

  useEffect(() => {
    getRandomJourney();
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        <Article />
      </Wrapper>
      <CommentSelect showingComment={showingComment} onShowComment={onShowComment} />
      {showingComment && journey !== null && <CommentModal diaryId={journey.id} />}
    </>
  );
}

export default Random;
