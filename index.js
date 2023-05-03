import { annotate } from "https://unpkg.com/rough-notation?module";

const tech = document.querySelector('.tech');
const saludo = document.querySelector('.texto-saludo');

const annotationSaludo = annotate(saludo, { type: 'underline' , color:'yellow'});
const annotation = annotate(tech, { type: 'underline' , color:'yellow'});

annotation.show();
annotationSaludo.show();
