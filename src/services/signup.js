import { useNavigate } from "react-router-dom";


export const sendDataSignUp = async (data) => {

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
            window.location.href = '/loginsignup';
        } else {
            // Si la respuesta no es exitosa, manejar el error
            console.error('Error to signup');
        }
    } catch (error) {
        console.error(error.message, error);
    }

}