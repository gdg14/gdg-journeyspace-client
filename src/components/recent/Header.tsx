import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 50px;
`;

const SearchBar = styled.input`
  width: 650px;
  height: 40px;
  border: 1px solid #bbbbbb;
  padding: 5px 50px;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: #999999;
`;

const OrderButton = styled.button`
  width: 130px;
  height: 40px;
  padding: 10px 30px;
  box-shadow: 0px 0px 10px #b8b8b8;
  background-color: white;
  border: none;

  font-size: 24px;
  letter-spacing: -0.02em;
`;

interface IProps {
  searchKeyword: string;
  onChangeSearchKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Header({ searchKeyword, onChangeSearchKeyword }: IProps) {
  return (
    <Wrapper>
      <SearchBar value={searchKeyword} onChange={onChangeSearchKeyword} placeholder="닉네임 검색하기" />
      <OrderButton>정렬</OrderButton>
    </Wrapper>
  );
}

export default Header;
