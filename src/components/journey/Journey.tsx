import styled from 'styled-components';
import JourneyItem from './JourneyItem';

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const JourneyTop = styled.article`
  width: 90%;
  height: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const JourneyCardList = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 90%;
  max-height: 680px;
`;

const Order = styled.div`
  flex: 1;
  text-align: right;
`;

const Write = styled.div`
  flex: 1;
  text-align: left;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const elements = [
  {
    idx: 1,
    title: '가평여행',
    date: '2021-07-07',
    contents:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volup tua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gu ber gren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am',
  },
  {
    idx: 2,
    title: '가평여행',
    date: '2021-07-07',
    contents:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volup tua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gu ber gren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am',
  },
  {
    idx: 3,
    title: '가평여행',
    date: '2021-07-07',
    contents:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volup tua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gu ber gren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am',
  },
  {
    idx: 4,
    title: '가평여행',
    date: '2021-07-07',
    contents:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volup tua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gu ber gren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am',
  },
  {
    idx: 5,
    title: '가평여행',
    date: '2021-07-07',
    contents:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volup tua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gu ber gren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am',
  },
];

const StyledButton = styled.button`
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  backgroud: white;
  width: 90px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const WriteIcon = styled.img`
  width: 50px;
`;

const WriteText = styled.span`
  font-size: 18px;
`;

function Journey() {
  return (
    <Wrapper>
      <JourneyTop>
        <Order>
          <StyledButton>정렬</StyledButton>
        </Order>
        <Write>
          <WriteIcon alt="write_icon" src={`${process.env.PUBLIC_URL}/icon/add_btn.png`} />
          <WriteText
            onClick={() => {
              window.location.replace(`/write-journey`);
            }}
          >
            오늘 일기쓰기
          </WriteText>
        </Write>
      </JourneyTop>
      <JourneyCardList>
        {elements.map((t, index) => {
          return <JourneyItem key={t.idx} idx={t.idx} title={t.title} contents={t.contents} date={t.date} />;
        })}
      </JourneyCardList>
    </Wrapper>
  );
}

export default Journey;
