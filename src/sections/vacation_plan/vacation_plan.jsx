import React, { useRef } from 'react';
import styled from 'styled-components';
import { ButtonCircle } from '../../components/buttons';
import TitleSectionContainer from '../../components/title_section';
import '../../styles/vacation_plan.css';
import { CardPlan } from '../../components/cards';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ContainerSectionGeneralSC = styled.div`
  
  max-width: 1200px;
  margin: 50px auto;
  padding: 4em 1em;
`;


const ContainerButtonsSC = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const CardsPlanContainerSC = styled.div`
  display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:center;
    gap: 20px;
    `



const VacationPlan = ({ plansVacation }) => {

    const carouselRef = useRef(null);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // Puedes ajustar esto según tus necesidades
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1, // Puedes ajustar esto según tus necesidades
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // Puedes ajustar esto según tus necesidades
        },
    };
    const handlePrevious = () => {
        console.log('Anterior clickeado');
        carouselRef.current.previous();
     };
     
     const handleNext = () => {
        console.log('Siguiente clickeado');
        carouselRef.current.next();
     };

    const plan= plansVacation.map((plan, index) => (
        <CardPlan
            key={index}
            title={plan.nombre}
            price={plan.precio}
            time={plan.duracion_dias}
            score={5}
            imgPath={plan.url_img}
            id={plan.id}
        />
    ))

    return (
        <ContainerSectionGeneralSC>
            <TitleSectionContainer
                title1={"Best"}
                title2={"vacation plan"}
                subtitle={
                    "Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! "
                }
                img={"/icons/palms.svg"}
            />
            <ContainerButtonsSC>
                <ButtonCircle
                    onClick={handlePrevious}
                    pathImg="/icons/flecha_izq.svg"
                    type="outline"
                />
                <ButtonCircle
                    onClick={handleNext}
                    pathImg="/icons/flecha_der.svg"
                    type="fill"
                />
            </ContainerButtonsSC>

            <div style={{ padding: '10px 0px' }}>
                <Carousel className="react-carousel"  responsive={responsive} ref={carouselRef} removeArrowOnDeviceType={['desktop','tablet', 'mobile']} showDots={true}>
                    {plan}
                </Carousel>
            </div>
        </ContainerSectionGeneralSC>
    )
}

export default VacationPlan