import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar'
import BannerMain from '../layouts/banner_main/banner_main'
import Exclusive from '../layouts/exclusive/exclusive'
import PeopleAbout from '../layouts/people_about/people_about'
import ThingsYouNeedToDo from '../layouts/things_you_need_to_do/thingsYouNeedToDo'
import VacationPlan from '../layouts/vacation_plan/vacation_plan'
import { getTravelData } from '../services/travel-api'; // Ajusta la ruta según sea necesario
const Home= () => {

    //const [travels, setTravels] = useState([]);
/*
    useEffect(() => {
        const fetchData = async () => {
          try {
            const travelsData = await getTravelData();
            setTravels(travelsData);
          } catch (error) {
            console.error('Error getting travel data:', error);
            
          }
        };
    
        fetchData();
      }, []);
*/
    const travels = [
        {
            id: 1,
            city: 'Madrid',
            country: 'Spain',
            price: 850,
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

    const plansVacation = [
        {
           id: 1,
           title: 'Rome, Italty',
           price: '2,42k',
           time: '10 Days Trip',
           score: 4.8,
           imgPath: '/img/img-rome.jpg'
        },
        {
            id: 2,
            title: 'London, UK',
            price: '2,42k',
            time: '07 Days Trip',
            score: 4.7,
            imgPath: '/img/img-london.png'
        },
        {
            id: 3,
            title: 'Osaka,Japan',
            price: '5,42k',
            time: '10 Days Trip',
            score: 4.8,
            imgPath: '/img/img-osaka.png'
        },
        {
            id: 4,
            title: 'Cairo, Egypt',
            price: '5,42k',
            time: '10 Days Trip',
            score: 4.8,
            imgPath: '/img/img-osaka.png'
        },
        {
            id: 5,
            title: 'Rome, Italty',
            price: '2,42k',
            time: '10 Days Trip',
            score: 4.8,
            imgPath: '/img/img-rome.jpg'
        },
        {
            id: 6,
            title: 'London, UK',
            price: '2,42k',
            time: '07 Days Trip',
            score: 4.7,
            imgPath: '/img/img-london.png'
        }

    ]
    return (
        <>
        <Navbar/>
        <BannerMain/>
        <ThingsYouNeedToDo/>
        <Exclusive travels={travels}/>
        <VacationPlan plansVacation={plansVacation}/>
        </>
    )
}

export default Home