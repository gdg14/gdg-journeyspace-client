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
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const RightWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
`;

const JourneyContent = styled.div`
  // flex: 1;
  padding: 10px 35px;
  border-bottom: 1px solid gray;
`;
const JourneyImg = styled.div`
  // flex: 1;
  padding: 10px 35px;
  border-bottom: 1px solid gray;
`;
const JourneyFeeling = styled.div`
  flex: 1;
  border-bottom: 1px solid gray;
  width: 100%;
  text-align: center;
  align-item: center;
`;
const JourneyFeelingDetail = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-item: center;
  flex-direction: column;
`;

const TextTitle = styled.h6`
  font-weight: bold;
  font-size: 20px;
  margin-top: 25px;
`;

const JourneyTop = styled.span`
  display: flex;
`;

const ItemWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
`;

const Height = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  margin-top: auto;
  flex-direction: column;
`;

const Date = styled.span`
  color: #adadad;
  font-size: 20px;
  font-weight: bold;
`;

const TitleInput = styled.input`
  font-size: 20px;
  background-color: transparent;
  border: none;
  margin-left: 5px;
  // margin-top: 1px;
`;

const Content = styled.p`
  line-height: 30px;
  margin-top: 10px;
  font-size: 14px;
`;

const ImgUpload = styled.div`
  width: 190px;
  height: 140px;
  margin-right: 5px;
  display: flex;
  background-color: #f6f6f6;
  text-align: center;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 100%
  margin-top: 10px;
`;
const PlanetImgWrapper = styled.div`
  display: flex;
  width: 100%;
  align-item: center;
  text-align: center;
  flex-wrap: wrap;
  // padding: 25px;
`;

const ImgText = styled.span`
  margin-top: 5px;
  font-size: 14px;
`;

const PlanetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-item: center;
  margin: 6px;
  margin-top: 10px;
  margin-left: 15px;
  padding: 5px;
`;

const PlanetImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  display: block;
  margin: 0 auto;
`;

const TodayImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-item: center;
  margin: 6px;
  margin-top: 10px;
  // padding: 5px;
`;

const PlanetSelectImg = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 5px;
  display: block;
  margin: 0 auto;
`;

const PlanetSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;

const PlanetSelectTitle = styled.h4`
  font-weight: bold;
  font-size: 18px;
  margin-top: 15px;
`;
const PlanetSelectContent = styled.p`
  flex: 1;
  width: 80%;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
  font-size: 12px;
  justify-content: center;
  color: #818181;
`;

const TextTitleFeeling = styled.h6`
  font-weight: bold;
  font-size: 23px;
  margin-top: 25px;
  text-align: center;
`;

const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;

const ContentTextArea = styled.textarea`
  background-color: transparent;
  border: none;
  width: 100%;
  font-size: 15px;
  margin-top: 10px;
  max-height: 200px;
`;

const JourneyHr = styled.hr`
  border: solid 0.1px darkgray;
  width: 80px;
`;

const Write = styled.div`
  flex: 1;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WriteIcon = styled.img`
  width: 50px;
`;

const WriteText = styled.span`
  font-size: 18px;
`;

const ImgTextInput = styled.input`
  margin-top: 5px;
  font-size: 14px;
  background-color: transparent;
  border: none;
`;

const img = [
  {
    idx: 1,
    url: 'http://image.dongascience.com/Photo/2018/12/2d5efe44bdd02f3e2ec4e99189d89d18.jpg',
    text: '한마디 코멘ㅌ',
  },
  {
    idx: 1,
    url: 'http://storage.enuri.info/pic_upload/knowbox2/202009/0841147752020092540507c61-d3bc-4f18-a8ff-cd36a240ca2f.jpg',
    text: '나만 없어 고양이',
  },
  {
    idx: 1,
    url: 'http://image.dongascience.com/Photo/2018/12/2d5efe44bdd02f3e2ec4e99189d89d18.jpg',
    text: '나는 잇지롱',
  },
];

const PlanetlList = [
  {
    text: '기쁨',
    val: 'happy',
  },
  {
    text: '고마움',
    val: 'thanks',
  },
  {
    text: '안심',
    val: 'relief',
  },
  {
    text: '분노',
    val: 'anger',
  },
  {
    text: '증오',
    val: 'hate',
  },
  {
    text: '짜증',
    val: 'annoying',
  },
  {
    text: '슬픔',
    val: 'sad',
  },
  {
    text: '후회',
    val: 'regret',
  },
  {
    text: '실망',
    val: 'disappoint',
  },
];

const PublicBtnList = [
  {
    text: '작성한 일기를 공개해요',
    val: true,
    selected: true,
  },
  {
    text: '작성한 일기를 비공개해요',
    val: false,
    selected: false,
  },
];

const JourneyPublic = styled.div`
  padding: 10px 35px;
