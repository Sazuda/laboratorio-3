let num1;
let num2;
let menu = 0;

let resultado;

function realizarOperacion(){
    console.log("Elija una operacion a realizar:");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicacion");
    console.log("4. Division");
    console.log("5. Salir")
    menu = prompt("Ingrese la opcion: ");
    if (menu == 1) {
        num1 = Number(prompt("Ingrese el primer numero: "));
        num2 = Number(prompt("Ingrese el segundo numero: "));
        resultado = num1 + num2;
        console.log("El resultado de la suma es: ", resultado)
    }else if (menu == 2){
        num1 = Number(prompt("Ingrese el primer numero: "));
        num2 = Number(prompt("Ingrese el segundo numero: "));
        resultado = num1 - num2;
        console.log("El resultado de la resta es: ", resultado)
    }else if (menu == 3){
        num1 = Number(prompt("Ingrese el primer numero: "));
        num2 = Number(prompt("Ingrese el segundo numero: "));
        resultado = num1 * num2;
        console.log("El resultado de la multiplicacion es: ", resultado)
    }else if (menu == 4){
        num1 = Number(prompt("Ingrese el primer numero: "));
        num2 = Number(prompt("Ingrese el segundo numero: "));
        resultado = num1 / num2;
        console.log("El resultado de la division es: ", resultado)
    }else if (menu == 5){
        console.log("Fin del programa")
        // break;
    }
}
while(menu!=5){
    realizarOperacion();
}