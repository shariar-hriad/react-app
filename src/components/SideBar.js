import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import Button from "./Button";

const SideBarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #416a59;
  display: grid;
  align-items: center;
  left: 0;
  z-index: 20;
  transition: 0.3s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 25px;
  color: #fff;
  z-index: 10;
  cursor: pointer;
`;

const SidebarMenu = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 50px;
`;

const SidebarList = styled.li`
  padding: 3px 0;
`;

const SidebarLink = styled(LinkS)`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const SidebarButton = styled.div`
  padding: 3px;
  display: flex;
  justify-content: center;
`;

export default function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <FaTimes />
      </Icon>
      <SidebarMenu>
        <SidebarList>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
        </SidebarList>
        <SidebarList>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
        </SidebarList>
        <SidebarList>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
        </SidebarList>
        <SidebarList>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarList>
      </SidebarMenu>
      <SidebarButton>
        <Button to="/signin" onClick={toggle} children="Sign Up" />
      </SidebarButton>
    </SideBarContainer>
  );
}
