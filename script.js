const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))//makes the container grow or shrink based on the big class 

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      //add new element
      const box = document.createElement('div')
      box.classList.add('box')
      //${} is a template literal in JavaScript,allowing for the insertion of variables into a string.
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      //add a child element into parent
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes()