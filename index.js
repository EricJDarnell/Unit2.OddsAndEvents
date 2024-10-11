const state = {
  numberBank: [],
  Odds: [],
  Evens: [],
};

function showState() {
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

const formElem = document.querySelector("form");
formElem.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const submittedNumber = document.querySelector("#number");
  state.numberBank.push(submittedNumber.value);

  showState(); // shows numbers in Number Bank

  console.log(state.numberBank); //logging
});

const sortOne = document.querySelector("#sortOne");
sortOne.addEventListener("click", (evt) => {
  evt.preventDefault(); //keeps the page from refreshing when you click them buttons
  //sort into the odd and even arrays easy with if/then
  const uno = state.numberBank.pop();
  if (uno % 2 === 0) {
    state.Evens.push(uno);
  } else {
    state.Odds.push(uno);
  }
  showState();

  console.log(`bank: ${state.numberBank}`);
  console.log(`evens: ${state.Evens}`);
  console.log(`odds: ${state.Odds}`);
});

const sortAll = document.querySelector("#sortAll");
sortAll.addEventListener("click", (evt) => {
  evt.preventDefault();
  for (let i = 0; i < state.numberBank.length; i++) {
    const uno = state.numberBank.pop();
    if (uno % 2 === 0) {
      state.Evens.push(uno);
    } else {
      state.Odds.push(uno);
    }
  }
  showState();
});
