import { useState } from 'react';
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Wrapper = styled.div`
  height: 100px;
  padding: 10px 17px;

  box-shadow: 0px 0px 10px #d6d6d6;
  display: flex;
  justify-content: space-around;
`;

const IconWrapper = styled.button`
  width: 35px;
  height: 35px;

  border: none;
  border-radius: 100%;
  background-color: white;
  box-shadow: 0px 0px 5px #e4e4e4;

  cursor: pointer;
`;

const CommentTextInput = styled.input`
  height: 35px;
  background-color: #dddddd;
  padding: 10px 20px;
  letter-spacing: -0.07em;
  opacity: 0.4;
  border: none;
  color: #000000;
`;

function CommentInput() {
  const [comment, setComment] = useState('');

  const onChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <Wrapper>
      <IconWrapper>
        <AddIcon />
      </IconWrapper>
      <CommentTextInput value={comment} onChange={onChangeComment} placeholder="메시지를 입력하세요." />
      <IconWrapper>
        <ArrowUpwardIcon />
      </IconWrapper>
    </Wrapper>
  );
}

export default CommentInput;
