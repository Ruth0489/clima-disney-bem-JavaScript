const ciudades = [
  { nombre: "Frozen", temp: -4, humedad: 40, viento: 10 , img: "assets/img/frozen.jpg"  },
  { nombre: "Mohana", temp: 22, humedad: 60, viento: 12, img: "assets/img/mohana.jpg" },
  { nombre: "Zootopia", temp: 23, humedad: 55, viento: 11, img: "assets/img/zootopia.jpg" },
  { nombre: "Encanto", temp: 20, humedad: 70, viento: 8, img: "assets/img/encanto.jpg" },
  { nombre: "Hercules", temp: 18, humedad: 80, viento: 15, img: "assets/img/hercules.jpg"},
  { nombre: "Dumbo", temp: 16, humedad: 85, viento: 14, img: "assets/img/dumbo.jpg" },
  { nombre: "Bambi", temp: 14, humedad: 90, viento: 20, img: "assets/img/bambi.jpg" },
  { nombre: "Mulan", temp: 26, humedad: 30, viento: 9, img: "assets/img/mulan.jpg" },
  { nombre: "Pocahontas", temp: 27, humedad: 35, viento: 10, img: "assets/img/pocahontas.jpg" },
  { nombre: "Bolt", temp: 10, humedad: 75, viento: 25, img: "assets/img/bolt.jpg" }
];

//  FUNCIÓN PARA CAMBIAR ICONO SEGÚN TEMPERATURA
function obtenerIcono(temp) {
  if (temp >= 25) return "bi-sun";
  if (temp >= 18) return "bi-cloud";
  return "bi-cloud-rain";
}
function obtenerColor(temp) {
  if (temp >= 25) return "bg-warning";   // calor
  if (temp >= 18) return "bg-light";     // templado
  return "bg-info";                      // frío
}

// HOME
const contenedor = document.getElementById("contenedor-ciudades");

if (contenedor) {
  ciudades.forEach(ciudad => {
    contenedor.innerHTML += `
      <div class="col-12 col-md-4 mb-3">
        <div class="card p-3 text-center shadow-lg border-5">
          <img src="${ciudad.img}" class="card-img-top" alt="${ciudad.nombre}">
        <h5>${ciudad.nombre}</h5>


         






          <p>
            <i class="bi ${obtenerIcono(ciudad.temp)}"></i>
            ${ciudad.temp}°C
          </p>

          <button class="btn btn-primary" onclick="verDetalle('${ciudad.nombre}')">
            Ver detalle
          </button>
        </div>
      </div>
    `;
  });
}

// GUARDAR CIUDAD Y REDIRIGIR
function verDetalle(nombre) {
  localStorage.setItem("ciudad", nombre);
  window.location.href = "detalle.html";
}

// DETALLE
const detalle = document.getElementById("detalle");

if (detalle) {
  const nombre = localStorage.getItem("ciudad");
  const ciudad = ciudades.find(c => c.nombre === nombre);

  if (ciudad) {
    detalle.innerHTML = `
      <h2>${ciudad.nombre}</h2>

      <p>
        <i class="bi bi-thermometer"></i>
        Temperatura: ${ciudad.temp}°C
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
        <li>Lunes: ${ciudad.temp - 1}°C</li>
        <li>Martes: ${ciudad.temp + 1}°C</li>
        <li>Miércoles: ${ciudad.temp}°C</li>
        <li>Jueves: ${ciudad.temp - 2}°C</li>
        <li>Viernes: ${ciudad.temp + 2}°C</li>
      <li>Sabado: ${ciudad.temp - 2}°C</li>
        <li>Domingo: ${ciudad.temp + 2}°C</li>
      
      
      
      
        </ul>
    `;
  }
}