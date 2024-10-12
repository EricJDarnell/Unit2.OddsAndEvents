const state = {
  numberBank: [],
  Odds: [],
  Evens: [],
};
function showState() {
    if (dropdown.value === 'ascending') {
        state.Odds.sort((a,b) => a - b );  //sorts into ascending order
        state.Evens.sort((a,b) => a - b );
    } else {
        const ascendingOdds = state.Odds.sort((a,b) => a - b ); //more involved for descending order
        state.Odds = [];
        for (let i = 0; i < ascendingOdds.length; i++) {
            state.Odds.push(ascendingOdds[ascendingOdds.length - i - 1]);
        }
        const ascendingEvens = state.Evens.sort((a,b) => a - b );
        state.Evens = [];
        for (let i = 0; i < ascendingEvens.length; i++) {
            state.Evens.push(ascendingEvens[ascendingEvens.length - i - 1]);
        }    
    }
  // output element in the section id="numberBank"
  const sectionBank = document.querySelector("#numberBank");
  const bankOutput = sectionBank.querySelector("output");
  // selected the output box without having to change the id.
  // print numbers from state.numberBank
  bankOutput.textContent = ""; // bug fix for unending string
  for (let i = 0; i < state.numberBank.length; i++) {
    bankOutput.textContent += `${state.numberBank[i]} `;
  }

  const sectionOdds = document.querySelector("#odds");
  const oddsOutput = sectionOdds.querySelector("output");

  oddsOutput.textContent = ""; // bug fix for unending string
  for (let i = 0; i < state.Odds.length; i++) {
    oddsOutput.textContent += `${state.Odds[i]} `;
  }

  const sectionEvens = document.querySelector("#evens");
  const evensOutput = sectionEvens.querySelector("output");

  evensOutput.textContent = ""; // bug fix for redundant string
  for (let i = 0; i < state.Evens.length; i++) {
    evensOutput.textContent += `${state.Evens[i]} `;
  }
}
function cleanInput(str) {
    const regex = /[\D]/g;
    return str.replace(regex,"");
}


const formElem = document.querySelector("form");
formElem.addEventListener("submit", (evt) => {
  evt.preventDefault();
   userInput = document.querySelector("#number").value;
  if (userInput !== ""){
    const inputArray = userInput.split(","); 
    for (let i=0; i < inputArray.length; i++){
        if (cleanInput(inputArray[i]) !== ""){
            state.numberBank.push(cleanInput(inputArray[i]) * 1);
        }
    }
        
      showState();
  } else {
    console.log("do nothing");//don't need to leave this
  }
  /** Adding changes here for extension*/



});
const randomButton = document.querySelector("#randomButton"); //extension!!
randomButton.addEventListener("click", (evt) => {
    evt.preventDefault()
    const randomNumber = Math.floor(Math.random() * 100);
    if (Math.floor(Math.random()*20) < 7){
        state.numberBank.push(-1*randomNumber);
    } else{
        state.numberBank.push(randomNumber);
    }
    showState();
});

const sortOne = document.querySelector("#sortOne");
sortOne.addEventListener("click", (evt) => {
  evt.preventDefault(); //keeps the page from refreshing when you click them buttons
  //sort into the odd and even arrays easy with if/then
  const uno = state.numberBank[0];
  if (uno % 2 === 0) {
    state.Evens.push(uno);
  } else {
    state.Odds.push(uno);
  }
  state.numberBank.shift();
  showState();

});

const sortAll = document.querySelector("#sortAll");
sortAll.addEventListener("click", (evt) => {
  evt.preventDefault();
  while (state.numberBank.length !== 0) { //started with a for loop, and then took a bit of time to figure out why that wasn't working.
    const uno = state.numberBank[0];
    if (uno % 2 === 0) {
      state.Evens.push(uno);
    } else {
      state.Odds.push(uno);
    }
    state.numberBank.shift()
  }
  showState();
});

const numSort = document.querySelector('#numSort');
const numSortSpan = document.querySelector('#numSortSpan');
numSort.addEventListener('input', () => {
    numSortSpan.innerText = numSort.value;
} );

const numSortButton = document.querySelector('#numSortButton');
numSortButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    for (let i = 0; i < numSort.value; i++ ) {
        const uno = state.numberBank[0];
        if (uno === undefined) {
            console.log("do nothing"); // I'm not sure how to do nothing
        }
        else if (uno % 2 === 0) {
          state.Evens.push(uno);
        } else {
          state.Odds.push(uno);
        }
        state.numberBank.shift()
      }
      showState();
});

const dropdown = document.querySelector("#dropdown");
dropdown.addEventListener('input', showState); 