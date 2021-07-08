import styled from 'styled-components';

import TopSideNavbar from './TopSideNavbar';
import BottomSideNavbar from './BottomSideNavbar';

const Wrapper = styled.nav`
  width: 20%;
  height: 100%;

  background-color: white;
`;

const SideNavbarDivider = styled.hr`
  color: grey;
`;

function SideNavbar() {
  return (
    <Wrapper>
      <TopSideNavbar />
      <SideNavbarDivider />
      <BottomSideNavbar />
    </Wrapper>
  );
}

export default SideNavbar;
