import styled from 'styled-components';

import Header from './Header';
import Body from './Body';

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

function CommentModal() {
  return (
    <Wrapper>
      <Header />
      <ModalDivider />
      <Body isMyJourney={false} />
    </Wrapper>
  );
}

export default CommentModal;
