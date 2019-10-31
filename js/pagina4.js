window.onload = function(){
fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&page=1")
  .then(function(response){
    return response.json();
  })
  .then(function(data){
  //  for(var i=0; i<data.length; i++)
    console.log(data);
  })
}
