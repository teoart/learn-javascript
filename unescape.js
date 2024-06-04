const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const merge = [...new Set([...a, ...b])];