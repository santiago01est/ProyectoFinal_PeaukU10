import styled from "styled-components";
import { Colors } from "../styles/global";

const TitleBig = styled.h2`
    font-size: 4rem;
    font-family: "Volkhov", serif;
    color: ${Colors.text};

    @media (max-width: 868px) {
    font-size: 2rem;
  }
`
const TitleSection = styled.h2`
    font-family: Volkhov;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.375rem;
`
const TextTitle = styled.h2`
    font-size: 1.3rem;
    font-family: "Volkhov", serif;
`

const TextParagraph = styled.p`
    color: ${Colors.textGray};
    font-size: 18px;
    line-height: 2;
`
export {TitleSection, TextTitle, TitleBig, TextParagraph}

