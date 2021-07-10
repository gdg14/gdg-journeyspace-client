import styled from 'styled-components';

import { RandomArticleSubTitle } from '../common/title';

const Wrapper = styled.article`
  margin-bottom: 16px;
`;

const ArticleDescription = styled.p`
  font-size: 14px;
  color: #333333;
  opacity: 0.8;
  letter-spacing: -0.02em;
  line-height: 1.5;
`;

function ArticleJourney() {
  return (
    <Wrapper>
      <RandomArticleSubTitle>오늘의 일기</RandomArticleSubTitle>
      <ArticleDescription>
        오늘은 수요일 운동삼일 했더니 온몸이 쑤시고 다아프다 일주일은 참아야좀 괜찮아질꺼같다
        그래도몸은잘안다너무좋아한다 ㅎㅎ 오늘은 냉정과 냉철 에대하여 쓰고싶다 누구한테 냉정하게 대하는것은 나한테
        무언가 피해오고 무언가가 잘못됄까봐 걱정하는것 나한테 무엇이든 유리하게 돌아가게끔행동하는것은 냉정이라고 한다
        이번에는 냉철하게하는것은 상대한테 도움을 줄려고할때 진짜 상대가 잘돼게 원할때 맘속에 눈물흘리면서
        안도와주겠다는 판단이설때 도와주면상대한데더안좋은것인지알때 이게냉철하게한다는생각든다 또 냉정은 상대한테
        위하는것이아니고 내가손해볼까봐 냉정하게 짜르는것이있고 누구한테냉정하게 심한말도 할수있다 이사회 나가서 우리는
        냉정하게 행동하면서사는것보다 상대한테 냉철하게 행동하면서살면 더좋치 안을까생각든다 진짜 공부열심히해서
        실력이돼면 내앞에온 한분한분 나한테 물위해주는 없는세상에 한사람의 따뜻한 온기를 가지고 나를 위해주고
        내가하는말에 귀를 기울이준다면 상댕의맘은 금방 열리것같다 모르는공부조금 만하면 누구할꺼없이 이세상은 너무
        아름다울것이고 모두다 즐겁고 행복하게 살게됄것이라고 생각든다 모든인연과 환경을 주셔서 감사합니다
      </ArticleDescription>
    </Wrapper>
  );
}

export default ArticleJourney;
