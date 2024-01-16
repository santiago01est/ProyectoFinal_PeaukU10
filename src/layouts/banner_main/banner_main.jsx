import styled from "styled-components";

import { TextParagraphNormal, TitleBig } from "../../components/texts";
import { ButtonBigCommon } from "../../components/buttons";
import SearchBarBannerMain from "../../components/search_bar_banner_main";

const ContainerBannerGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0em 1em;

`;
const ContainerBannerMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px; /* Ajusta el espacio entre elementos en dispositivos móviles según tus preferencias */
    margin: 20px auto;
  }
`;

const ContainerGetStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const Img = styled.img`
  margin-bottom: 20px;
  width: 50%;
  height: 50%;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 40px;
    margin-right: 50px;
    margin-left: 50px;
  }
`;

const BannerMain = () => {
    return (
        <ContainerBannerGeneral>
            <ContainerBannerMain>
                <ContainerGetStart>
                    <TitleBig>
                        Get starter your excitings
                        <span style={{ color: "#FA7436" }}> journey</span> with us
                    </TitleBig>
                    <TextParagraphNormal
                        style={{
                            marginTop: "40px",
                            marginBottom: "40px",
                            textAlign: "justify",
                            
                        }}
                    >
                        A Team of experienced tourism professionals will provide you with
                        the best advice and tips for your desire place.
                    </TextParagraphNormal>
                    <ButtonBigCommon text="Discover now" type="outline" />
                </ContainerGetStart>
                <Img src="/img/logo-principal.png" alt="banner_main" />
            </ContainerBannerMain>
            <SearchBarBannerMain></SearchBarBannerMain>
        </ContainerBannerGeneral>
    );
};

/*
 <section id='banner_main' className='my-5 pt-3'>
            <div className="hero-section container p-0">
            <div className="get-started row align-items-center">
               
                
            </div>
            <div className="search-bar row mt-5">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className="location">
                        <h6>Location <img src="/icons/row_down.svg" alt="row_down"/></h6>
                        <span>Where are you going</span>
                    </div>
                    <div className="date">
                        <h6>Date <img src="/icons/row_down.svg" alt="row_down"/></h6>
                        <span>When you will go</span>
                    </div>
                    <div className="guest">
                        <h6>Guest <img src="/icons/row_down.svg" alt="row_down"/></h6>
                        <span>Number of guest</span>
                    </div>
                    <button className="btn explore">Explore Now</button>
                </div>
            </div>
        </div>
        </section> 
*/

export default BannerMain;
