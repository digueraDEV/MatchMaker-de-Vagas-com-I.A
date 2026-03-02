#MatchMaker de Vagas com IA | AI Job MatchMaker

<p align="center">
  <a href="https://digueradev.github.io/MatchMaker-de-Vagas-com-I.A/">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-Acesse_o_Projeto-00ff88?style=for-the-badge&logo=github" alt="Live Demo">
  </a>
</p>

<p align="center">
  <a href="#-português">
    <img src="https://img.shields.io/badge/Language-Português-green?style=flat-square" alt="Português">
  </a>
  <a href="#-english">
    <img src="https://img.shields.io/badge/Language-English-blue?style=flat-square" alt="English">
  </a>
</p>

---



---

## 🇧🇷 Português

### 📝 Sobre o Projeto
O **MatchMaker de Vagas com IA** é uma ferramenta de recrutamento inteligente que conecta candidatos às vagas ideais. O sistema utiliza IA para analisar currículos e descrições de cargos, gerando uma nota de compatibilidade e feedbacks construtivos.

🔗 **Link do Projeto:** [Acesse aqui](https://digueradev.github.io/MatchMaker-de-Vagas-com-I.A/)

###  Tecnologias Utilizadas
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
- **Integração:** [n8n](https://n8n.io/) para orquestração de Webhooks.
- **IA:** Modelo **Llama 3** via API do **Groq** para processamento de linguagem natural.

###  Como Funciona?
1. O usuário insere o currículo e a vaga.
2. O **JavaScript** envia os dados via `Fetch` para o servidor (n8n).
3. O **n8n** processa a lógica e solicita a análise da IA.
4. O resultado volta para o site, onde o JS anima a **barra de progresso** e exibe o texto limpo.

> **Nota:** Para que a demo funcione 100%, o servidor n8n precisa estar ativo.

[Voltar ao topo ↑](#-matchmaker-de-vagas-com-ia--ai-job-matchmaker)

---

## 🇺🇸 English

### 📝 About the Project
**AI Job MatchMaker** is an intelligent recruitment tool that connects candidates with their ideal jobs. The system uses AI to analyze resumes and job descriptions, generating a compatibility score and constructive feedback.

🔗 **Live Demo:** [Check it out here](https://digueradev.github.io/MatchMaker-de-Vagas-com-I.A/)

### Technologies
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
- **Integration:** [n8n](https://n8n.io/) for Webhook orchestration.
- **AI:** **Llama 3** model via **Groq** API for high-speed NLP.

### How it Works
1. User inputs the resume and job description.
2. **JavaScript** sends the data via `Fetch` to the backend (n8n).
3. **n8n** processes the logic and requests the AI analysis.
4. The result returns to the site, where JS animates the **progress bar** and displays the formatted text.

> **Note:** For the live demo to work 100%, the n8n server must be running.

[Back to top ↑](#-matchmaker-de-vagas-com-ia--ai-job-matchmaker)

---

## 📂 Como Replicar | How to Replicate
1. Clone este repositório / *Clone this repository*.
2. Importe o arquivo `workflow-n8n.json` no seu n8n / *Import the `workflow-n8n.json` file into your n8n*.
3. Configure sua API Key do Groq no n8n / *Set up your Groq API Key in n8n*.
