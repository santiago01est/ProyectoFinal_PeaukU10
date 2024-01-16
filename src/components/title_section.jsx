import styled from "styled-components"
import '../styles/styles_common_sections.css';
import { TextParagraphNormal, TitleSection } from "./texts";

const TitleSectionContainerSC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    `

const TitleSectionContainerContentSC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    
    `

const SubtitleContainer = styled.div`
    width:30.125rem;
    @media (max-width: 768px) {
        width: 100%;
    }
    `
const Img = styled.img`
      width: 80%;
      height: 80%;
      right: 0;
      top: 0;
      position: absolute;
      transform: translate(100%, -10%);
      @media (max-width: 768px) {
        transform: translate(0, 0);
        position: relative;
        width: 40%;
        height: 40%;
        margin: 20px auto;
    }
`	

/**
+ * Generates the container for the title section.
+ *
+ * @param {string} title1 - The first part of the title.
+ * @param {string} title2 - The second part of the title.
+ * @param {string} subtitle - The subtitle.
+ * @param {string} img - The image source.
+ * @return {JSX.Element} The container for the title section.
+ */
const TitleSectionContainer = ({title1, title2, subtitle, img}) => {
    return(
        <TitleSectionContainerSC>
                    <TitleSectionContainerContentSC>
                        <TitleSection style={{textAlign: 'center'}}>
                            {title1} <span style={{ color: "#FA7436" }}> {title2}</span>
                        </TitleSection>
                        <SubtitleContainer>
                            <TextParagraphNormal style={{textAlign: 'center', marginTop: '20px'}}>
                                {subtitle}
                            </TextParagraphNormal>
                        </SubtitleContainer>
                        {img && <Img src={img} alt="viajes"></Img>}
                    </TitleSectionContainerContentSC>
                </TitleSectionContainerSC>
    )
}

export default TitleSectionContainer