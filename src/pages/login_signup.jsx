import styled from "styled-components";
import React, { useEffect, useState } from "react";
import TextField from "../components/textfield";
import { faIdCard, faMailBulk, faPhone, faUnlockAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { ButtonCommon } from "../components/buttons";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../services/authProvider";
import { getIsLoggedIn, login } from "../services/auth";


const ContainerMain = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginSignupContainerSC = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
`;
const ContainerForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
`;
const ContainerImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 20px 20px 0;
`;
/* Styled components para los tabs y formularios*/
const TabsContainerSC = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;
`;

const ContainerFormContentSC = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const ButtonTab = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "450")};
  color: ${({ isSelected }) => (isSelected ? "black" : "gray")};
  padding: 10px;
  margin: 0 10px;
  border-radius: 5px;
  /* al pasar sobre se hace un poco más grande */
  &:hover {
    border-radius: 5px;
    transition: all 0.9s ease;
    transform: scale(1.1);
  }
`;

const BlackSeparator = styled.div`
  width: 2px;
  height: 40px;
  background-color: black;
  margin: 20px 0; // Ajusta el margen según tus necesidades
`;


const LoginTab = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const goTo = useNavigate();
  const isAuthenticated= getIsLoggedIn();

  const sendDataLogin = async (data) => {
  try {
      const response = await fetch('https://peaku10ssn.onrender.com/api/public/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      if (response.ok) {
        const userData = await response.json();
        if (userData.token) {
          login(true, "admin",userData.token);
          goTo('/');
        } else {
          console.error('Respuesta no válida del servidor: no se encontró ningún token');
        }
      } else {
          // Si la respuesta no es exitosa, manejar el error
          console.error('Error to login');
      }
  } catch (error) {
      console.error('Error to communicate with server', error);
  }

};

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Validar campos antes de enviar al backend
    if (!loginData.email) {
      setEmailError("Ingrese su nombre de usuario");
      return;
    } else {
      setEmailError("");
    }

    if (!loginData.password) {
      setPasswordError("Ingrese su contraseña");
      return;
    } else {
      setPasswordError("");
    }


    // Si todos los campos son válidos, enviar los datos al backend
    console.log("Login data:", loginData);
    sendDataLogin(loginData);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ width: "100%", marginTop: "30px" }}>
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "20px",
        }}
        onSubmit={handleLoginSubmit}
      >
     
        <TextField
          label={"Email:"}
          type={"text"}
          name={"email"}
          value={loginData.email}
          onChange={handleLoginChange}
          icon={faUser}
          placeholder={"Enter your E-mail"}
        />
        {emailError && <p style={{ color: "orange", textAlign: "start" }}>{emailError}</p>}
       
        
        <TextField
          label={"Password:"}
          type={"password"}
          name={"password"}
          value={loginData.password}
          onChange={handleLoginChange}
          icon={faUnlockAlt}
          placeholder={"Enter your Password"}
        />
        {passwordError && <p style={{ color: "orange" }}>{passwordError}</p>}
        <div style={{ width: "100%" , display: "flex", justifyContent: "center"}}>
          <ButtonCommon type="submit" text="Login" typeForm="fill">
            Login
          </ButtonCommon>
        </div>
      
      </form>
    </div>
  );
};

const SignUpTab = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const goTo = useNavigate();

  const [messageInfo, setmessageInfo] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const sendDataSignUp = async (data) => {

    const cleanData={
        username: data.firstName,
        password: data.password,
        nombre: data.name,
        apellidos: data.lastName,
        email: data.email,
        telefono: data.phone,
    }
   
  
    try {
        
        const URL = "https://peaku10ssn.onrender.com";
        const response = await fetch(`${URL}/api/public/cliente/crear`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cleanData),
        });
  
        if (response.ok) {
            console.log('signup successfully');
            // REDIRECCIONAR AL HOME
            goTo('/loginsignup');
        } else {
            // Si la respuesta no es exitosa, manejar el error
            console.error('Error to signup');
        }
    } catch (error) {
        console.error(error.message, error);
    }
  
  }

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    setmessageInfo('');

      if (!signupData.name) {
        setNameError('Enter your name');
        setmessageInfo('✨ Please Complete all fields');
        return;
      } else {
        setNameError('');
      }
      if (!signupData.lastname) {
        setLastnameError('Enter your lastname');
        setmessageInfo('✨ Please Complete all fields');
        return;
      } else {
        setLastnameError('');
      }
      if (!signupData.phone) {
        setPhoneError('Enter your phone');
        setmessageInfo('✨ Please Complete all fields');
        return;
      } else {
        setPhoneError('');
      }
      if (!signupData.email) {
        setEmailError('Please enter an email');
        setmessageInfo('✨ Please Complete all fields');
        return;
      } else {
        setEmailError('');
      }
      if (!signupData.password) {
        setPasswordError('Please enter a password');
        setmessageInfo('✨ Please Complete all fields');
        return;
      } else {
        setPasswordError('');
      }
  
    
      if (!signupData.confirmPassword) {
        setConfirmPasswordError('Please confirm your password');
        setmessageInfo('✨ Please Complete all fields');
        return;
      } else {
        setConfirmPasswordError('');
      }
      setmessageInfo('');
    

      // aqui se presenta el error al llamar esta funcion
      sendDataSignUp(signupData);
 
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ width: '100%', marginTop: '30px' }}>
      <form
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: '20px',
        }}
        onSubmit={handleSignUpSubmit}
      >
        {messageInfo && <p style={{ color: 'orange' }}>{messageInfo}</p>}
        {currentStep === 1 && (
          <>
            <TextField
              label={'Name:'}
              type={'text'}
              name={'name'}
              value={signupData.name}
              onChange={handleSignUpChange}
              icon={faUser}
              placeholder={'Enter your Name'}
            />
            {nameError && <p style={{ color: 'orange', textAlign: 'start' }}>{nameError}</p>}
            <TextField
              label={'Lastname:'}
              type={'text'}
              name={'lastname'}
              value={signupData.lastname}
              onChange={handleSignUpChange}
              icon={faIdCard}
              placeholder={'Enter your lastname'}
            />
           {lastnameError && <p style={{ color: 'orange', textAlign: 'start' }}>{lastnameError}</p>}
           <TextField
              label={'Phone:'}
              type={'text'}
              name={'phone'}
              value={signupData.phone}
              onChange={handleSignUpChange}
              icon={faPhone}
              placeholder={'Enter your lastname'}
            />
           {phoneError && <p style={{ color: 'orange', textAlign: 'start' }}>{phoneError}</p>}
          </>
        )}

        {currentStep === 2 && (
          <>
          <TextField
              label={'E-mail:'}
              type={'text'}
              name={'email'}
              value={signupData.email}
              onChange={handleSignUpChange}
              icon={faMailBulk}
              placeholder={'Enter your Email'}
            />
            {emailError && <p style={{ color: 'orange' }}>{emailError}</p>}
            <TextField
              label={'Password:'}
              type={'password'}
              name={'password'}
              value={signupData.password}
              onChange={handleSignUpChange}
              icon={faUnlockAlt}
              placeholder={'Enter your Password'}
            />
            {passwordError && <p style={{ color: 'orange' }}>{passwordError}</p>}
            <TextField
              label={'Confirm Password:'}
              type={'password'}
              name={'confirmPassword'}
              value={signupData.confirmPassword}
              onChange={handleSignUpChange}
              icon={faUnlockAlt}
              placeholder={'Confirm your Password'}
            />
            {confirmPasswordError && <p style={{ color: 'orange' }}>{confirmPasswordError}</p>}
          </>
        )}

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          {currentStep === 1 && (
            <ButtonCommon type="button" text="Next" typeForm="fill" onClick={handleNextStep}>
              Next
            </ButtonCommon>
          )}
          {currentStep === 2 && (
            <>
              <ButtonCommon type="button" text="Back" typeForm="outline" onClick={handleBackStep}>
                Back
              </ButtonCommon>
              <ButtonCommon type="submit" text="Sign up" typeForm="fill">
                Sign up
              </ButtonCommon>
            </>
          )}
        </div>
      </form>
    </div>
  );
};


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ContainerFormContentSC>
      <TabsContainerSC>
        <ButtonTab
          isSelected={activeTab === "login"}
          onClick={() => handleTabChange("login")}
        >
          Login
        </ButtonTab>
        <BlackSeparator />
        <ButtonTab
          isSelected={activeTab === "signup"}
          onClick={() => handleTabChange("signup")}
        >
          Sign Up
        </ButtonTab>
      </TabsContainerSC>
      {activeTab === "login" ? <LoginTab /> : <SignUpTab />}
    </ContainerFormContentSC>
  );
};

const LoginSignup = () => {

  const auth= useAuth ();

  if(auth.isAuthenticated){
    return <Navigate to="/"/>
  }
  return (
    <ContainerMain>
      <LoginSignupContainerSC>
        <ContainerForm>
          <Tabs />
        </ContainerForm>
        <ContainerImg src="/img/img_login.jpg"></ContainerImg>
      </LoginSignupContainerSC>
    </ContainerMain>
  );
};

export default LoginSignup;
