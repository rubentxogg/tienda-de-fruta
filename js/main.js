var frutaYKilos = [];

function anadirKg() {
  "use strict";

  let fruta = document.getElementsByClassName("frutaImg");

  for (let i = 0; i < fruta.length; i++) {
    anadirFrutaYKilos(i);
  }

  function anadirFrutaYKilos(i) {
    fruta[i].onclick = function () {
      switch (fruta[i].alt) {
        case "limon":
          frutaYKilos.push("Limón-2.29");
          break;
        case "manzanaVerde":
          frutaYKilos.push("Manzana verde-1.39");
          break;
        case "manzanaRoja":
          frutaYKilos.push("Manzana roja-1.69");
          break;
        case "piña":
          frutaYKilos.push("Piña-1.98");
          break;
        case "sandia":
          frutaYKilos.push("Sandía-1.35");
          break;
        case "cereza":
          frutaYKilos.push("Cereza-4.75");
          break;
        case "banana":
          frutaYKilos.push("Banana-1.05");
          break;
        case "uvas":
          frutaYKilos.push("Uvas-0.84");
          break;
        case "coco":
          frutaYKilos.push("Coco-3.77");
          break;
        case "fresa":
          frutaYKilos.push("Fresa-1.99");
          break;
        case "aguacate":
          frutaYKilos.push("Aguacate-3.99");
          break;
        case "naranja":
          frutaYKilos.push("Naranja-1,99");
          break;
        case "kiwi":
          frutaYKilos.push("Kiwi-3.35");
          break;
        case "papaya":
          frutaYKilos.push("Papaya-4.89");
          break;
        default:
          console.error("No se ha podido añadir a la cesta.");
          break;
      }
    };
  }
}

anadirKg();
