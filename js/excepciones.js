function exceptionCestaCompraVacia(mensaje) {
    this.mensaje = "Error: " + mensaje;
  }
  
exceptionCestaCompraVacia.prototype = Object.create(Error.prototype);
exceptionCestaCompraVacia.prototype.name = "exceptionCestaCompraVacia";