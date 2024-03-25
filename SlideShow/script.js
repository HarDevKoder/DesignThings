// ------------------------------------------------------------------------
// Referencio elementos del DOM
// ------------------------------------------------------------------------
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const carruseles = document.querySelector(".carruseles");
let posicion = 0;
let transitionTime;

// ------------------------------------------------------------------------
// Efecto deslizante
// ------------------------------------------------------------------------
const transicion = (posicion, transitionTime) => {
  carruseles.style.transform = `translate(-${posicion}%)`;
  carruseles.style.transition = `all ease ${transitionTime}`;
};

// ------------------------------------------------------------------------
// Desplazamiento al hacer clic en flecha derecha (>)
// ------------------------------------------------------------------------
const clicBotonDerecho = () => {
  [posicion, transitionTime] =
    posicion < 80 ? [(posicion += 20), "1s"] : [(posicion += -80), ".0s"];
  transicion(posicion, transitionTime);
};

// ------------------------------------------------------------------------
// Desplazamiento al hacer clic en flecha izquierda (<)
// ------------------------------------------------------------------------
const clicBotonIzquierdo = () => {
  [posicion, transitionTime] =
    posicion === 0 ? [(posicion -= -80), "0s"] : [(posicion -= 20), "1s"];
  transicion(posicion, transitionTime);
};

// ------------------------------------------------------------------------
// Programa principal
// ------------------------------------------------------------------------
btnLeft.addEventListener("click", clicBotonIzquierdo);
btnRight.addEventListener("click", clicBotonDerecho);
setInterval(clicBotonDerecho, 4000);




