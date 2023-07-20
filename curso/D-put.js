const axios = require('axios');

const id = 'a4b90e41-e6e0-4424-9586-c689e1f6ba49';

const postData = {
  "Nome": "Atualizado Nome",
  "Tipo": "Atualizado Tipo"
};

const apiUrl = 'https://educa-back-production-89a4.up.railway.app/cursos/' + id;

async function sendPostRequest() {
  try {
    const response = await axios.put(apiUrl, postData);

    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

sendPostRequest();
