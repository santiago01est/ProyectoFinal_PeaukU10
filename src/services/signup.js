import { useNavigate } from "react-router-dom";
import { API_URL } from "../env";


export const sendDataSignUp = async (data) => {

    try {

        const cleanData={
            username: data.firstName,
            password: data.password,
            nombre: data.name,
            apellidos: data.lastName,
            email: data.email,
            telefono: data.phone,
        }

        const apiUrl = API_URL;
        
        const response = await fetch(`${apiUrl}/api/public/cliente/crear`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cleanData),
        });

        if (response.ok) {
            console.log('signup successfully');
            // REDIRECCIONAR AL HOME
           
        } else {
            // Si la respuesta no es exitosa, manejar el error
            console.error('Error to signup');
        }
    } catch (error) {
        console.error(error.message, error);
    }

}