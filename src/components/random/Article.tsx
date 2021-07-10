import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';
import randomyJourney from '../../stores/RandomJourney';

import ArticleJourney from './ArticleJourney';
import ArticleImages from './ArticleImages';

const Wrapper = styled.article`
  width: 100%;
  height: 550px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: white;

  padding: 40px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const ArticleDivider = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: #707070;
  opacity: 0.4;
  margin-bottom: 20px;
`;

function Article() {
  const journey = useReactiveVar(randomyJourney);

  return (
    <Wrapper>
      {journey !== null ? (
        <>
          <ArticleJourney content={journey.content} />
          <ArticleDivider />
          <ArticleImages photos={[journey.photo1, journey.photo2, journey.photo3]} />
        </>
      ) : (
        <>로딩중...</>
      )}
    </Wrapper>
  );
}

export default Article;
