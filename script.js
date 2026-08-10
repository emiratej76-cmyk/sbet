let wallet = 5000;

function showDeposit() {
    document.getElementById('depositBox').style.display = 'block';
    document.getElementById('walletBalance').innerText = `Mo Wallet: GHS ${wallet.toFixed(2)}`;
}

function deposit() {
    let amount = parseFloat(document.getElementById('depositAmount').value);
    if(amount > 0 && amount <= wallet) {
        wallet = wallet - amount;
        alert(`Deposited GHS ${amount}. New Mo Wallet Balance: GHS ${wallet.toFixed(2)}`);
        document.getElementById('walletBalance').innerText = `Mo Wallet: GHS ${wallet.toFixed(2)}`;
    } else {
        alert('Not enough money in Mo Wallet');
    }
}
