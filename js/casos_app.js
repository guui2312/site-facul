// js/casos_app.js

document.addEventListener("DOMContentLoaded", async () => {
  const casos = await CasoReal.list();
  const container = document.getElementById("casos-container");
  const selectFiltro = document.getElementById("filtro-tipo");
  const inputBusca = document.getElementById("busca");

  async function render() {
    const todosCasos = await CasoReal.list();
    const tipo = selectFiltro.value;
    const texto = inputBusca.value.toLowerCase();

    const filtrados = todosCasos.filter((caso) => {
      if (tipo !== "todos" && caso.tipo !== tipo) return false;
      return (
        caso.titulo.toLowerCase().includes(texto) ||
        caso.relato.toLowerCase().includes(texto) ||
        (caso.medicamentos_envolvidos || []).some(m => m.toLowerCase().includes(texto))
      );
    });

    container.innerHTML = "";

    if (filtrados.length === 0) {
      container.innerHTML = "<p>Nenhum caso encontrado.</p>";
      return;
    }

    filtrados.forEach((caso) => {
      const div = document.createElement("div");
      div.className = "card";
      div.style.marginBottom = "1rem";

      const dataFormatada = new Date(caso.data_relato).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });

      div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <h3 style="margin: 0;">${caso.titulo}</h3>
            <p style="margin: 0; font-size: 0.85rem; color: #666;">${dataFormatada}</p>
          </div>
          <span style="
            padding: 3px 6px;
            border-radius: 4px;
            background: ${caso.tipo === "midiático" ? "#e0f2ff" : "#e6ffe6"};
            color: ${caso.tipo === "midiático" ? "#007acc" : "#228b22"};
            font-size: 0.75rem;
          ">
            ${caso.tipo === "midiático" ? "Caso Midiático" : "Relato Pessoal"}
          </span>
        </div>

        <p style="margin-top: 10px;">${caso.relato}</p>

        ${caso.medicamentos_envolvidos && caso.medicamentos_envolvidos.length > 0 ? `
  <div style="margin-top: 10px;">
    <strong style="font-size: 0.85rem;">Medicamentos envolvidos:</strong><br/>
    ${caso.medicamentos_envolvidos.map(m => `
      <span style="background: #fff3cd; color: #856404; padding: 3px 6px; margin: 2px; display: inline-block; border-radius: 4px; font-size: 0.8rem;">
        ${m}
      </span>
    `).join("")}
    ${caso.link_interacao ? `
      <div style="margin-top: 6px;">
        <a href="${caso.link_interacao}" target="_blank" style="font-size: 0.8rem; color: #2563eb; text-decoration: underline;">
          🔎 Fonte
        </a>
      </div>
    ` : ""}
  </div>
` : ""}


        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: #777;
          border-top: 1px solid #eee;
          margin-top: 15px;
          padding-top: 8px;
        ">

        </div>
      `;

      container.appendChild(div);
    });
  }

  selectFiltro.addEventListener("change", render);
  inputBusca.addEventListener("input", render);
  render();

  // Novo Relato
  const btnAbrir = document.getElementById("btnAbrirModal");
  const modal = document.getElementById("modalRelato");
  const btnCancelar = document.getElementById("btnCancelar");
  const btnEnviar = document.getElementById("btnEnviar");
  const erroRelato = document.getElementById("erroRelato");

  btnAbrir.addEventListener("click", () => {
    modal.style.display = "flex";
    erroRelato.style.display = "none";
  });

  btnCancelar.addEventListener("click", () => {
    modal.style.display = "none";
    limparFormulario();
  });

  function limparFormulario() {
    document.getElementById("relatoTitulo").value = "";
    document.getElementById("relatoTexto").value = "";
    document.getElementById("relatoMeds").value = "";
  }

  btnEnviar.addEventListener("click", async () => {
    const titulo = document.getElementById("relatoTitulo").value.trim();
    const texto = document.getElementById("relatoTexto").value.trim();
    const meds = document.getElementById("relatoMeds").value.trim();

    if (!titulo || !texto) {
      erroRelato.textContent = "Preencha todos os campos obrigatórios.";
      erroRelato.style.display = "block";
      return;
    }

    const medicamentos = meds
      .split(",")
      .map(m => m.trim())
      .filter(m => m !== "");

    await CasoReal.create({
      titulo: titulo,
      relato: texto,
      tipo: "pessoal",
      medicamentos_envolvidos: medicamentos.length > 0 ? medicamentos : undefined,
      data_relato: new Date().toISOString().split("T")[0]
    });

    modal.style.display = "none";
    limparFormulario();
    render();
  });

  // Serviços de Apoio
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

  const apoioContainer = document.getElementById("servicos-lista");

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
