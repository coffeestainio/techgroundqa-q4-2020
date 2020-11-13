
var expect = require('chai').expect;

const Cuadrado = require('./cuadrado');

describe('Testing figuras', () => { 
    describe('testing cuadros', ()=> {
        let cuadrado;
        before(() => {
            console.log('Corre una sola vez')
            cuadrado = new Cuadrado();
        })

        after (() => {
            cuadrado = null;
        }) 

        it('verificar que los lados son 4', () => {
            expect(cuadrado.getLados()).to.be.equal(4,'Lados no calzan')
            expect(cuadrado.getLados()).not.to.equal(null);
        })

        it('al multiplicar recibimos 8', () => {
            cuadrado.duplicarLados();
            expect(cuadrado.getLados()).to.be.equal(8);
        })

    })

})