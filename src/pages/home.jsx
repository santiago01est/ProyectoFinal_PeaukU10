import React, { useState, useEffect } from 'react';
import BannerMain from '../sections/banner_main/banner_main'
import Exclusive from '../sections/exclusive/exclusive'
import PeopleAbout from '../sections/people_about/people_about'
import ThingsYouNeedToDo from '../sections/things_you_need_to_do/thingsYouNeedToDo'
import VacationPlan from '../sections/vacation_plan/vacation_plan'
import { getPlansVacationData } from '../services/planvacational-api'; // Ajusta la ruta según sea necesario
import Blog from '../sections/blog/blog';
import Footer from '../sections/footer/footer';
const Home= () => {

    const [plansVacation, setPlansVacation] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const plansVacationData = await getPlansVacationData();
            setPlansVacation(plansVacationData);
          } catch (error) {
            console.error('Error getting travel data:', error);
            
          }
        };
    
        fetchData();
      }, []);

    const travels = [
        {
            id: 1,
            city: 'Madrid',
            country: 'Spain',
            precio: 850,
            discount: 950,
            score: 4.8,
            imgPath: '/img/imgcard04.png'
        },
        {
            id: 2,
            city: 'Firenze',
            country: 'Italy',
            price: 750,
            discount: 850,
            score: 4.5,
            imgPath: '/img/imgcard02.png'
        },
        {
            id: 3,
            city: 'Paris',
            country: 'France',
            price: 599,
            discount: 699,
            score: 4.4,
            imgPath: '/img/imgcard01.png'
        },
        {
            id: 4,
            city: 'London',
            country: 'Uk',
            price: 850,
            discount: 950,
            score: 4.8,
            imgPath: '/img/imgcard03.png'
        }
    ]

    /*
    const plansVacation = [
        {
           id: 1,
           nombre: 'Rome, Italty',
           precio: '2,42k',
           duracion_dias: '10 Days Trip',
           score: 4.8,
           url_img: '/img/img-rome.jpg'
        },
        {
            id: 2,
            nombre: 'London, UK',
            precio: '2,42k',
            duracion_dias: '07 Days Trip',
            score: 4.7,
            url_img: '/img/img-london.png'
        },
        {
            id: 3,
            nombre: 'Osaka,Japan',
            precio: '5,42k',
            duracion_dias: '10 Days Trip',
            score: 4.8,
            url_img: '/img/img-osaka.png'
        },
        {
            id: 4,
            nombre: 'Cairo, Egypt',
            precio: '5,42k',
            duracion_dias: '10 Days Trip',
            score: 4.8,
            url_img: '/img/img-osaka.png'
        },
        {
            id: 5,
            nombre: 'Rome, Italty',
            precio: '2,42k',
            duracion_dias: '10 Days Trip',
            score: 4.8,
            url_img: '/img/img-rome.jpg'
        },
        {
            id: 6,
            nombre: 'London, UK',
            precio: '2,42k',
            duracion_dias: '07 Days Trip',
            score: 4.7,
            url_img: '/img/img-london.png'
        }

    ]

*/
    const comments = [
        {
            id: 1,
            name: 'Mike taylor',
            comment: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no',
            imgPath: '/img/avatar-people-about.png'
        },
        {
            id: 2,
            name: 'Sarah Doe',
            comment: 'Great place to stay',
            imgPath: '/img/avatar-people-about.png'
        },
        {
            id: 3,
            name: 'Jane Doe',
            comment: 'Great place to stay',
            imgPath: '/img/avatar-people-about.png'
        }
    ]

    const blogs= [
        {
            id: 1,
            title: 'The Amazing Difference a Year of Travelling.',
            date: 'July 27, 2021',
            url: '/img/img_blog1.png'
        },{
            id: 2,
            title: 'Travel far enough, you meet yourself.',
            date: 'July 27, 2021',
            url: '/img/img_blog2.png'
        },{
            id: 3,
            title: 'How to Save Money While Visiting Africa.',
            date: 'July 27, 2021',
            url: '/img/img_blog3.png'
        },
        {
            id: 4,
            title: 'Reflections on 5 Months of Travel: Time to Hang.',
            date: 'July 27, 2021',
            url: '/img/img_blog4.png'
        },
        {
            id: 5,
            title: 'The Amazing Difference a Year of Travelling.',
            date: 'July 27, 2021',
            url: '/img/img_blog1.png'
        },
        {
            id: 6,
            title: 'Travel far enough, you meet yourself.',
            date: 'July 27, 2021',
            url: '/img/img_blog2.png'
        }
    ]

    
    return (
        <>
        
        <BannerMain/>
        <ThingsYouNeedToDo/>
        <Exclusive travels={travels}/>
        <VacationPlan plansVacation={plansVacation}/>
        <PeopleAbout comments={comments}/>
        <Blog blogs={blogs}/>
        <Footer/>
        </>
    )
}

export default Home