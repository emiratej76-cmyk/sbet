function showBets() {
    let mainContent = `
    <div class="header">
        <h1>SBET</h1>
        <div class="wallet-top">GHS <span id="wallet-balance">${walletBalance.toFixed(2)}</span></div>
    </div>
    <h2 style='padding:10px;'>My Open Bets</h2>
    `;
    
    if(openBets.length == 0) {
        mainContent += "<p style='padding:20px; text-align:center;'>No open bets yet. Place a bet first!</p>";
    } else {
        openBets.forEach((bet, index) => {
            mainContent += `
            <div class="bet-card">
                <p><b>${bet.game}</b></p>
                <p>Stake: GHS ${bet.stake}</p>
                <p>Potential Win: GHS ${bet.win}</p>
                <button onclick="cashout(${index})" style="width:100%; background:#00a651; color:white; border:none; padding:10px; border-radius:5px;">Cashout GHS ${bet.cashout}</button>
            </div>
            `;
        });
    }

    mainContent += `
    <div class="bottom-menu">
        <div onclick="location.reload()">⚽<br>Sports</div>
        <div onclick="alert('Menu')">≡<br>Menu</div>
        <div onclick="alert('Games')">🎮<br>Games</div>
        <div onclick="showBets()">💰<br>Bets</div>
        <div onclick="alert('Me')">👤<br>Me</div>
    </div>
    `;

    document.body.innerHTML = mainContent;
}
