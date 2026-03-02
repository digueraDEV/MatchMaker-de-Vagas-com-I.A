# MatchMaker de Vagas com IA | AI Job MatchMaker

<p align="center">
  <a href="#-português">
    <img src="https://img.shields.io/badge/Language-Português-green?style=for-the-badge" alt="Português">
  </a>
  <a href="#-english">
    <img src="https://img.shields.io/badge/Language-English-blue?style=for-the-badge" alt="English">
  </a>
</p>

---



---

## 🇧🇷 Português

### 📝 Sobre o Projeto
O **MatchMaker de Vagas com IA** é uma plataforma inovadora projetada para otimizar o processo de recrutamento. Utilizando Inteligência Artificial de ponta, o sistema analisa a compatibilidade entre o currículo e os requisitos de uma vaga em segundos.

### Tecnologias Utilizadas
- **Frontend:** HTML5, CSS3 (Modern Dark Mode), JavaScript (Vanilla).
- **Integração:** [n8n](https://n8n.io/) (Workflow Automation).
- **IA:** Modelo **Llama 3** via API do **Groq**.

### Como Funciona?
1. **Captura:** O JavaScript captura os dados das `textarea`.
2. **Webhook:** Os dados são enviados via `Fetch` (POST) para o **n8n**.
3. **IA:** O n8n orquestra a chamada para o **Groq**, que processa a análise semântica.
4. **Interface:** O JS trata a resposta, limpa caracteres especiais e anima a **barra de progresso**.

### Destaques do JavaScript
- **Async/Await:** Para garantir uma UI fluida enquanto a IA "pensa".
- **Regex:** `(\d+)%` para extrair a nota numérica e alimentar a barra visual.
- **Manipulação de DOM:** Feedback em tempo real para o usuário (botão "Analisando...").

[Voltar ao topo ↑](#-matchmaker-de-vagas-com-ia--ai-job-matchmaker)

---

## 🇺🇸 English

### 📝 About the Project
**AI Job MatchMaker** is an innovative platform designed to streamline the recruitment process. Using cutting-edge Artificial Intelligence, the system analyzes the compatibility between a resume and job requirements in seconds.

### Technologies
- **Frontend:** HTML5, CSS3 (Modern Dark Mode), JavaScript (Vanilla).
- **Integration:** [n8n](https://n8n.io/) (Workflow Automation).
- **AI:** **Llama 3** model via **Groq** API.

### How it Works
1. **Capture:** JavaScript captures data from the text areas.
2. **Webhook:** Data is sent via `Fetch` (POST) to **n8n**.
3. **AI:** n8n orchestrates the call to **Groq**, which processes the semantic analysis.
4. **Interface:** JS handles the response, cleans special characters, and animates the **progress bar**.

### JavaScript Highlights
- **Async/Await:** Ensures a smooth UI while the AI "thinks".
- **Regex:** `(\d+)%` to extract the numerical score and power the visual bar.
- **DOM Manipulation:** Real-time feedback for the user ("Analyzing..." button state).

[Back to top ↑](#-matchmaker-de-vagas-com-ia--ai-job-matchmaker)

---

## 📂 Como Replicar | How to Replicate
1. Clone este repositório / *Clone this repository*.
2. Importe o arquivo `workflow-n8n.json` no seu n8n / *Import the `workflow-n8n.json` file*.
3. Configure sua API Key no n8n e a URL no `script.js` / *Set up your API Key in n8n and the URL in `script.js`*.
