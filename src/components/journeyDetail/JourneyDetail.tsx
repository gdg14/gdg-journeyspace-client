import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import { GET_DIARY_ID } from '../home/gql';

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
  flex: 1;
  padding: 10px 35px;
  max-height: 300px;
  overflow-y: scroll;
  // border-bottom: 1px solid gray;
`;
const JourneyImg = styled.div`
  flex: 1;
  padding: 10px 35px;
  // padding: 10px;
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
  text-align: left;
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

const Title = styled.span`
  font-size: 20px;
`;

const Content = styled.p`
  line-height: 30px;
  margin-top: 10px;
  font-size: 14px;
  max-height: 240px;
`;

const Img = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 5px;
  display: block;
  margin: 0 auto;
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

const SelectedPlanetImg = styled.img`
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

interface Journey {
  idx: number;
  title: string;
  contents: string;
  date: string;
}

function JourneyDetail() {
  const params: any = useParams();
  const [item, setItem] = useState([]);
  const { data } = useQuery(GET_DIARY_ID, {
    fetchPolicy: 'no-cache',
    variables: { id: params.id },
  });

  useEffect(() => {
    if (data) {
      setItem(data.getDiaryById);
    }
  }, [data, item]);

  const temp: any = item;

  let [PlanetSelected] = useState('happy');
  PlanetSelected = temp.feelings;

  console.log(PlanetSelected);

  return (
    <Wrapper>
      <Height>
        <JourneyTop>
          <Date>{moment().format('MM.DD')}</Date> <Title>&nbsp;{temp.title}</Title>
        </JourneyTop>
        <ItemWrapper>
          <LeftWrap>
            <JourneyContent>
              <TextTitle>오늘의 일기</TextTitle>
              <Content>{temp.content}</Content>
            </JourneyContent>

            <JourneyImg>
              <TextTitle>오늘의 사진</TextTitle>
              <ImgWrapper>
                {img.map((t) => {
                  return (
                    <>
                      <TodayImgWrapper>
                        <Img alt="today_img" src={t.url} />
                        <ImgText>{t.text}</ImgText>
                      </TodayImgWrapper>
                    </>
                  );
                })}
              </ImgWrapper>
            </JourneyImg>
          </LeftWrap>
          <RightWrap>
            <JourneyFeeling>
              <TextTitle>오늘의 기분</TextTitle>
              <PlanetImgWrapper>
                {PlanetlList.map((t) => {
                  return (
                    <>
                      <PlanetWrapper>
                        {PlanetSelected === t.val ? (
                          <SelectedPlanetImg
                            alt="planet_list"
                            src={`${process.env.PUBLIC_URL}/planet/selected/${t.val}.png`}
                          />
                        ) : (
                          <PlanetImg
                            alt="planet_list"
                            src={`${process.env.PUBLIC_URL}/planet/unselected/${t.val}.svg`}
                          />
                        )}
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
                <PlanetSelectImg
                  alt="planet_list"
                  src={`${process.env.PUBLIC_URL}/planet/selected/${PlanetSelected}.png`}
                />
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

export default JourneyDetail;
