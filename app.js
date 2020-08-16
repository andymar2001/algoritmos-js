const aleatorio = (max, min) => Math.round(Math.random() * (max - min) + min);

/* 1 */

// let aleatorio = Math.round(Math.random() * (10 - 1) + 1);
// let aster = "";

// for (let index = 1; index <= aleatorio; index++) {
//   aster = aster + "*";
// }
// console.log(aster);
// console.log(aleatorio);

/* 2 */

// let aleatorio = Math.round(Math.random() * (100 - 1) + 1);
// let numero = Math.round(aleatorio / 2);
// let cantidadDivisores = 0;

// for (let i = 0; i <= numero; i++) {
//   if (numero % i == 0) {
//     cantidadDivisores++;
//   }
// }

// console.log(`El numero ${numero} tiene ${cantidadDivisores++}`);

/* 3 */

// let valor = true;
// let cantidadDivisores = 0;

// while (valor) {
//   let numeroAleatorio = Math.round(Math.random() * (1000 - 1) + 1);
//   for (let i = 1; i <= numeroAleatorio; i++) {
//     if (numeroAleatorio % i == 0) {
//       cantidadDivisores++;
//     }
//   }
//   if (cantidadDivisores === 4) {
//     valor = false;
//     console.log(`${numeroAleatorio} con ${cantidadDivisores} divisores FIN`);
//   } else {
//     console.log(`${numeroAleatorio} con ${cantidadDivisores} divisores`);
//     cantidadDivisores = 0;
//   }
// }

/* 4 */

// let aFavor = Math.round(Math.random() * (100 - 0) + 0);
// let enContra = Math.round(Math.random() * (100 - aFavor - 0) + 0);
// let abstencion = 100 - (aFavor + enContra);

// console.log(
//   `A favor:${aFavor}%\nEn contra:${enContra}%\nEn abstencion:${abstencion}%`
// );

/* 5 */

// let numero = parseInt(prompt("Ingrese numero"));
// let sumaEntero = 0;

// for (let i = 1; i <= numero; i++) {
//   if (i % 3 == 0) {
//     sumaEntero += i;
//     console.log(`${i} es multiplo de 3`);
//   } else {
//     console.log(`${i} no es multiplo de 3`);
//   }
// }

// console.log("==================================================");
// console.log(`La suma de los multiplos de 3 es ${sumaEntero}`);

/* 6 */

// let numero = parseInt(prompt("Ingrese numero"));
// let numerador = 1;
// let suma = 0;

// for (let i = 1; i <= numero; i++) {
//   if (!(i % 2 == 0)) {
//     console.log(`${numerador}/${i}`);
//     suma += numerador / i;
//   } else {
//     console.log(`-${numerador}/${i}`);
//     suma -= numerador / i;
//   }
// }
// console.log(suma);

/* 7 */

/* let numero = 5;
let numeroA = 0;
let numeroB = 1;
let suma = 0;

for (let i = 1; i <= numero; i++) {
  suma = numeroA + numeroB;
  numeroA = numeroB;
  numeroB = suma;
  console.log(suma);
} */

/* 8 */

// let numero = 8;
// let factorial = 1;

// if (numero == 0) {
//   console.log(`Factorial del numero ${numero} es ${factorial}`);
// } else {
//   for (let i = 1; i <= numero; i++) {
//     factorial *= i;
//   }
//   console.log(`Factorial del numero ${numero} es ${factorial}`);
// }

/* 9 */

// let altura = 0;
// for (let i = 0; i <= 20; i += 2) {
//   altura = 50 + 200 * i + 5 * (i * i);
//   console.log(`Altura del proyectil: ${altura} VS Tiempo ${i}`);
// }

/* 10 */

// let numero = 3;

// for (let i = 1; i <= 12; i++) {
//   console.log(`${numero} x ${i} = ${numero*i}`);
// }

/* 11 */

// let numero = 6;
// let sumaDivisores = 0;

// if (numero >= 0) {
//   for (let i = 1; i <= numero / 2; i++) {
//     if (numero % i == 0) {
//       sumaDivisores += i;
//     }
//   }
//   if (sumaDivisores == numero) {
//     console.log(`El numero ${numero} SI es un numero perfecto positivo`);
//   } else {
//     console.log(`El numero ${numero} NO es un numero perfecto positivo`);
//   }
// }

