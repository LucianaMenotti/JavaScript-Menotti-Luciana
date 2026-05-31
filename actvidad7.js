const estudiante = {
  nombre: "Juan",
  apellido: "Pérez",
  nota: 8,
};

let estado = "";

if (estudiante.nota >= 6) {
  estado = "Aprobado";
} else {
  estado = "Desaprobado";
}

console.log(
  `Estudiante: ${estudiante.nombre} ${estudiante.apellido} - Nota: ${estudiante.nota} [${estado}]`,
);
