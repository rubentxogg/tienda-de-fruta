const BOTON_FIN_COMPRA = document.getElementById("finCompra");
const RESUMEN_COMPRA = document.getElementById("cajaResumen");
const ASIDE_DCHA = document.getElementById("asideDcha");
var frutas = [];

limpiarValue(RESUMEN_COMPRA);
inicializarFrutas();
anadirCantidadKilosAFrutas();

BOTON_FIN_COMPRA.onclick = () => {
  try {
    finalizarCompra(frutas);
  } catch (exceptionCestaCompraVacia) {
    alert("¡No puedes finalizar la compra con la cesta vacía!");
  } finally {
    frutas = [];
    limpiarCarritoCompra();
    limpiarInputCantidades();
    inicializarFrutas();
  }
};

function limpiarValue(input){
  "use strict";
  input.value = "";
}

function inicializarFrutas() {
  "use strict";
  // Invierno
  let limon = new FrutaInvierno("Limón", 2.29, 0, true);
  let manzanaVde = new FrutaInvierno("Manzana vde", 1.39, 0, false);
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
  let uvas = new FrutaVerano("Uvas", 0.84, 0, true, "Valencia");
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

function anadirCantidadKilosAFrutas() {
  "use strict";
  let imagenesFrutas = document.getElementsByClassName("frutaImg");
  let cantidadKg = 0;

  const FRUTAS = {
    limon: () =>
      frutas[0].setCantidadKg(frutas[0].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[0].getNombre(), cantidadKg)),

    manzanaVerde: () =>
      frutas[1].setCantidadKg(frutas[1].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[1].getNombre(), cantidadKg)),

    manzanaRoja: () =>
      frutas[2].setCantidadKg(frutas[2].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[2].getNombre(), cantidadKg)),

    pina: () => 
      frutas[3].setCantidadKg(frutas[3].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[3].getNombre(), cantidadKg)),

    aguacate: () =>
      frutas[4].setCantidadKg(frutas[4].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[4].getNombre(), cantidadKg)),

    naranja: () =>
      frutas[5].setCantidadKg(frutas[5].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[5].getNombre(), cantidadKg)),

    kiwi: () => 
      frutas[6].setCantidadKg(frutas[6].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[6].getNombre(), cantidadKg)),

    banana: () =>
      frutas[7].setCantidadKg(frutas[7].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[7].getNombre(), cantidadKg)),

    papaya: () =>
      frutas[8].setCantidadKg(frutas[8].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[8].getNombre(), cantidadKg)),

    sandia: () =>
      frutas[9].setCantidadKg(frutas[9].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[9].getNombre(), cantidadKg)),

    cereza: () =>
      frutas[10].setCantidadKg(frutas[10].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[10].getNombre(), cantidadKg)),

    uvas: () => 
      frutas[11].setCantidadKg(frutas[11].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[11].getNombre(), cantidadKg)),

    coco: () => 
      frutas[12].setCantidadKg(frutas[12].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[12].getNombre(), cantidadKg)),
      
    fresa: () =>
      frutas[13].setCantidadKg(frutas[13].getCantidadKg() + cantidadKg,
      mostrarEnCarrito(frutas[13].getNombre(), cantidadKg)),
  };

  for (let i = 0; i < imagenesFrutas.length; i++) {
    anadirCantidad(i);
  }

  function anadirCantidad(i) {
    imagenesFrutas[i].onclick = function () {
      efectoFrutaClick(this);
      cantidadKg = document.getElementById(imagenesFrutas[i].alt).value;
      cantidadKg = Number.parseInt(cantidadKg);

      if(cantidadKg > 0){
        FRUTAS[imagenesFrutas[i].alt]();
      } else {
        efectoFrutaClickError(this);
        alert("Debes introducir una cantidad mayor a 0");
      }
      if (!comprobarCestaVacia(frutas)) iniciarBotonCompra(); 
    };
  }

  function iniciarBotonCompra() {
    BOTON_FIN_COMPRA.textContent = "¡Finalizar compra!";
    BOTON_FIN_COMPRA.removeAttribute("disabled");
    BOTON_FIN_COMPRA.removeAttribute("class", "botonDesactivado");
    limpiarValue(RESUMEN_COMPRA);
  }

  function mostrarEnCarrito(nombre, cantidadKg){
    let parrafo = document.createElement("p");

    parrafo.textContent = `${nombre}: ${cantidadKg}`;
    ASIDE_DCHA.append(parrafo);
  }
}