/* 12 */

// let cantidadNumeros = 0;
// let mayorNumero = 0;
// let menorNumero = 90;
// let valor = true;

// do {
//   let aleatorio = Math.round(Math.random() * (99 - 10) + 10);
//   let primerCifra = parseInt(aleatorio.toString()[0]);
//   let segundaCifra = parseInt(aleatorio.toString()[1]);
//   let sumaCifras = primerCifra + segundaCifra;
//   if (sumaCifras == 4 || sumaCifras == 6) {
//     valor = false;
//   }
//   if (mayorNumero < aleatorio) {
//     mayorNumero = aleatorio;
//   }
//   if (menorNumero > aleatorio) {
//     menorNumero = aleatorio;
//   }
//   cantidadNumeros++;
// } while (valor);

// console.log(`Cantidad numeros generados: ${cantidadNumeros}`);
// console.log(`El mayor numero generado: ${mayorNumero}`);
// console.log(`El menor numero generado: ${menorNumero}`);

/* 13 */

// let numeroAleatorio = 0;
// let numeroEmpleados = 120;
// let sueldoMaximo = 0;
// let sueldoMinimo = 1700;
// let sumaSueldos = 0;
// let sueldoPromedio = 0;
// let numeroEmpleadosInferiorMil = 0;

// for (let i = 1; i <= numeroEmpleados; i++) {
//   numeroAleatorio = aleatorio(1700, 800);
//   console.log(`Empleado ${i} con sueldo ${numeroAleatorio}`);
//   if (sueldoMaximo < numeroAleatorio) {
//     sueldoMaximo = numeroAleatorio;
//   }
//   if (sueldoMinimo > numeroAleatorio) {
//     sueldoMinimo = numeroAleatorio;
//   }
//   if (numeroAleatorio < 1000) {
//     numeroEmpleadosInferiorMil++;
//   }
//   sumaSueldos += numeroAleatorio;
// }
// sueldoPromedio = sumaSueldos / numeroEmpleados;
// console.log("=============================");
// console.log(`Sueldo promedio :${sueldoPromedio}`);
// console.log(`Sueldo maximo :${sueldoMaximo}`);
// console.log(`Sueldo minimo :${sueldoMinimo}`);
// console.log(
//   `Numero de empleados con sueldo inferior a 1000:${numeroEmpleadosInferiorMil}`
// );

/* 14 */

/* let primerDado=0;
let segundoDado=0;
let tercerDado=0;
let cantidadLanzamientos=0;
let valor=true;

do {
  primerDado=aleatorio(1,6);
  segundoDado=aleatorio(1,6);
  tercerDado=aleatorio(1,6);
  console.log(`Dado 1: ${primerDado}`);
  console.log(`Dado 2: ${segundoDado}`);
  console.log(`Dado 3: ${tercerDado}`);
  console.log('================================');
  if(primerDado==6&&segundoDado==6&&tercerDado==6){
    valor=false
  }
  cantidadLanzamientos++;
} while (valor);

console.log(`Fueron necesarios ${cantidadLanzamientos} lanzamientos`); */

/* 15 */

// let numero = 654321+"";
// let contador = 0;
// let valor = true;

// let primerIndice = parseInt(numero[0]);
// let ultimoIndice = parseInt(numero[numero.length - 1]);

// if (primerIndice < ultimoIndice) {
//   for (let i = primerIndice; i <= ultimoIndice; i++) {
//     if (i == numero[contador]) {
//       contador++;
//     } else {
//       console.log(`El numero ${numero} no es consecutivo`);
//       valor = false;
//       break;
//     }
//   }
// } else {
//   for (let i = primerIndice; i >= ultimoIndice; i--) {
//     if (i == numero[contador]) {
//       contador++;
//     } else {
//       console.log(`El numero ${numero} no es consecutivo`);
//       valor = false;
//       break;
//     }
//   }
// }
// if(valor){
//   console.log(`El numero ${numero}  es consecutivo`);
// }

/* 16 */

// let lanzamientoDadoA = 0;
// let lanzamientoDadoB = 0;

