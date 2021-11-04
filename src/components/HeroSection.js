import { useState } from "react";
import { MdArrowRightAlt, MdForward } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import video from "../assets/videos/video.mp4";

const HeroContainer = styled.section`
  background: #f5eec2;
  height: 100vh;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 15px;
  font-size: 60px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 35px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 30px;

  @media screen and (min-width: 992px) {
    font-size: 60px;
    line-height: 70px;
  }
`;

const Tag = styled.span`
  display: block;
  font-size: 22px;
  color: #fff;
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 30px;

  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`;

const ArrowForward = styled(MdForward)`
  margin-left: 15px;
  font-size: 20px;
  transition: 0.3s ease;
`;

const ArrowRight = styled(MdArrowRightAlt)`
  margin-left: 15px;
  font-size: 20px;
  transition: 0.3s ease;
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;

export default function HeroSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <Video autoPlay muted loop src={video} type="video/mp4" />
      </HeroBg>
      <Overlay>
        <HeroContent>
          <Title children="Shariar Hossain Riad" />
          <Tag children="Web Developer" />
          <Description children="Sign up for a new account today and recieve $250 in credit towards your next payment" />
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroContent>
      </Overlay>
    </HeroContainer>
  );
}
