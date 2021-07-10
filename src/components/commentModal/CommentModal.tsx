import styled from 'styled-components';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMMENT_LIST } from './gql';

import Header from './Header';
import Body from './Body';
import { IComment } from './interface';

const Wrapper = styled.div`
  position: absolute;
  right: 0;

  width: 340px;
  height: 700px;

  background-color: white;

  display: flex;
  flex-direction: column;
`;

const ModalDivider = styled.hr`
  background-color: #cccccc;
  opacity: 0.7;
  border: none;
  height: 2px;
`;

interface IProps {
  diaryId: number;
  isMyJourney?: boolean;
}

function CommentModal({ isMyJourney, diaryId }: IProps) {
  const [comments, setComments] = useState<IComment[]>([]);

  const { loading } = useQuery(GET_COMMENT_LIST, {
    fetchPolicy: 'no-cache',
    variables: {
      diaryId,
    },
    onCompleted: (data) => {
      if (data !== undefined && data.getComments !== undefined) {
        setComments([...data.getComments]);
      }
    },
  });

  return (
    <Wrapper>
      <Header />
      <ModalDivider />
      {!loading && <Body comments={comments} isMyJourney={isMyJourney} diaryId={diaryId} />}
    </Wrapper>
  );
}

export default CommentModal;
