arrays = [1,2,'string',true];

pablo = {
    pelo: 'cafe',
    mide: 160,
    pesa: '57kgs'
};

console.log(arrays);
console.log(pablo);

pablo.hijos = 2;
pablo.casado = 1;

console.log('Este es el nuevo pablo', pablo);

if (pablo.vecinos === 'hola')
    console.log('pablo tiene vecinos')
else
    console.log('pablo vine en la montana sin vecinos')

if (pablo.vecinos === 'hola')
