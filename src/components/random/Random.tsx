import styled from 'styled-components';

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

  return (
    <>
      <Wrapper>
        <Header />
        <Article />
      </Wrapper>
      <CommentSelect showingComment={showingComment} onShowComment={onShowComment} />
      {showingComment && <CommentModal />}
    </>
  );
}

export default Random;
