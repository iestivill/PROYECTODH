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

  for (var i = 0; i < seriesFavoritas.length; i++) {
    // BUSCAR ESA SERIE Y MOSTRARLO
    fetch("https://api.themoviedb.org/3/tv/" + seriesFavoritas[i] + "?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
      .then(function(response) {
        return response.json();
      })
      .then(function(respuesta) {
        var prepath = 'https://image.tmdb.org/t/p/original/'
        var mejores = respuesta.results

        var ul = document.querySelector(".slide-seriesFavoritas")
        for (var i = 0; i < mejores.length; i++) {
          var a = '<a href="detalle.html?id='+ mejores[i].id + '">'
          a += '<li>'
          a += '<img src="'+prepath+mejores[i].poster_path+'" alt="">'
          a += '<div class="uk-position-center uk-panel"><h1>'+mejores[i].name.toUpperCase()+'</h1></div>'
            a += '</li>'
          a += '</a>'
          ul.innerHTML += a;
        }
      })
  }
}
