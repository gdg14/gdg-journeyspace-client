import styled from 'styled-components';

import ActivityLogItem from './ActivityLogItem';

const Wrapper = styled.div`
  position: relative;
  background-color: white;

  display: flex;
  flex: 1;

  padding: 55px 55px;

  box-shadow: 0px 0px 10px #a5a5a5;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #b9b9b9;
  }
`;

const LogTimeLine = styled.div`
  z-index: 0;
  position: absolute;
  margin-left: 20px;

  border-left: 2px solid #b1b1b1;
  height: 100%;
  opacity: 0.5;
`;

const ActivityLogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function Body() {
  return (
    <Wrapper>
      <LogTimeLine />
      <ActivityLogWrapper>
        <ActivityLogItem isLoveIcon />
        <ActivityLogItem description="저도 운동은 며칠만 해도 정말 못하겠더구요 ㅠㅠ 꾸준하기 주요한데 일 끝나고 간다는게 정말 말처럼 되질 않아요..." />
      </ActivityLogWrapper>
    </Wrapper>
  );
}

export default Body;
