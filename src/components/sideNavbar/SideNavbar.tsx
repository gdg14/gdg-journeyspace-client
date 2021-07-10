import styled from 'styled-components';

import TopSideNavbar from './TopSideNavbar';
import BottomSideNavbar from './BottomSideNavbar';

const Wrapper = styled.nav`
  width: 350px;
  height: 100%;

  background-color: white;
`;

const SideNavbarDivider = styled.hr`
  border: none;
  height: 2px;
  background-color: #070707;
  opacity: 0.2;
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
