
const counterEl = document.getElementById('counter');
const numberInput = document.getElementById('number-input');
const submitButton = document.getElementById('submit-button');
const currentCounterEl = document.getElementById('current-counter');


currentCounterEl.textContent = numberInput.value;

submitButton.addEventListener('click', () => {
  const newNumber = Number(numberInput.value);

  updateCounter(newNumber);
});

function updateCounter(newNumber) {
  const oldNumber = Number(currentCounterEl.textContent);
  const direction = newNumber > oldNumber ? 'up' : 'down';

  
  const newNumberSpans = Array.from(String(newNumber), digit => `<span>${digit}</span>`).join('');
  currentCounterEl.innerHTML = newNumberSpans;

  if (direction === 'up') {
    gsap.from("#current-counter span", {
      y: 50,
      stagger: .1
    })
  } else {
    gsap.from("#current-counter span", {
      y: -50,
      stagger: .1
    })
  }
}