
const WORD_LENGTH = 5;
const alertContainer = document.querySelector("[data-alert-container]");
const guessGrid = document.querySelector("[data-guess-grid]");
const offsetFromDate = new Date(2022, 8, 28)
const targetWord = ""

startInteraction();

// starts to listen to keys being pressed
function startInteraction() {
  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleKeyPress);
}

function stopInteraction() {
  document.removeEventListener("click", handleMouseClick);
  document.removeEventListener("keydown", handleKeyPress);
}

// the mouse click
function handleMouseClick(e) {
  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key);
    return;
  }

  if (e.target.matches("[data-enter]")) {
    submitGuess();
    return;
  }

  if (e.target.matches("[data-delete]")) {
    deleteKey();
    return;
  }
}

// handle the keys pressed on keyboard
function handleKeyPress(e) {
  console.log(e);
  if (e.key === "Enter") {
    submitGuess();
    return;
  }

  if (e.key === "Backspace" || e.key === "Delete") {
    deleteKey();
    return;
  }

  if (e.key.match(/^[a-z]$/)) {
    pressKey(e.key);
    return;
  }
}

function pressKey(key) {
  const activeTiles = getActiveTiles();
  if (activeTiles.length >= WORD_LENGTH) return;
  const nextTile = guessGrid.querySelector(":not([data-letter])");
  nextTile.dataset.letter = key.toLowerCase();
  nextTile.textContent = key;
  nextTile.dataset.state = "active";
}

// handles deleting a key thats on game board
function deleteKey() {
  const activeTiles = getActiveTiles();
  const lastTile = activeTiles[activeTiles.length - 1];
  if (lastTile == null) return;
  lastTile.textContent = "";
  delete lastTile.dataset.state;
  delete lastTile.dataset.letter;
}


function submitGuess() {
  const activeTiles = [...getActiveTiles()]
  if (activeTiles.length !== WORD_LENGTH) {
   console.log("not")
    showAlert('Not Enough Letters')
    shakeTiles(activeTiles)
    return
  }
  const guess = activeTiles.reduce((word, tile) => {
    return word + tile.dataset.letter
  }, "")
  console.log(guess)
}


function getActiveTiles() {
  return guessGrid.querySelectorAll('[data-state="active"]');
}

function shakeTiles(tiles) {
  tiles.forEach(tile => {
    tile.classList.add("shake")
    tile.addEventListener("animationend", () => {
      tile.classList.remove("shake")
    }, { once: true })
  })
}

function showAlert(message, duration = 1000) {
const alert = document.createElement("div")
alert.textContent = message
alert.classList.add("alert")
alertContainer.prepend(alert)
if (duration == null) return
 
setTimeout(() => {
alert.classList.add("hide")
addEventListener("transitionend", () => {
  alert.remove()
})
}, duration)

}


///added 8/23 @ 7:33pm

var easyEl = document.getElementById("easy");
var mediumEl = document.getElementById("medium");
var hardEl = document.getElementById("hard");
var submitBtnEl = document.getElementById("submit-btn");



document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger, .js-modal-trigger2') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });


  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});


  submitBtnEl.addEventListener("click", function () {
    var randomwordrequesturl = "https://random-word-api.herokuapp.com/word?length=5";
    console.log(randomwordrequesturl);
    fetch(randomwordrequesturl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        function getHintsApi() {
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'df02901123mshf66abc7b8995688p190526jsn4d9ab6e75ba3',
              'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
          };
  
          fetch('https://wordsapiv1.p.rapidapi.com/words/' + data[0] + '/definitions', options)
            .then(function(response) {
              return response.json();
            })
            .then(function(data){
              console.log(data);
              console.log(data.definitions[0].definition);
              document.getElementById("hint").innerHTML = data.definitions[0].definition;
              //document.getElementById("hint2").innerHTML = 
            })
          
          fetch("https://wordsapiv1.p.rapidapi.com/words/" + data[0] + "/synonyms", options)
            .then(function(response){
              return response.json();
            })
            .then(function(data){
              console.log(data);
              console.log(data.synonyms[0]);
              document.getElementById("hint2").innerHTML = data.synonyms[0];
            })
  
        }
        getHintsApi();
       
  
      })
      })


function getDifficulty() {
  var difficulty = document.getElementById("difficulty").value;
  console.log(difficulty);
  if (difficulty === "easy") {
    document.querySelector(".js-modal-trigger").style.display = "block";
    document.querySelector(".js-modal-trigger2").style.display = "block";
  } else if (difficulty === "medium") {
    document.querySelector(".js-modal-trigger").style.display = "block";
    document.querySelector(".js-modal-trigger2").style.display = "none";
  } else if (difficulty === "hard") {
    document.querySelector(".js-modal-trigger").style.display = "none";
    document.querySelector(".js-modal-trigger2").style.display = "none";
  }
}


=======




































//modale for instructions//
document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

