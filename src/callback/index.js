//Es una funcion que se pasa como argumento a otra funcion y sera invocada


function sum(num1, num2) {
    return num1 + num2
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));


setTimeout(function(){
    console.log('Hola JavaScript')
}, 5000)

function saludo(nombre) {
    console.log(`Hola ${nombre}`)
}

setTimeout(saludo, 2000, 'Jorge')


function execCallback(callback) {
    setTimeout(callback, 2000, 'Samuel')
  }
  
function saludar(nombre){
   console.log(`${nombre} lo esta haciendo bien`)
}
 
execCallback(saludar)