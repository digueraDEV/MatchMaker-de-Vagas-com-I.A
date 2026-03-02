const curriculo = document.getElementById('campo-curriculo');
const vaga = document.getElementById('campo-vaga');
const botao = document.getElementById('btn-testar-match');
const areaResultado = document.getElementById('resultado-match');
const containerProgresso = document.getElementById('container-progresso');
const barraPreenchida = document.getElementById('barra-preenchida');
const valorPorcentagem = document.getElementById('valor-porcentagem');

botao.addEventListener('click', async function() { 
    const textoCurriculo = curriculo.value;
    const textoVaga = vaga.value;

    if (!textoCurriculo || !textoVaga) {
        alert("Por favor, preencha os dois campos!");
        return;
    }

    // Reset visual
    botao.innerText = "Analisando com IA... 🤖";
    botao.disabled = true;
    containerProgresso.style.display = 'none';
    barraPreenchida.style.width = '0%';
    areaResultado.innerText = "Processando match...";

    try {
        const resposta = await fetch('http://localhost:5678/webhook/MatchMaker', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ curriculoEnviado: textoCurriculo, vagaEnviada: textoVaga })
        });

        const textoDaIA = await resposta.text();
        
        // Limpa asteriscos do texto
        const textoLimpo = textoDaIA.replace(/\*/g, '');
        areaResultado.innerText = textoLimpo;

        // Lógica para encontrar a porcentagem (ex: "85%") no texto
        const regexMatch = textoLimpo.match(/(\d+)%/);
        if (regexMatch) {
            const numero = regexMatch[1];
            containerProgresso.style.display = 'block';
            
            // Espera um milisegundo para a animação disparar
            setTimeout(() => {
                barraPreenchida.style.width = numero + "%";
                valorPorcentagem.innerText = numero + "%";
                
                // Muda a cor baseado no sucesso
                if (numero < 40) barraPreenchida.style.backgroundColor = "#ff7300";
                else if (numero < 70) barraPreenchida.style.backgroundColor = "#ff7300";
                else barraPreenchida.style.backgroundColor = "#ff7300";
            }, 50);
        }

    } catch (erro) {
        areaResultado.innerText = "Erro ao conectar com o servidor.";
    } finally {
        botao.innerText = "Testar Match";
        botao.disabled = false;
    }
});