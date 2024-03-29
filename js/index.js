
window.onload = function() {
  fetch("https://api.themoviedb.org/3/tv/popular?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    var pelis = respuesta.results;
    var prepath = 'https://image.tmdb.org/t/p/original/'
    // console.log(pelis);
    var ul = document.querySelector(".slide-pelis")
    for (var i = 0; i < pelis.length; i++) {
      var a = '<a href="detalle.html?id='+ pelis[i].id + '">'
      a += '<li>'
      a += '<img src="'+prepath+pelis[i].poster_path+'" alt="">'
      a += '<div class="uk-position-center uk-panel"><h1>'+pelis[i].name.toUpperCase()+'</h1></div>'
      a += '</li>'
      a += '</a>'
      ul.innerHTML += a;
    }
  })

  fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    var prepath = 'https://image.tmdb.org/t/p/original/'
    var estrenos = respuesta.results

    var ul = document.querySelector(".slide-estrenos")
    for (var i = 0; i < estrenos.length; i++)  {

      var a = '<a href="detalle.html?id='+ estrenos[i].id + '">'
      a += '<li>'
      a += '<img src="'+prepath+estrenos[i].poster_path+'" alt="">'
      a += '<div class="uk-position-center uk-panel"><h1>'+estrenos[i].name.toUpperCase()+'</h1></div>'
      a += '</li>'
      a += '</a>'
      ul.innerHTML += a;
    }
  })

  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    var prepath = 'https://image.tmdb.org/t/p/original/'
    var mejores = respuesta.results

    var ul = document.querySelector(".slide-mejores")
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
  fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    var prepath = 'https://image.tmdb.org/t/p/original/'
    var proximos = respuesta.results
    var ul = document.querySelector(".slide-proximos")
    for (var i = 0; i < proximos.length; i++) {
      var a = '<a href="detalle.html?id='+ proximos[i].id + '">'
      a += '<li>'
      a += '<img src="'+prepath+proximos[i].poster_path+'" alt="">'
      a += '<div class="uk-position-center uk-panel"><h1>'+proximos[i].name.toUpperCase()+'</h1></div>'
      a += '</li>'
      a += '</a>'
      ul.innerHTML += a;
    }
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




  // https://api.themoviedb.org/3/tv/popular?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&page=1&with_genres=ID_DEL_GENERO
  // Las series mas populares con un genero determinado


}
