'use strict';

window.addEventListener('load', function() {
    var botonIngresar = document.querySelector('#BotonIngresar');

    botonIngresar.addEventListener('click', function(){
        alert('Estas apunto de ingresar al cv'); // Corrige el texto aquí
        window.location.href="CVPage.html"
    });

});
