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
//dice que este fetch se va a ejecutar cuantas veces sea hasta que se hagan todas las series que puse en favoritas.
    for (var i = 0; i < seriesFavoritas.length; i++) {
//cada serie que metes se mete en el array.
//por cada serie favorita seleccionada a través del boton en detalles, que meti en el array, tengo un fetch específico:

      fetch("https://api.themoviedb.org/3/tv/"+ seriesFavoritas[i] +"?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
      .then(function(response) {
        return response.json();
      })
//descomprime todo lo que trae el fetch ^^

//respuesta: objeto literal que contiene todo lo que tiene esta serie.
      .then(function(respuesta) {
        console.log(respuesta);

        var pelis = respuesta;
//para que sepa donde meter el poster (en el lugar de la imagen falsa)
        var prepath = 'https://image.tmdb.org/t/p/original/'
  //crea la variable "ul", que corresponde al carrousel llamado ".slide-seriesFavoritas" en el html de "favoritos"
        var ul = document.querySelector(".slide-seriesFavoritas")
// Este console.log me muestra todo lo que hay dentro del "ul", para verificar si es el lugar deseado para meter los resultados
        console.log(ul);
//+= agrega las series fav (guardadas dentro de la variable "a"), las pone dentro de un "li", dentro del "ul" (que es el carrousel) ,dentro del HTML,
// pero sin pisar lo que habia antes cada vez que se ejecuta el fetch
          var a = '<a href="detalle.html?id='+ pelis.id + '">'
          a += '<li>'
          a += '<img src="'+prepath+pelis.poster_path+'" alt="">'
          a += '<div class="uk-position-center uk-panel"><h1>'+pelis.name.toUpperCase()+'</h1></div>'
          a += '</li>'
          a += '</a>'

// INSERTAR el "a" dentro de nuestra variable "ul"
          ul.innerHTML += a;



            })



}





}
