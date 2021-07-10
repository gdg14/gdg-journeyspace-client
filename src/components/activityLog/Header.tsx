import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-bottom: 20px;
`;

const HeaderText = styled.h1`
  font-size: 28px;
  margin-right: 5px;
`;

const HeaderBoldText = styled(HeaderText)`
  font-weight: bold;
`;

interface IProps {
  name: string;
}

function Header({ name }: IProps) {
  return (
    <TitleWrapper>
      <HeaderBoldText>{name} </HeaderBoldText>
      <HeaderText>님의 </HeaderText>
      <HeaderBoldText>활동내역</HeaderBoldText>
    </TitleWrapper>
  );
}

export default Header;
