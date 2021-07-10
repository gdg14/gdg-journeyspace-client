import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
  background-color: white;

  box-shadow: 0px 0px 10px #c9c9c9;
`;

const JourneyWrapper = styled.article`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const JourneyInfoWrapper = styled.div`
  padding: 30px 40px;
  flex: 1;
`;

const JourneyTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 15px;
`;

const JourneyUserTitle = styled.h2`
  font-size: 16px;
  letter-spacing: -0.02em;
  opacity: 0.7;
  color: #adadad;
  margin-bottom: 5px;
`;

const JourneyPlanet = styled.img`
  width: 35px;
  height: 35px;
`;

const JourneyTitle = styled.h1`
  font-size: 24px;
  letter-spacing: -0.02em;
  opacity: 0.9;
  color: #333333;
`;

const JourneyDescription = styled.p`
  font-size: 16px;
  color: #333333;
  opacity: 0.4;
  line-height: 1.3;
  letter-spacing: -0.02em;
`;

const JourneyImage = styled.img`
  width: 250px;
  height: auto;
`;

function Body() {
  return (
    <Wrapper>
      <JourneyWrapper>
        <JourneyInfoWrapper>
          <JourneyTitleWrapper>
            <div>
              <JourneyUserTitle>핑구 님의 일기</JourneyUserTitle>
              <JourneyTitle>7.07 가평여행</JourneyTitle>
            </div>
            <JourneyPlanet alt="journey_planet" src={`${process.env.PUBLIC_URL}/planet/selected/happy.png`} />
          </JourneyTitleWrapper>
          <JourneyDescription>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam volup tua.
          </JourneyDescription>
        </JourneyInfoWrapper>
        <JourneyImage
          alt="journey_image"
          src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
        />
      </JourneyWrapper>
    </Wrapper>
  );
}

export default Body;
