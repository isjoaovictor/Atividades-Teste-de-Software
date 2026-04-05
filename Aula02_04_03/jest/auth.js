async function login(email, senha, banco) {
  if (!banco || typeof banco.buscarUsuarioPorEmail !== "function") {
    throw new Error("Contrato invalido: banco.buscarUsuarioPorEmail ausente");
  }

  const usuario = await banco.buscarUsuarioPorEmail(email);

  if (!usuario) {
    throw new Error("Usuario nao encontrado");
  }

  if (usuario.senha !== senha) {
    throw new Error("Senha invalida");
  }

  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email
  };
}

module.exports = {
  login
};
