import styled from "styled-components"
import { Colors } from "../styles/global"
import React from 'react';
/* STYLED COMPONENTS*/
const ButtonCircleFill= styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${Colors.secondary};
    //hover
    &:hover{
        background-color: ${Colors.tertiary};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    `

const ButtonCircleOutline= styled.button`
width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${Colors.primary};
    border: #99999980 solid 1px;
    //hover
    &:hover{
        background-color: ${Colors.tertiary};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    `

const ButtonCommonFill= styled.button`
    background-color: ${Colors.secondary};
    color: ${Colors.primary};
    padding: 0.4rem 2rem;
    font-weight: 450;
    /* sombra del boton*/
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    //hover
    &:hover{
        background-color: ${Colors.primary};
        color: ${Colors.secondary};
        border: ${Colors.secondary} solid 1px;
    }
    `

const ButtonCommonOutline= styled.button`
    color: ${Colors.secondary};
    padding: 0.4rem 2rem;
    font-weight: 450;
//hover
&:hover{
    background-color: ${Colors.secondary};
    color: ${Colors.primary};
    border: ${Colors.secondary} solid 1px;
    /* sombra del boton*/
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`

/** COMPONENTS **/
const ButtonCircle= ({pathImg, type}) => {
    return (
        // si el color es blanco entones el boton sera blanco 
        type === 'fill' ? (
            <ButtonCircleFill className="btn">
                <img src={pathImg}></img>
            </ButtonCircleFill>
        ): (
            <ButtonCircleOutline className="btn">
                <img src={pathImg}></img>
            </ButtonCircleOutline>
        )
    )
}

const ButtonCommon= ({text, type}) => {
    return (
        type === 'fill' ? (
            <ButtonCommonFill className="btn">
                {text}
            </ButtonCommonFill>
        ): (
            <ButtonCommonOutline className="btn">
                {text}
            </ButtonCommonOutline>
        )
    )
}

export {ButtonCircle, ButtonCommon}