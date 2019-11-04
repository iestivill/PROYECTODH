window.onload = function(){
console.log("hola");
  var generosObj = new URLSearchParams(location.search);
  var idGenero = generosObj.get('genero');
  fetch("https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&with_genres="+ idGenero)
.then(function(r){
  return r.json()
})
  .then(function(data){
    console.log(data)
    var series = data.results
    var prepath = 'https://image.tmdb.org/t/p/original/'
    // console.log(pelis);
    var ul = document.querySelector(".slide-series")
    for (var i = 0; i < series.length; i++) {
      var a = '<a href="detalle.html?id='+ series[i].id + '">'
      a += '<li>'
      a += '<img src="'+prepath+series[i].poster_path+'" alt="">'
      a += '<div class="uk-position-center uk-panel"><h1>'+series[i].name+'</h1></div>'
      a += '</a>'
      ul.innerHTML += a;
    }
  })

fetch ("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
.then (function (response){
  return response.json()
})
.then (function(data){
  console.log(data)
  var gen = data.results
  var prepath = 'https://image.tmdb.org/t/p/original/'
  var ul = document.querySelector("genres")
  for (var i = 0; i < gen.length; i++) {
    var a = '<a href="detalle.html?id='+ gen[i].id + '">'
    a += '<li>'
    a += '<img src="'+prepath+gen[i].poster_path+'" alt="">'
    a += '<div class="uk-position-center uk-panel"><h1>'+gen[i].name+'</h1></div>'
    a += '</a>'
    ul.innerHTML += a;
  }
})


}
