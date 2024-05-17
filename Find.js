const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const lastElement = arr => arr[arr.length - 1];
console.log(false == '0');