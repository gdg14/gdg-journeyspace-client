import { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';

import AddIcon from '@material-ui/icons/Add';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import useBoolean from '../../hooks/common/useBoolean';
import { SAVE_COMMENT } from './gql';

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

interface IProps {
  diaryId: number;
}

function CommentInput({ diaryId }: IProps) {
  const [comment, setComment] = useState('');
  const [commentSubmitRequest] = useMutation(SAVE_COMMENT);
  const { data: loading, setFalse, setTrue } = useBoolean(false);

  const onChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onSubmit = async ({ usrId, diaryId, content }: { usrId: string; diaryId: number; content: string }) => {
    setTrue();

    const { errors } = await commentSubmitRequest({
      variables: {
        usrId,
        diaryId,
        content,
      },
    });

    setFalse();

    if (errors !== undefined) {
      alert('글 작성에 실패했습니다!');
    } else {
      alert('댓글 작성에 성공했습니다!');
    }
  };

  return (
    <Wrapper>
      <IconWrapper>
        <AddIcon />
      </IconWrapper>
      <CommentTextInput value={comment} onChange={onChangeComment} placeholder="메시지를 입력하세요." />
      <IconWrapper onClick={!loading ? () => onSubmit({ usrId: 'test', diaryId, content: comment }) : undefined}>
        <ArrowUpwardIcon />
      </IconWrapper>
    </Wrapper>
  );
}

export default CommentInput;
