const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const isWeekday = (date) => date.getDay() % 6 !== 0;