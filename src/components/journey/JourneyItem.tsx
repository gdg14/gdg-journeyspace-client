import styled from 'styled-components';

const JourneyCard = styled.article`
width: 100%;
height: 200px;
background-color: white;
margin: 15px;
box-shadow: 5px 5px 5px rgba(0,0,0,.2);
`;

const CardWrapper = styled.div`
  display: flex;
`;

const CardText = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
`;

const CardImg = styled.div`
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 200px;
`;

const Img = styled.img`
  width: 100%;
`;

const CardTop = styled.div`
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 200px;
`;

const CardContents = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100px;
  margin-top: 15px;
  line-height: 20px;
`;

const Date = styled.span`
  color: #ADADAD;
  font-size: 24px;
  font-weight: bold;
`

const Title = styled.span`
  font-size: 24px
`

function JourneyItem() {
  return (
    <JourneyCard>
      <CardWrapper>
        <CardText>
          <CardTop>
            <Date>7.07</Date> <Title>가평여행</Title>
            </CardTop>
          <CardContents>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volup tua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gu ber gren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am
          </CardContents>
        </CardText>
        <CardImg>
        <Img alt="write_icon" src='http://image.dongascience.com/Photo/2018/12/2d5efe44bdd02f3e2ec4e99189d89d18.jpg' />
        </CardImg>
      </CardWrapper>
    </JourneyCard>      
  );
}

export default JourneyItem;