function limpiarCarritoCompra(){
  "use strict";
  let tituloCarrito = document.createElement("h2");

  ASIDE_DCHA.innerHTML = "";
  ASIDE_DCHA.append(tituloCarrito);
  tituloCarrito.innerText = "Carrito de la compra";
}

function limpiarInputCantidades(){
  "use strict";
  let inputsCantidades = document.getElementsByTagName("input");
  
  for(let i=0; i<inputsCantidades.length; i++){
    limpiarValue(inputsCantidades[i]);
  }
}

function efectoFrutaClick(imagenFruta) {
  "use strict";
  imagenFruta.classList.add("frutaClick");

  setTimeout(() => {
    imagenFruta.classList.remove("frutaClick");
  }, 300);
}

function efectoFrutaClickError(imagenFruta) {
  "use strict";
  imagenFruta.classList.add("frutaClickError");

  setTimeout(() => {
    imagenFruta.classList.remove("frutaClickError");
  }, 300);
}

function comprobarCestaVacia(frutas){
  "use strict";
  if(cantidadTotalFrutas(frutas) === 0) return true;
  return false;
}

function cantidadTotalFrutas(frutas){
  "use strict";
  let cantidadFrutas = 0;

  cantidadFrutas = frutas.map(elem => elem.getCantidadKg());
  cantidadFrutas = cantidadFrutas.reduce((acum, elem) => acum+elem);

  return cantidadFrutas;
}

function obtenerPrecioTotalFruta(fruta) {
  "use strict";
  let precioTotalFruta = fruta.getPrecioKg() * fruta.getCantidadKg();
  
  return precioTotalFruta;
}

function sumaTotalPrecios(frutas) {
  "use strict";
  let suma = 0;
  let precios = [];

  precios = frutas.map(elem => obtenerPrecioTotalFruta(elem));
  suma = precios.reduce((precio1, precio2) => {
    return Number.parseFloat(precio1) + Number.parseFloat(precio2);
  });

  return Number.parseFloat(suma);
}

function ordenarFrutaOrdenAlfabeticoInverso(frutas){
  "use strict";
  let frutasOrdenadas = [];
  
  frutasOrdenadas = frutas.sort((elem1 , elem2) => {
    if(elem1.getNombre() < elem2.getNombre()) return 1;
    if(elem1.getNombre() > elem2.getNombre()) return -1;
    return 0;
  });

  return frutasOrdenadas;
}

function obtenerPrecioMedioKilo(frutas) {
  "use strict";
  let precioMedioKilo = 0;

  precioMedioKilo = sumaTotalPrecios(frutas) / cantidadTotalFrutas(frutas);

  return precioMedioKilo;
}

function finalizarCompra(frutas) {
  "use strict";
  let precioTotal = 0;
  let precioMedio = 0;

  if(comprobarCestaVacia(frutas)){
    throw new exceptionCestaCompraVacia("Todas las cantidades de las frutas son 0");
  } 

  BOTON_FIN_COMPRA.textContent = "¡Gracias por la compra!";
  BOTON_FIN_COMPRA.disabled = "true";
  BOTON_FIN_COMPRA.setAttribute("class", "botonDesactivado");

  RESUMEN_COMPRA.value += new Date().toLocaleString([], {
    day: "2-digit", 
    month: "numeric", 
    year: "numeric", 
    hour: "2-digit", 
    minute: "2-digit"}
    )+"\n----------------------";

  precioTotal = sumaTotalPrecios(frutas);
  precioMedio = obtenerPrecioMedioKilo(frutas);
  frutas = ordenarFrutaOrdenAlfabeticoInverso(frutas);

  frutas.forEach(elem => {
    if (elem.getCantidadKg() === 1){
      RESUMEN_COMPRA.value += "\n" + elem.getNombre() + " --- " + elem.getCantidadKg() + "Kg" +
       " --- " + elem.getPrecioKg() + "€ --- " + obtenerPrecioTotalFruta(elem).toFixed(2) + "€";
    } else if(elem.getCantidadKg() > 1) {
      RESUMEN_COMPRA.value += "\n" + elem.getNombre() + " --- " + elem.getCantidadKg() + "Kgs" +
       " --- " + elem.getPrecioKg() + "€ --- " + obtenerPrecioTotalFruta(elem).toFixed(2) + "€";
    }
  });

  RESUMEN_COMPRA.value += "\n----------------------";
  RESUMEN_COMPRA.value += "\nPrecio total --- " + Math.floor(precioTotal * 100)/100 + "€";
  RESUMEN_COMPRA.value += "\nPrecio medio --- " + precioMedio.toFixed(3) + "€/Kg";
}