// let dineroA = 15;
// let dineroB = 23;

// let puntuacionA = 0;
// let puntuacionB = 0;

// let cantidadJuegos = 0;

// let valor = true;

// do {
//   lanzamientoDadoA = aleatorio(6, 1);
//   lanzamientoDadoB = aleatorio(6, 1);

//   console.log(`Jugador A con puntaje : ${lanzamientoDadoA}`);
//   console.log(`Jugador B con puntaje : ${lanzamientoDadoB}`);

//   if (lanzamientoDadoA > lanzamientoDadoB) {
//     dineroA++;
//     console.log(`El jugador A gano S/1.Saldo actual: ${dineroA}`);
//     dineroB--;
//     console.log(`El jugador B perdio S/1.Saldo actual: ${dineroB}`);
//   } else {
//     dineroB++;
//     console.log(`El jugador B gano S/1.Saldo actual: ${dineroB}`);
//     dineroA--;
//     console.log(`El jugador A perdio S/1.Saldo actual: ${dineroA}`);
//   }
//   console.log("");
//   cantidadJuegos++;
//   if (cantidadJuegos == 100) {
//     console.log(`Se llego a los 100 juegos`);
//     valor = false;
//   } else if (dineroA == 0) {
//     console.log(`El jugador A se quedo sin dinero,Fin de la partida`);
//     valor = false;
//   } else if (dineroB == 0) {
//     console.log(`El jugador B se quedo sin dinero,Fin de la partida`);
//     valor = false;
//   }
// } while (valor);

/* 17 */

// let cantidadDivisores = 0;

// for (let i = 1; i <= 100; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       cantidadDivisores++;
//     }
//   }
//   if(cantidadDivisores==1||cantidadDivisores==2){
//     cantidadDivisores=0
//     console.log(i);
//   }else{
//     cantidadDivisores=0
//   }
// }

/* 18 */

// let numero = 1;
// let suma = 0;
// let valorBooleano = true;

// for (let i = 0; i < 4; i++) {
//   valorBooleano = true;
//   while (valorBooleano) {
//     for (let j = 1; j <= numero / 2; j++) {
//       if (numero % j == 0) {
//         suma += j;
//       }
//     }
//     if (suma == numero) {
//       valorBooleano = false;
//       suma = 0;
//       numero++;
//     } else {
//       valorBooleano = true;
//       suma = 0;
//       numero++;
//     }
//   }
//   console.log(`El numero ${numero - 1} es perfecto`);
// }

/* 19 */

// let limiteNumero = 9;
// console.log(`N\t\t10(1)*N\t\t10(2)*N\t\t10(3)*N\t\t10(4)*N`);
// for (let i = 1; i <= limiteNumero; i++) {
//   console.log(
//     `${i}\t\t  ${i * 10}\t\t ${i * 100}\t\t${i * 1000}\t\t${i * 10000}`
//   );
// }

/* 20 */

// let numeroAletario = aleatorio(900, 100);
// let suma = 0;
// let numeroMayor = 0;
// let numeroMenor = numeroAletario;
// let valorBooleano = true;

// const comprobarMayorMenor = () => {
//   if (numeroAletario > numeroMayor) {
//     numeroMayor = numeroAletario;
//   }
//   if (numeroAletario <= numeroMenor) {
//     numeroMenor = numeroAletario;
//   }
// };

// do {
//   if (numeroAletario % 2 == 0) {
//     if (numeroAletario < 300 || numeroAletario > 700) {
//       valorBooleano = false;
//       suma += numeroAletario;
//       comprobarMayorMenor();
//     } else {
//       console.log(
//         `El numero ${numeroAletario} es par, pero no es menor que 300 ó mayor de 700`
//       );
//       suma += numeroAletario;
//       comprobarMayorMenor();
//       numeroAletario = aleatorio(900, 100);
//     }
//   } else {
//     console.log(`El numero ${numeroAletario} no es par`);
//     suma += numeroAletario;
//     comprobarMayorMenor();
//     numeroAletario = aleatorio(900, 100);
//   }
// } while (valorBooleano);

