import { annotate } from "https://unpkg.com/rough-notation?module";

const tech = document.querySelector('.tech');
const saludo = document.querySelector('.texto-saludo');

const annotationSaludo = annotate(saludo, { 
  type: 'underline',
  color: 'yellow',
  animationDuration: 1500 // Duración de la animación en milisegundos
});

const annotation = annotate(tech, {
  type: 'underline',
  color: 'yellow',
  animationDuration: 6000 // Duración de la animación en milisegundos
});

annotation.show();
annotationSaludo.show();