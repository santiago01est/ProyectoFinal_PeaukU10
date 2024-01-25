import { API_URL } from "../env";
import { getToken } from "./auth";

export const getTravelData = async () => {
    try {
      
    const apiUrl = API_URL;
      const response = await fetch(`${apiUrl}/api/public/viajes/viajes`);
      if (!response.ok) {
        throw new Error('Failed to fetch plans vacation data');
      }
  
      const travelData = await response.json();
      return travelData;
    } catch (error) {
      throw new Error(`Error in getPlansVacationData: ${error.message}`);
    }
  
  };

  export const sendPlanVacationData = async (data) => {

    try {

        const apiUrl = API_URL;

        console.log('holaaa ', getToken());

        const cleanData = {
          "viaje_id": data.idTrip,
          "nombre": data.name,
          "descripcion": data.description,
          "precio": data.price,
          "destino": data.name,
          "guia_turismo": "",
          "duracion_dias": data.days,
          "url_img": data.url
        }
        const response = await fetch(`${apiUrl}/api/public/planes/crear`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(cleanData),
        });

        if (response.ok) {
            console.log('create successfully');
            // cuadro de alerta de creado correctamente
            alert('¡Creado correctamente!');
            

           
        } else {
            // Si la respuesta no es exitosa, manejar el error
            console.error('Error to create plan vacation');
        }
    } catch (error) {
        console.error(error.message, error);
    }

}