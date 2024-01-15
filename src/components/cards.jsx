import styled from 'styled-components';
import '../styles/vacation_plan.css';

const ImgContainer= styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    
`

const CardPlanContainerSC= styled.div`
    padding: 0;
    border-radius: 0.5rem;
    border: 2px solid rgba(102, 102, 102, 0.08);
    background: #FFF;
    height: auto;
    margin: auto;
    `
const CardPlan = ({ imgPath, title, price, time, score }) => {
    return (
        <CardPlanContainerSC className="card p-0">
            <div className="card-header p-0 border-0" style={{ backgroundColor: 'transparent' }}>
                <ImgContainer src={imgPath}></ImgContainer>
            </div>
            <div className="card-body p-2">
                <div className="row">
                    <div className="col d-flex d-flex justify-content-between px-3">
                        <h5 className="card-title">{title}</h5>
                        <div className="col-3 ms-2 px-0 text-center  justify-content-end">
                            <p id="" className="card-text color-precio-card">{price}</p>
                        </div>

                    </div>
                </div>
                <div className="row mt-3 px-3">
                    <div className="col px-0">
                        <p className="card-text"><img src="/icons/Navigation.svg" />{time}</p>
                    </div>
                    <div className="col px-0 d-flex justify-content-end align-items-center">
                        <p className="card-text"> <img src="/icons/star.svg" />{score}</p>
                    </div>
                </div>

            </div>
        </CardPlanContainerSC>
    )
}

export default CardPlan