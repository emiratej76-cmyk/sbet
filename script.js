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
