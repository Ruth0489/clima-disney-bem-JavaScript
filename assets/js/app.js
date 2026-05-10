// =======================
// DATOS
// =======================
const ciudades = [
  {
    id: 1,
    nombre: "Frozen",
    tempActual: -4,
    estadoActual: "nevado",
    humedad: 40,
    viento: 10,
    img: "assets/img/frozen.jpg",
    
    pronosticoSemanal: [
      {dia: "Lunes", min: -8, max: -2, estado: "nevado"},
      {dia: "Martes", min: -8, max: -2, estado: "nevado"},
      {dia: "Miercoles", min: -8, max: -2, estado: "nevado"},
      {dia: "Jueves", min: -8, max: -2, estado: "nevado"},
      {dia: "Viernes", min: -8, max: -2, estado: "nevado"},
      {dia: "Sabado", min: -8, max: -2, estado: "nevado"},
      {dia: "Domingo", min: -8, max: -2, estado: "nevado"},
    ],
  },



  {
    id: 2,
    nombre: "Mohana",
    tempActual: 22,
    estadoActual: "soleado",
    humedad: 60,
    viento: 12,
    img: "assets/img/mohana.jpg",

    pronosticoSemanal: [
      {dia: "Lunes", min: 18, max: 30, estado: "soleado"},
      {dia: "Martes", min: 17, max: 28, estado: "soleado"},
      {dia: "Miercoles", min: 20, max: 27, estado: "soleado"},
      {dia: "Jueves", min: 10, max: 26, estado: "soleado"},
      {dia: "Viernes", min: 15, max: 25, estado: "soleado"},
      {dia: "Sabado", min: 11, max: 24, estado: "soleado"},
      {dia: "Domingo", min: 13, max: 30, estado: "soleado"},
    ],
  },
  {
    id: 3,
    nombre: "Zootopia",
    tempActual: 23,
    estadoActual: "soleado",
    humedad: 55,
    viento: 11,
    img: "assets/img/zootopia.jpg",

    pronosticoSemanal: [
      {dia: "Lunes", min: 5, max: 11, estado: "nublado"},
      {dia: "Martes", min: 10, max: 15, estado: "nublado"},
      {dia: "Miercoles", min: 15, max: 30, estado: "soleado"},
      {dia: "Jueves", min: 3, max: 11, estado: "nublado"},
      {dia: "Viernes", min: 8, max: 22, estado: "templado"},
      {dia: "Sabado", min: 11, max: 15, estado: "lluvioso"},
      {dia: "Domingo", min: 20, max: 30, estado: "soleado"},
    ],
  },
  {
    id: 4,
    nombre: "Encanto",
    tempActual: 20,
    estadoActual: "soleado",
    humedad: 70,
    viento: 8,
    img: "assets/img/encanto.jpg",

    pronosticoSemanal: [
      {dia: "Lunes", min: 20, max: 30, estado: "soleado"},
      {dia: "Martes", min: 20, max: 30, estado: "soleado"},
      {dia: "Miercoles", min: 20, max: 30, estado: "soleado"},
      {dia: "Jueves", min: 20, max: 30, estado: "soleado"},
      {dia: "Viernes", min: 20, max: 30, estado: "soleado"},
      {dia: "Sabado", min: 20, max: 30, estado: "soleado"},
      {dia: "Domingo", min: 20, max: 30, estado: "soleado"},
    ],
  },
  {
    id: 5,
    nombre: "Hercules",
    tempActual: 18,
    estadoActual: "soleado",
    humedad: 80,
    viento: 15,
    img: "assets/img/hercules.jpg",

    pronosticoSemanal: [
      {dia: "Lunes", min: 20, max: 30, estado: "soleado"},
      {dia: "Martes", min: 20, max: 30, estado: "soleado"},
      {dia: "Miercoles", min: 20, max: 30, estado: "soleado"},
      {dia: "Jueves", min: 20, max: 30, estado: "soleado"},
      {dia: "Viernes", min: 20, max: 30, estado: "soleado"},
      {dia: "Sabado", min: 20, max: 30, estado: "soleado"},
      {dia: "Domingo", min: 20, max: 30, estado: "soleado"},
    ],
  },
  {
    id: 6,
    nombre: "Dumbo",
    tempActual: 16,
    estadoActual: "soleado",
    humedad: 85,
    viento: 14,
    img: "assets/img/dumbo.jpg",

    pronosticoSemanal: [
      {dia: "Lunes", min: 20, max: 30, estado: "soleado"},
      {dia: "Martes", min: 20, max: 30, estado: "soleado"},
      {dia: "Miercoles", min: 20, max: 30, estado: "soleado"},
      {dia: "Jueves", min: 20, max: 30, estado: "soleado"},
      {dia: "Viernes", min: 20, max: 30, estado: "soleado"},
      {dia: "Sabado", min: 20, max: 30, estado: "soleado"},
      {dia: "Domingo", min: 20, max: 30, estado: "soleado"},
    ],
  },
  {
    id: 7,
    nombre: "Bambi",
    tempActual: 14,
    estadoActual: "soleado",
    humedad: 90,
    viento: 20,
    img: "assets/img/bambi.jpg",

    pronosticoSemanal: [
      {dia: "Lunes", min: 20, max: 30, estado: "soleado"},
      {dia: "Martes", min: 20, max: 30, estado: "soleado"},
      {dia: "Miercoles", min: 20, max: 30, estado: "soleado"},
      {dia: "Jueves", min: 20, max: 30, estado: "soleado"},
      {dia: "Viernes", min: 20, max: 30, estado: "soleado"},
      {dia: "Sabado", min: 20, max: 30, estado: "soleado"},
      {dia: "Domingo", min: 20, max: 30, estado: "soleado"},
    ],
  },
  {
    id: 8,
    nombre: "Mulan",
    tempActual: 26,
    estadoActual: "soleado",
    humedad: 30,
    viento: 9,
    img: "assets/img/mulan.jpg",

    pronosticoSemanal: [
      {dia: "Lunes", min: 20, max: 30, estado: "soleado"},
      {dia: "Martes", min: 20, max: 30, estado: "soleado"},
      {dia: "Miercoles", min: 20, max: 30, estado: "soleado"},
      {dia: "Jueves", min: 20, max: 30, estado: "soleado"},
      {dia: "Viernes", min: 20, max: 30, estado: "soleado"},
      {dia: "Sabado", min: 20, max: 30, estado: "soleado"},
      {dia: "Domingo", min: 20, max: 30, estado: "soleado"},
    ],
  },
  {
    id: 9,
    nombre: "Pocahontas",
    tempActual: 27,
    estadoActual: "soleado",
    humedad: 35,
    viento: 10,
    img: "assets/img/pocahontas.jpg",

    pronosticoSemanal: [
      {dia: "Lunes", min: 20, max: 30, estado: "soleado"},
      {dia: "Martes", min: 18, max: 30, estado: "soleado"},
      {dia: "Miercoles", min: 20, max: 30, estado: "soleado"},
      {dia: "Jueves", min: 20, max: 30, estado: "soleado"},
      {dia: "Viernes", min: 20, max: 30, estado: "soleado"},
      {dia: "Sabado", min: 20, max: 30, estado: "soleado"},
      {dia: "Domingo", min: 20, max: 30, estado: "soleado"},
    ],
  },
  {
    id: 10,
    nombre: "Bolt",
    tempActual: 10,
    estadoActual: "soleado",
    humedad: 75,
    viento: 25,
    img: "assets/img/bolt.jpg",

    pronosticoSemanal: [
      {dia: "Lunes", min: 20, max: 30, estado: "soleado"},
      {dia: "Martes", min: 20, max: 30, estado: "soleado"},
      {dia: "Miercoles", min: 20, max: 30, estado: "soleado"},
      {dia: "Jueves", min: 20, max: 30, estado: "soleado"},
      {dia: "Viernes", min: 20, max: 30, estado: "soleado"},
      {dia: "Sabado", min: 20, max: 30, estado: "soleado"},
      {dia: "Domingo", min: 20, max: 30, estado: "soleado"},
    ],
  },
];

