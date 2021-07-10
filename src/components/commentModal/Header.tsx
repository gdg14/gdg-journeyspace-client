import styled from 'styled-components';

const Wrapper = styled.div`
  height: 150px;

  padding: 20px 30px;

  display: flex;
  align-items: flex-end;
`;

const HeaderText = styled.h1`
  font-size: 24px;

  color: #333333;
  opacity: 0.9;
`;

function Header() {
  return (
    <Wrapper>
      <HeaderText>댓글</HeaderText>
    </Wrapper>
  );
}

export default Header;
