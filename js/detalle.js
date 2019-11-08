window.onload = function() {
  var queryStringObj = new URLSearchParams(location.search)
  var id = queryStringObj.get("id")
  fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    console.log(data);
    var titulo = document.querySelector(".titulod")
    titulo.innerHTML += data.original_name

    var fecha = document.querySelector(".fecha")
    fecha.innerHTML += data.first_air_date

    var temporadas = document.querySelector(".temporadas")
    temporadas.innerHTML += data.number_of_seasons

    for (var i = 0; i < data.genres.length; i++) {
      //data.genres[i]
    var genero = document.querySelector(".genero")

      genero.innerHTML +=  data.genres[i].name + " . "

  }

    var rating = document.querySelector(".rating")
    rating.innerHTML += data.vote_average

    var paisDeOrigen = document.querySelector(".origen")
    paisDeOrigen.innerHTML += data.origin_country

for (var i = 0; i < data.created_by.length; i++) {
  data.created_by[i]
    var director = document.querySelector(".director")
    director.innerHTML +=   data.created_by[i].name + " . "

  }

    var poster = document.querySelector(".poster")
    var prepath = 'https://image.tmdb.org/t/p/original'
    poster.innerHTML += '<img src="'+prepath+data.poster_path+'" alt="">'

    var resumen = document.querySelector(".resumen")
    resumen.innerHTML += data.overview

  })

  .catch(function(e){
    console.log(e)
  })




  fetch("https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    var recommendaciones = data.results;
    var prepath = 'https://image.tmdb.org/t/p/original/'
    var ul = document.querySelector(".slide-recommendaciones")
    for (var i = 0; i < recommendaciones.length; i++) {
      var a = '<a href="detalle.html?id='+ recommendaciones[i].id + '">'
      a += '<li>'
      a += '<img src="'+prepath+recommendaciones[i].poster_path+'" alt="">'
      a += '<div class="uk-position-center uk-panel"><h1>'+recommendaciones[i].name+'</h1></div>'
      a += '</a>'
      ul.innerHTML += a;

}  })
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
