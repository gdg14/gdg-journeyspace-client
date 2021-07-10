import styled from 'styled-components';

import { RandomArticleSubTitle } from '../common/title';

const ImageItemWrapper = styled.div``;

const ImageItem = styled.img`
  width: 185px;
  height: auto;

  margin-bottom: 20px;
`;

const ImageDescription = styled.p`
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #333333;
`;

function ArticleImages() {
  return (
    <div>
      <RandomArticleSubTitle>오늘의 사진</RandomArticleSubTitle>
      <div>
        <ImageItemWrapper>
          <ImageItem
            alt="article_image"
            src="data:image/jpeg;base64,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"
          />
          <ImageDescription>졸린 고양이</ImageDescription>
        </ImageItemWrapper>
      </div>
    </div>
  );
}

export default ArticleImages;