// console.log(`==============================================================`);
// console.log(
//   `El numero ${numeroAletario} es par, tambien es menor que 300 ó mayor de 700`
// );
// console.log(`Suma de numeros: ${suma}`);
// console.log(`Numero mayor: ${numeroMayor}`);
// console.log(`Numero menor: ${numeroMenor}`);
// console.log("FIN DEL PROGRAMA");

/* 21 */

// let numeroAleatorio = aleatorio(50, -50);
// let numeroMayor = 0;
// let numeroMenor = numeroAleatorio;
// let valorBooleano = true;

// do {
//   if (numeroAleatorio == -25 || numeroAleatorio == 25) {
//     valorBooleano = false;
//     if (numeroAleatorio >= numeroMayor) {
//       numeroMayor = numeroAleatorio;
//     }
//     if (numeroAleatorio <= numeroMenor) {
//       numeroMenor = numeroAleatorio;
//     }
//   } else {
//     console.log(`Numero generado ${numeroAleatorio}`);
//     if (numeroAleatorio >= numeroMayor) {
//       numeroMayor = numeroAleatorio;
//     }
//     if (numeroAleatorio <= numeroMenor) {
//       numeroMenor = numeroAleatorio;
//     }
//     numeroAleatorio = aleatorio(50, -50);
//   }
// } while (valorBooleano);
// console.log(`----------------------------------------------`);
// console.log(`Numero generado ${numeroAleatorio}`);
// console.log(`Numero mayor ${numeroMayor}`);
// console.log(`Numero menor ${numeroMenor}`);

/* 22 */

// let notaAleatoria = aleatorio(20, 0);
// let cantidadAlumnos = 40;
// let sumaNotas = 0;
// let promedioSeccion = 0;
// let notaMaxima = 0;
// let notaMinima = notaAleatoria;

// for (let i = 0; i < cantidadAlumnos; i++) {
//   console.log(`El alumno ${i + 1} tiene de nota ${notaAleatoria}`);
//   sumaNotas += notaAleatoria;
//   if (notaAleatoria >= notaMaxima) {
//     notaMaxima = notaAleatoria;
//   }
//   if (notaAleatoria <= notaMinima) {
//     notaMinima = notaAleatoria;
//   }
//   notaAleatoria = aleatorio(20, 0);
// }
// promedioSeccion = sumaNotas / cantidadAlumnos;
// console.log(`---------------------------------------------------------`);
// console.log(`Suma de todas las notas: ${sumaNotas}`);
// console.log(`Promedio se la sección: ${promedioSeccion}`);
// console.log(`Nota maxima: ${notaMaxima}`);
// console.log(`Nota minima: ${notaMinima}`);

/* 23 */

// let cantidadAlumnos = 10;
// let notaAleatorio = aleatorio(20, 0);
// let asteriscos = "";

// console.log(`Nota\t\tHistograma`);

// for (let i = 0; i < cantidadAlumnos; i++) {
//   for (let j = 0; j < notaAleatorio; j++) {
//     asteriscos += "*";
//   }
//   console.log(`${notaAleatorio}\t\t${asteriscos}`);
//   notaAleatorio = aleatorio(20, 0);
//   asteriscos = "";
// }

/* 24 */

// let cantidadDivisores = 0;

// for (let i = 2; i <= 100; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       cantidadDivisores++;
//     }
//   }
//   console.log(`El numero ${i} tiene ${cantidadDivisores} divisores`);
//   cantidadDivisores = 0;
// }

/* 25 */

// let numeros = "";
// for (let i = 1; i <= 100; i++) {
//   numeros += i + "\t";
//   if (i % 10 == 0) {
//     console.log(numeros);
//     numeros = "";
//   }
// }

/* 26 */

// let numeroVeces = 4;
// let suma = 0;
// let numerador = 3;
// let acumulador = 3;

// for (let i = 1; i <= numeroVeces; i++) {
//   if (i % 2 == 0) {
//     console.log(`-${numerador}`);
//     suma -= numerador;
//   } else {
//     console.log(`${numerador}`);
//     suma += numerador;
//   }
//   acumulador += 2;
//   numerador += acumulador;
// }
// console.log(`--------------------------------`);
// console.log(`La suma de todos los numeros es ${suma}`);


