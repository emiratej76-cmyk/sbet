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
