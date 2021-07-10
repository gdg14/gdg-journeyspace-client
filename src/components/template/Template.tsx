import styled from 'styled-components';

const Wrapper = styled.div<{ backgroundImg: string }>`
  height: 100%;
  position: relative;

  background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
  background-position: center 75%;
  background-size: cover;

  display: flex;
`;

const ImageFrontScreen = styled.div`
  width: 100%;
  height: 100%;

  background-color: #000000;
  opacity: 0.4;

  position: absolute;
  top: 0;
  left: 0;
`;

const ContentWrapper = styled.div`
  z-index: 2;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IProps {
  children: React.ReactNode;
}

function Template({ children }: IProps) {
  return (
    <>
      <Wrapper backgroundImg={`${process.env.PUBLIC_URL}/background/main.png`}>
        <ImageFrontScreen />
        <ContentWrapper>{children}</ContentWrapper>
      </Wrapper>
    </>
  );
}

export default Template;
