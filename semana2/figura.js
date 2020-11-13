module.exports = class Figura {

    constructor (cant) {   
        this.cantidadLados = cant;
    }

    getLados() {
        return this.cantidadLados;
    }

    duplicarLados() {
        this.cantidadLados = this.cantidadLados * 2;
    }

    dividirLados() {
        this.cantidadLados = this.cantidadLados / 2;
    }

    imprimirLados() {
        console.log('Cantidad de lados: ', this.cantidadLados)
    }
}