// =======================
// FUNCIONES
// =======================
function obtenerIcono(temp) {
  if (temp >= 25) return "bi-sun";
  if (temp >= 18) return "bi-cloud";
  return "bi-cloud-rain";
}

function obtenerColor(temp) {
  if (temp >= 25) return "card-clima--calor";
  if (temp >= 18) return "card-clima--templado";
  return "card-clima--frio";
}

const contenedor = document.getElementById("contenedor-ciudades");

if (contenedor) {
  contenedor.innerHTML = "";

  ciudades.forEach((ciudad) => {
    contenedor.innerHTML += `
      <div class="col-12 col-md-4 mb-3 d-flex">
        
        <div class="card-clima ${obtenerColor(ciudad.tempActual)} p-3 text-center shadow-lg border-5 w-100 d-flex flex-column justify-content-between">

          <img src="${ciudad.img}" class="card-clima__img img-fluid" alt="${ciudad.nombre}">

          <h5 class="card-clima__titulo mt-2">${ciudad.nombre}</h5>

          <p class="card-clima__temp">
            <i class="bi ${obtenerIcono(ciudad.tempActual)}"></i>
            ${ciudad.tempActual}°C
          </p>

          <button class="card-clima__btn btn btn-primary mt-auto"
            onclick="verDetalle('${ciudad.nombre}')">
            Ver detalle
          </button>

        </div>

      </div>
    `;
  });
}

