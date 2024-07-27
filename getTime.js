const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const results = await Promise.all(resultingPromises);
const symbolsPath = path.join(buildOutputPath, 'symbols');