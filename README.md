# Automação Web - Sauce Demo (Playwright)

Projeto de automação de testes E2E para o site [Sauce Demo](https://www.saucedemo.com) utilizando Playwright com TypeScript, seguindo boas práticas de Page Object Model (POM) e fixtures customizadas.

---

## Tecnologias Utilizadas

- **Playwright** - Framework de automação
- **TypeScript** - Linguagem tipada
- **Node.js** - Ambiente de execução
- **dotenv** - Gerenciamento de variáveis de ambiente

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

---

## Instalação

### Clonar o repositório

```bash
git clone https://github.com/patrickzmdev/qa-junior-playwright-frontend.git
cd qa-junior-playwright-frontend
```

### Instalar dependências

```bash
npm install
```

### Instalar navegadores do Playwright

```bash
npx playwright install
```

> **Nota:** Este comando baixa os navegadores necessários (Chromium, Firefox, WebKit).

---

## Configuração

### Configurar variáveis de ambiente

**1. Copie o arquivo `.env.example` para `.env`:**

```bash
# Windows (PowerShell)
Copy-Item .env.example .env

# Linux/Mac
cp .env.example .env
```

**2. Edite o arquivo `.env` com suas credenciais:**

```env
BASE_URL=https://www.saucedemo.com
STANDARD_USER=usuario_válido
STANDARD_PASS=senha_válida
INVALID_USER=usuario_inválido
INVALID_PASS=senha_inválida
```

> **IMPORTANTE:**  
> - O arquivo `.env` está no `.gitignore` e nunca será comitado  
> - Nunca compartilhe credenciais reais em repositórios públicos  
> - Para ambientes de CI/CD, use secrets do GitHub/GitLab

---

## Execução dos Testes

### Comandos disponíveis

```bash
# Executar todos os testes (headless)
npx playwright test

# Executar com interface visual (navegador visível)
npx playwright test --headed

# Executar em modo UI (interface gráfica interativa)
npx playwright test --ui
