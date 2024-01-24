import styled from "styled-components";
import React, { useState, useRef } from "react";
import { ButtonCircle, ButtonCommon } from "../../components/buttons";
import TitleSectionContainer from "../../components/title_section";
import "../../styles/people_about.css";
import '../../styles/styles_common_sections.css';
import { CardComments } from "../../components/cards";
import TextField from "../../components/textfield";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { faComments } from "@fortawesome/free-solid-svg-icons";

const PeopleAboutContainerSC = styled.div`
    background-color: #F7F8FC;
    margin: 0 0;
    width: 100%;
    position: relative;
    margin-top: 90px;
    `
const PeopleAboutContainerContentSC = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: nowrap;
max-width: 1200px;
margin: 0 auto;
padding: 4em 1em;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px; /* Ajusta el espacio entre elementos en dispositivos móviles según tus preferencias */
    margin: 20px auto;
  }
`

const ContainerWhatPeopleSay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 40%;
  @media (max-width: 768px) {
   width: 100%;
  }
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

const ContainerCommentsSC = styled.div`
  width: 50%;
  height: 100%;
  
  @media (max-width: 768px) {
   width: 100%;
  }
`;

const ContainerAddCommentsSC = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2em 1em;
  gap: 20px;
  @media (max-width: 768px) {
   flex-direction: column;
  }
`;
const PeopleAbout = ({comments}) => {

    const carouselRef = useRef(null);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1, // Puedes ajustar esto según tus necesidades
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

    const [Mecomment, setMeComment] = useState([]);
    const handleCommentsChange = (event) => {
        const { name, value } = event.target;
        setMeComment({ ...Mecomment, [name]: value });
    }

    const commentsCarrusel= comments.map((comment) => (
        <CardComments
            key={comment.id}
            imgPath={comment.imgPath} 
            name={comment.name} 
            comment={comment.comment} />
    ))
    console.log(commentsCarrusel)

    return (
        <PeopleAboutContainerSC>
            <PeopleAboutContainerContentSC>
                <ContainerWhatPeopleSay>
                    <TitleSectionContainer
                        title1={"What people say"}
                        title2={"about us"}
                        subtitle={
                            "Our Clients send us bunch of smilies with our services and we love them."
                        }
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
                        
                </ContainerWhatPeopleSay>
               

                <ContainerCommentsSC>
                <Carousel className="react-carousel"  responsive={responsive} ref={carouselRef} removeArrowOnDeviceType={['desktop','tablet', 'mobile']} showDots={true}>
                    {commentsCarrusel} 
                </Carousel>
               
            </ContainerCommentsSC>
                    
             
            </PeopleAboutContainerContentSC>
            <ContainerAddCommentsSC>
                <TextField type="text" name="comment" value={Mecomment.comment} onChange={handleCommentsChange} placeholder="Enter your Write what you think about your experience with us" icon={faComments} />
                <ButtonCommon text="Send" typeForm="fill" onClick={() => {}} />
            </ContainerAddCommentsSC>
        </PeopleAboutContainerSC>
    );
};

export default PeopleAbout;
