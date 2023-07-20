const axios = require('axios');

const postData = {
  "Nome": "Novo Tester",
  "Email": "novo@gmail.com",
  "Senha": "novaSenha",
  "CPF": "987654321",
  "Username": "Novo Tester",
  "Celular": "987654321"
};

const id = "82e9468e-1585-47aa-9740-7f6f047c97d8"

const apiUrl = 'https://educa-back-production-89a4.up.railway.app/users/' + id;

async function sendPostRequest() {
  try {
    const response = await axios.put(apiUrl, postData);

    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

sendPostRequest();
