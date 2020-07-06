import styled from "styled-components";
import { contentWidth } from "../../styles/constants";

export const Header = styled.header`
  display: flex;
  height: 10vh;
  width: ${contentWidth}rem;
  margin: auto;
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const NavContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-flow: row-reverse;
`;

export const Logo = styled.img`
  object-fit: contain;
  height: 3rem;
`;

export const Link = styled.a`
  display: block;
  font-size: 2rem;
  text-align: center;
`;
