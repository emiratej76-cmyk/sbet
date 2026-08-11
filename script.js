let wallet = parseFloat(localStorage.getItem('wallet')) || 0;
let openBets = JSON.parse(localStorage.getItem('openBets')) || [];

function updateUI() {
    document.getElementById('wallet-balance').innerText = wallet.toFixed(2);
    document.querySelector('.tab').innerText = `Open Bets (${openBets.length})`;
    renderBets();
    localStorage.setItem('wallet', wallet);
    localStorage.setItem('openBets', JSON.stringify(openBets));
}

function deposit() {
    let amount = parseFloat(prompt("Enter deposit amount:"));
    if(amount > 0) { wallet += amount; updateUI(); }
}

function placeBet(team, odds, stake) {
    if(stake <= wallet) {
        wallet -= stake;
        let cashout = (stake * odds * 0.9).toFixed(2); // 90% cashout
        openBets.push({team, stake, odds, cashout});
        alert(`Bet placed on ${team}!`);
        updateUI();
    } else { alert("Not enough money!"); }
}

function renderBets() {
    let html = '';
    openBets.forEach((bet, i) => {
        html += `
        <div class="bet-card">
            <div class="bet-header"><b>Single</b> <span class="rebet">↻ Rebet</span></div>
            <div class="bet-body">
                <div>
                    <p><b>${bet.team}</b></p>
                    <p class="stake">Stake <b>GHS ${bet.stake.toFixed(2)}</b></p>
                </div>
                <button class="cashout" onclick="cashout(${i})">Cashout<br>GHS ${bet.cashout}</button>
            </div>
        </div>`;
    });
    document.querySelector('.bet-card').outerHTML = html || '<p style="text-align:center;padding:20px;">No open bets</p>';
}

function cashout(i) {
    wallet += parseFloat(openBets[i].cashout);
    openBets.splice(i, 1);
    alert("Cashout successful!");
    updateUI();
}

updateUI();
