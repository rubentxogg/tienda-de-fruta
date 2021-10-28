class Fruta {
  constructor(nombre, precioKg, cantidadKg) {
    this.nombre = nombre;
    this.precioKg = precioKg;
    this.cantidadKg = cantidadKg;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getPrecioKg() {
    return this.precioKg;
  }

  setPrecioKg(precioKg) {
    this.precioKg = precioKg;
  }

  getCantidadKg() {
    return this.cantidadKg;
  }

  setCantidadKg(cantidadKg) {
    this.cantidadKg = cantidadKg;
  }
}

class FrutaVerano extends Fruta {
  constructor(nombre, precioKg, cantidadKg, proximidad, regionRecogida) {
    super(nombre, precioKg, cantidadKg);
    this.proximidad = proximidad;
    this.regionRecogida = regionRecogida;
  }

  getProximidad() {
    return this.proximidad;
  }

  setProximidad(proximidad) {
    this.proximidad = proximidad;
  }

  getRegionRecogida() {
    return this.regionRecogida;
  }

  setRegionRecogida(regionRecogida) {
    this.regionRecogida = regionRecogida;
  }
}

class FrutaInvierno extends Fruta {
  constructor(nombre, precioKg, cantidadKg, conservarEnNevera) {
    super(nombre, precioKg, cantidadKg);
    this.conservarEnNevera = conservarEnNevera;
  }

  getConservarEnNevera() {
    return this.conservarEnNevera;
  }

  setConservarEnNevera(conservarEnNevera) {
    this.conservarEnNevera = conservarEnNevera;
  }
}

export { Fruta, FrutaVerano, FrutaInvierno };