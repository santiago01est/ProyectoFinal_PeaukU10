import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Colors } from '../styles/global';

const ContainerTextFieldSC = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    background-color: #f0f0f0; /* Color gris claro */
  `
  
const FontAwesomeIconSC = styled(FontAwesomeIcon)`
    color: ${Colors.secondary}; /* Color naranja */
    margin-right: 5px;
  `
  
const InputText = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 5px;
    border-radius: 5px;
    background-color: transparent;
  `

const TextField = ({label,type, name, value, onChange, placeholder, icon}) => {
    return (

        <label style={{width: '100%'}}>
            {label}
        <ContainerTextFieldSC>
        <FontAwesomeIconSC icon={icon} />
        <InputText type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
      </ContainerTextFieldSC>
          </label>

      
    )
}

export default TextField