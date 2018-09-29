console.log("1");

(function(){
  'use strict';
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

    var enlaces = document.getElementsByTagName('a');
    console.log(enlaces);

    for(var i=0; i < enlaces.length; i++){
      enlaces[i].setAttribute('target','_blank');
    }





  });

})();
console.log("3");
