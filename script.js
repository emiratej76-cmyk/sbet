let wallet = 0; // start at 0

function updateWallet() {
    document.getElementById('wallet-balance').innerText = `Mo Wallet: GHS ${wallet.toFixed(2)}`;
}

function deposit() {
    let amount = parseFloat(prompt("Enter deposit amount:"));
    if(amount > 0) {
        wallet = wallet + amount;
        alert(`Deposited GHS ${amount}. New Balance: ${wallet}`);
        updateWallet();
    }
}

function placeBet(stake) {
    if(stake <= wallet) {
        wallet = wallet - stake;
        alert(`Bet placed: GHS ${stake}`);
        updateWallet();
    } else {
        alert("Not enough money!");
    }
}

function winBet(stake, odds) {
    let winnings = stake * odds;
    wallet = wallet + winnings;
    alert(`You Won! GHS ${winnings}`);
    updateWallet();
}

function withdraw() {
    let amount = parseFloat(prompt("Enter withdraw amount:"));
    if(amount <= wallet) {
        wallet = wallet - amount;
        alert(`Withdraw request: GHS ${amount}. Send MoMo to user.`);
        updateWallet();
    } else {
        alert("Not enough balance!");
    }
}

// Load wallet on start
window.onload = updateWallet;
