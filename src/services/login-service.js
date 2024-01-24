export const sendDataLogin = async (data) => {
    try {
      
      const response = await fetch('/url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Si la respuesta es exitosa, redirigir a la pantalla de inicio
      if (response.ok) {
        
        console.log('started session successfully');
      } else {
        // Si la respuesta no es exitosa, manejar el error
        console.error('Error to start session');
      }
    } catch (error) {
      console.error('Error to comunicate with server', error);
    }
  };