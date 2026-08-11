function showBets() {
    let html = "<h2 style='padding:10px;'>My Open Bets</h2>";
    
    if(openBets.length == 0) {
        html += "<p style='padding:20px; text-align:center;'>No open bets yet. Place a bet first!</p>";
    } else {
        openBets.forEach((bet, index) => {
            html += `
            <div class="bet-card">
                <p><b>${bet.game}</b></p>
                <p>Stake: GHS ${bet.stake}</p>
                <p>Potential Win: GHS ${bet.win}</p>
                <button onclick="cashout(${index})" style="width:100%; background:#00a651; color:white; border:none; padding:10px; border-radius:5px;">Cashout GHS ${bet.cashout}</button>
            </div>
            `;
        });
    }
    document.getElementById("main-content").innerHTML = html;
    updateWallet();
}

function showHome() {
    location.reload(); // easiest way to go back
}

// Also update placeBet to take game name
function placeBet(amount, gameName) {
    if(walletBalance >= amount) {
        walletBalance -= amount;
        let newBet = {
            game: gameName,
            stake: amount,
            win: (amount * 1.90).toFixed(2),
            cashout: (amount * 0.8).toFixed(2)
        };
        openBets.push(newBet);
        localStorage.setItem("sbetBets", JSON.stringify(openBets));
        localStorage.setItem("sbetWallet", walletBalance);
        updateWallet();
        alert("Bet Placed! GHS " + amount + " staked on " + gameName);
    } else {
        alert("Not enough money! Deposit first");
    }
}
