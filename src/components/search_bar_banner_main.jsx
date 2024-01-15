import styled from "styled-components"
import { ButtonBigCommon } from "./buttons"

const ContainerSearchBarSC = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    align-items: center;
    flex-shrink: 0;
    padding: 0.625rem 1.875rem;
    border-radius: 0.625rem;
    background: wheat;
    box-shadow: 0px 2px 80px 2px rgba(0, 0, 0, 0.06);
    @media (max-width: 768px) {
        flex-direction: column;
    }
    `

const ItemSearchBarSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 1000;
    line-height: normal;
    padding-right: 6rem;
    margin-left: 10px;
    color: #666;
    `
const SearchBarBannerMain = () => {
    return (
        <ContainerSearchBarSC>
            <ItemSearchBarSC>
            <h6>Location <img src="/icons/row_down.svg" alt="row_down"/></h6>
            <span>Where are you going</span>
            </ItemSearchBarSC>

            <ItemSearchBarSC>
            <h6>Location <img src="/icons/row_down.svg" alt="row_down"/></h6>
            <span>Where are you going</span>
            </ItemSearchBarSC>

            <ItemSearchBarSC>
            <h6>Location <img src="/icons/row_down.svg" alt="row_down"/></h6>
            <span>Where are you going</span>
            </ItemSearchBarSC>

            <ButtonBigCommon text={"Explore Now"} type="fill"></ButtonBigCommon>
        </ContainerSearchBarSC>
    )
}

export default SearchBarBannerMain