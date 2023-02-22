const form = document.querySelector('form');
const textArea = document.getElementById('hex-codes');

const colorsSection = document.querySelector('section');
const colorsContainer = document.getElementById('colors');
const editButton = document.querySelector('button[type="button"]');

const regex = /#?[a-fA-F0-9]{6}/g;

form.addEventListener('submit', e => {
  e.preventDefault();
  showSection();
  generateColors();
})

editButton.addEventListener('click', showForm);

function generateColors() {
  const colors = textArea.value.match(regex);
  if(!colors) {
    colorsContainer.textContent = 'Invalid hex codes';
    return;
  }
  colors.map(color => {
    const colorContainer = document.createElement('div');
    const colorLabel = document.createElement('p');
    colorLabel.classList.add('color-label');
    colorLabel.textContent = color.charAt(0) === '#' ? color : '#' + color;
    const colorSwatch = document.createElement('div');
    colorSwatch.classList.add('color-swatch');
    colorSwatch.style.backgroundColor = color.charAt(0) === '#' ? color : '#' + color;
    colorContainer.append(colorLabel, colorSwatch);
    colorsContainer.appendChild(colorContainer);
  })
}

function clearColors() {
  while(colorsContainer.firstChild) {
    colorsContainer.removeChild(colorsContainer.firstChild);
  }
}

function showForm() {
  clearColors();
  colorsSection.classList.add('hidden');
  form.classList.remove('hidden');
}

function showSection() {
  colorsSection.classList.remove('hidden');
  form.classList.add('hidden');
}