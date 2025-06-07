// Substitua com o script completo do jogo_interacao

// Esse script deve ser salvo como jogo_interacao.js com o conteúdo enviado anteriormente// js/jogo_interacao.js

document.addEventListener("DOMContentLoaded", async () => {
  const perguntas = await InteracaoMedicamentosa.list();
  const container = document.getElementById("jogo-container");
  const perguntaEl = document.getElementById("jogo-pergunta");
  const opcoesEl = document.getElementById("jogo-opcoes");
  const feedbackEl = document.getElementById("jogo-feedback");
  const btnProxima = document.getElementById("btn-proxima");
  const progressoEl = document.getElementById("jogo-progresso");

  let pontuacao = 0;
  let total = 0;
  let atual = null;

  const severidades = ["baixa", "média", "alta", "perigosa"];

  function obterCor(severidade) {
    return {
      "baixa": "#d4edda",
      "média": "#fff3cd",
      "alta": "#ffeeba",
      "perigosa": "#f8d7da"
    }[severidade] || "#eee";
  }

  function novaPergunta() {
    feedbackEl.innerHTML = "";
    btnProxima.disabled = true;
    opcoesEl.innerHTML = "";

    const i = Math.floor(Math.random() * perguntas.length);
    atual = perguntas[i];

    const opcoesErradas = severidades
      .filter(s => s !== atual.severidade)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const todas = [...opcoesErradas, atual.severidade].sort(() => Math.random() - 0.5);

    perguntaEl.textContent = `Qual é o nível de severidade da interação entre: ${atual.medicamento1} + ${atual.medicamento2}`;

    todas.forEach(opcao => {
      const btn = document.createElement("button");
      btn.textContent = opcao;
      btn.style.padding = "10px";
      btn.style.flex = "1 1 40%";
      btn.style.border = "1px solid #ccc";
      btn.style.cursor = "pointer";
      btn.style.margin = "5px";

      btn.onclick = () => {
        total++;
        if (opcao === atual.severidade) {
          pontuacao++;
          btn.style.background = "#d4edda";
          feedbackEl.innerHTML = `<p style="color: green;"><strong>Correto!</strong> ${atual.descricao}</p>`;
        } else {
          btn.style.background = "#f8d7da";
          feedbackEl.innerHTML = `<p style="color: red;"><strong>Errado.</strong> A severidade correta era "${atual.severidade}".<br>${atual.descricao}</p>`;
        }

        document.querySelectorAll("#jogo-opcoes button").forEach(b => b.disabled = true);
        progressoEl.textContent = `Pontuação: ${pontuacao}/${total} (${Math.round((pontuacao / total) * 100)}%)`;
        btnProxima.disabled = false;
      };

      opcoesEl.appendChild(btn);
    });
  }

  btnProxima.onclick = () => {
    novaPergunta();
  };

  if (perguntas.length > 0) {
    novaPergunta();
  } else {
    container.innerHTML = "<p>Não há interações medicamentosas suficientes para jogar.</p>";
  }
});
