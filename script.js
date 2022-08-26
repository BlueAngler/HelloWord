const WORD_LENGTH = 5
const guessGrid = document.querySelector("[data-guess-grid]")
const targetWord = ""


startInteraction()

function startInteraction() {
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("keydown", handleKeyPress)
}

function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
}

function handleMouseClick(e) {
    if (e.target.matches("[data-key]")) {
        pressKey(e.target.dataset.key)
        return
    }
    
    if (e.target.matches("[data-enter]")) {
        submitGuess()
        return
     }

     if (e.target.matches("[data-delete]")) {
        deleteKey()
        return
    }
}

function handleKeyPress(e){
    console.log(e)
    if (e.key --- "Enter"){
        submitGuess()
        return
    }

    if (e.key === "Backspace" || e.key === "Delete"){
        deleteKey()
        return
    }

    if (e.key.match(/^[a-z]$/)) {
        pressKey(e.key)
        return
    }
}

function pressKey(key) {
    const activeTiles = getActiveTiles()
    if (activeTiles.length >= WORD_LENGTH) return
    const nextTile = guessGrid.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.textContent = key
    nextTile.dataset.state = "active"
}

function deleteKey() {
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles [activeTiles.length - 1]
    if (lastTile == null) return
    lastTile.textContent = ""
    delete lastTile.dataset.state
    delete lastTile.dataset.letter
}

function submitGuess() {

}

function getActiveTiles() {
    return guessGrid.querySelectorAll('[data-state="active"]')
}





///added 8/23 @ 7:33pm

var easyEl = document.getElementById('easy');
var mediumEl = document.getElementById('medium');
var hardEl = document.getElementById('hard')
var submitbuttonEl= document.getElementById('submit-btn');
//var worddisplayEl=document.getElementById('userdisplay')






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
