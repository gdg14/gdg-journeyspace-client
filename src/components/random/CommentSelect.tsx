import styled from 'styled-components';

import CommentSelectBalloons from './CommentSelectBalloons';

const Wrapper = styled.section`
  position: absolute;
  z-index: -1;

  top: 250px;
  right: 0;
`;

const AstronautImage = styled.img`
  width: 400px;
  height: auto;
`;

interface IProps {
  showingComment: boolean;
  onShowComment: () => void;
}

function CommentModal({ showingComment, onShowComment }: IProps) {
  return (
    <Wrapper>
      {!showingComment && (
        <>
          <CommentSelectBalloons onShowComment={onShowComment} />
          <AstronautImage alt="astronaut_image" src={`${process.env.PUBLIC_URL}/astronaut.png`} />
        </>
      )}
    </Wrapper>
  );
}

export default CommentModal;
