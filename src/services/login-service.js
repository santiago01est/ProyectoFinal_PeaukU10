
import { API_URL } from "../env";
import { useAuth } from "./authProvider";

export const sendDataLogin = async (data) => {
    try {
       // const goTo = useNavigate();
        const auth = useAuth();
        const apiUrl = API_URL;

        const response = await fetch(`${apiUrl}/api/public/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('login successfully');
            /*
            const json=(await response.json());
            if(json.body.token){
                auth.saveUser(json);
                goTo('/');
            }
            */

        } else {
            // Si la respuesta no es exitosa, manejar el error
            console.error('Error to signup');
        }
    } catch (error) {
        console.error('Error to communicate with server', error);
    }

};

// logout

export const logout = () => {
    const auth = useAuth();
    // const goto = useNavigate();

    auth.logout();

    // goto('/');


}