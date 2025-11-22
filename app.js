console.log("Loyalty Points Simulator is loading...");

// Simple FX table (just examples for now)
const fxRates = {
  US: 1,      // USD base
  EU: 1.1,    // EUR → USD example rate
  UK: 1.25,   // GBP → USD
  JP: 0.007   // JPY → USD
};

// Formatting helpers
function formatNumber(value) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2);
}

function formatPercent(value) {
  return `${formatNumber(value)}%`;
}

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

// Tier multipliers (applied on top of earn rate)
const tierMultipliers = {
  Silver: 1.0,
  Gold: 1.25,
  Platinum: 1.5
};

// Assumed point value in USD
const POINT_VALUE_USD = 0.01;

document.getElementById("calculateBtn").addEventListener("click", () => {
  const region = document.getElementById("region").value;
  const tier = document.getElementById("tier").value;
  const amount = Number(document.getElementById("amount").value);
  const rate = Number(document.getElementById("rate").value);

  if (!amount) {
    document.getElementById("result").innerText = "Enter a valid amount.";
    return;
  }

  // FX conversion
  const fx = fxRates[region];
  const convertedAmount = amount * fx;

  // Apply tier multiplier to earn rate
  const tierMultiplier = tierMultipliers[tier] || 1;
  const effectiveRate = rate * tierMultiplier;

  // Calculate points using converted amount + effective earn rate
  const points = convertedAmount * (effectiveRate / 100);

  // Redemption value based on point value
  const redemptionValue = points * POINT_VALUE_USD;

  document.getElementById("result").innerText =
    `Region: ${region} (FX: ${fx})\n` +
    `Tier: ${tier} (Multiplier: ${tierMultiplier}x)\n` +
    `Effective Earn Rate: ${formatPercent(effectiveRate)}\n` +
    `Converted Amount (USD): ${formatCurrency(convertedAmount)}\n` +
    `Points Earned: ${formatNumber(points)}\n` +
    `Estimated Redemption Value (USD): ${formatCurrency(redemptionValue)}`;
});
