import styled from 'styled-components';

import { IComment } from './interface';

import CommentItem from './CommentItem';
import CommentWarning from './CommentWarning';
import CommentInput from './CommentInput';

const Wrapper = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const CommentContentWrapper = styled.div`
  padding: 40px 30px;
`;

const CommentDivider = styled.hr`
  background-color: #cccccc;
  border: none;
  height: 1px;
  margin-bottom: 20px;
`;

interface IProps {
  isMyJourney?: boolean;

  comments: IComment[];
  diaryId: number;
}

function Body({ isMyJourney, comments, diaryId }: IProps) {
  return (
    <Wrapper>
      <CommentContentWrapper>
        {isMyJourney ? (
          comments.map((item, index) => {
            return (
              <>
                <CommentItem comment={item} />
                {comments.length - 1 > index && <CommentDivider />}
              </>
            );
          })
        ) : (
          <CommentWarning />
        )}
      </CommentContentWrapper>
      <CommentInput diaryId={diaryId} />
    </Wrapper>
  );
}

export default Body;
