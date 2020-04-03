const dictionnary = ["Dev", "l'UX", "WordPress", "Submit", "Responsive", "React", "Redux", "Bootstrap", "JQuery", "Les props", "Le CSS", "WebAssembly"]

const questionPlace = document.getElementById('question');
const button = document.getElementById('btn');

function getRandomDictionnary(arr){
  questionPlace.innerHTML = ""
  const i = Math.floor(Math.random() * Math.floor(arr.length));
  const j = Math.floor(Math.random() * Math.floor(arr.length));
  console.log(`Est-ce que ${dictionnary[i]} c'est du ${dictionnary[j]} ?`);
  questionPlace.innerHTML += `<p>"Est-ce que ${dictionnary[i]} c'est du ${dictionnary[j]} ?"</p>`
}

getRandomDictionnary(dictionnary);

button.addEventListener('click', () => {
  getRandomDictionnary(dictionnary);
})