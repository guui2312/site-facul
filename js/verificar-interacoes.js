document.addEventListener('DOMContentLoaded', () => {
  const med1Select = document.getElementById('med1');
  const med2Select = document.getElementById('med2');
  const limparBtn = document.querySelector('.limpar');
  const linhas = document.querySelectorAll('.tabela tbody tr');
  const medicamentos = new Set();

  linhas.forEach(linha => {
    const med1 = linha.children[0].textContent.trim();
    const med2 = linha.children[1].textContent.trim();
    medicamentos.add(med1);
    medicamentos.add(med2);
  });

  const sorted = Array.from(medicamentos).sort();

  sorted.forEach(med => {
    const opt1 = document.createElement('option');
    const opt2 = document.createElement('option');
    opt1.value = opt1.textContent = med;
    opt2.value = opt2.textContent = med;
    med1Select.appendChild(opt1);
    med2Select.appendChild(opt2);
  });

  function filtrarTabela() {
  const v1 = med1Select.value;
  const v2 = med2Select.value;
  let encontrou = false;

  linhas.forEach(linha => {
    const m1 = linha.children[0].textContent.trim();
    const m2 = linha.children[1].textContent.trim();
    const match = (v1 === m1 && v2 === m2) || (v1 === m2 && v2 === m1);

    if (v1 && v2) {
      linha.style.display = match ? '' : 'none';
      if (match) encontrou = true;
    } else {
      linha.style.display = '';
    }
  });

  // Mostrar ou esconder a tabela/mensagem
  const tabela = document.querySelector('.tabela');
  const msg = document.getElementById('mensagem-nenhum-resultado');

  if (v1 && v2) {
    tabela.style.display = encontrou ? 'table' : 'none';
    msg.style.display = encontrou ? 'none' : 'block';
  } else {
    tabela.style.display = 'table';
    msg.style.display = 'none';
  }
}

  med1Select.addEventListener('change', filtrarTabela);
  med2Select.addEventListener('change', filtrarTabela);

  limparBtn.addEventListener('click', () => {
  med1Select.value = '';
  med2Select.value = '';
  linhas.forEach(linha => linha.style.display = '');
  
  // Voltar a exibir a tabela
  document.querySelector('.tabela').style.display = 'table';

  // Ocultar mensagem de nenhum resultado
  document.getElementById('mensagem-nenhum-resultado').style.display = 'none';
});

  const botoesDetalhes = document.querySelectorAll('.detalhes');
  const modal = document.getElementById('modal');
  const modalTexto = document.getElementById('modal-texto');
  const modalTextoSecundario = document.getElementById('modal-texto-secundario');
  const modalTextoExtra1 = document.getElementById('modal-texto-extra1');
  const modalTextoExtra2 = document.getElementById('modal-texto-extra2');

  botoesDetalhes.forEach(botao => {
    botao.addEventListener('click', () => {
     modalTexto.innerHTML = botao.getAttribute('data-desc');
    modalTextoSecundario.innerHTML = botao.getAttribute('data-secundario') || '';
    modalTextoExtra1.innerHTML = botao.getAttribute('data-extra1') || '';
    modalTextoExtra2.innerHTML = botao.getAttribute('data-extra2') || '';
      modal.style.display = 'flex';
    });
  });
});