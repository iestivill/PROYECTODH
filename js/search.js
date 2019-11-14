window.onload = function(){

  var searchObj = new URLSearchParams(location.search);
  var idSearchResult = searchObj.get("busqueda");
console.log(idSearchResult);

    fetch("https://api.themoviedb.org/3/search/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&query="+idSearchResult+"&page=1")
    .then(function(response) {
      return response.json();
    })
    .then(function(respuesta) {
      var pelis = respuesta.results;
      var prepath = 'https://image.tmdb.org/t/p/original/'
      // console.log(pelis);
      var ul = document.querySelector(".resultados")
      for (var i = 0; i < pelis.length; i++) {
        if(pelis[i].poster_path != null){
          var a = '<a href="detalle.html?id='+ pelis[i].id + '">'
          a += '<li>'
          a += '<img src="'+prepath+pelis[i].poster_path+'" alt="">'
          a += '<div class="uk-position-center uk-panel"><h1>'+pelis[i].name.toUpperCase()+'</h1></div>'
          a += '</li>'
          a += '</a>'
          ul.innerHTML += a;
        }

      }


    })
    .catch(function(e){
      console.log(e)

    })

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

}
