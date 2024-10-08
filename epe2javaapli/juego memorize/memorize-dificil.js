const totalCards = 10;
const availableCards = ['A', 'K', 'Q', 'J', 'L'];
let cards = [];
let selectedCards = [];
let valuesUsed = [];
let currentMove = 0;
let currentAttempts = 0;

const imageUrls = {
   'A': '../images/cirno.png',
   'K': '../images/reimu.png',
   'Q': '../images/marisa.png',
   'J': '../images/yuyuko.png',
   'L': '../images/komeki.png'
   // Add more mappings for other card values
 };

let cardTemplate = `
  <div class="card">
    <div class="back"></div>
    <div class="face">
      <img src="" alt="" class="card-image">
    </div>
  </div>
`;


function activate(e) {
   if (currentMove < 2) {
      
      if ((!selectedCards[0] || selectedCards[0] !== e.target) && !e.target.classList.contains('active') ) {
         e.target.classList.add('active');
         selectedCards.push(e.target);

         if (++currentMove == 2) {

            currentAttempts++;
            document.querySelector('#stats').innerHTML = currentAttempts + ' intentos';

            if (selectedCards[0].querySelectorAll('.face')[0].innerHTML == selectedCards[1].querySelectorAll('.face')[0].innerHTML) {
               selectedCards = [];
               currentMove = 0;
            }
            else {
               setTimeout(() => {
                  selectedCards[0].classList.remove('active');
                  selectedCards[1].classList.remove('active');
                  selectedCards = [];
                  currentMove = 0;
               }, 600);
            }
         }
      }
   }
}

function randomValue() {
   let rnd = Math.floor(Math.random() * totalCards * 0.5);
   let values = valuesUsed.filter(value => value === rnd);
   if (values.length < 2) {
      valuesUsed.push(rnd);
   }
   else {
      randomValue();
   }
}

function getFaceValue(value) {
   let rtn = value;
   if (value < availableCards.length) {
      rtn = availableCards[value];
   }
   return rtn;
}

function getImageUrl(value) {
   return imageUrls[getFaceValue(value)];
 }

for (let i=0; i < totalCards; i++) {
   let div = document.createElement('div');
   div.innerHTML = cardTemplate;
   cards.push(div);
   document.querySelector('#game').append(cards[i]);
   randomValue();
   cards[i].querySelectorAll('.face')[0].innerHTML = `<img src="${getImageUrl(valuesUsed[i])}" alt="">`;
   cards[i].querySelectorAll('.card')[0].addEventListener('click', activate);
}