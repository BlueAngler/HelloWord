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
    if (e.key --- "Backspace" || e.key === "Delete"){
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










































// document.addEventListener("DOMContentLoaded", () => {
//     createSquares();
    


   
    
   
   
   
   
   
   
   
//     function createSquares() {
//         const gameBoard = document.getElementById("board");
        
//         for (let index = 0; index < 30; index++) {
//             let square = document.createElement("div");
//             square.classList.add("square");
//             square.setAttribute("id", index + 1);
//             gameBoard.appendChild(square);
//         }
//     }
// });

// document.addEventListener("keyup", (e) => {
//     if (ganeover) return;
    
//     if ("KeyA" <= e.code && e.code <= "KeyZ") {
//         if (col < width) {
//             let currTitle = document.getElementById(row.toString() + '-' + col.toString());
//             if (currTitle.innerText == "") {
//                 currTitle,innerText = e.code[3];
//                 col += 1;
//             }
//         }
//     }
// })

// const keys = document.querySelectorAll(".keyboard-row button");

    // for (let i = 0; i < keys.length; i++) {
    //     keys[i].onclick = ({target}) => {
    //         var key = target.getAttribute(".data-key");
    //         console.log(key)
        // }



        const lettersPatern = /[a-z]/;
    // let currentGuessCount = 1;
    // let currentGuess = document.querySelector('#keyboard-container' + currentGuessCount);
    // // let currentLetters = currentGuess.dataset.letters;
    
    
    
    // // detect keypress (letter, backspace, other)
    // document.addEventListener('keydown', (e) => {
    //     console.log('keypress: ' + e.key);
        
    //     let keypress = e.key;
    //     if (keypress.length == 1 && lettersPatern.test(e.key)) {
    //         console.log('is letter');
    //         updateLetters(keypress);
            
    //     }




    // });

    // const updateLetters = (letter) => {
    //     console.log('currentGuessCount = ' + currentGuessCount, 'currentLetters = ' + currentLetters);
    //     currentLetters = currentLetters + letter;
    //     console.log('updated currentLetters = ' + currentLetters)
    // };