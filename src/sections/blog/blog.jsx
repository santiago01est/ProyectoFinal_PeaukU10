import styled from "styled-components";
import TitleSectionContainer from "../../components/title_section";
import { CardBlog } from "../../components/cards";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useRef } from 'react';

const ContainerSectionGeneralSC = styled.div`
  
  max-width: 1200px;
  margin: 50px auto;
  padding: 4em 1em;
`;
const Blog = ({ blogs }) => {

    const carouselRef = useRef(null);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4, // Puedes ajustar esto según tus necesidades
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

        carouselRef.current.previous();
    };

    const handleNext = () => {

        carouselRef.current.next();
    };

    

    const blogCards = blogs.map((blog, index) => (
        <CardBlog
            key={blog.id}
            imgPath={blog.url}
            title={blog.title}
            date={blog.date}
        />
    ))

    return (
        <ContainerSectionGeneralSC>

            <TitleSectionContainer
                title1={"Get update with"}
                title2={"latest blog"}
            />

            <div style={{ padding: '20px 0px' }}>
                <Carousel style={{ padding: '10px 0px' }} responsive={responsive} ref={carouselRef} removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']} showDots={true}>
                    {blogCards}
                </Carousel>
            </div>


        </ContainerSectionGeneralSC>
    )
}

export default Blog