const axios = require('axios');

const apiUrl = 'https://educa-back-production-89a4.up.railway.app/cursos';

async function sendPostRequest() {
  try {
    const response = await axios.get(apiUrl);

    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

sendPostRequest();
