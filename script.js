document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    
    const keys = document.querySelectorAll(".keyboard-row button");

    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({target}) => {
            const key = target.getAttribute(".data-key");
            console.log(key);
        }
    }
    
    function createSquares() {
        const gameBoard = document.getElementById("board");
        
        for (let index = 0; index < 30; index++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", index + 1);
            gameBoard.appendChild(square);
        }
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

