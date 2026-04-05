const { login } = require("./auth");
const bancoReal = require("./banco");

describe("Integracao auth + banco", () => {
  test("caminho feliz: login correto retorna dados do usuario", async () => {
    const usuario = await login("aluno@teste.com", "123456", bancoReal);

    expect(usuario).toEqual({
      id: 1,
      nome: "Aluno Teste",
      email: "aluno@teste.com"
    });
  });

  test("caso de erro: senha errada", async () => {
    await expect(login("aluno@teste.com", "senha-errada", bancoReal)).rejects.toThrow(
      "Senha invalida"
    );
  });

  test("caso de erro: banco fora do ar (stub)", async () => {
    const stubBancoForaDoAr = {
      buscarUsuarioPorEmail: jest
        .fn()
        .mockRejectedValue(new Error("Banco fora do ar"))
    };

    await expect(
      login("aluno@teste.com", "123456", stubBancoForaDoAr)
    ).rejects.toThrow("Banco fora do ar");
  });
});
