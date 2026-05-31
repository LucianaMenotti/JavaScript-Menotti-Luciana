const nombreEstudiante = "Sofía Altieri";
const notasEstudiante = [8, 9, 7, 6, 10];
let sumaNotas = 0;

for (let i = 0; i < notasEstudiante.length; i++) {
  sumaNotas += notasEstudiante[i];
}

const promedioFinal = sumaNotas / notasEstudiante.length;

let condicion = "";

if (promedioFinal >= 7) {
  condicion = "Muy bueno";
} else if (promedioFinal >= 6) {
  condicion = "Aprobado";
} else {
  condicion = "Desaprobado";
}

console.log(`Estudiante: ${nombreEstudiante}`);
console.log(`Promedio: ${promedioFinal.toFixed(1)}`);
console.log(`Resultado: ${condicion}`);
