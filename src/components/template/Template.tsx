import styled from 'styled-components';

const Wrapper = styled.div<{ backgroundImg: string }>`
  height: 100%;

  background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
  background-position: center center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IProps {
  children: React.ReactNode;
}

function Template({ children }: IProps) {
  return <Wrapper backgroundImg={`${process.env.PUBLIC_URL}/background/landing.png`}>{children}</Wrapper>;
}

export default Template;
