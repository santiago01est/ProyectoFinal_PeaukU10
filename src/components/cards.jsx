import styled from 'styled-components';
import '../styles/vacation_plan.css';
import '../styles/things_you_need_to_do.css'
import { TextSubtitleCard, TextTitleCard } from './texts'
import { ButtonCommon } from './buttons';
import '../styles/exclusive.css'
import '../styles/people_about.css'
import { Colors } from '../styles/global';

const ImgPlanContainer = styled.img`
    width: 100%;
    height: 200px;
    object-fit: fill;
    
`

const ImgTravelContainer = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
`

const CardPlanContainerSC = styled.div`
    padding: 0;
    border-radius: 0.5rem;
    border: 2px solid rgba(102, 102, 102, 0.08);
    background: #FFF;
    height: auto;
    margin: auto;
    `

const CardCommentContainerSC = styled.div`
    padding: 0;
    border-radius: 0.5rem;
    border: 2px solid rgba(102, 102, 102, 0.08);
    background: #FFF;
    height: 100%;
    margin: auto;
    position: relative;
    `

const ImgThingsSC = styled.img`
    width: 30%;
    height: 30%;
    object-fit: fill;
    `

const ImgTravelSC = styled.img`
    width: 100%;
    height: 200px;
    object-fit: fill;
    `

const CardThingsYouNeedToDo = ({ title, subtitle, imgPath, linePath }) => {

    return (

        <div className="card p-2 mt-5">
            <img
                src={linePath}
                alt="line_signUp"
                className="line" />
            <div className="card-body">
                <ImgThingsSC src={imgPath} />
                <TextTitleCard className="card-title mt-5">{title}</TextTitleCard>
                <TextSubtitleCard>{subtitle}</TextSubtitleCard>
            </div>
        </div>

    )
}

const CardTravel = ({ city, country, price, discount, score, imgPath }) => {
    return (
        <CardPlanContainerSC className="card-travel p-0 book-card mt-5">
        <div className="card-header p-0 border-0" style={{ backgroundColor: 'white' }}>
            <ImgTravelContainer src={imgPath}></ImgTravelContainer>
            <button type="button" class="btn-fill btn btn-overlay">Book Now</button>
        </div>
            <div class="card-body p-2 mt-3">
                <div class="row">
                    <div class="col d-flex d-flex justify-content-between align-items-center px-3">
                        <TextTitleCard >{city}</TextTitleCard>
                        <TextSubtitleCard style={{display: 'flex', alignItems: 'center'}} > <img  style={{ width: '1.4rem', marginRight: '10px' }} src="../icons/star.svg" />{score}</TextSubtitleCard>
                    </div>
                </div>
                <div class="row mt-3 px-3">
                    <div class="col px-0">
                        <TextSubtitleCard style={{display: 'flex', alignItems: 'center'}}><img style={{ width: '1.4rem', marginRight: '10px' }} src="../icons/gps-icon.svg" /> {country}</TextSubtitleCard>
                    </div>
                    <div class="col px-0 d-flex justify-content-end align-items-center">
                        <div class="col px-0 text-end">

                            <p class="card-text precio-antes">$ {discount}</p>
                        </div>
                        <div class="col-6 ms-2 px-0 text-center ">
                            <p id="precio-actual" class="card-text tag-div">$ {price}</p>
                        </div>
                    </div>
                </div>

            </div>
        </CardPlanContainerSC>
     
    )
}

const CardPlan = ({ imgPath, title, price, time, score }) => {
    return (
        <CardPlanContainerSC className=" p-0 book-card">
            <div className="card-header p-0 border-0" style={{ backgroundColor: 'transparent' }}>
                <ImgPlanContainer src={imgPath}></ImgPlanContainer>
            </div>
            <div className="card-body p-2 mt-3">
                <div className="row">
                    <div className="col d-flex d-flex justify-content-between px-3">
                        <TextTitleCard>{title}</TextTitleCard>
                        <div className="col-3 ms-2 px-0 text-center  justify-content-end">
                            <TextTitleCard style={{ color: Colors.secondary }}>$ {price}</TextTitleCard>
                        </div>

                    </div>
                </div>
                <div className="row mt-3 px-3">
                    <div className="col px-0">
                    <TextSubtitleCard style={{display: 'flex', alignItems: 'center'}} ><img style={{ width: '1.4rem', marginRight: '10px' }} src="/icons/Navigation.svg" />{time}</TextSubtitleCard>
                    </div>
                    <div className="col px-0 d-flex justify-content-end align-items-center">
                    <TextSubtitleCard style={{display: 'flex', alignItems: 'center'}} > <img  style={{ width: '1.4rem', marginRight: '10px' }} src="/icons/star.svg" />{score}</TextSubtitleCard>
                    </div>
                </div>

            </div>
        </CardPlanContainerSC>
    )
}

const CardComments = ({ imgPath , name, comment}) => {
    return(
        <CardCommentContainerSC>
                        <div className="avatar-people-about  rounded-circle overflow-hidden">
                            <img className="w-100 h-100" src={imgPath} alt=""
                                style={{ objectFit: 'cover' }} />
                        </div>
                        <article className="card-people-about author mt-3">
                            <p style={{ lineHeight: '2rem' }}>
                                {comment}
                            </p>
                            <div className="d-flex flex-column">
                                <h6 style={{ fontSize: '18px', fontWeight: '600', lineHeight: '2rem' }}>{name}</h6>
                                <span className="text-body-secondary" style={{ fontSize: '14px' }}>
                                    Lahore, Pakistan
                                </span>
                            </div>
                        </article>
                       
                    </CardCommentContainerSC>
    )
}



export { CardThingsYouNeedToDo, CardPlan, CardTravel, CardComments };