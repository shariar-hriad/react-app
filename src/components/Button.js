import { Link } from "react-scroll";
import styled from "styled-components";

const Btn = styled(Link)`
  display: inline-block;
  padding: 15px 45px;
  color: #fff;
  background: #416a59;
  border-radius: 50px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  text-align: center;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: transparent;
    border-color: #fff;
    color: #416a59;
  }

  @media screen and (min-width: 992px) {
    font-size: 18px;
    font-weight: 700;
  }
`;

export default function Button({ children = "Change Button Text", ...rest }) {
  return <Btn {...rest}>{children}</Btn>;
}
