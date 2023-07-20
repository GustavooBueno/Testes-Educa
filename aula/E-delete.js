const axios = require('axios');

const id = "76d78s6aduhsjk"

const apiUrl = 'https://educa-back-production-89a4.up.railway.app/classes/' + id;

async function sendPostRequest() {
  try {
    const response = await axios.delete(apiUrl);

    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

sendPostRequest();
