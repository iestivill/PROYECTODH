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
      var seriesFavoritas = [];
    } else {
      // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    var seriesFavoritas = JSON.parse(recuperoStorage);
    }

    for (var i = 0; i < seriesFavoritas.length; i++) {

      fetch("https://api.themoviedb.org/3/tv/"+ seriesFavoritas[i] +"?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
      .then(function(response) {
        return response.json();
      })
      .then(function(respuesta) {
        console.log(respuesta);
        var pelis = respuesta;
        var prepath = 'https://image.tmdb.org/t/p/original/'
        // console.log(pelis);
        var ul = document.querySelector(".slide-seriesFavoritas")
        console.log(ul);
        // for (var i = 0; i < pelis.length; i++) {
          var a = '<a href="detalle.html?id='+ pelis.id + '">'
          a += '<li>'
          a += '<img src="'+prepath+pelis.poster_path+'" alt="">'
          a += '<div class="uk-position-center uk-panel"><h1>'+pelis.name.toUpperCase()+'</h1></div>'
          a += '</li>'
          a += '</a>'
          ul.innerHTML += a;
        // }
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
            })



}





}
