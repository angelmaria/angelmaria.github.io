console.log("Hola mundo!")

let hola_mundo="Hola mundo, soy una variable";

console.log(hola_mundo)

function imprimirSaludo() {
    let number1=10;
    let number2=15;
    let resultado=number1+number2
    console.log("Hola, resutaldo: " + resultado);
}
function function3(num1, num2){
    console.log("Ejecutando funcion3");
    return num1+num2
}

imprimirSaludo();
console.log(function3(5, 10));

function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32
}

console.log(toFahrenheit(30));

var number1 = 5;
var number2 = 10;
if (number1!=number2){
    console.log('5 == 10 es verdadero')
}

for (i=20; i>1; i--) {
    console.log("El valor de i es: " + i);
}
console.log("-----------------")
for (i=0; i<10; i++) {
    if(i%2 == 0) {
        continue;
    }
    console.log("El valor de i es: " + i)
}
var names=["angel", "ana", "berta", "jaime", "ines"]

var numbers=[1, 5, 9, 13, 15, 17, 14, 23, 22, 20]

var lastElement= names[names.length - 1]
console.log("El ultimo elemento es: " + lastElement)

for (i=0; i<names.length; i++) {
    names[i]= names[i] + " Editado";
    console.log("names[" + i + "]: " + names[i])
}

names.push("Gandolfi")
console.log("names length: " + names.length)

var lastElement=names[names.length -1]
console.log("El ultimo elemento es " + lastElement)