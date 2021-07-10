import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ArticleWriterTitle = styled.h2`
  font-size: 16px;
  color: #333333;
  opacity: 0.5;
  letter-spacing: -0.02em;

  margin-bottom: 3px;
`;

const ArticleTitle = styled.h1`
  font-size: 24px;
  color: #333333;
  opacity: 0.9;
  letter-spacing: -0.02em;
`;

const FeelingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 40px;
`;

const FeelingInfoText = styled.p`
  font-size: 16px;
  color: #636363;

  margin-right: 20px;
`;

const FeelingInfoIcon = styled.img``;

function Header() {
  return (
    <Wrapper>
      <div>
        <ArticleWriterTitle>스펀지밥 님의 일기</ArticleWriterTitle>
        <ArticleTitle>7.07 헬스장</ArticleTitle>
      </div>
      <FeelingWrapper>
        <FeelingInfoText>스펀지밥 님은 목성을 여행중이에요.</FeelingInfoText>
        <FeelingInfoIcon alt="feeling_planet" src={`${process.env.PUBLIC_URL}/planet/unselected/sad.svg`} />
      </FeelingWrapper>
    </Wrapper>
  );
}

export default Header;
