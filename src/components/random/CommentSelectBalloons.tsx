import styled from 'styled-components';

import FavoriteIcon from '@material-ui/icons/Favorite';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  position: absolute;
  top: -80px;
  left: 150px;
`;

const Balloon = styled.button`
  width: 170px;
  height: 50px;
  border: none;

  font-size: 18px;
  letter-spacing: -0.02em;
  opacity: 0.9;

  padding: 10px 20px;
  background-color: white;
  margin-bottom: 20px;

  color: #333333;
  opacity: 0.9;
  letter-spacing: -0.02em;

  border-radius: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const CommentBalloon = styled(Balloon)`
  margin: 0;
`;

interface IProps {
  onShowComment: () => void;
}

function CommentSelectBalloons({ onShowComment }: IProps) {
  return (
    <Wrapper>
      <Balloon>
        좋아요
        <FavoriteIcon />
      </Balloon>
      <CommentBalloon onClick={onShowComment}>댓글 남기기</CommentBalloon>
    </Wrapper>
  );
}

export default CommentSelectBalloons;
