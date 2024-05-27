const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const randomBoolean = () => Math.random() >= 0.5;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();