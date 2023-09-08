let yoshiApp = document.getElementById('headliners');
let yoshiHP = 80;
let bowserHP = 300;
let yoshiImage = 'imgYoshiFight/yoshi - Copy.png';
let bowserImage = 'imgYoshiFight/bowser - Copy.png';
let isItYoshisTurn = true;


updateView();
function updateView() {
    yoshiApp.innerHTML = /*HTML*/`
    <p id="player1">Yoshi</p>
        <p id="vs"><img src="imgYoshiFight/logovs.png" style="height: 100px; width: 100px;"></p>
        <p id="player2">Bowser</p>

        <p id="yoshiHP">HP: ${yoshiHP}</p>
        <p id="bowserHP">HP: ${bowserHP}</p>
        
        <p id="yoshiImage"><img onclick="yoshiHit()" src="${yoshiImage}" style="height: 400px; width: 300px;"></p>
        <p id="bowserImage"> <img onclick="bowserHit()" src="${bowserImage}" style="height: 600px; width: 600px;"> </p>
        `;
}

function yoshiHit() {
    yoshiHP -= Math.floor(Math.random() *10);

    if (yoshiHP <= 0) {
        yoshiImage = 'imgYoshiFight/yoshidead.png'
        alert('you died')
        updateView();
    } 

    isItYoshisTurn = !isItYoshisTurn;
    updateView();
}

function bowserHit() {
    bowserHP -= Math.floor(Math.random() *50);

    if (bowserHP <= 0) {
        bowserImage = 'imgYoshiFight/bowserdead.png'
        alert('you killed bowser')
        updateView();
    } 
    isItYoshisTurn = !isItYoshisTurn;
    updateView();
    yoshiHit();
}


