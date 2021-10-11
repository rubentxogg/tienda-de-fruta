exceptionCestaCompraVacia.prototype = Object.create(Error.prototype);
exceptionCestaCompraVacia.prototype.name = "exceptionCestaCompraVacia";

var frutaYPrecio = [];

function anadirFrutaYPrecio() {
  "use strict";

  let fruta = document.getElementsByClassName("frutaImg");

  // Asigna el evento "onclick" en todos los elementos de la colección de fruta
  for (let i = 0; i < fruta.length; i++) {
    anadir(i);
  }

  function anadir(i) {
    fruta[i].onclick = function () {
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
          frutaYPrecio.push("Naranja-1,99");
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
    };
  }
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
  let resumen = document.getElementById("cajaResumen");
  let botonFinCompra = document.getElementById("finCompra");
  let fruta = null;

  botonFinCompra.onclick = function () {
    if (frutaYPrecio.length === 0) {
      throw new exceptionCestaCompraVacia(
        "El array frutaYPrecio está vacío."
      );
    }

    precioTotal = sumaTotalPrecios(obtenerPrecios());
    precioMedio = obtenerPrecioMedioKilo();
    fruta = obtenerNumeroKilosFruta();

    for (let elem in fruta) {
      if (fruta[elem] <= 1) {
        resumen.append("\n" + elem + " --- " + fruta[elem] + " kg");
      } else {
        resumen.append("\n" + elem + " --- " + fruta[elem] + " Kgs");
      }
    }

    resumen.append("\n\nPrecio total --- " + precioTotal + "€");
    resumen.append("\nPrecio medio --- " + precioMedio + "€/Kg");

    frutaYPrecio = [];
  };
}

function exceptionCestaCompraVacia(mensaje) {
  this.mensaje = "Error: " + mensaje;
}

// Ejecución del programa
anadirFrutaYPrecio();

try {
  finalizarCompra();
} catch (err) {
  // NO FUNCIONA!
  console.log("TEST");
}
finally{
  frutaYPrecio = [];
}
