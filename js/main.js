import { FrutaVerano } from "./frutas.js";
import { FrutaInvierno } from "./frutas.js";

var frutaYPrecio = [];
var frutas = [];
const BOTON_FIN_COMPRA = document.getElementById("finCompra");
const RESUMEN_COMPRA = document.getElementById("cajaResumen");
RESUMEN_COMPRA.value = "";

function inicializarFrutas() {
  "use strict";
  // Invierno
  let limon = new FrutaInvierno("Limón", 2.29, 0, true);
  let manzanaVde = new FrutaInvierno("Manzana vde", 1.39, false);
  let manzanaRoja = new FrutaInvierno("Manzana roja", 1.69, 0, false);
  let pina = new FrutaInvierno("Piña", 1.98, 0, false);
  let aguacate = new FrutaInvierno("Aguacate", 3.99, 0, true);
  let naranja = new FrutaInvierno("Naranja", 1.99, 0, true);
  let kiwi = new FrutaInvierno("Kiwi", 3.35, 0, false);
  let banana = new FrutaInvierno("Banana", 1.05, 0, false);
  let papaya = new FrutaInvierno("Papaya", 4.89, 0, false);

  // Verano
  let sandia = new FrutaVerano("Sandía", 1.35, 0, true, "Andalucía");
  let cereza = new FrutaVerano("Cereza", 4.75, 0, true, "Cataluña");
  let uvas = new FrutaVerano("Uva", 0.84, 0, true, "Valencia");
  let coco = new FrutaVerano("Coco", 3.77, 0, false, "Yakarta");
  let fresa = new FrutaVerano("Fresa", 1.99, 0, true, "Andalucía");

  frutas.push(
    limon,
    manzanaVde,
    manzanaRoja,
    pina,
    aguacate,
    naranja,
    kiwi,
    banana,
    papaya,
    sandia,
    cereza,
    uvas,
    coco,
    fresa
  );
}

inicializarFrutas();
anadirCantidadKilosAFrutas();

BOTON_FIN_COMPRA.onclick = () => {
  try {
    finalizarCompra();
  } catch (exceptionCestaCompraVacia) {
    alert("¡No puedes finalizar la compra con la cesta vacía!");
  } finally {
    frutaYPrecio = [];
  }
};

function anadirCantidadKilosAFrutas() {
  "use strict";
  let imagenesFrutas = document.getElementsByClassName("frutaImg");
  let cantidadKg = 0;

  const FRUTAS = {
    limon: () =>
      frutas[0].setCantidadKg(frutas[0].getCantidadKg() + cantidadKg),
    manzanaVde: () =>
      frutas[1].setCantidadKg(frutas[1].getCantidadKg() + cantidadKg),
    manzanaRoja: () =>
      frutas[2].setCantidadKg(frutas[2].getCantidadKg() + cantidadKg),
    pina: () => 
      frutas[3].setCantidadKg(frutas[3].getCantidadKg() + cantidadKg),
    aguacate: () =>
      frutas[4].setCantidadKg(frutas[4].getCantidadKg() + cantidadKg),
    naranja: () =>
      frutas[5].setCantidadKg(frutas[5].getCantidadKg() + cantidadKg),
    kiwi: () => 
      frutas[6].setCantidadKg(frutas[6].getCantidadKg() + cantidadKg),
    banana: () =>
      frutas[7].setCantidadKg(frutas[7].getCantidadKg() + cantidadKg),
    papaya: () =>
      frutas[8].setCantidadKg(frutas[8].getCantidadKg() + cantidadKg),
    sandia: () =>
      frutas[9].setCantidadKg(frutas[9].getCantidadKg() + cantidadKg),
    cereza: () =>
      frutas[10].setCantidadKg(frutas[10].getCantidadKg() + cantidadKg),
    uvas: () => 
      frutas[11].setCantidadKg(frutas[11].getCantidadKg() + cantidadKg),
    coco: () => 
      frutas[12].setCantidadKg(frutas[12].getCantidadKg() + cantidadKg),
    fresa: () =>
      frutas[13].setCantidadKg(frutas[13].getCantidadKg() + cantidadKg),
  };

  for (let i = 0; i < imagenesFrutas.length; i++) {
    anadirCantidad(i);
  }

  function anadirCantidad(i) {
    imagenesFrutas[i].onclick = function () {
      efectoFrutaClick(this);
      cantidadKg = document.getElementById(imagenesFrutas[i].alt).value;
      cantidadKg = Number.parseInt(cantidadKg);
      FRUTAS[imagenesFrutas[i].alt]();
      iniciarBotonCompra();
    };
  }

  function iniciarBotonCompra() {
    if (frutaYPrecio.length === 1) {
      BOTON_FIN_COMPRA.textContent = "¡Finalizar compra!";
      BOTON_FIN_COMPRA.removeAttribute("disabled");
      BOTON_FIN_COMPRA.removeAttribute("class", "botonDesactivado");
      RESUMEN_COMPRA.value = "";
    }
  }
}

