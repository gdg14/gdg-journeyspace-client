import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { SideMenuTitle } from '../common/title';

const Wrapper = styled.div`
  background-color: white;

  height: 45%;
  padding: 30px 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ServiceTitle = styled.p`
  font-size: 16;
  color: #333333;
  opacity: 0.4;
  letter-spacing: -0.04em;
`;

const MenuWrapper = styled.article`
  height: 65%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  border: 1px solid #707070;
  border-radius: 100%;
  width: 70px;

  margin-right: 10px;
`;

const ProfileTitle = styled.h2`
  font-size: 18px;
  color: #333333;
  margin-bottom: 7px;
  opacity: 0.7;
  letter-spacing: -0.04em;
`;

const ProfileInfo = styled.p`
  font-size: 14px;
  color: #333333;
  opacity: 0.7;
  letter-spacing: -0.04em;
`;

function TopSideNavbar() {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <ServiceTitle>JOURNEY SPACE</ServiceTitle>
      <MenuWrapper>
        <ProfileWrapper>
          <ProfileImage alt="profile_image" src={`${process.env.PUBLIC_URL}/user/default_profile.png`} />
          <div>
            <ProfileTitle>랜덤일기</ProfileTitle>
            <ProfileInfo>193일째 여행중</ProfileInfo>
          </div>
        </ProfileWrapper>
        <SideMenuTitle to="/log" selected={pathname === '/log'}>
          활동내역
        </SideMenuTitle>
        <SideMenuTitle to="/recent" selected={pathname === '/recent'}>
          최근본 일기
        </SideMenuTitle>
      </MenuWrapper>
    </Wrapper>
  );
}

export default TopSideNavbar;
