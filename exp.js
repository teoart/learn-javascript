const symbolsPath = path.join(buildOutputPath, 'symbols');
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const arrayContains = (arr, element) => arr.includes(element);
const isArray = (arr) => Array.isArray(arr);