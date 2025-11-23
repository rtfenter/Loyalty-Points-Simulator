# Loyalty Points Simulator 
[![Live Demo](https://img.shields.io/badge/Live%20Demo-000?style=for-the-badge)](https://rtfenter.github.io/Loyalty-Points-Simulator/)

### A tiny tool to model points earning, FX conversion, and redemption value across regions.

This project is part of my **Loyalty Systems Series**, exploring how loyalty systems behave beneath the UI layer — from event flow to FX reconciliation to partner tiering.

The goal of this simulator is to provide a simple, interactive way to understand how different variables affect the value of a point:

- Region  
- FX rate  
- Partner tier  
- Earn percentage  
- Redemption value  

The simulation is intentionally small and easy to extend.

---

## Features (MVP)
The first version includes:

- Input fields for region, amount, and tier  
- Basic points calculation (earn rate × amount)  
- FX adjustment for multi-currency setups  
- Display of redemption value  
- Simple event flow: `Earn → Convert → Redeem`

## Demo Screenshot
Here’s a quick look at the Loyalty Points Simulator in action:
<img width="837" height="734" alt="Screenshot 2025-11-22 at 2 43 39 PM" src="https://github.com/user-attachments/assets/d922025d-5151-4633-b4d3-ac341ee9a01b" />


---

## Points Event Flow Diagram

```
[Purchase Amount + Region + Tier]
                |
                v
        FX Conversion Layer
      (normalize to USD value)
                |
                v
        Tier & Earn-Rate Engine
     (apply % earn + multipliers)
                |
                v
          Points Calculation
    (points = normalized_amount * rate)
                |
                v
     Redemption Value Estimation
 (points * point_value_in_usd = liability)
```

---

## Purpose

Loyalty programs appear simple, but real systems require:

- Clear event definitions  
- FX and currency reconciliation  
- Tiered and partner-specific rules  
- Separation of earn vs. redeem logic  
- Stable truth across markets and ledgers  

This simulator provides a small, understandable way to visualize these concepts without enterprise-level complexity.

---

## How This Maps to Real Loyalty Systems

Even though it's minimal, each step corresponds to real architecture:

### Region + FX Rate  
Real systems normalize spend into a base currency for accounting and liability modeling. FX is a critical preprocessing step.

### Tier (Silver / Gold / Platinum)  
Tiers act as rule layers that modify earn behavior. Production engines include partner rules, category rules, campaign boosts, and status multipliers.

### Earn Rate (%)  
Represents the value exchange contract: how much spend → how many points. Real earn rules vary by partner, product, SKU, or agreement.

### Points Earned  
Would normally be written to a dedicated points ledger with ACID guarantees, reconciliation processes, and downstream integrations.

### Redemption Value (USD)  
This models program liability. Every point earned is a future financial obligation. Real loyalty systems track breakage, margin, and redemption mix.

This tool is a legible micro-version of how reward systems work under the hood.

---

## Part of the Loyalty Systems Series

Main repo:  
https://github.com/rtfenter/loyalty-series

---

## Status  
MVP implemented and active.  
This simulator is intentionally lightweight. It focuses only on the core mechanics required to demonstrate loyalty system behavior, not on building a full production engine.

---

## Local Use
No installation required.  
If you'd like to run the simulator locally:

1. Clone the repo  
2. Open `index.html` in your browser  

That's it — everything runs client-side.


