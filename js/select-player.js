const selectedPlayer = [];


// Select Player For list Function 
function displayPlayerName(selectedPlayerList) {

    const playerListItem = document.getElementById('selected-player-list');
    playerListItem.innerHTML = ('');


    for (let i = 0; i < selectedPlayerList.length; i++) {
        const playerSelected = selectedPlayer[i];

        const li = document.createElement("li");
        li.innerHTML = `<li class= "selected-player">${i + 1}. ${playerSelected}</li>`;

        playerListItem.appendChild(li);
    }
    if (selectedPlayerList.length > 4) {
        alert('You can not add more than five Player!!!');
        var elems = document.getElementsByClassName("btn-player");
        for (var i = 0; i < elems.length; i++) {
            elems[i].disabled = true;
        }
    }
}

function selectPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;

    element.disabled = true;

    selectedPlayer.push(playerName);

    displayPlayerName(selectedPlayer);
}