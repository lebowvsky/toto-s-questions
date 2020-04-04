const dictionnary = ['Dev', "l'UX", 'WordPress', 'Submit', 'Responsive', 'React', 'Redux', 'Bootstrap', 'JQuery', 'Les props', 'Le CSS', 'WebAssembly'];

const randomElt = (arr) => {
  return Math.floor(Math.random() * Math.floor(arr.length));
};

const questionVisible = document.querySelector('.visible');
const button = document.getElementById('btn');

const initializeFirstQuotes = (arr) => {
  questionVisible.innerHTML = `<p>"Est-ce que ${arr[randomElt(arr)]} c'est du ${arr[randomElt(arr)]} ?"</p>`;
};

initializeFirstQuotes(dictionnary);

/* Awaiting style */

const getRandomDictionnary = (arr) => {
  const visibleg = document.querySelector('.visible');
  visibleg.style.display = 'none';
  visibleg.classList.remove('visible');
  const awaitingQuestion = document.createElement('div');
  awaitingQuestion.classList.add('quote');
  awaitingQuestion.classList.add('visible');
  awaitingQuestion.innerHTML = `<p>"Est-ce que ${arr[randomElt(arr)]} c'est du ${arr[randomElt(arr)]} ?"</p>`;
  document.getElementById('card').appendChild(awaitingQuestion);
  const visible = document.querySelector('.visible');
  visible.style.position = 'relative';
  visible.style.top = '-50vh';
  visible.style.transition = 'top 450ms cubic-bezier(.22,1.08,.67,1.65)';
  setTimeout(() => {
    visible.style.top = '0vh';
  }, 250);
};

button.addEventListener('click', () => {
  getRandomDictionnary(dictionnary);
});
