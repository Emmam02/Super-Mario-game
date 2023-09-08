
let bowserHealth = 300;
let marioHealth = 200;

let marioApp = document.getElementById('headliners');
let bowserImage = 'imgMariofight/bowser - Copy (3).png';
let marioImage = 'imgMariofight/mario - Copy.png';
let marioInterval= setInterval(marioHit, 5000)
let isItMariosTurn = true;

updateView();
function updateView() {
    marioApp.innerHTML = /*HTML*/ `
    <p id="player1">Mario</p>
    <p id="player2">Bowser</p>
    <p id="vs"><img src="imgMariofight/logovs.png" style="height: 100px; width: 100px;"></p>
    <p id="marioHP">HP: ${marioHealth}</p>
    <p></p>
    <p id="bowserHP">HP: ${bowserHealth}</p>
    <p id="marioImage"><img onclick="marioHit()" src="${marioImage}" style="height: 500px; width: 500px;"></p>
    <p></p>
    <p id="bowserImage"> <img onclick="bowserHit()" src="${bowserImage}" style="height: 600px; width: 600px;"> </p>
    `;
}

function marioHit() {

    marioHealth -= Math.floor(Math.random() * 20 );

    if (marioHealth <= 0) {
        alert('You died')
        marioImage='imgMariofight/mariodead.png';
        updateView();
    }
    IsItMarioLuigisTurn = !isItMariosTurn
    updateView();
}

function bowserHit() {

    bowserHealth -= Math.floor(Math.random() * 50 );

    if (bowserHealth <= 0) {
        bowserImage='imgMariofight/bowserdead.png';
        clearInterval(marioInterval);
        alert('You killed bowser');
        

    }
    
    IsItMarisLuigisTurn = !isItMariosTurn
    
    updateView();
    marioHit();
}




