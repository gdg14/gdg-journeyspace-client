import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideMenuTitle = styled(Link)<{ selected?: boolean }>`
  color: ${({ selected }) => (selected ? 'black' : '#b8b8b8')};
  font-size: 28px;
  text-decoration: none;
`;
