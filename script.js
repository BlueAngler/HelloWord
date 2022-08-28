/*

*/

const WORD_LENGTH = 5;
const alertContainer = document.querySelector("[data-alert-container]");
const guessGrid = document.querySelector("[data-guess-grid]");
const offsetFromDate = new Date(2022, 8, 28)
const targetWord = ""

startInteraction();

function startInteraction() {
  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleKeyPress);
}

function stopInteraction() {
  document.removeEventListener("click", handleMouseClick);
  document.removeEventListener("keydown", handleKeyPress);
}

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
var submitbuttonEl = document.getElementById("submit-btn");
//var worddisplayEl=document.getElementById('userdisplay')

// let length;

// let difficulty = "easy";

// function getApi() {
//     //console.log(difficulty)
//     if (difficulty === "easy") {
//         length = "5";
//     } else if (difficulty = "medium") {
//         length = "7";
//     } else if (difficulty = "hard") {
//         length = "9";
//     }
//     var randomwordrequesturl = "https://random-word-api.herokuapp.com/word?length=" + length; 
//     console.log(randomwordrequesturl)
//     fetch(randomwordrequesturl)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
            
//         })   
// }
// getApi();

// submitbuttonEl.addEventListener('click', getApi)


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
            })
  
        }
        getHintsApi();
        console.log(data.definitions.str[0].definition);
  
      })
      })