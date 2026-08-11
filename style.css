let wallet = parseFloat(localStorage.getItem('wallet')) || 0;

function updateWallet() {
    document.getElementById('wallet-balance').innerText = `Mo Wallet: GHS ${wallet.toFixed(2)}`;
    localStorage.setItem('wallet', wallet);
}

function deposit() {
    let amount = parseFloat(prompt("Enter deposit amount:"));
    if(amount > 0) { wallet += amount; updateWallet(); }
}

function withdraw() {
    let amount = parseFloat(prompt("Enter withdraw amount:"));
    if(amount > 0 && amount <= wallet) { wallet -= amount; updateWallet(); }
}

function placeBet(amount) {
    if(amount <= wallet) { wallet -= amount; updateWallet(); alert(`Bet of GHS ${amount} placed!`); }
    else { alert("Not enough money!"); }
}

function winBet(stake, odds) {
    let winnings = stake * odds;
    wallet += winnings;
    updateWallet();
    alert(`You won GHS ${winnings.toFixed(2)}!`);
}

updateWallet(); // load wallet on start
