import styled from 'styled-components';
import JourneyItem from './JourneyItem';

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const JourneyTop = styled.article`
    width: 90%;
    height: 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const JourneyCardList = styled.div`
  overflow-y: scroll;
  width: 90%;
  max-height: 680px;
`


const Order = styled.div`
  flex: 1;
  text-align: right;
`

const Write = styled.div`
  flex: 1;
  text-align: left;
  font-size: 20px;
  display: flex;
  align-items: center;
`

const elements = ['one', 'two', 'three', 'three'];

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  backgroud: white;
  width: 90px;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);

`;

const WriteIcon = styled.img`
  width: 60px;
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
          오늘 일기쓰기
        </Write>
      </JourneyTop>
      <JourneyCardList>
      {elements.map((value, index) => {
        return <JourneyItem/>
      })}
      </JourneyCardList>
    </Wrapper>      
  );
}

export default Journey;