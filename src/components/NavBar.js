import { FaBars } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import Button from "./Button";

const Header = styled.header`
  /* background: #f5eec2; */
  height: 70px;
  line-height: 70px;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 10;
  transition: all 0.8s ease;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1370px;
  padding: 0 15px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  padding: 0 5px;
  color: #fff;
  font-weight: 700;
  font-size: 25px;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  width: 45px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 25px;
  cursor: pointer;
  color: #fff;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const NavMenu = styled.nav`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
    padding: 0 5px;
  }
`;

const NavUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const NavList = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

const NavLink = styled(LinkS)`
  text-decoration: none;
  color: #416a59;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  &.active {
    border-bottom: 3px solid #416a59;
  }
  &:hover {
    color: #39395f;
  }
`;

const NavButton = styled.div`
  padding: 0 5px;
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
  }
`;

export default function NavBar({ toggle }) {
  return (
    <Header>
      <Container>
        <Wrapper>
          <Logo>Riad</Logo>
          <MobileMenu onClick={toggle}>
            <FaBars />
          </MobileMenu>
          <NavMenu>
            <NavUl>
              <NavList>
                <NavLink to="home">Home</NavLink>
              </NavList>
              <NavList>
                <NavLink to="about">About</NavLink>
              </NavList>
              <NavList>
                <NavLink to="services">Services</NavLink>
              </NavList>
              <NavList>
                <NavLink to="contact">Contact</NavLink>
              </NavList>
              <NavList>
                <NavLink to="signin">Sign Up</NavLink>
              </NavList>
            </NavUl>
          </NavMenu>
          <NavButton>
            <Button children="Hire Me" />
          </NavButton>
        </Wrapper>
      </Container>
    </Header>
  );
}
