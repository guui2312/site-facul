// js/detalhes.js

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const container = document.getElementById("detalhes");

  if (!id) {
    container.innerHTML = "<p>Medicamento não especificado. <a href='bula.html'>Voltar</a></p>";
    return;
  }

  const medicamento = await Medicamento.get(id);
  if (!medicamento) {
    container.innerHTML = "<p>Medicamento não encontrado. <a href='bula.html'>Voltar</a></p>";
    return;
  }

  const efeitos = (medicamento.efeitos_colaterais || []).map(e => `<li>${e}</li>`).join("");

  const links = (medicamento.links_externos || []).map(link => {
    let cor = "#2563eb";
    if (link.tipo === "vídeo") cor = "#dc2626";
    if (link.tipo === "bula") cor = "#059669";
    return `
      <li style="margin-bottom: 6px;">
        <a href="${link.url}" target="_blank" style="color: ${cor}; font-weight: bold; text-decoration: none;">
          🔗 ${link.titulo} (${link.tipo})
        </a>
      </li>
    `;
  }).join("");

  container.innerHTML = `
    <a href="bula.html">← Voltar</a>
    <h1>${medicamento.nome}</h1>
    <p><strong>Categoria:</strong> ${medicamento.categoria}</p>

    ${(medicamento.nomes_populares || []).length > 0 ? `
      <p style="font-size: 0.9rem; color: #555;">
        <strong>Também conhecido como:</strong> ${medicamento.nomes_populares.join(", ")}
      </p>
    ` : ""}

    ${medicamento.imagem_url ? `<img src="${medicamento.imagem_url}" alt="${medicamento.nome}" width="150" style="margin: 10px 0; border-radius: 6px;" />` : ""}
    
    <p>${medicamento.resumo}</p>

    ${efeitos ? `<h3>Efeitos Colaterais</h3><ul>${efeitos}</ul>` : ""}
    ${medicamento.voce_sabia ? `<p style="margin-top: 1rem; font-style: italic; color: #a85b00;">⚠️ ${medicamento.voce_sabia}</p>` : ""}
    ${links ? `<h3>Links Externos</h3><ul>${links}</ul>` : ""}

    <p style="margin-top:2rem; font-size: 0.9rem; color: #666;">
      ⚠️ Aviso: As informações são educativas. Sempre consulte um profissional de saúde.
    </p>
  `;
});
