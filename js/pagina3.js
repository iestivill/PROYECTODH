window.onload = function(){


// capturo de la URL la data que envio el form
  var generosObj = new URLSearchParams(window.location.search);
  // capturo el campo de los generos a buscar
  var conG = generosObj.get('conG');
  // capturo el campo de los generos no deseados
  var sinG = generosObj.get('sinG');
  // capturo el campo de los años
  var year = generosObj.get('year');
// capturo orden de los resultados
  var order = generosObj.get('order');


  // fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(respuesta) {
  //   for (var i = 0; i < respuesta.genres.length; i++) {
  //     var listadoGeneros = document.querySelector("#listado-de-generos");
  //     listadoGeneros.innerHTML += "<li><a href='generos.html?genero=" + respuesta.genres[i].id + "'>" + respuesta.genres[i].name + "</a></li>";
  //     if(respuesta.genres[i].id == idGenero){
  //       // console.log('hola');
  //       var h1 = document.querySelector('.genreTitle')
  //       h1.innerHTML = respuesta.genres[i].name
  //     }
  //   }
  //
  // })
  // .catch(function(e){
  //   console.log(e)
  //
  // })


    // fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(respuesta) {
    //   for (var i = 0; i < respuesta.genres.length; i++) {
    //     var listadoGeneros = document.querySelector("#formulario-generos");
    //     listadoGeneros.innerHTML +='<option value="' + respuesta.genres[i].id +'" > '+ respuesta.genres[i].name +' </option>';
    //     if(respuesta.genres[i].id == idGenero){
    //       // console.log('hola');
    //       var h1 = document.querySelector('.genreTitle')
    //       h1.innerHTML = respuesta.genres[i].name
    //     }
    //   }
    //
    // })
    // .catch(function(e){
    //   console.log(e)
    //
    // })



//   fetch("https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&with_genres="+ idGenero)
// .then(function(r){
//   return r.json()
// })
//   .then(function(data){
//     // console.log(data)
//     var series = data.results
//     var prepath = 'https://image.tmdb.org/t/p/original/'
//     // console.log(pelis);
//     var ul = document.querySelector(".slide-series")
//     for (var i = 0; i < series.length; i++) {
//       var a = '<a href="detalle.html?id='+ series[i].id + '">'
//       a += '<li>'
//       a += '<img src="'+prepath+series[i].poster_path+'" alt="">'
//       a += '<div class="uk-position-center uk-panel"><h1>'+series[i].name+'</h1></div>'
//       a += '</li>'
//       a += '</a>'
//       ul.innerHTML += a;
//     }
//   })


// FETCH es un pedido de informacion a una direccion (url)
// pedido ASINCRONICO
      fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
      .then(function(respuestaString) {
        // me responde con un string pero por suerte tiene formato JSON !!!
        return respuestaString.json();
      })
      .then(function(objetoRespuesta) {
        // la objetoRespuesta que tengo aca, es la misma que en el THEN anterior, pero ahora fue transformada a OBJETO!!!!! wiiii!!!!
        console.log(objetoRespuesta);
        for (var i = 0; i < objetoRespuesta.genres.length; i++) {
          var listadoGeneros = document.querySelector("#listado-de-generos");
          listadoGeneros.innerHTML += "<li><a href='generos.html?genero=" + objetoRespuesta.genres[i].id + "'>" + objetoRespuesta.genres[i].name + "</a></li>";
          if(objetoRespuesta.genres[i].id == ""){
            // console.log('hola');
            var h1 = document.querySelector('.genreTitle')
            h1.innerHTML = objetoRespuesta.genres[i].name
          }
        }

        for (var i = 0; i < objetoRespuesta.genres.length; i++) {
          var listadoGeneros = document.querySelector("#formulario-generos");
          listadoGeneros.innerHTML +='<option value="' + objetoRespuesta.genres[i].id +'" > '+ objetoRespuesta.genres[i].name +' </option>';
          if(objetoRespuesta.genres[i].id == ""){
            // console.log('hola');
            var h1 = document.querySelector('.genreTitle')
            h1.innerHTML = objetoRespuesta.genres[i].name
          }
        }

        for (var i = 0; i < objetoRespuesta.genres.length; i++) {
          var listadoGeneros = document.querySelector("#nodeseado");
          listadoGeneros.innerHTML += '<option value="' + objetoRespuesta.genres[i].id +'" > '+ objetoRespuesta.genres[i].name +' </option>';
          if(objetoRespuesta.genres[i].id == ""){
            // console.log('hola');
            var h1 = document.querySelector('.genreTitle')
            h1.innerHTML = objetoRespuesta.genres[i].name
          }
        }

      //selecciona el Año de inicio y fin  i > bno puede pasar de 2020
        for (var i = 2020; i > 1959; i--) {
          // introduce en el scroll-fomrulario
          var option = '<option value="'+ i +'">'+ i +'</option>'
          //inner html para meterlko en el HTML
          //document quiery selector para seleccionar parte del HTML
          // +=  DECILE A LA A LE QUIERO SIEGUR SUMANDO HTML TENGO UNA LISTA Y LE INSERTO EL A Y RELLENO DANDO VULETAS NO QUIERO QUE PISE LAS COSAS ANTERIORES EL += SUMA Y METE ESTO, METE ESTO
          document.querySelector("#selectanio").innerHTML+=option
        }


      })
      //catch(function(e) para ver si hay un error
      // console log para mostrar el error en la consola
      .catch(function(e){
        console.log(e)

      })

      var form = document.querySelector('.formularioform')
      // onsumbit cuanod lo mande lo que tiene que hacer
      form.onsubmit = function(e) {
          // e.preventDefault()
          var selectGeneros = document.querySelector("#formulario-generos");
          var selectSinGeneros = document.querySelector("#nodeseado");
          var selectAnio = document.querySelector("#selectanio");
          var selectOrder = document.querySelector("#selectorder")
          var opcionGeneroElegido = selectGeneros.options[selectGeneros.selectedIndex].value;
          var opcionSinGenero = selectSinGeneros.options[selectSinGeneros.selectedIndex].value;
          var opcionAnioElegido = selectAnio.options[selectAnio.selectedIndex].value;
          var opcionSelectOrder = selectOrder.options[selectOrder.selectedIndex].value;
          console.log(opcionGeneroElegido);
          console.log(opcionSinGenero);
          console.log(opcionAnioElegido);
          console.log(opcionSelectOrder);

// error del prevent default
          var error = false;

// si lkos dos PRIMEROS campos no estan seleccionados, prebvent default, error, alert
          if (opcionGeneroElegido == "" || opcionSinGenero == ""){
            error = true;
            e.preventDefault()
            alert("Los dos primeros campos son obligatorios")

          }


// si la opcion de generos es igual, error y prevent default, alert
          if (opcionGeneroElegido == opcionSinGenero){
            error = true;
            e.preventDefault()
            alert("No puedes elegir 2 generos iguales.")

          }


// SI ERROR ES FALSO, NO HAY ERROR FUNCIONA, HACE TODO ESO
          if (error == false) {




          }


          }

// recuperar parametro de la url

// AGARRRO LA URL
// AGARRRO LA URL IF EL
// !=
          var urlBuscar = "https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7"
          if (order != "" ){
            urlBuscar += "&sort_by="+ order
          }

          if (year != ""){
            urlBuscar += "&first_air_date_year="+ year
          }
          if (conG != ""){
            urlBuscar += "&with_genres="+ conG
          }
          if (sinG != ""){
            urlBuscar += "&without_genres="+ sinG
          }

          //
          //   urlBuscar += "&vote_average.asc="+ order
          //
          // }


          //var urlBuscar = "https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&sort_by=popularity.desc"
          //if {
            //urlBuscar += "&first_air_date_year="+ order
            //}


            //vote_average.desc, vote_average.asc, first_air_date.desc, first_air_date.asc, popularity.desc, popularity.asc

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
