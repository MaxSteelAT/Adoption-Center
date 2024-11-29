const API_URL = "https://api.thecatapi.com/v1/images/search?limit=20";
const API_KEY = "live_fEpCGzYXBkTGjv3LZAfKjsDbydpSYInJUhQOzYg0Ii5zxeCkC38AqOj0ysBngVmr";

const loading = document.querySelector('#loading')

/*Paso numero uno */
async function fetchKittens() {
  //Mostrar lottie
  loading.classList.remove('hidden')

  try {
    const response = await fetch(API_URL, {
      headers: {
        "x-api-key": API_KEY,
      },
    });

    const kittens = await response.json();
    renderKittens(kittens)

  } catch (error) {
    console.error(error)
  } finally {
    //ocultar lottie
    loading.classList.add('hidden')
  }

}
/*Paso numero dos */
function renderKittens(data) {
  const container = document.getElementById("kittens");
  container.innerHTML = "";

  data.forEach((kitten) => {
    container.innerHTML += `
      <div class="p-4 border rounded shadow-lg bg-white">
        <img src="${kitten.url}" alt="Kitten" class="w-full rounded">
        <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onclick="addToInterest('${kitten.id}', '${kitten.url}')">
          Add to Interest
        </button>
      </div>`;
  })
}

/*
Almacenaremos las propiedades del Kitten en LocalStorage en un Arreglo de Objetos.
Ej. [{
      id: '1',
      url: 'www.images.com/1'
    }, {
      id: '2',
      url: 'www.images.com/2'
    }]
*/

/*Paso numero tres*/
function addToInterest(id, url) {
  // 1. Obtener "interestList" de LocalStorage, si existe te retornar valores, si no te retorna null.
  const interestListLocalStorage = localStorage.getItem("interestList")
  // 2. Convertir/Parsear interestList de LocalStorage a arreglo (Array), sí es null interestList se le
  // asigna el valor arreglo vació "[]", usando oeprador lógico "||".
  const interestList = JSON.parse(interestListLocalStorage) || [];
  // 3. Agregamos un elemento nuevo a la lista (Manipulamos el Array).
  interestList.push({ id, url });
  // 4. Después alterar el Array, convertirmo a String con JSON.stringify.
  const interestListString = JSON.stringify(interestList)
  // 5. Ahora, pasamos ese valor nuevo a almacenar en LocalStorage con el mismo nombre de "interestList".
  localStorage.setItem("interestList", interestListString);
  // 6. Le mostramos un mensaje que se almaceno correctamente.
  alert("Kitten added to interest list!");
}


fetchKittens()

lottie.loadAnimation({
  container: document.getElementById('loading'), // ID del contenedor
  renderer: 'svg', // Renderiza como SVG
  loop: true, // Animación en bucle
  autoplay: true, // Se reproduce automáticamente
  path: './assets/loading.json' // Ruta del archivo Lottie JSON
});
