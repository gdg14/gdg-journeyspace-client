import styled from 'styled-components';

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
  return (
    <Wrapper>
      <ArticleJourney />
      <ArticleDivider />
      <ArticleImages />
    </Wrapper>
  );
}

export default Article;
