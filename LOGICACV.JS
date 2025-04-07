'use strict';

window.addEventListener('load', function() {
    var xpButton = document.querySelector('#xp');
    var infoButton = document.querySelector('#info');
    var eduButton = document.querySelector('#edu');

    document.querySelector('label[for="xp"]').addEventListener('click', function() {
        alert('Redirigiendo a Experiencia Laboral...');
        window.location.href = "CVPage.html";
    });

    document.querySelector('label[for="info"]').addEventListener('click', function() {
        alert('Redirigiendo a Info Personal...');
        window.location.href = "InfoPersonal.html";
    });

    document.querySelector('label[for="edu"]').addEventListener('click', function() {
        alert('Redirigiendo a INICIO...');
        window.location.href = "Index.html";
    });
});
