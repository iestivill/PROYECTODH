window.onload = function() {
  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    var pelis = respuesta.results;
    var prepath = 'https://image.tmdb.org/t/p/original/'
    console.log(pelis);
    var ul = document.querySelector(".slide-pelis")
    for (var i = 0; i < pelis.length; i++) {
      var a = '<a href="detalle.html?id='+ pelis[i].id + '">'
      a += '<li>'
      a += '<img src="'+prepath+pelis[i].poster_path+'" alt="">'
      a += '<div class="uk-position-center uk-panel"><h1>'+pelis[i].name+'</h1></div>'
      a += '</a>'
      ul.innerHTML += a;
    }
  })
}
