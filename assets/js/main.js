const imagen = document.getElementById("imagen");

function toggleBorder() {
  if (imagen.style.border == "") {
    imagen.style.border = "2px solid red";
  } else {
    imagen.style.border = "";
  }
}

function total() {
  let a = Number(document.getElementById("numero1").value);
  let b = Number(document.getElementById("numero2").value);
  let c = Number(document.getElementById("numero3").value);
  let resultado = document.getElementById("output");

  let suma = a + b + c;

  if (suma <= 10) {
    resultado.innerHTML = `Tienes ${suma} Stickers, es un Total Permitido`;
  } else {
    resultado.innerHTML = `Superas el Limite Permitido, Llevas ${suma} Stickers`;
  }
}

function validapass() {
  const digito1 = Number(document.getElementById("caja1").value);
  const digito2 = Number(document.getElementById("caja2").value);
  const digito3 = Number(document.getElementById("caja3").value);
  let mensaje = document.getElementById("validacion");

  if (digito1 === 9 && digito2 === 1 && digito3 === 1) {
    mensaje.innerHTML = `Contraseña 1 Correcta, Felicidades`;
  } else if (digito1 === 7 && digito2 === 1 && digito3 === 4) {
    mensaje.innerHTML = `Contraseña 2 Correcta, Felicidades`;
  } else {
    mensaje.innerHTML = `Contraseña Incorrecta, Vuelva a Intentar`;
  }
}
