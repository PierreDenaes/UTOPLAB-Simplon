var group = [
  "Benjamin Gouget",
  "Florian Farris",
  "Said Zenafi",
  "Yannis Aouachria",
  "Pierre Denaes",
  "Morgan Trainoir",
  "Coralie Damery",
  "Quentin Robert",
  "Alexandre Chauvet",
  "Sebastien Cartoux",
  "Davis Haas",
  "Sofiane Sotehi",
  "Yoan Baldacchino",
  "Nicolas Degabriel",
  "Ayman Bratzu",
  "Quentin Queffuris",
  "Killian Pasquier",
  "Jérôme Laurent",
  "Jean-Daniel Pontremoli",
  "Marjorie Ngoupende",
  "Christophe Coutures",
  "Michel Christophe"
];
// action button random name
const getRandomNumber = max => Math.floor(Math.random() * max);
const getRandomName = () => `${group[getRandomNumber(group.length)]}`;
const setRandomName = () => {
  document.getElementById("random-name").innerText = getRandomName();
};
document.getElementById("generate").addEventListener("click", setRandomName);
// action button complete list
const fullList = () => {
  document.getElementById("completList").innerHTML = "";
  group.forEach(function(name) {
    var p = document.createElement("p");
    document.getElementById("completList").appendChild(p);
    p.innerHTML += name;
  });
};
document.getElementById("all-name").addEventListener("click", fullList);

