const apiUrl = 'https://peaku10ssn.onrender.com';

export const getPlansVacationData = async () => {

  try {
    const response = await fetch(`${apiUrl}/api/public/planes/todos`);
    if (!response.ok) {
      throw new Error('Failed to fetch plans vacation data');
    }

    const plansVacationData = await response.json();
    console.log(plansVacationData);
    return plansVacationData;
  } catch (error) {
    throw new Error(`Error in getPlansVacationData: ${error.message}`);
  }

};