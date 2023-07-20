const axios = require('axios');

const id = '82e9468e-1585-47aa-9740-7f6f047c97d8';

const apiUrl = 'https://educa-back-production-89a4.up.railway.app/users/' + id;

async function sendPostRequest() {
  try {
    const response = await axios.get(apiUrl);

    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

sendPostRequest();
