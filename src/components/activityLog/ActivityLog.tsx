import styled from 'styled-components';

import Header from './Header';
import Body from './Body';

const Wrapper = styled.article`
  width: 700px;
  height: 600px;

  display: flex;
  flex-direction: column;
`;

function ActivityLog() {
  return (
    <Wrapper>
      <Header name="랜덤일기" />
      <Body />
    </Wrapper>
  );
}

export default ActivityLog;
