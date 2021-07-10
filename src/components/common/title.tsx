import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideMenuTitle = styled(Link)<{ selected?: boolean }>`
  color: #333333;
  opacity: ${({ selected }) => (selected ? 0.9 : 0.4)};
  font-size: 28px;
  text-decoration: none;
  letter-spacing: -0.02em;
`;

export const RandomArticleSubTitle = styled.h1`
  font-size: 20px;
  color: #333333;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;
