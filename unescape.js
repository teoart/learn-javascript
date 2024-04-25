const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const sumArray = arr => arr.reduce((total, current) => total + current, 0);