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
    if (e.key === "Enter"){
        submitGuess()
        return
    }
<<<<<<< HEAD
    if (e.key === "Backspace" || e.key === "Delete"){
=======

    if (e.key --- "Backspace" || e.key === "Delete"){
>>>>>>> bd5674b4bde19bd316df2d149e3750a2693791ab
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

});



///added 8/23 @ 7:33pm

var easyEl = document.getElementById('easy');
var mediumEl = document.getElementById('medium');
var hardEl = document.getElementById('hard')
var submitbuttonEl= document.getElementById('submitbutton');
var worddisplayEl=document.getElementById('userdisplay')
var lenght = ' '
if (easyEl==='easy') {
    lenght='5'

}
else if (mediumEl==='medium') {
    lenght='7'
}

else if (hardEl==='hard') {
    lenght='10'
}

else {
    console.log('else if statement does not work')
}

function getApi() {
    var randomwordrequesturl = 'https://random-word-api.herokuapp.com/word'  + lenght 
    console.log(randomwordrequesturl)
    fetch(randomwordrequesturl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
            for (var i = 0; i < data.length; i++) {
               
               
                }
        })
        
        
    
}








submitbuttonEl.addEventListener('click', fetch)

