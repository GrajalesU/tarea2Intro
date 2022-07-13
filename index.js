console.log("If");
const numeroIf = 10;
if (numeroIf > 0) {
  console.log("El numero es positivo");
} else if (numeroIf === 0) {
  console.log("El numero es cero");
} else {
  console.log("El numero es negativo");
}

console.log("While");
let numeroWhile = 0;
while (numeroWhile < 3) {
  console.log(numeroWhile);
  numeroWhile++;
}

console.log("Do While");
let condicionDoWhile = false;
do {
  console.log(
    "condicion del do While es True, como no se cumple, esto solo se ejecuta una vez"
  );
} while (condicionDoWhile);

console.log("For");
let numeroFor = 0;
for (let i = 0; i <= 3; i++) {
  console.log(numeroFor);
  numeroFor++;
}

console.log("Switch");
const estacion = "verano";
switch (estacion) {
  case "invierno":
    console.log("Hace frio");
    break;
  case "primavera":
    console.log("Hace calor");
    break;
  case "verano":
    console.log("Hace calor");
    break;
  case "otonio":
    console.log("Hace frio");
    break;
  default:
    console.log("No se que estacion es");
    break;
}
