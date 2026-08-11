let walletBalance = parseFloat(localStorage.getItem("sbetWallet")) || 0;
let openBets = JSON.parse(localStorage.getItem("sbetBets")) || [];

function updateWallet() {
    document.getElementById("wallet-balance").innerText = walletBalance.toFixed(2);
}

function deposit() {
    let amount = prompt("Enter amount to deposit:");
    if(amount && amount > 0) {
        walletBalance += parseFloat(amount);
        localStorage.setItem("sbetWallet", walletBalance);
        updateWallet();
        alert("Deposited GHS " + amount);
    }
}

function withdraw() {
    let amount = prompt("How much to withdraw?");
    if(amount && walletBalance >= amount) {
        walletBalance -= parseFloat(amount);
        localStorage.setItem("sbetWallet", walletBalance);
        updateWallet();
        alert("Withdraw GHS " + amount + " Successful!");
    } else {
        alert("Not enough money!");
    }
}

function placeBet(amount) {
    if(walletBalance >= amount) {
        walletBalance -= amount;
        localStorage.setItem("sbetWallet", walletBalance);
        updateWallet();
        alert("Bet Placed! GHS " + amount + " staked");
    } else {
        alert("Not enough money! Deposit first");
    }
}

updateWallet();
