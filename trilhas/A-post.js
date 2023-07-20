const axios = require('axios');

const postData = {
  "ID": "10",
  "Nome": "Nova Trilha",
  "UserN": "Nome do Usuario",
  "cursos" : ["Curso 1", "Curso 2"]
};

const apiUrl = 'https://educa-back-production-89a4.up.railway.app/trails';

async function sendPostRequest() {
  try {
    const response = await axios.post(apiUrl, postData);

    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

sendPostRequest();
