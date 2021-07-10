import styled from 'styled-components';

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
  isMyJourney: boolean;
}

function Body({ isMyJourney }: IProps) {
  return (
    <Wrapper>
      <CommentContentWrapper>
        {/* 내 코멘트 */}
        <CommentItem />
        <CommentDivider />
        {isMyJourney ? <CommentItem /> : <CommentWarning />}
      </CommentContentWrapper>
      <CommentInput />
    </Wrapper>
  );
}

export default Body;
