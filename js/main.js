var frutaYPrecio = [];

function anadirFrutaYPrecio() {
  "use strict";

  let fruta = document.getElementsByClassName("frutaImg");

  // Ejecuta el evento "onclick" en todas las imágenes de frutas
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

  return suma.toFixed(2);
}

function obtenerNumeroKilosFruta() {
  "use strict";

  let frutas = [];
  const contadorKilos = (array) =>
    array.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  frutaYPrecio.forEach((element) => {
    frutas.push(element.split("-")[0]);
  });

  return contadorKilos(frutas);
}

function finalizarCompra() {
  "use strict";

  let botonFinCompra = document.getElementById("finCompra");
  let precioTotal = 0;

  botonFinCompra.onclick = function () {
    // TODO
    precioTotal = sumaTotalPrecios(obtenerPrecios());
    console.log(obtenerNumeroKilosFruta());
  };
}

anadirFrutaYPrecio();
finalizarCompra();
