import styled from 'styled-components'
import '../styles/things_you_need_to_do.css'
import { TextTitleCard } from './texts'

const ImgSC = styled.img`
    width: 30%;
    height: 30%;
    object-fit: fill;
    `
const CardThingsYouNeedToDo = ({title, subtitle, imgPath, linePath}) => {

    return (

        <div className="card p-2 mt-5">
            <img
                src={linePath}
                alt="line_signUp"
                className="line"/>
            <div className="card-body">
                <ImgSC src={imgPath}/>
                <TextTitleCard className="card-title mt-5">{title}</TextTitleCard>
                <p className="card-text mt-3">{subtitle}</p>
            </div>
        </div>

    )
}

export default CardThingsYouNeedToDo

/*
<div className="card p-2">
                            <img
                                src="/icons/line_signUp.svg"
                                alt="line_signUp"
                                className="line"
                            />
                            <div className="card-body">
                                <img
                                    src="/icons/planning.svg"
                                    className="img-cards m-0 p-0 justify-content-start"
                                />
                                <h5 className="card-title mt-5 cardTitleBold">Sign Up</h5>
                                <p className="card-text mt-3">
                                    Completes all the work associated with planning and
                                    processing.
                                </p>
                            </div>
                        </div>
                    

                    
                        <div className="card p-2">
                            <img
                                src="/icons/line_money.svg"
                                alt="line_money"
                                className="line"
                            />
                            <div className="card-body">
                                <img
                                    src="/icons/wallet.svg"
                                    className="img-cards m-0 p-0 justify-content-start"
                                />
                                <h5 className="card-title mt-5 cardTitleBold">
                                    Worth of Money
                                </h5>
                                <p className="card-text mt-3">
                                    After successful access then book from exclusive deals &
                                    pricing.
                                </p>
                            </div>
                        </div>
                    

                   
                        <div className="card p-2">
                            <img
                                src="/icons/line_travel.svg"
                                alt="line_travel"
                                className="line"
                            />
                            <div className="card-body">
                                <img src="/icons/gps.svg" alt="Sign Up" className="img-cards m-0 p-0 justify-content-start"></img>
                                <h5 className="cardTitleBold card-title mt-5 ">Exciting Travel
                                </h5>
                                <p className="card-text mt-3">Start and explore a wide range of exciting travel experience.</p>
                            </div>
*/