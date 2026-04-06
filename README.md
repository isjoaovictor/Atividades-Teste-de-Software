# Teste de Software - Atualizacao de Testes de Integracao

## 1) Projeto Jest (JavaScript)

Pasta: `Aula02_04_03/jest`

### O que foi feito

- Adicionados scripts no `package.json`:
  - `test`: executa Jest.
  - `test:watch`: modo watch.
- Criado modulo `banco.js` para simular consulta de usuario.
- Criado modulo `auth.js` com funcao de login e validacao de contrato do modulo de banco.
- Criado `integracao.test.js` com cenarios de integracao:
  - Caminho feliz (login correto).
  - Erro de senha invalida.
  - Banco fora do ar com uso de stub.

### Arquivos

- `Aula02_04_03/jest/package.json`
- `Aula02_04_03/jest/banco.js`
- `Aula02_04_03/jest/auth.js`
- `Aula02_04_03/jest/integracao.test.js`
- `Aula02_04_03/jest/soma.test.js` (ja existente, mantido)

### Como executar

```bash
cd Aula02_04_03/jest
npm install
npm test
```

## 2) Projeto React + TypeScript (Vitest + Testing Library)

Pasta: `Aula02_04_03/Imagens e Rotas React/image_rotas`

### O que foi feito

- Instaladas dependencias de teste:
  - `vitest`
  - `jsdom`
  - `@testing-library/react`
  - `@testing-library/jest-dom`
- Atualizado `package.json` com scripts:
  - `test`: `vitest run`
  - `test:watch`: `vitest`
- Atualizado `vite.config.ts` para ambiente de teste `jsdom` e `setupFiles`.
- Atualizado `tsconfig.app.json` para tipos de teste.
- Criado `src/RootApp.tsx` para compor os modulos (`App`, `Image`, `Tela2`, `Tela3`).
- Atualizado `src/main.tsx` para renderizar `RootApp`.
- Criado setup de testes em `src/test/setup.ts`.
- Criado teste de integracao em `src/test/integracao.test.tsx` cobrindo:
  - Renderizacao integrada dos modulos.
  - Interacao no botao de contador (contrato de UI/estado).
  - Validacao de imagens renderizadas no conjunto de views.

### Arquivos

- `Aula02_04_03/Imagens e Rotas React/image_rotas/package.json`
- `Aula02_04_03/Imagens e Rotas React/image_rotas/package-lock.json`
- `Aula02_04_03/Imagens e Rotas React/image_rotas/vite.config.ts`
- `Aula02_04_03/Imagens e Rotas React/image_rotas/tsconfig.app.json`
- `Aula02_04_03/Imagens e Rotas React/image_rotas/src/main.tsx`
- `Aula02_04_03/Imagens e Rotas React/image_rotas/src/RootApp.tsx`
- `Aula02_04_03/Imagens e Rotas React/image_rotas/src/test/setup.ts`
- `Aula02_04_03/Imagens e Rotas React/image_rotas/src/test/integracao.test.tsx`

### Como executar

```bash
cd "Aula02_04_03/Imagens e Rotas React/image_rotas"
npm install
npm test
npm run build
```

## 3) CI/CD com GitHub Actions

### O que foi feito

Criado workflow para executar testes automaticamente no GitHub:

- Arquivo: `.github/workflows/ci-tests.yml`
- Eventos:
  - `push`
  - `pull_request`
- Jobs:
  - `jest-tests` (projeto `Aula02_04_03/jest`)
  - `react-tests` (projeto `Aula02_04_03/Imagens e Rotas React/image_rotas`)
- Ambos os jobs:
  - Fazem checkout.
  - Configuram Node 22.
  - Instalam dependencias com `npm ci`.
  - Executam testes.
- Job React tambem valida build de producao.

## Resultado da validacao local

Durante a execucao local desta tarefa:

- Projeto Jest: testes passaram.
- Projeto React: testes de integracao passaram.
- Projeto React: build de producao passou.

## Observacao sobre ambiente local

Em Windows sem permissao administrativa, a instalacao global do Node via `winget` pode falhar.

Se isso acontecer:

1. Abra o terminal como administrador e instale Node LTS globalmente.
2. Ou use um ambiente com Node ja instalado (ex.: CI, devcontainer, WSL).

## Fluxo recomendado para evolucao

1. Criar novos testes de integracao por modulo.
2. Manter separacao entre unitario e integracao por pastas/nomes.
3. Executar `npm test` antes de cada commit.
4. Abrir PR e usar o resultado do GitHub Actions como gate de qualidade.
