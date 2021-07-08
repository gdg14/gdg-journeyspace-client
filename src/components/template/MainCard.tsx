import styled from 'styled-components';

import SideNavbar from '../sideNavbar/SideNavbar';

const Wrapper = styled.section`
  display: flex;

  width: 75%;
  height: 80%;

  background-color: #f0f0f0;
`;

interface IProps {
  children: React.ReactNode;
}

function MainCard({ children }: IProps) {
  return (
    <Wrapper>
      <SideNavbar />
      {children}
    </Wrapper>
  );
}

export default MainCard;
