let betslipGames = [];

function addToBetslip(team, odds) {
    betslipGames.push({team, odds});
    document.getElementById('betslip').style.display = 'block';
    document.getElementById('betslip-games').innerHTML = 
        betslipGames.map(g => `<div>❌ ${g.team} @ ${g.odds}</div>`).join('');
}

function closeBetslip() {
    document.getElementById('betslip').style.display = 'none';
}

function setStake(amount) {
    document.getElementById('betslip-stake').value = amount;
}

function placeBetFromSlip() {
    let stake = parseFloat(document.getElementById('betslip-stake').value);
    if(stake > 0 && stake <= wallet) {
        wallet -= stake;
        betslipGames.forEach(g => openBets.push({team: g.team, stake, odds: g.odds}));
        betslipGames = [];
        closeBetslip();
        updateUI();
        alert("Bet Placed!");
    } else { alert("Check stake amount"); }
}
