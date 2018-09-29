(function(){
  'use strict';
  var map = L.map('mapa').setView([16.75127, -93.102522], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([16.75127, -93.102522]).addTo(map)
      .bindPopup('El Cubo - Centro de Copiado- <br> ¡Ven ya!')
      .openPopup();


  document.addEventListener('DOMContentLoaded', function(){







    //getElementById
    /*
    var logo = document.getElementById('logo');
    var navegacion = document.getElementById('navegacion');
    navegacion.style.display ="none";
    console.log(logo);
    */

    //getElementByClassName
    /*
    var navegacion = document.getElementsByClassName('navegacion');
    console.log(navegacion[0]);
    var contenido = document.getElementsByClassName('contenido');
    console.log(contenido[0]);
    contenido[0].style.display = 'none';

    // getElementsByTagName con esto podemos agregar atributos a una clase sin tener
    que cambiar todo el html */








  });

})();
/*console.log("3");*/
