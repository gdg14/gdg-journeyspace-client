import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { SideMenuTitle } from '../common/title';

const Wrapper = styled.article`
  height: 55%;

  padding: 30px 40px;
`;

const MenuWrapper = styled.div`
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function BottomSideNavbar() {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <MenuWrapper>
        <SideMenuTitle to="/" selected={pathname === '/'}>
          홈
        </SideMenuTitle>
        <SideMenuTitle to="/journey" selected={pathname === '/journey'}>
          일기쓰기
        </SideMenuTitle>
        <SideMenuTitle to="/random" selected={pathname === '/random'}>
          둘러보기
        </SideMenuTitle>
        <SideMenuTitle to="/favorites" selected={pathname === '/favorites'}>
          즐겨찾기
        </SideMenuTitle>
      </MenuWrapper>
    </Wrapper>
  );
}

export default BottomSideNavbar;
