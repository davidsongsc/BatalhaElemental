const formCadastro = document.getElementById('form-cadastro');
const inputSenha = document.getElementById('input-senha');
const divSenhaForca = document.getElementById('senha-forca');

inputSenha.addEventListener('input', () => {
  const senha = inputSenha.value;
  const forca = calcularForcaSenha(senha);
  divSenhaForca.textContent = `Força da senha: ${forca}`;
});

formCadastro.addEventListener('submit', (event) => {
  const senha = inputSenha.value;
  const confirmaSenha = document.getElementById('input-confirma-senha').value;
  if (senha !== confirmaSenha) {
    alert('As senhas não coincidem.');
    event.preventDefault();
  }
});

function calcularForcaSenha(senha) {
  let forca = 0;
  if (senha.length >= 8) forca++;
  if (senha.match(/[a-z]/)) forca++;
  if (senha.match(/[A-Z]/)) forca++;
  if (senha.match(/[0-9]/)) forca++;
  if (senha.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)) forca++;
  return forca;
}

formCadastro.addEventListener('submit', (event) => {
    const senha = inputSenha.value;
    const confirmaSenha = document.getElementById('input-confirma-senha').value;
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem.');
      event.preventDefault();
    }
  });
  