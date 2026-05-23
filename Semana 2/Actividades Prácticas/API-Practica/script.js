// Dog API
document.getElementById("getDog").addEventListener("click", () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      document.getElementById("dogImage").src = data.message;
    });
});

// Cat API
document.getElementById("getCat").addEventListener("click", () => {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
      document.getElementById("catImage").src = data[0].url;
    });
});
