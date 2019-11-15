window.onload = function() {
  //Paso 1: Leo Storage

  var recuperoStorage = localStorage.getItem("seriesFavoritas");

  // Si todavía no tenía gifs favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
    gifsFavoritos = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
  seriesFavoritas = JSON.parse(recuperoStorage);
  }

  for (var i = 0; i < seriesFavoritas.length; i++) {
    // BUSCAR ESE GIF Y MOSTRARLO
    fetch("https://api.giphy.com/v1/gifs/" + seriesFavoritas[i] + "?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU")
      .then(function(response) {
        return response.json();
      })
      .then(function(serie) {
        document.querySelector("ul").innerHTML += "<li><h3><a href=detallegif.html?idGif=" + serie.data.id + ">" + serie.data.title + "</a></h3><img src=" + seria.data.images.original.url + "></li>";
      })
  }
}
