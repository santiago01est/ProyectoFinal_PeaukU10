import styled from "styled-components"
import { ButtonBigCommon } from "./buttons"
import { TextParagraphNormalSmall, TextParagraphNormalSmaller } from "./texts"

const ContainerSearchBarSC = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    flex-shrink: 0;
    padding: 1.5rem 1.875rem;
    border-radius: 0.625rem;
    background: white;
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
    font-weight: 500;
    line-height: normal;
    padding-right: 6rem;
    margin-left: 10px;
    @media (max-width: 768px) {
        padding-right: 0;
    }
    `
const SearchBarBannerMain = () => {
    return (
        <ContainerSearchBarSC>
            <ItemSearchBarSC>
            <TextParagraphNormalSmall  style={{display: 'flex', alignItems: 'center'}}>Location <img style={{ width: '1rem', marginLeft: '0.5rem' }} src="/icons/row_down.svg" alt="row_down"/></TextParagraphNormalSmall>
            <TextParagraphNormalSmaller>Where are you going</TextParagraphNormalSmaller>
            </ItemSearchBarSC>

            <ItemSearchBarSC>
            <TextParagraphNormalSmall  style={{display: 'flex', alignItems: 'center'}} >Date <img style={{ width: '1rem', marginLeft: '0.5rem' }} src="/icons/row_down.svg" alt="row_down"/></TextParagraphNormalSmall>
            <TextParagraphNormalSmaller>When you will go</TextParagraphNormalSmaller>
            </ItemSearchBarSC>

            <ItemSearchBarSC>
            <TextParagraphNormalSmall style={{display: 'flex', alignItems: 'center'}}>Guest <img style={{ width: '1rem', marginLeft: '0.5rem' }} src="/icons/row_down.svg" alt="row_down"/></TextParagraphNormalSmall>
            <TextParagraphNormalSmaller>Number of guest</TextParagraphNormalSmaller>
            </ItemSearchBarSC>

            <ButtonBigCommon text={"Explore Now"} type="fill"></ButtonBigCommon>
        </ContainerSearchBarSC>
    )
}

export default SearchBarBannerMain