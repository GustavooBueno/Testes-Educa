const axios = require('axios');

const postData = {
  "Nome": "Tester",
  "Email": "tester@gmail.com",
  "Senha": "senha",
  "CPF": "123456789",
  "Username": "Tester",
  "Celular": "123456789"
};

const apiUrl = 'https://educa-back-production-89a4.up.railway.app/users';

async function sendPostRequest() {
  try {
    const response = await axios.post(apiUrl, postData);

    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

sendPostRequest();