function efectoFrutaClick(imagenFruta) {
  "use strict";

  imagenFruta.classList.add("frutaClick");

  setTimeout(() => {
    imagenFruta.classList.remove("frutaClick");
  }, 300);
}

function obtenerPrecios() {
  "use strict";
  let precios = [];

  frutaYPrecio.forEach((element) => {
    precios.push(element.split("-")[1]);
  });

  return precios;
}

function sumaTotalPrecios(arrayPrecios) {
  "use strict";
  let suma = arrayPrecios.reduce((precio1, precio2) => {
    return Number.parseFloat(precio1) + Number.parseFloat(precio2);
  });

  return Number.parseFloat(suma).toFixed(2);
}

function obtenerNumeroKilosFruta() {
  "use strict";
  let frutas = [];
  const contadorKilos = (array) =>
    array.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  frutaYPrecio.forEach((element) => {
    frutas.push(element.split("-")[0]);
  });

  ordenarFrutasOrdenAlfabeticoInverso();

  return contadorKilos(frutas);

  function ordenarFrutasOrdenAlfabeticoInverso() {
    frutas.sort(function (elem1, elem2) {
      if (elem1 < elem2) {
        return -1;
      } else if (elem1 > elem2) {
        return 1;
      } else {
        return 0;
      }
    });

    frutas.reverse();
  }
}

function obtenerPrecioMedioKilo() {
  "use strict";

  return (sumaTotalPrecios(obtenerPrecios()) / obtenerPrecios().length).toFixed(
    2
  );
}

function finalizarCompra() {
  alert(frutas[0].getCantidadKg());
  ("use strict");
  let precioTotal = 0;
  let precioMedio = 0;
  let fruta = null;

  if (frutaYPrecio.length === 0) {
    throw new exceptionCestaCompraVacia("El array frutaYPrecio está vacío.");
  }

  BOTON_FIN_COMPRA.textContent = "¡Gracias por la compra!";
  BOTON_FIN_COMPRA.disabled = "true";
  BOTON_FIN_COMPRA.setAttribute("class", "botonDesactivado");

  precioTotal = sumaTotalPrecios(obtenerPrecios());
  precioMedio = obtenerPrecioMedioKilo();
  fruta = obtenerNumeroKilosFruta();

  RESUMEN_COMPRA.value += "----------------------";

  for (let elem in fruta) {
    if (fruta[elem] <= 1) {
      RESUMEN_COMPRA.value += "\n" + elem + " --- " + fruta[elem] + " Kg";
    } else {
      RESUMEN_COMPRA.value += "\n" + elem + " --- " + fruta[elem] + " Kgs";
    }
  }

  RESUMEN_COMPRA.value += "\n----------------------";
  RESUMEN_COMPRA.value += "\nPrecio total --- " + precioTotal + "€";
  RESUMEN_COMPRA.value += "\nPrecio medio --- " + precioMedio + "€/Kg";
}

function exceptionCestaCompraVacia(mensaje) {
  this.mensaje = "Error: " + mensaje;
}

exceptionCestaCompraVacia.prototype = Object.create(Error.prototype);
exceptionCestaCompraVacia.prototype.name = "exceptionCestaCompraVacia";
