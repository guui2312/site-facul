//  js/bula.js

let categoriaAtiva = "todos";
let filtroTexto = "";

document.addEventListener("DOMContentLoaded", async () => {
  const medicamentos = await Medicamento.list();
  const container = document.getElementById("medicamentos");

  function render() {
    const filtrados = medicamentos.filter((med) => {
      const categoriaOk = categoriaAtiva === "todos" || med.categoria === categoriaAtiva;
      const textoOk = filtroTexto === "" || med.nome.toLowerCase().includes(filtroTexto.toLowerCase()) ||
        (med.nomes_populares || []).some(nome => nome.toLowerCase().includes(filtroTexto.toLowerCase()));
      return categoriaOk && textoOk;
    });

    container.innerHTML = "";

    if (filtrados.length === 0) {
      container.innerHTML = "<p>Nenhum medicamento encontrado.</p>";
    } else {
      filtrados.forEach((med) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">${med.nome}</h3>
            <span style="padding: 2px 6px; background: #e0e0e0; border-radius: 4px; font-size: 0.8rem;">
              ${med.categoria}
            </span>
          </div>


          ${med.imagem_url ? `
            <img src="${med.imagem_url}" alt="${med.nome}" style="max-width: 150px; margin: 10px 0; border-radius: 6px;" />
          ` : ""}

          
          ${med.voce_sabia ? `
            <p style="margin-top: 10px; font-size: 0.85rem; color: #a85b00; font-style: italic;">
              ⚠️ Importante: ${med.voce_sabia}
            </p>
          ` : ""}

          ${med.links_externos && med.links_externos.length > 0 ? `
            <div style="margin-top: 10px;">
              <strong style="font-size: 0.9rem;">Links úteis:</strong><br/>
              ${med.links_externos.map(link => `
                <a href="${link.url}" target="_blank" style="display:block; font-size:0.85rem; color:#2563eb;">
                  🔗 [${link.tipo}] ${link.titulo}
                </a>
              `).join("")}
            </div>
          ` : ""}

  
        `;
        container.appendChild(card);
      });
    }

    document.getElementById("contador").textContent = `Exibindo ${filtrados.length} medicamento(s)`;
  }

  // Busca por texto
  document.getElementById("busca").addEventListener("input", (e) => {
    filtroTexto = e.target.value;
    render();
  });

  // Filtro por categoria
  document.querySelectorAll('[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      categoriaAtiva = btn.dataset.cat;

      // Visual - marca o botão ativo
      document.querySelectorAll('[data-cat]').forEach(b => b.classList.remove("ativo"));
      btn.classList.add("ativo");

      render();
    });
  });

  render();
});
