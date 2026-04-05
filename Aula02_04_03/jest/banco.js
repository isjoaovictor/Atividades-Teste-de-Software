const usuarios = [
  {
    id: 1,
    email: "aluno@teste.com",
    senha: "123456",
    nome: "Aluno Teste"
  }
];

async function buscarUsuarioPorEmail(email) {
  return usuarios.find((usuario) => usuario.email === email) || null;
}

module.exports = {
  buscarUsuarioPorEmail
};
