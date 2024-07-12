const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);