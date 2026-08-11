<script>
let walletBalance = parseFloat(localStorage.getItem("sbetCoins")) || 10000;
let predictions = JSON.parse(localStorage.getItem("sbetPreds")) || [];
let points = parseInt(localStorage.getItem("sbetPoints")) || 0;

function updateWallet(){document.getElementById("wallet-balance").innerText = walletBalance.toLocaleString();}

function placePrediction(game, odds){
  walletBalance -= 100; 
  points += 10;
  predictions.push({game, odds, stake:100}); 
  localStorage.setItem("sbetCoins",walletBalance); 
  localStorage.setItem("sbetPreds",JSON.stringify(predictions));
  localStorage.setItem("sbetPoints",points);
  alert("Prediction Placed! -100 Coins\n+10 Points"); 
  updateWallet();
}

function showPredict(){
  document.getElementById("main-content").innerHTML = `
  <h2 style="padding:10px;">Today's Predictions</h2>
  
  <div class="match-card">
      <p style="font-size:12px; color:#666;">Premier League</p>
      <div style="display:flex; justify-content:space-between;"><div>🏴 Arsenal</div><div><b>19:00</b></div><div>🇧🇪 Man City</div></div>
      <div class="odds-row">
          <button class="odd-btn" onclick="placePrediction('Arsenal Win', 2.10)">1<br><span>2.10</span></button>
          <button class="odd-btn" onclick="placePrediction('Draw', 3.40)">X<br><span>3.40</span></button>
          <button class="odd-btn" onclick="placePrediction('Man City Win', 2.80)">2<br><span>2.80</span></button>
      </div>
  </div>

  <div class="match-card">
      <p style="font-size:12px; color:#666;">La Liga</p>
      <div style="display:flex; justify-content:space-between;"><div>🇪🇸 Real Madrid</div><div><b>21:00</b></div><div>🇪🇸 Barcelona</div></div>
      <div class="odds-row">
          <button class="odd-btn" onclick="placePrediction('Real Win', 2.30)">1<br><span>2.30</span></button>
          <button class="odd-btn" onclick="placePrediction('Draw', 3.20)">X<br><span>3.20</span></button>
          <button class="odd-btn" onclick="placePrediction('Barca Win', 2.90)">2<br><span>2.90</span></button>
      </div>
  </div>

  <div class="match-card">
      <p style="font-size:12px; color:#666;">Serie A</p>
      <div style="display:flex; justify-content:space-between;"><div>🇮🇹 Juventus</div><div><b>20:45</b></div><div>🇮🇹 AC Milan</div></div>
      <div class="odds-row">
          <button class="odd-btn" onclick="placePrediction('Juve Win', 2.00)">1<br><span>2.00</span></button>
          <button class="odd-btn" onclick="placePrediction('Draw', 3.30)">X<br><span>3.30</span></button>
          <button class="odd-btn" onclick="placePrediction('Milan Win', 3.10)">2<br><span>3.10</span></button>
      </div>
  </div>

  <div class="match-card">
      <p style="font-size:12px; color:#666;">Bundesliga</p>
      <div style="display:flex; justify-content:space-between;"><div>🇩🇪 Bayern</div><div><b>18:30</b></div><div>🇩🇪 Dortmund</div></div>
      <div class="odds-row">
          <button class="odd-btn" onclick="placePrediction('Bayern Win', 1.70)">1<br><span>1.70</span></button>
          <button class="odd-btn" onclick="placePrediction('Draw', 3.80)">X<br><span>3.80</span></button>
          <button class="odd-btn" onclick="placePrediction('Dortmund Win', 4.20)">2<br><span>4.20</span></button>
      </div>
  </div>

  <div class="match-card">
      <p style="font-size:12px; color:#666;">Ghana Premier League</p>
      <div style="display:flex; justify-content:space-between;"><div>🇬🇭 Hearts</div><div><b>15:00</b></div><div>🇬🇭 Kotoko</div></div>
      <div class="odds-row">
          <button class="odd-btn" onclick="placePrediction('Hearts Win', 2.20)">1<br><span>2.20</span></button>
          <button class="odd-btn" onclick="placePrediction('Draw', 2.80)">X<br><span>2.80</span></button>
          <button class="odd-btn" onclick="placePrediction('Kotoko Win', 2.70)">2<br><span>2.70</span></button>
      </div>
  </div>
  `;
}

function showLeaderboard(){
  document.getElementById("main-content").innerHTML = `
  <h2 style="padding:10px;">🏆 Weekly Leaderboard</h2>
  <div class="leader-row rank1"><span>1. You</span><span>${points} pts</span></div>
  <div class="leader-row rank2"><span>2. Kwame</span><span>240 pts</span></div>
  <div class="leader-row rank3"><span>3. Ama</span><span>180 pts</span></div>
  <div class="leader-row"><span>4. Kofi</span><span>150 pts</span></div>
  <div class="leader-row"><span>5. Aisha</span><span>120 pts</span></div>
  <p style="text-align:center; padding:10px; color:#666;">Make predictions to climb! Resets every Sunday</p>`;
}

showPredict();
updateWallet();
</script>
