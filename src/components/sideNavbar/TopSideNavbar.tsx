import styled from 'styled-components';

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
  color: #b8b8b8;
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
  border: 1px solid grey;
  border-radius: 100%;
  width: 60px;

  margin-right: 10px;
`;

const ProfileTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 7px;
`;

const ProfileInfo = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: grey;
`;

function TopSideNavbar() {
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
        <SideMenuTitle>활동내역</SideMenuTitle>
        <SideMenuTitle>최근본 일기</SideMenuTitle>
      </MenuWrapper>
    </Wrapper>
  );
}

export default TopSideNavbar;
