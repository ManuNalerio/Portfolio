import { annotate } from "https://unpkg.com/rough-notation?module";

const city = document.querySelector('.city');
const saludo = document.querySelector('.texto-saludo');

const annotationSaludo = annotate(saludo, { type: 'underline' , color:'yellow'});
const annotation = annotate(city, { type: 'highlight' , color:'pink'});

annotation.show();
annotationSaludo.show();