const getRandomBoolean = () => Math.random() >= 0.5;
const symbolsPath = path.join(buildOutputPath, 'symbols');
const currentDate = () => new Date().toLocaleDateString('en-US');