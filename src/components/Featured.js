import styled from "styled-components";
import { Button } from "./HeroSection";
import { Container } from "./NavBar";

const FeaturedSection = styled.section`
  padding: 40px 0;
  display: flex;
  align-items: center;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#000")};

  @media screen and (min-width: 992px) {
    padding: 80px 0;
  }
`;

const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2" "col1"` : `"col1 col1" "col2 col2"`};

  @media screen and (min-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1 col2"` : `"col2 col1"`};
  }
`;

const Column1 = styled.div`
  grid-area: col1;
  padding: 10px;
`;

const Column2 = styled.div`
  grid-area: col2;
  padding: 10px;
`;

const TextWrapper = styled.div`
  padding: 0 15px;
`;

const TopLine = styled.h3`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  color: #01bf71;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 24px;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (min-width: 992px) {
    font-size: 48px;
    line-height: 58px;
  }
`;

const SubTitle = styled.p`
  margin-bottom: 35px;
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ImgWrap = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: 0 auto;
`;

const Img = styled.img`
  max-width: 100%;
  width: 280px;
`;

export default function Featured({
  lightBg,
  id,
  darkText,
  description,
  topLine,
  headline,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <FeaturedSection lightBg={lightBg} id={id}>
      <Container>
        <Row imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading>{headline}</Heading>
              <SubTitle darkText={darkText}>{description}</SubTitle>
              <BtnWrap>
                <Button to="home">{buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </Row>
      </Container>
    </FeaturedSection>
  );
}
