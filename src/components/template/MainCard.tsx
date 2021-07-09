import styled from 'styled-components';

import SideNavbar from '../sideNavbar/SideNavbar';

const Wrapper = styled.section`
  display: flex;

  width: 75%;
  height: 80%;

  background-color: #f0f0f0;
`;

const MainWrapper = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

interface IProps {
  children: React.ReactNode;
}

function MainCard({ children }: IProps) {
  return (
    <Wrapper>
      <SideNavbar />
      <MainWrapper>{children}</MainWrapper>
    </Wrapper>
  );
}

export default MainCard;
