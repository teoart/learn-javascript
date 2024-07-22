const stringReverse = str => str.split("").reverse().join("");
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const isEmptyArray = arr => !arr.length;