`;

const PublicBtnWrapper = styled.div`
  display: flex;
`;

const PublicBtn = styled.button`
  // font-size: 1rem;
  line-height: 1.5;
  border: 1px solid #ffdd00;
  color: gray;
  background-color: #ffdd00;
  width: 200px;
  height: 60px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

function WriteJourney() {
  const writeData = {
    title: '',
    content: '',
  };
  return (
    <Wrapper>
      <Height>
        <JourneyTop>
          <Date>7.07</Date>
          <TitleInput type="text" name="title" placeholder="제목을 입력해 주세요" value={writeData.title} />
        </JourneyTop>
        <ItemWrapper>
          <LeftWrap>
            <JourneyContent>
              <TextTitle>오늘의 일기</TextTitle>
              <ContentTextArea placeholder="l 일기 내용을 적어주세요" />
            </JourneyContent>
            <JourneyImg>
              <TextTitle>오늘의 사진</TextTitle>
              <ImgWrapper>
                {img.map((t, index) => {
                  return (
                    <>
                      <TodayImgWrapper>
                        <ImgUpload>
                          <Write>
                            <WriteIcon alt="write_icon" src={`${process.env.PUBLIC_URL}/icon/add_btn.png`} />
                            <WriteText
                              onClick={() => {
                                window.location.replace(`/write-journey`);
                              }}
                            >
                              사진 추가
                            </WriteText>
                          </Write>
                        </ImgUpload>
                        <ImgTextInput
                          type="text"
                          name="title"
                          placeholder="사진 설명을 적어주삼뇨"
                          value={writeData.title}
                        />
                      </TodayImgWrapper>
                    </>
                  );
                })}
              </ImgWrapper>
            </JourneyImg>
            <JourneyPublic>
              <TextTitle>일기 공개</TextTitle>
              <PublicBtnWrapper>
                {PublicBtnList.map((t, index) => {
                  return (
                    <>
                      <PlanetWrapper>
                        <PublicBtn>{t.text}</PublicBtn>
                      </PlanetWrapper>
                    </>
                  );
                })}
              </PublicBtnWrapper>
            </JourneyPublic>
          </LeftWrap>
          <RightWrap>
            <JourneyFeeling>
              <TextTitle>오늘의 기분</TextTitle>
              <PlanetImgWrapper>
                {PlanetlList.map((t, index) => {
                  return (
                    <>
                      <PlanetWrapper>
                        <PlanetImg alt="planet_list" src={`${process.env.PUBLIC_URL}/planet/unselected/${t.val}.svg`} />
                        <ImgText>{t.text}</ImgText>
                      </PlanetWrapper>
                    </>
                  );
                })}
              </PlanetImgWrapper>
            </JourneyFeeling>

            <JourneyFeelingDetail>
              <TextTitleFeeling>기쁨</TextTitleFeeling>
              <PlanetSelectWrapper>
                <PlanetSelectImg alt="planet_list" src={`${process.env.PUBLIC_URL}/planet/unselected/happy.svg`} />
                <PlanetSelectTitle>지구</PlanetSelectTitle>
                <PlanetSelectContent>
                  지구인들의 고향이기도 한 지구는 풍부한 산소와 자원들로 기쁜 감정을 제공해요
                </PlanetSelectContent>
              </PlanetSelectWrapper>
            </JourneyFeelingDetail>
          </RightWrap>
        </ItemWrapper>
      </Height>
    </Wrapper>
  );
}

export default WriteJourney;
