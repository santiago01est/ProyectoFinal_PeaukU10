const apiUrl = 'http://localhost:3124/api/public';

export const getPlansVacationData = async () => {
  try {
    const response = await fetch(`${apiUrl}/planes/todos`);
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