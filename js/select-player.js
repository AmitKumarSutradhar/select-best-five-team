const selectedPlayer = [];

function displayPlayerName(selectedPlayerList) {
    
    // console.log(selectedPlayerList.length);

    const playerListItem = document.getElementById('selected-player-list');
    playerListItem.innerHTML = ('');

    for (let i = 0; i < selectedPlayerList.length; i++) {
        // console.log(selectedPlayer[i]);
        const playerSelected = selectedPlayer[i];

        const li = document.createElement("li");
        li.innerHTML = `<li>${i + 1}. ${playerSelected}</li>`;

        playerListItem.appendChild(li);
    }
}

function selectPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    

    selectedPlayer.push(playerName);

    displayPlayerName(selectedPlayer);

    if (selectedPlayerList.length < 5) {
        element.disabled = true;
    }
    return selectPlayer;
}