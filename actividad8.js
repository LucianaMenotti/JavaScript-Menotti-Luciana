const notas = [8, 7, 5, 9, 6];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

const promedio = suma / notas.length;
console.log(`El promedio de notas es: ${promedio}`);

if (promedio >= 6) {
  console.log("El alumno aprobó.");
} else {
  console.log("El alumno desaprobó.");
}
