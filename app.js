// Ejercicio 1
const Ejercicio1 = (nombre, apellido, edad) => {
  return `Mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
};
console.log(Ejercicio1("Martin", "Rios", 23));
// Ejercicio 2

function Ejercicio2() {
  const numero = [1, 2, 3, 4, 5, 6];
  let suma = 0;
  for (let i = 0; i < 5; i++) {
    console.log;
  }
}

const Ejercicio3 = (letra, numero, bool) => {
  validar1 = typeof letra;
  validar2 = typeof numero;
  validar3 = typeof bool;
  return (
    "Soy un  " +
    validar1 +
    "    Yo soy un  " +
    validar2 +
    "    Y yo un  " +
    validar3
  );
};
console.log(Ejercicio3("Hola", 2, true));

function Ejercicio4(...ArrayNum) {
  let sum = 0;
  for (let ArrayNu of ArrayNum) sum += ArrayNu;
  return sum;
}
console.log(Ejercicio4(1, 2, 3, 5, 6, 7));
function Ejercicio5(...ArrayNum) {
  const resultado = ArrayNum.filter((ArrayNus) => ArrayNus.length > 1);
  return resultado;
}
console.log(Ejercicio5(1, 2, 3, 5, 6, "Hola", "idat"));

function Ejercicio6() {
  const arrayNum = [5, 9, 4, 1, 6, 3];
  const resultado3 = arrayNum.sort();
  console.log(resultado3);
}
Ejercicio6();

function ejercicio7() {
  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var cuatroRandom = [];
  var posicionesElegibles = [];
  var i, r;
  for (i = 0; i < numeros.length; i++) posicionesElegibles[i] = i;
  for (i = 0; i < 9; i++) {
    r = Math.floor(Math.random() * posicionesElegibles.length);
    cuatroRandom.push(numeros[posicionesElegibles[r]]);
    posicionesElegibles.splice(r, 1);
  }
  resultado4 = cuatroRandom.join("");
  console.log(resultado4);
  // resultado4 = numeros.join("");
}
ejercicio7();

function Ejercicio8() {
  const num = [1, 6, 9, 7, 5, 10];
  const num2 = [20, 50, 70, 35, 60, 58];
  const num3 = [541, 95, 51, 62, 581, 92];
  let nueva = [];
  mayor1 = Math.max(...num);
  mayor2 = Math.max(...num2);
  mayor3 = Math.max(...num3);
  nueva = [mayor1, mayor2, mayor3];
  console.log(nueva);
}
Ejercicio8();

function Ejercicio9(palabra, letra) {
  let busqueda = letra;
  encontrado = palabra.search(busqueda);
  return encontrado;
}
console.log(Ejercicio9("circumlocution", "c"));

function Ejercicio10() {
  const num = { a: 1, b: 2, c: 3 };
  const { a, b, c } = num;
  let valores = Object.values(num);
  console.log("a " + a);
}
Ejercicio10();

function Ejercicios11() {
  const getBudgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ];

  hola = getBudgets[0].budget;
  hola1 = getBudgets[1].budget;
  hola2 = getBudgets[2].budget;
  suma = hola + hola1 + hola2;
  console.log(suma);
}
Ejercicios11();

function Ejercicio12() {
  const getStudentNames = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" },
  ];
  nom1 = getStudentNames[0].name;
  nom2 = getStudentNames[1].name;
  nom3 = getStudentNames[2].name;
  console.log(nom1 + "," + nom2 + "," + nom3);
}
Ejercicio12();

function Ejercicio14() {
  const numero = 5;
  var suma4 = 0;
  var comer = 0;
  for (let i = 0; i <= numero; i++) {
    suma4 += i * 2;
  }
  console.log(suma4);
}
Ejercicio14();
