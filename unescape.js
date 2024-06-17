const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const value = ( 5 < 7 ) ? "True" : "False" ;
const shuffledArray = array.sort(() => Math.random() - 0.5); 