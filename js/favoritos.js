window.onload = function() {


// dropdown
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


  // favoritos
  //Paso 1: Leo Storage

    var recuperoStorage = localStorage.getItem("seriesFavoritas");

    // Si todavía no tenía series favoritos
    if (recuperoStorage == null) {
      // Creo una lista vacia
      var seriesFavoritas = [];  }

    else {
      // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    var seriesFavoritas = JSON.parse(recuperoStorage);
    }

    for (var i = 0; i < seriesFavoritas.length; i++) {
//por cada serie favorita seleccionada a través del boton en detalles, tengo un fetch:
      fetch("https://api.themoviedb.org/3/tv/"+ seriesFavoritas[i] +"?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
      .then(function(response) {
        return response.json();
      })
      .then(function(respuesta) {
        console.log(respuesta);
        var pelis = respuesta;
        var prepath = 'https://image.tmdb.org/t/p/original/'
  //crea la variable "ul", que corresponde al carrousel llamado ".slide-seriesFavoritas" en el html de "favoritos"
        var ul = document.querySelector(".slide-seriesFavoritas")
// Este console.log me muestra todo lo que hay dentro del "ul"
        console.log(ul);
//+= agrega HTML dentro de la variable "a", pero sin pisar lo que habia antes cada vez que se ejecuta el fetch
          var a = '<a href="detalle.html?id='+ pelis.id + '">'
          a += '<li>'
          //agrega el poster de la serie que elegimos y reemplaza la imagen del "prepath"
          a += '<img src="'+prepath+pelis.poster_path+'" alt="">'
          //nombre de la serie centrado y todo mayuscula
          a += '<div class="uk-position-center uk-panel"><h1>'+pelis.name.toUpperCase()+'</h1></div>'
          a += '</li>'
          a += '</a>'
<<<<<<< Updated upstream

// INSERTAR el "a" dentro de nuestra variable "ul"
=======
//
          // las agrega al "ul" (que es el carrousel) ,dentro del HTML, sin pisar lo que habia antes cada vez que se ejecuta el fetch
>>>>>>> Stashed changes
          ul.innerHTML += a;



            })



}





}
