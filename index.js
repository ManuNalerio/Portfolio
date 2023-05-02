import { annotate } from "https://unpkg.com/rough-notation?module";

const city = document.querySelector('.city');
const annotation = annotate(city, { type: 'highlight' , color:'pink'});
annotation.show();