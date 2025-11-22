console.log("Loyalty Points Simulator is loading...");

document.getElementById("calculateBtn").addEventListener("click", () => {
  const amount = Number(document.getElementById("amount").value);
  const rate = Number(document.getElementById("rate").value);

  if (!amount) {
    document.getElementById("result").innerText = "Enter a valid amount.";
    return;
  }

  const points = amount * (rate / 100);

  document.getElementById("result").innerText = `Points Earned: ${points}`;
});
