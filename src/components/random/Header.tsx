import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';
import randomyJourney from '../../stores/RandomJourney';
import { Feelings, feelingToPlanet } from '../../utils/feelings';

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

const ArticleTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ArticleTitle = styled.h1`
  font-size: 24px;
  color: #333333;
  opacity: 0.4;
  letter-spacing: -0.02em;
  margin-right: 10px;
`;

const ArticleTitleBold = styled(ArticleTitle)`
  opacity: 0.9;
  margin: 0;
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

const FeelingInfoIcon = styled.img`
  width: 40px;
  height: auto;
`;

function Header() {
  const journey = useReactiveVar(randomyJourney);

  return (
    <Wrapper>
      {journey !== null ? (
        <>
          <div>
            <ArticleWriterTitle>{journey.usr.name} 님의 일기</ArticleWriterTitle>
            <ArticleTitleWrapper>
              <ArticleTitle>{journey.regDtm}</ArticleTitle>
              <ArticleTitleBold>{journey.title}</ArticleTitleBold>
            </ArticleTitleWrapper>
          </div>
          <FeelingWrapper>
            <FeelingInfoText>
              {journey.usr.name} 님은 {feelingToPlanet(journey.feelings as Feelings)}을(를) 여행중이에요.
            </FeelingInfoText>
            <FeelingInfoIcon alt="feeling_planet" src={`${process.env.PUBLIC_URL}/planet/selected/sad.png`} />
          </FeelingWrapper>
        </>
      ) : (
        <>로딩중</>
      )}
    </Wrapper>
  );
}

export default Header;
