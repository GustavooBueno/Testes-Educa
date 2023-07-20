const axios = require('axios');

const postData = {
  "Email": "tester@gmail.com",
  "Senha": "senha"
};

const apiUrl = 'https://educa-back-production-89a4.up.railway.app/users/login';

async function sendPostRequest() {
  try {
    const response = await axios.post(apiUrl, postData);

    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

sendPostRequest();
