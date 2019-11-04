window.onload = function(){

  var searchObj = new URLSearchParams(location.search);
  var idSearchResult = generosObj.get("search");


    fetch("https://api.themoviedb.org/3/search/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&query=&page=1")
    .then(function(response) {
      return response.json();
    })
    .then(function(respuesta) {
      for (var i = 0; i < respuesta.search.length; i++) {
        console.log(data);
        var listadoGeneros = document.querySelector("#listado-de-generos");
        listadoGeneros.innerHTML += "<li><a href='generos.html?genero=" + respuesta.genres[i].id + "'>" + respuesta.genres[i].name + "</a></li>";
        if(respuesta.genres[i].id == idGenero){
          // console.log('hola');
          var h1 = document.querySelector('.genreTitle')
          h1.innerHTML = respuesta.genres[i].name
        }
      }

    })
    .catch(function(e){
      console.log(e)

    })
