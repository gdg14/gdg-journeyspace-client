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

interface IProps {
  photos: Array<string | null>;
}

function ArticleImages({ photos }: IProps) {
  return (
    <div>
      <RandomArticleSubTitle>오늘의 사진</RandomArticleSubTitle>
      <div>
        {photos.map(
          (item) =>
            item !== null && (
              <ImageItemWrapper>
                <ImageItem alt="article_image" src={item} />
                <ImageDescription>졸린 고양이</ImageDescription>
              </ImageItemWrapper>
            ),
        )}
      </div>
    </div>
  );
}

export default ArticleImages;
