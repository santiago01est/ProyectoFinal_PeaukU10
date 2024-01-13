import styled from "styled-components"
import '../styles/styles_common_sections.css';
import { TitleSection } from "./texts";



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
        <div className="col-8 border-0 mt-5 align-items-center justify-content-center">
                    <div className="main-title d-flex justify-content-center align-items-center flex-column">
                        <TitleSection className="card-title">
                            {title1} <span className="span-color-banner">{title2}</span>
                        </TitleSection>
                        <p className="card-text small-text-banner mt-5 lh-lg mb-3">
                            {subtitle}
                        </p>
                        {img && <img src={img} alt="viajes"></img>}
                    </div>
                </div>
    )
}

export default TitleSectionContainer