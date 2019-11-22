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

      //selecciona el Año de inicio y fin  i > no puede pasar de 2020
      // Introduce en el scroll-formulario, cada valor de i en la var option cada numerito
      // i-- orden decendiente

        for (var i = 2020; i > 1959; i--) {

          // Crea un option dntro del dropdown por cada año que hay
          var option = '<option value="' + i + '">' + i + '</option>'
          // += AGREGUE Y RELLENO DANDO VUELTAS NO QUIERO QUE PISE LAS COSAS ANTERIORES EL += SUMA Y METE ESTO
          //inner html para meterlko en el HTML
          document.querySelector("#selectanio").innerHTML+=option
        }


      })
      //catch(function(e) para ver si hay un error dentro de la funcion e
      // console log para mostrar el error en la consola
      .catch(function(e){
        console.log(e)

      })

      var form = document.querySelector('.formularioform')
      // onsumbit cuando lo mande lo que tiene que hacer
      form.onsubmit = function(e) {
          // e.preventDefault()
          var selectGeneros = document.querySelector("#formulario-generos");
          var selectSinGeneros = document.querySelector("#nodeseado");
          var selectAnio = document.querySelector("#selectanio");
          var selectOrder = document.querySelector("#selectorder")
          // cual es la opcion que realmenre elegigio. el value busca el valor que elegiste dentro del index y la mete ahi
          var opcionGeneroElegido = selectGeneros.options[selectGeneros.selectedIndex].value;
          // RETORNA UN DROPDOWN LIST EN EL INDEX
          var opcionSinGenero = selectSinGeneros.options[selectSinGeneros.selectedIndex].value;
          var opcionAnioElegido = selectAnio.options[selectAnio.selectedIndex].value;
          var opcionSelectOrder = selectOrder.options[selectOrder.selectedIndex].value;
          console.log(opcionGeneroElegido);
          console.log(opcionSinGenero);
          console.log(opcionAnioElegido);
          console.log(opcionSelectOrder);

// error del prevent default SI ERROR ES IGUALA FALSE EJECUTA TODO LO DE ARRIBA
          var error = false;

// si los dos PRIMEROS campos no estan seleccionados, prebvent default, error, alert
// Si alguno de los dos || esta vacio error
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


// SI ERROR ES FALSO (funciona), NO HAY ERROR FUNCIONA, HACE TODO ESO
          if (error == false) {




          }


          }

// recuperar parametro de la url

// AGARRRO LA URL
// AGARRRO LA URL IF EL
// !=
// si paao todos los chekpoints ppne todo loq ue puso el usuario en el prden que pidio
          var urlBuscar = "https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7"
          // si order no esta vacio metele != SI ORDER ES DIFERENTE A VACIO HAY ALGO ADENTRO A URL BUSCAR AGREGALE SORT BY + LO QUE QUERES QUE META (ORDER)
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

//---------------------------------<>----------------------------------------------------------
            console.log(urlBuscar);
            // busca el api que hicite con api resultados pasa de json a array
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
