// Select Player for Player List
function selectedPlayerList(playerNameId, selectedPlayerId) {
    const playerNameNumber = document.getElementById(playerNameId);
    const playerNameValue = playerNameNumber.innerText;

    const selectedPlayerName = document.getElementById(selectedPlayerId);
    const selectedPlayerNameValue = selectedPlayerName.innerText;

    selectedPlayerName.innerText = playerNameValue;
}