import styled from "styled-components";
import { ButtonCircle } from "../../components/buttons";
import TitleSectionContainer from "../../components/title_section";
import "../../styles/exclusive.css";
import "../../styles/styles_common_sections.css";
import { CardTravel } from "../../components/cards";

const ContainerSectionGeneralSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 50px auto;
  padding: 4em 1em;
`;

const CardsExclusiveContainerSC = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:center;
    gap: 20px;

    `
const Exclusive = ({travels}) => {
    return (
        <ContainerSectionGeneralSC>
            <TitleSectionContainer
                title1={"Exclusive"}
                title2={"deals & discounts"}
                subtitle={
                    "Discover our fantastic early booking discounts & start planning your journey."
                } />
            <CardsExclusiveContainerSC>
                {travels.map((travel) => (
                    <CardTravel key={travel.id} city={travel.city} country={travel.country} price={travel.price} discount={travel.discount} score={travel.score} imgPath={travel.imgPath} />
                ))}
            </CardsExclusiveContainerSC>

            <div className=" d-flex justify-content-center mt-5">
                            <div className="col">
                                <div className="d-flex justify-content-center gap-3">
                                    <ButtonCircle
                                        pathImg="/icons/flecha_izq.svg"
                                        type="outline"
                                    />
                                    <ButtonCircle pathImg="/icons/flecha_der.svg" type="fill" />
                                </div>
                            </div>
                        </div>
        </ContainerSectionGeneralSC>
    );
};

export default Exclusive;

