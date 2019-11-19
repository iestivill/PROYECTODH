window.onload = function() {



















  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta)
    // console.log(respuesta.genres[0].name);
    var listadoGeneros = document.querySelector("#listado-de-generos");
    for(var i = 0; i < respuesta.genres.length; i++) {
      listadoGeneros.innerHTML += "<li><a href='generos.html?genero=" + respuesta.genres[i].id + "'>" + respuesta.genres[i].name + "</a></li>";
    }
  })
























  //Paso 1: Leo Storage

  var recuperoStorage = localStorage.getItem("seriesFavoritas");

  // Si todavía no tenía series favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
    seriesFavoritas = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
  seriesFavoritas = JSON.parse(recuperoStorage);
  }

  // for (var i = 0; i < seriesFavoritas.length; i++) {
  //   // BUSCAR ESA SERIE Y MOSTRARLO
  //   fetch("" + seriesFavoritas[i] + "")
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(function(serie) {
  //       document.querySelector("ul").innerHTML += "<li><h3><a href=" + serie.data.id + ">" + serie.data.title + "</a></h3><img src=" + seria.data.images.original.url + "></li>";
  //     })
  // }
}
