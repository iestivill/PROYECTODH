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

// if (idseleccion == "") {
//   url tal
//   var url =
// }else if (idano = "") {
//   otra url
// }


//var generosObj = new URLSearchParams(location.search);
//var idGenero = generosObj.get('genero');

var idAno = respuesta2.results
var idSeleccion = respuesta2.results
var idExcluir = respuesta2.results

fetch("https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&sort_by=popularity.desc&first_air_date_year="+ idAno +"&with_genres="+idSeleccion+"&without_genres="+idExcluir)


.then(function(response2){
  return response2.json();
})
.then(function(respuesta2){

  console.log(respuesta2);
  var pelis = respuesta2.results;
  var prepath = 'https://image.tmdb.org/t/p/original/'
  var main = document.querySelector(".resultados")
  for (var i = 0; i < pelis.length; i++) {


  }
})
}
