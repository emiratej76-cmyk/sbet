function cashout(index) {
    let bet = openBets[index];
    walletBalance += parseFloat(bet.cashout);
    openBets.splice(index, 1);
    
    localStorage.setItem("sbetBets", JSON.stringify(openBets));
    localStorage.setItem("sbetWallet", walletBalance);
    
    // 1. CONFETTI EFFECT
    for(let i=0; i<30; i++){
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background = ["#00a651", "#ffd700", "#e00000"][Math.floor(Math.random()*3)];
        confetti.style.animationDelay = Math.random() * 0.5 + "s";
        document.body.appendChild(confetti);
        setTimeout(()=>confetti.remove(), 2000);
    }
    
    // 2. POP ANIMATION ON WALLET
    document.getElementById("wallet-balance").parentElement.classList.add("cashout-success");
    setTimeout(()=>document.getElementById("wallet-balance").parentElement.classList.remove("cashout-success"), 300);
    
    // 3. SUCCESS ALERT
    alert("CASHOUT SUCCESSFUL! +GHS " + bet.cashout);
    
    updateWallet();
    showBets(); // refresh bets page
}
