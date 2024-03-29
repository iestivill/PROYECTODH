window.onload = function() {
  // capturo de la URL la data que envio el form
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

      genero.innerHTML +=  data.genres[i].name + ". "

  }

    var rating = document.querySelector(".rating")
    rating.innerHTML += data.vote_average

    var paisDeOrigen = document.querySelector(".origen")
    paisDeOrigen.innerHTML += data.origin_country

for (var i = 0; i < data.created_by.length; i++) {
  data.created_by[i]
    var director = document.querySelector(".director")
    director.innerHTML +=   data.created_by[i].name + ". "

  }

    var poster = document.querySelector(".poster")
    var prepath = 'https://image.tmdb.org/t/p/original'
    poster.innerHTML += '<img src="'+prepath+data.poster_path+'" alt="">'

    var resumen = document.querySelector(".resumen")
    resumen.innerHTML += data.overview

  })
// para que muestre el error si es que hay
  .catch(function(e){
    console.log(e)
  })


//trailer
fetch("https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
.then(function(response) {
  return response.json();
})
.then(function(datos){
  console.log(datos);
  for (var i = 0; i < datos.results.length; i++) {
  var key = datos.results[i].key
  var youtube = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  var trailer = document.querySelector(".trailer").innerHTML += youtube
  //console.log(youtube);
}
})
//termina trailer


//empieza recomendaciones
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
      a += '<div class="uk-position-center uk-panel"><h1>'+recommendaciones[i].name.toUpperCase()+'</h1></div>'
      a += '</li>'
      a += '</a>'
      ul.innerHTML += a;

}  })
// termina recomendaciones


//listado de generos header
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
.then(function(response) {
  return response.json();
})
.then(function(respuesta) {
  console.log(respuesta)
  // console.log(respuesta.genres[0].name);
  var listadoGeneros = document.querySelector("#listado-de-generos");
  for(var i = 0; i < respuesta.genres.length; i++) {

    // NO SE ENTIENDE UNA CHOTA
    listadoGeneros.innerHTML += "<li><a href='generos.html?genero=" + respuesta.genres[i].id + "'>" + respuesta.genres[i].name + "</a></li>";
  }
})

// termina listado de generos



// empieza boton de hacer favorito
//busca las series favoritas localStorage
var recuperoStorage = localStorage.getItem("seriesFavoritas");

// Si todavía no tenía series favoritos
if (recuperoStorage == null) {
  // Creo una lista vacia
  seriesFavoritas = [];
} else {
  // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
  seriesFavoritas = JSON.parse(recuperoStorage);
}
//busca en el url el id
var datos = new URLSearchParams(location.search);
var idSerie = datos.get("id");
//si series favoritas ya tiene ese id cambia el texto del boton
if (seriesFavoritas.includes(idSerie)) {
  document.querySelector(".fav").innerHTML = "QUITAR DE FAVORITOS";
}

// cuando clickeas en el boton se ejecuta lo de abajo
  document.querySelector(".fav").onclick = function() {


    //Paso 2: Modificar la informacion
    // Si la serie ya era favorita
    if (seriesFavoritas.includes(idSerie)) {
      // indexOf Lo busca en el array y splice lo quita
      var index = seriesFavoritas.indexOf(idSerie);
    seriesFavoritas.splice(index, 1);
    // cuando lo saca vuelve el texto para volver a agregarlo a favorito
      document.querySelector("button.fav").innerHTML = "AGREGAR FAVORITO";
    } else {
      //si no esta, lo agrega
    seriesFavoritas.push(idSerie);
      document.querySelector("button.fav").innerHTML = "QUITAR DE FAVORITOS";
    }


    //Paso 3: Escribir en storage
    //lo vuelve a comprimir en json en el localStorage
    var infoParaStorage = JSON.stringify(seriesFavoritas);
    // setItem lo guarda en localStorage
    localStorage.setItem("seriesFavoritas", infoParaStorage);
    console.log(localStorage);
  }}
