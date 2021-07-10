import styled from 'styled-components';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const JourneyCard = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;
  margin-top: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;

const CardWrapper = styled.div`
  display: flex;
`;

const CardText = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  align-items: center;
  justify-content: center;
`;

const CardImg = styled.div`
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 250px;
`;

const Img = styled.img`
  width: 100%;
  height: 250px;
`;

const CardTop = styled.div`
  flex: 1.5;
  overflow: hidden;
  width: 100%;
  height: 250px;
  margin-top: 20px;
`;

const CardContents = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100px;
  margin-top: 15px;
  line-height: 25px;
`;

const Date = styled.span`
  color: #adadad;
  font-size: 24px;
  font-weight: bold;
`;

const Title = styled.span`
  font-size: 24px;
`;

const Icon = styled.div`
  text-align: right;
  margin-top: -20px;
`;

const FeelingImg = styled.img`
  width: 30px;
  height: 30px;
`;

interface Journey {
  idx: number;
  title: string;
  contents: string;
  date: string;
}

const JourneyItem = (temp: Journey) => {
  const item: Journey = temp;
  const history = useHistory();
  return (
    <JourneyCard
      onClick={() => {
        history.push(`/journey/${item.idx}`);
      }}
    >
      <CardWrapper>
        <CardText>
          <CardTop>
            <Date>{moment(item.date).format('MM.DD')}</Date> <Title>&nbsp;{item.title}</Title>
            <Icon>
              <FeelingImg alt="write_icon" src={`${process.env.PUBLIC_URL}/planet/selected/happy.png`} />
            </Icon>
          </CardTop>
          <CardContents key={item.idx}>{item.contents}</CardContents>
        </CardText>
        <CardImg>
          <Img
            alt="write_icon"
            src="http://image.dongascience.com/Photo/2018/12/2d5efe44bdd02f3e2ec4e99189d89d18.jpg"
          />
        </CardImg>
      </CardWrapper>
    </JourneyCard>
  );
};

export default JourneyItem;
