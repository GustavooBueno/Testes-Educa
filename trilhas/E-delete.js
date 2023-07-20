const axios = require('axios');

const id = '4jk32h34ugh2kj'

const apiUrl = 'https://educa-back-production-89a4.up.railway.app/trails/' + id;

async function sendPostRequest() {
  try {
    const response = await axios.delete(apiUrl);

    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

sendPostRequest();