// =======================
// REDIRECCIÓN
// =======================
function verDetalle(nombre) {
  localStorage.setItem("ciudad", nombre);
  window.location.href = "detalle.html";
}

// =======================
// FUNCIÓN ESTADÍSTICAS (IMPORTANTE)
// =======================
function calcularEstadisticas(pronostico) {
  let min = Math.min(...pronostico.map(d => d.min));
  let max = Math.max(...pronostico.map(d => d.max));

  let suma = 0;
  let soleados = 0;
  let nublados = 0;
  let lluviosos = 0;
  let nevados = 0;

  pronostico.forEach(d => {
    suma += (d.min + d.max) / 2;

    if (d.estado === "soleado") soleados++;
    else if (d.estado === "nublado") nublados++;
    else if (d.estado === "lluvioso") lluviosos++;
    else if (d.estado === "nevado") nevados++;
  });

  let promedio = (suma / pronostico.length).toFixed(1);

  let resumen = "Semana templada.";
  if (soleados >= 4) resumen = "Semana mayormente soleada.";
  else if (lluviosos >= 3) resumen = "Semana lluviosa.";
  else if (nevados >= 3) resumen = "Semana muy fría con nevadas.";

  return { min, max, promedio, soleados, nublados, lluviosos, nevados, resumen };
}

const detalle = document.getElementById("detalle");

if (detalle) {
  const nombre = localStorage.getItem("ciudad");
  const ciudad = ciudades.find(c => c.nombre === nombre);

  if (ciudad) {

    const stats = calcularEstadisticas(ciudad.pronosticoSemanal);

    detalle.innerHTML = `
      <h2>${ciudad.nombre}</h2>

      <p>
        <i class="bi bi-thermometer"></i>
        Temperatura: ${ciudad.tempActual}°C
      </p>

      <p>
        <i class="bi bi-droplet"></i>
        Humedad: ${ciudad.humedad}%
      </p>

      <p>
        <i class="bi bi-wind"></i>
        Viento: ${ciudad.viento} km/h
      </p>

      <h4>Pronóstico semanal</h4>

      <ul>
        ${ciudad.pronosticoSemanal.map(d => `
          <li>${d.dia}: ${d.min}°C / ${d.max}°C - ${d.estado}</li>
        `).join("")}
      </ul>

      <hr>

      <h4>Estadísticas de la semana</h4>

      <p>Temperatura mínima: ${stats.min}°C</p>
      <p>Temperatura máxima: ${stats.max}°C</p>
      <p>Temperatura promedio: ${stats.promedio}°C</p>

      <p>Soleados: ${stats.soleados}</p>
      <p>Nublados: ${stats.nublados}</p>
      <p>Lluviosos: ${stats.lluviosos}</p>
      <p>Nevados: ${stats.nevados}</p>

      <p><b>${stats.resumen}</b></p>
    `;
  }
}