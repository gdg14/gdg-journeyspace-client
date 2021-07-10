import styled from 'styled-components';

import { RandomArticleSubTitle } from '../common/title';

const Wrapper = styled.article`
  margin-bottom: 16px;
`;

const ArticleDescription = styled.p`
  font-size: 14px;
  color: #333333;
  opacity: 0.8;
  letter-spacing: -0.02em;
  line-height: 1.5;
`;

interface IProps {
  content: string;
}

function ArticleJourney({ content }: IProps) {
  return (
    <Wrapper>
      <RandomArticleSubTitle>오늘의 일기</RandomArticleSubTitle>
      <ArticleDescription>{content}</ArticleDescription>
    </Wrapper>
  );
}

export default ArticleJourney;
