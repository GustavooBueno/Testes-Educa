const axios = require('axios');

const postData = {
  "Nome": "Nova Aula",
  "CursoID": 1,
  "TAssunto" : "Assunto de Texto",
  "TConteudo" : "Conteudo de Texto",
  "AAssunto" : "Assunto de Áudio",
  "AConteudo" : "Assunto de Conteúdo",
  "VAssunto" : "Assunto de Vídeo",
  "VConteudo" : "Conteúdo de Vídeo",
  "Tags" : "tag1",
};

const apiUrl = 'https://educa-back-production-89a4.up.railway.app/classes';

async function sendPostRequest() {
  try {
    const response = await axios.post(apiUrl, postData);

    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

sendPostRequest();
