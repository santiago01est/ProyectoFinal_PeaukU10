const apiUrl = 'http://tu-backend-url/api'; // Reemplaza con la URL de tu backend

export const getTravelData = async () => {
  try {
    const response = await fetch(`${apiUrl}/travels`);
    if (!response.ok) {
      throw new Error('Error get travel data');
    }
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};