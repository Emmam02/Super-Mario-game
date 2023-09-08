let luigiApp = document.getElementById('headliners');
let luigiHP = 140;
let bowserHP = 300;
let luigiImage = 'imgLuigiFight/luigi - Copy.png';
let bowserImage = 'imgLuigiFight/bowser - Copy (2).png';
/* let luigiInterval = setInterval(luigiHit, 3000); */
let IsItLuigisTurn = true;



updateview();
function updateview() {
    luigiApp.innerHTML = /*HTML*/`
<p id="player1">Luigi</p>
<p id="player2">Bowser</p>
<p id="vs"><img src="imgLuigiFight/logovs.png" style="height: 100px; width: 100px;"></p>
<p id="luigiHP">HP: ${luigiHP}</p>
<p></p>
<p id="bowserHP">HP: ${bowserHP}</p>
<p id="luigiImage"><img src="${luigiImage}" style="height: 400px; width: 300px;"></p>
<p></p>
<p id="bowserImage"> <img onclick="bowserHit()" src="${bowserImage}" style="height: 600px; width: 600px;"> </p>
`;

//     if (IsItLuigisTurn) {
//         document.getElementById('luigiImage').style.pointerEvents = 'none';
//         document.getElementById('bowserImage').style.pointerEvents = 'auto';
//     } else {
//         document.getElementById('luigiImage').style.pointerEvents = 'auto';
//         document.getElementById('bowserImage').style.pointerEvents = 'none';   
// }

}

//
function luigiHit() {

    luigiHP -= Math.floor(Math.random() * 20 );

    if (luigiHP <= 0) {
        luigiImage = 'imgLuigiFight/luigidead.png'
        // clearInterval(luigiInterval);
        alert('you died');
    }

    IsItLuigisTurn = !IsItLuigisTurn;
    updateview();

    
}

function bowserHit() {

    bowserHP -= Math.floor(Math.random() * 50 );

    if (bowserHP <= 0) {
        bowserImage = 'imgLuigiFight/bowserdead.png'
        alert('You killed bowser');
    }
    IsItLuigisTurn = !IsItLuigisTurn;
    
    updateview();
    luigiHit();
}

