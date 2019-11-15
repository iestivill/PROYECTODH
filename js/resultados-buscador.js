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


fetch("https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&sort_by=popularity.desc&first_air_date_year="+ opcionAnioElegido +"&with_genres="+opcionGeneroElegido+"&without_genres="+opcionSinGenero)



.then(function(response2){
  return response2.json();
})
.then(function(respuesta2){

  var opcionGeneroElegido = selectGeneros.options[selectGeneros.selectedIndex].value;
  var opcionSinGenero = selectSinGeneros.options[selectSinGeneros.selectedIndex].value;
      var opcionAnioElegido = selectAnio.options[selectAnio.selectedIndex].value;
            console.log(opcionGeneroElegido);
            console.log(opcionSinGenero);
            console.log(opcionAnioElegido);


  console.log(respuesta2);
  var pelis = respuesta2.results;
  var prepath = 'https://image.tmdb.org/t/p/original/'
  var main = document.querySelector(".resultados")
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

}
)
}
