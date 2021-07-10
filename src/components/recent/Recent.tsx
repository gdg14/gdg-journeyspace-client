import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Body from './Body';

const Wrapper = styled.article`
  width: 900px;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`;

function Recent() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const onChangeSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <Wrapper>
      <Header searchKeyword={searchKeyword} onChangeSearchKeyword={onChangeSearchKeyword} />
      <Body />
    </Wrapper>
  );
}

export default Recent;
