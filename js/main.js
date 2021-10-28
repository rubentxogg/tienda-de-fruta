import { Fruta } from "./frutas.js";
import { FrutaVerano } from "./frutas.js";
import { FrutaInvierno } from "./frutas.js";
////////////////////////////////////////////////////////////////////////

function inicializarFrutas(){
  "use strict";
  // Invierno
  let limon = new FrutaInvierno("Limón", 2.29, 0, true);
  let manzanaVde = new FrutaInvierno("Manzana vde", 1.39, false);
  let manzanaRoja = new FrutaInvierno("Manzana roja", 1.69, 0, false);
  let pina = new FrutaInvierno("Piña", 1.98, 0, false);
  let aguacate = new FrutaInvierno("Aguacate", 3.99, 0, true);
  let naranja = new FrutaInvierno("Naranja", 1.99, 0, true);
  let kiwi = new FrutaInvierno("Kiwi", 3.35, 0, false);
  let banana = new FrutaInvierno("Banana", 1.05, 0 , false);
  let papaya = new FrutaInvierno("Papaya", 4.89, 0, false);

  // Verano
  let sandia = new FrutaVerano("Sandía", 1.35, 0, true, "Andalucía");
  let cereza = new FrutaVerano("Cereza", 4.75, 0, true, "Cataluña");
  let uvas = new FrutaVerano("Uva", 0.84, 0, true, "Valencia");
  let coco = new FrutaVerano("Coco", 3.77, 0, false, "Indonesia");

  // Otras
  let fresa = new Fruta("Fresa", 1.99, 0);
}

////////////////////////////////////////////////////////////////////////
var frutaYPrecio = [];
const BOTON_FIN_COMPRA = document.getElementById("finCompra");
const RESUMEN_COMPRA = document.getElementById("cajaResumen");
RESUMEN_COMPRA.value = "";

anadirFrutaYPrecio();

BOTON_FIN_COMPRA.onclick = () => {
  try {
    finalizarCompra();
  } catch (exceptionCestaCompraVacia) {
    alert("¡No puedes finalizar la compra con la cesta vacía!");
  } finally {
    frutaYPrecio = [];
  }
};

function anadirFrutaYPrecio() {
  "use strict";

  let fruta = document.getElementsByClassName("frutaImg");

  // Asigna el evento "onclick" en todos los elementos de la colección de fruta
  for (let i = 0; i < fruta.length; i++) {
    anadir(i);
  }

  function anadir(i) {
    fruta[i].onclick = function () {
      efectoFrutaClick(this);

      switch (fruta[i].alt) {
        case "limon":
          frutaYPrecio.push("Limón-2.29");
          break;
        case "manzanaVerde":
          frutaYPrecio.push("Manzana verde-1.39");
          break;
        case "manzanaRoja":
          frutaYPrecio.push("Manzana roja-1.69");
          break;
        case "piña":
          frutaYPrecio.push("Piña-1.98");
          break;
        case "sandia":
          frutaYPrecio.push("Sandía-1.35");
          break;
        case "cereza":
          frutaYPrecio.push("Cereza-4.75");
          break;
        case "banana":
          frutaYPrecio.push("Banana-1.05");
          break;
        case "uvas":
          frutaYPrecio.push("Uvas-0.84");
          break;
        case "coco":
          frutaYPrecio.push("Coco-3.77");
          break;
        case "fresa":
          frutaYPrecio.push("Fresa-1.99");
          break;
        case "aguacate":
          frutaYPrecio.push("Aguacate-3.99");
          break;
        case "naranja":
          frutaYPrecio.push("Naranja-1.99");
          break;
        case "kiwi":
          frutaYPrecio.push("Kiwi-3.35");
          break;
        case "papaya":
          frutaYPrecio.push("Papaya-4.89");
          break;
        default:
          console.error("No se ha podido añadir a la cesta.");
          break;
      }

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
  "use strict";

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
