const axios = require('axios');

const id = "792b0601-badc-4f83-9c8d-0f7f5d83a6ae"

const apiUrl = 'https://educa-back-production-89a4.up.railway.app/users/' + id;

async function sendPostRequest() {
  try {
    const response = await axios.delete(apiUrl);

    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

sendPostRequest();
