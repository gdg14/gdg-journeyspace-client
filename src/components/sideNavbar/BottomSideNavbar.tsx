import styled from 'styled-components';

import { SideMenuTitle } from '../common/title';

const Wrapper = styled.article`
  height: 55%;

  padding: 30px 40px;
`;

const MenuWrapper = styled.div`
  height: 65%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function BottomSideNavbar() {
  return (
    <Wrapper>
      <MenuWrapper>
        <SideMenuTitle>홈</SideMenuTitle>
        <SideMenuTitle>일기쓰기</SideMenuTitle>
        <SideMenuTitle>둘러보기</SideMenuTitle>
        <SideMenuTitle>즐겨찾기</SideMenuTitle>
      </MenuWrapper>
    </Wrapper>
  );
}

export default BottomSideNavbar;
