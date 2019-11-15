window.onload = function(){

  var generosObj = new URLSearchParams(location.search);
  var idGenero = generosObj.get('genero');



  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    for (var i = 0; i < respuesta.genres.length; i++) {
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


    fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
    .then(function(response) {
      return response.json();
    })
    .then(function(respuesta) {
      for (var i = 0; i < respuesta.genres.length; i++) {
        var listadoGeneros = document.querySelector("#formulario-generos");
        listadoGeneros.innerHTML +='<option value="' + respuesta.genres[i].id +'" > '+ respuesta.genres[i].name +' </option>';
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



  fetch("https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&with_genres="+ idGenero)
.then(function(r){
  return r.json()
})
  .then(function(data){
    // console.log(data)
    var series = data.results
    var prepath = 'https://image.tmdb.org/t/p/original/'
    // console.log(pelis);
    var ul = document.querySelector(".slide-series")
    for (var i = 0; i < series.length; i++) {
      var a = '<a href="detalle.html?id='+ series[i].id + '">'
      a += '<li>'
      a += '<img src="'+prepath+series[i].poster_path+'" alt="">'
      a += '<div class="uk-position-center uk-panel"><h1>'+series[i].name+'</h1></div>'
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
        for (var i = 0; i < respuesta.genres.length; i++) {
          var listadoGeneros = document.querySelector("#nodeseado");
          listadoGeneros.innerHTML += '<option value="' + respuesta.genres[i].id +'" > '+ respuesta.genres[i].name +' </option>';
          if(respuesta.genres[i].id == idGenero){
            // console.log('hola');
            var h1 = document.querySelector('.genreTitle')
            h1.innerHTML = respuesta.genres[i].name
          }
        }

        for (var i = 2020; i > 1959; i--) {
          var option = '<option value="'+ i +'">'+ i +'</option>'
          document.querySelector("#selectanio").innerHTML+=option
        }


      })
      .catch(function(e){
        console.log(e)

      })

      var form = document.querySelector('.formularioform')


      form.onsubmit = function(e) {
          e.preventDefault()
          var selectGeneros = document.querySelector("#formulario-generos");
          var selectSinGeneros = document.querySelector("#nodeseado");
          var selectAnio = document.querySelector("#selectanio");
          var opcionGeneroElegido = selectGeneros.options[selectGeneros.selectedIndex].value;
          var opcionSinGenero = selectSinGeneros.options[selectSinGeneros.selectedIndex].value;
          var opcionAnioElegido = selectAnio.options[selectAnio.selectedIndex].value;
          console.log(opcionGeneroElegido);
          console.log(opcionSinGenero);
          console.log(opcionAnioElegido);

          var error = false;


          if (opcionGeneroElegido == ""){
            error = true;
            e.preventDefault()
            alert("Completa todos los campos")

          }



          if (opcionGeneroElegido == opcionSinGenero){
            error = true;
            e.preventDefault()
            alert("Revisa los generos elegidos.")

          }



          if (error == false) {
          var urlBuscar = "https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&sort_by=popularity.desc"
          if (opcionAnioElegido != ""){
            urlBuscar += "&first_air_date_year="+ opcionAnioElegido
          }
          if (opcionGeneroElegido != ""){
            urlBuscar += "&with_genres="+ opcionGeneroElegido
          }
          if (opcionSinGenero != ""){
            urlBuscar += "&without_genres="+ opcionSinGenero
          }
          console.log(urlBuscar);

          fetch(urlBuscar)



          .then(function(response2){
            return response2.json();
          })
          .then(function(respuesta2) {
            var pelis = respuesta2.results;
            var prepath = 'https://image.tmdb.org/t/p/original/'
            // console.log(pelis);
            var ul = document.querySelector(".resultadosbusc")
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


          }



         // if (valor == null ) {
         //   e.preventDefault()
         //  alert("ERROR completa los campos faltantes")
         // }
         // else if (SI EL GENERO ELEGIDO ES EL MISMO QUE EL EXLUIDO) {
         //   e.preventDefault()
         //   alert("")OTRO MENSAJE DE ERROR
         // }

      }
