import styled from 'styled-components';

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

const LeftWrap = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const RightWrap = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const JourneyContent = styled.div`
  flex: 1;
  padding: 10px;
  border-bottom: 1px solid black;
`
const JourneyImg = styled.div`
  flex: 1;
  padding: 10px;
`
const JourneyFeeling = styled.div`
  flex: 1
`
const JourneyFeelingDetail = styled.div`
  flex: 1
`


const TextTitle = styled.h6`
  font-weight: bold;
  font-size: 23px;
  margin-top: 25px;
`

const JourneyTop = styled.span`
    // width: 90%;
    // height: 80px;
    display: flex;
    text-align: left;
    // flex-direction: column;
`;



const ItemWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  // max-height: 680px;
  background-color: white;
`

const Height = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  margin-top: auto;
  // justify-content: center;
  flex-direction: column;
  // align-items: center;
`

const Date = styled.span`
  color: #ADADAD;
  font-size: 24px;
  font-weight: bold;
`

const Title = styled.span`
  font-size: 24px
`

const Content = styled.p`
  line-height: 30px;
  margin-top: 5px;
`

const Img = styled.img`
  width: 240px;
  height: 240px;
  margin-right: 5px;
`;

const ImgWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`


const img = [
  {
    idx: 1,
    url: 'http://image.dongascience.com/Photo/2018/12/2d5efe44bdd02f3e2ec4e99189d89d18.jpg'
  },
  {
    idx: 1,
    url: 'http://storage.enuri.info/pic_upload/knowbox2/202009/0841147752020092540507c61-d3bc-4f18-a8ff-cd36a240ca2f.jpg'
  },
  {
    idx: 1,
    url: 'http://image.dongascience.com/Photo/2018/12/2d5efe44bdd02f3e2ec4e99189d89d18.jpg'
  }
]


function JourneyDetail() {
  return (
    <Wrapper>
      <Height>
      <JourneyTop>
        <Date>7.07</Date> <Title>&nbsp;안녕</Title>
      </JourneyTop>


      <ItemWrapper>
        <LeftWrap>
        <JourneyContent>
          <TextTitle>오늘의 일기</TextTitle>
          <Content>
            오늘 도서관에 오랜만에 다녀왔다 내 스스로의 이야기에서 벗어나고 싶다는 생각을 종종 한다. 내 이야기 말고 다른 사람의 이야기에 빠지고 싶다 그럴 때 책을 읽으면 도움이 된다 잠시 내 이야기에서 벗어날 수 있고 다른 사람의 관점으로 세상을 볼 수 있다. 오늘은 애인과 다투었다. 얄밉게 깐죽거리며 까부는 것이 내 신경을 거슬렀다. 사소한 기분 나쁨에서 큰 싸움으로 번졌다. 사랑하는 사이일 수록 가까운 사이일수록 서로 상처 입히기 쉽고 져주기는 쉽지 않다. 남이라면 욕하고 말 일인데 사랑하는 사이이기 때문에 내 마음을 알아주길 원하고 내 생각을 이해 받길 원하다보니 다툼이 생긴다. 어렵다.  마음으로는 그냥 한번 져주지 한번을 안져준다고 생각을 한다. 나도 마찬가지면서.. 그렇다고 사과를 기어이 받아내도 기분이 썩 좋지 않다. 
            얄밉고 못마땅하다. 사랑하지만 다툴 땐 아껴주고 싶은 마음보다 상처 주고 싶은 마음이  더 크다. 아이러니 하다.
          </Content>
        </JourneyContent>
        
        <JourneyImg>
          <TextTitle>오늘의 사진</TextTitle>
          <ImgWrapper>
            {img.map((t, index) => {
              return <Img alt="today_img" src={t.url} />
            })}
          </ImgWrapper>
        </JourneyImg>
      </LeftWrap>
      <RightWrap>
        <JourneyFeeling>
          <h6>오늘의 기분</h6>
        </JourneyFeeling>

        <JourneyFeelingDetail>
          <h6>기쁨</h6>
        </JourneyFeelingDetail>
      </RightWrap>
      </ItemWrapper>

      </Height>
    </Wrapper>      
  );
}

export default JourneyDetail;