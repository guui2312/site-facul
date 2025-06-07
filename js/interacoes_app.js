document.addEventListener("DOMContentLoaded", async () => {
  const interacoes = await InteracaoMedicamentosa.list();
  const tabela = document.querySelector("#tabela-interacoes tbody");
  const apoioContainer = document.getElementById("servicos-lista");

  function obterCorSeveridade(severidade) {
    switch (severidade) {
      case "baixa": return "background: #d4edda; color: #155724;";
      case "média": return "background: #fff3cd; color: #856404;";
      case "alta": return "background: #ffeeba; color: #856404;";
      case "perigosa": return "background: #f8d7da; color: #721c24;";
      default: return "background: #e2e3e5; color: #6c757d;";
    }
  }

  function abrirModal(interacao) {
    document.getElementById("modal-titulo").textContent = `Interação entre ${interacao.medicamento1} e ${interacao.medicamento2}`;
    document.getElementById("modal-interacao").textContent = `Severidade: ${interacao.severidade}`;
    document.getElementById("modal-descricao").textContent = interacao.descricao || "Sem descrição disponível.";
    document.getElementById("modal-recomendacao").textContent = interacao.recomendacao 
      ? `Recomendação: ${interacao.recomendacao}` 
      : "";
    document.getElementById("modal-aviso").textContent = 
      (interacao.severidade === "perigosa" || interacao.severidade === "alta")
        ? "⚠️ Consulte um profissional antes de combinar medicamentos." : "";
    document.getElementById("modal-detalhes").style.display = "flex";
  }

  window.fecharModal = function() {
    document.getElementById("modal-detalhes").style.display = "none";
  }

  function renderizarTabela() {
    tabela.innerHTML = "";

    if (interacoes.length === 0) {
      tabela.innerHTML = "<tr><td colspan='4' style='text-align:center;'>Nenhuma interação registrada.</td></tr>";
      return;
    }

    interacoes.forEach(interacao => {
      const tr = document.createElement("tr");

      const td1 = document.createElement("td");
      td1.textContent = interacao.medicamento1;

      const td2 = document.createElement("td");
      td2.textContent = interacao.medicamento2;

      const td3 = document.createElement("td");
      td3.innerHTML = `<span style="padding:4px 8px; border-radius:4px; ${obterCorSeveridade(interacao.severidade)}">${interacao.severidade}</span>`;

      const td4 = document.createElement("td");
      const btn = document.createElement("button");
      btn.textContent = "Ver detalhes";
      btn.onclick = () => abrirModal(interacao);
      td4.appendChild(btn);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

      tabela.appendChild(tr);
    });
  }

  renderizarTabela();

  const servicos = [
    {
      nome: "Centro de Informações sobre Medicamentos",
      descricao: "Orientação sobre uso adequado de medicamentos",
      telefone: "0800 771 3733",
      url: "https://www.cff.org.br/pagina.php?id=201",
      icone: "📞"
    },
    {
      nome: "ANVISA - Notificações",
      descricao: "Canal para notificar problemas com medicamentos",
      url: "https://www.gov.br/anvisa/pt-br",
      icone: "🏛️"
    },
    {
      nome: "CVS - Vigilância Sanitária",
      descricao: "Centro de Vigilância Sanitária do seu estado",
      url: "http://www.cvs.saude.sp.gov.br/",
      icone: "❤️"
    }
  ];

  if (apoioContainer) {
    servicos.forEach((servico) => {
      const link = document.createElement("a");
      link.href = servico.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.style.display = "block";
      link.style.padding = "16px";
      link.style.borderBottom = "1px solid #eee";
      link.style.textDecoration = "none";
      link.style.color = "#333";
      link.onmouseover = () => link.style.background = "#f9f9f9";
      link.onmouseout = () => link.style.background = "white";

      link.innerHTML = `
        <div style="display: flex; align-items: start; gap: 12px;">
          <div style="font-size: 1.2rem;">${servico.icone}</div>
          <div style="flex-grow: 1;">
            <strong>${servico.nome}</strong><br/>
            <span style="font-size: 0.85rem; color: #666;">${servico.descricao}</span>
            ${servico.telefone ? `<br/><span style="font-size: 0.9rem; font-weight: bold;">${servico.telefone}</span>` : ""}
          </div>
          <span style="color: #aaa;">🔗</span>
        </div>
      `;

      apoioContainer.appendChild(link);
    });
  }
});