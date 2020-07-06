import styled from "styled-components";
import { contentWidth } from "../../../styles/constants";
import { CenteredText, SubHeader } from "../../../styled/base";

export const Article = styled.article`
  max-width: ${contentWidth}rem - 10rem;
  width: 100%;
  flex: 1;
  img {
    display: block;
    margin: auto;
  }
`;

export const H1 = styled.h1`
  ${CenteredText}
`;

export const H4 = styled.h4`
  ${SubHeader};
`;
