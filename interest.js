const container = document.querySelector('#interest-list')

function getInterestList() {
  // 1. Obtener el listado de LocalStorage
  const interestListLocalStorage = localStorage.getItem("interestList");

  // 2. Parsear a JSON
  const interestList = JSON.parse(interestListLocalStorage);

  return interestList;
}

function renderKittensList() {
  const kittensList = getInterestList();

  if (kittensList.length === 0) {
    console.log('Vacio')
    container.innerHTML = 'No kittens  in your interest list'
  } else {
    container.innerHTML = ""
    let listHTML = ''

    kittensList.forEach(kitten => {
      listHTML += `<div class="p-4 border rounded shadow-lg bg-white text-center">
      <img src="${kitten.url}" alt="Kitten" class="w-full rounded">
      <p class="mt-4 text-lg">Kitten ID: ${kitten.id}</p>
      <button class="mt-2 bg-red-500 text-white px-4 py-2 rounded" onclick="removeFromInterest('${kitten.id}')">
        Remove from Interest
      </button>
      </div>`
    });

    container.innerHTML = listHTML

  }


  console.log(kittensList);
}

renderKittensList()