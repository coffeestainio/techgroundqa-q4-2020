// const { concatLimit } = require("async")

const { setTimeout } = require("timers")

// van de compras

// ** vaya compre huevos -> 
// <- traiga

// comprando leche

// comprando coco

// ** <- trae los huevos


// van a pagar

// function slow () {
//     return new Promise (()=>{
//         setTimeout(()=> console.log('Slow Promise'),
//         5000)
//     })
// }

function fast () {
    return new Promise ((res)=> {
        setTimeout(()=> res(1),
        1000)
    })
}



(async () => {
    var1 = fast()
    console.log(var1)
    var2 = await fast()
    console.log(var2)
})().catch((e) => console.error(e));




