import styled from 'styled-components';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';

const Wrapper = styled.article`
  z-index: 3;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 30px;
`;

const LogIconWrapper = styled.div`
  border: 2px solid #707070;
  border-radius: 100%;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;

  margin-right: 20px;
`;

const LogContentWrapper = styled.div`
  flex: 1;
`;

const LogTopContentWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 10px;
`;

const LogInfoWrapper = styled.div`
  flex: 1;
`;

const LogInfoTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3px;
`;

const LogInfoTitle = styled.h1`
  font-size: 16px;
`;

const LogInfoTitleBold = styled(LogInfoTitle)`
  font-weight: bold;
`;

const LogInfoDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogInfoDate = styled.p`
  font-size: 13px;
`;

const LogInfoTime = styled(LogInfoDate)`
  font-weight: bold;
  margin-right: 5px;
`;

const LogTitle = styled.h1`
  font-size: 16px;
`;

const LogDescription = styled.p`
  background-color: #f1f1f1;
  font-size: 14px;
  letter-spacing: -0.02em;
  line-height: 1.5;
  padding: 7px;
`;

interface IProps {
  isLoveIcon?: boolean;
  description?: string;
}

function ActivityLogItem({ isLoveIcon, description }: IProps) {
  return (
    <Wrapper>
      <LogIconWrapper>{isLoveIcon ? <FavoriteIcon /> : <ChatIcon />}</LogIconWrapper>
      <LogContentWrapper>
        <LogTopContentWrapper>
          <LogInfoWrapper>
            <LogInfoTitleWrapper>
              <LogInfoTitleBold>스펀지밥{` `}</LogInfoTitleBold>
              <LogInfoTitle>님이</LogInfoTitle>
              <LogInfoTitleBold>좋아요</LogInfoTitleBold>
              <LogInfoTitle>님이 눌렀습니다.</LogInfoTitle>
            </LogInfoTitleWrapper>
            <LogInfoDateWrapper>
              <LogInfoTime>15:30</LogInfoTime>
              <LogInfoDate> | 7월 6일</LogInfoDate>
            </LogInfoDateWrapper>
          </LogInfoWrapper>
          <LogTitle>[7.07 헬스장]</LogTitle>
        </LogTopContentWrapper>
        {description !== undefined && <LogDescription>{description}</LogDescription>}
      </LogContentWrapper>
    </Wrapper>
  );
}

export default ActivityLogItem;
