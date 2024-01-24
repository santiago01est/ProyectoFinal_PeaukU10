import { CardThingsYouNeedToDo } from "../../components/cards";
import TitleSectionContainer from "../../components/title_section";
import styled from "styled-components";

const ThingsYouNeedToDoContainerSC = styled.div`
    background-color: #F7F8FC;
    margin: 0 0;
    width: 100%;
    position: relative;
    margin-top: 90px; 
    `
const ThingsYouNeedToDoContainerContentSC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4em 1em;
    `

const CardsThingsYouNeedToDoContainerSC = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:center;
    gap: 20px;
    @media (max-width: 768px) {
        justify-content: center;
  }
    `
const ThingsYouNeedToDo = () => {
    return (
        <ThingsYouNeedToDoContainerSC>
            <ThingsYouNeedToDoContainerContentSC>
                <TitleSectionContainer
                    title1={"Things you need"}
                    title2={"to do"}
                    subtitle={
                        "We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford."
                    }
                    img={"/img/planesV2.svg"} />
                <CardsThingsYouNeedToDoContainerSC>
                    <CardThingsYouNeedToDo title={"Sign up"} subtitle={"Completes all the work associated with planning and processing"} imgPath={"/icons/planning.svg"} linePath={"/icons/line_signUp.svg"} />
                    <CardThingsYouNeedToDo title={"Worth of Money"} subtitle={"After successful access then book from exclusive deals & pricing"} imgPath={"/icons/wallet.svg"} linePath={"/icons/line_money.svg"} />
                    <CardThingsYouNeedToDo title={"Exciting Travel"} subtitle={"Start and explore a wide range of exciting travel experience."} imgPath={"/icons/gps.svg"} linePath={"/icons/line_travel.svg"} />
                </CardsThingsYouNeedToDoContainerSC>
            </ThingsYouNeedToDoContainerContentSC>
        </ThingsYouNeedToDoContainerSC>
    );
};

export default ThingsYouNeedToDo;
