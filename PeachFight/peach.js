let peachApp = document.getElementById('headliners');
let peachHP = 100;
let bowserHP = 300;
let peachImage = 'imgPeachFight/peach - Copy.png';
let bowserImage = 'imgPeachFight/bowser - Copy (4).png';
let peachInterval = setInterval(peachHit, 5000);
let isItPeachsTurn = true;


updateView();
function updateView() {
    peachApp.innerHTML = /*HTML*/ `
    <p id="player1">Peach</p>
        <p id="vs"><img src="imgPeachFight/logovs.png" style="height: 100px; width: 100px;"></p>
        <p id="player2">Bowser</p>
        <p id="peachHP">HP: ${peachHP}</p>
        <p></p>
        <p id="bowserHP">HP: ${bowserHP}</p>
        <p id="peachImage"><img onclick="peachHit()" src="${peachImage}" style="height: 400px; width: 300px;"></p>
        <p></p>
        <p id="bowserImage"> <img onclick="bowserHit()" src="${bowserImage}" style="height: 600px; width: 600px;"> </p>
    `;
}

function peachHit() {
    peachHP -= Math.floor(Math.random() * 20);
    if (peachHP <= 0) {
        peachImage = 'imgPeachFight/peachdead.png';
        clearInterval(peachInterval);
        alert('you died');
        updateView();
    }
    isItPeachsTurn= !isItPeachsTurn;
    updateView();

}

function bowserHit() {
    bowserHP -= Math.floor(Math.random() * 50);

    if (bowserHP <= 0) {
        bowserImage = 'imgPeachFight/bowserdead.png';
        alert('you killed bowser')
        updateView();
    }

    isItPeachsTurn= !isItPeachsTurn;
    updateView();
    peachHit();
}


