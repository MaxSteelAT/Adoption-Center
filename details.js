function getKittenDetails(){
  const params = new URLSearchParams(window.location.search);

  const kittenId = params.get('id');
  const kittenUrl = params.get('url');

  if(kittenId && kittenUrl){
    renderKittensDetails(kittenId, kittenUrl)
  } else{
    document.getElementById("kitten-details").innerHTML = "<p>No kitten details found.</p>";
  }
}

function renderKittensDetails(id, url){
  const container = document.getElementById("kitten-details");

  container.innerHTML = `
    <div class="p-4 border rounded shadow-lg bg-white text-center">
      <img src="${url}" alt="Kitten" class="w-full rounded">
      <p class="mt-4 text-lg">Kitten ID: ${id}</p>
    </div>
    <div class="mt-4 text-center">
      <a href="index.html" class="bg-blue-500 text-white px-4 py-2 rounded">Back to Home</a>
      </div>`;
}

getKittenDetails()