const textArea = document.querySelector('.text-area-input');
const mensaje = document.querySelector('.text-area-mensaje');

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = '';
  mensaje.style.backgroundImage = 'none';
  document.querySelector('h4').style.display = 'none';
  document.querySelector('h5').style.display = 'none';
  document.querySelector('.btn-copiar').style.display = 'block';
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ['e', 'ou'],
    ['i', 'ae'],
    ['a', 'ce'],
    ['o', 'ea'],
    ['u', 'ui'],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = '';
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ['e', 'ou'],
    ['i', 'ae'],
    ['a', 'ce'],
    ['o', 'ea'],
    ['u', 'ui'],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}

function copiarTexto() {
  navigator.clipboard
    .writeText(mensaje.value)
    .then(() => {
      alert('Texto copiado al portapapeles');
    })
    .catch((err) => {
      alert.error('Algo salió mal al copiar el texto: ', err);
    });
}
