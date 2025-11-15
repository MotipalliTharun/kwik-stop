'use client'

import HexagonStopSign from './HexagonStopSign'

export default function GasPrices() {
  const prices = {
    regular: 3.29,
    midGrade: 3.49,
    premium: 3.69,
    diesel: 3.89
  }

  return (
    <div className="gas-prices-card">
      <div className="gas-prices-header">
        <HexagonStopSign size="small" />
        <h3>Current Gas Prices</h3>
      </div>
      <div className="gas-prices-grid">
        <div className="gas-price-item">
          <span className="gas-type">Regular</span>
          <span className="gas-price">${prices.regular.toFixed(2)}</span>
        </div>
        <div className="gas-price-item">
          <span className="gas-type">Mid-Grade</span>
          <span className="gas-price">${prices.midGrade.toFixed(2)}</span>
        </div>
        <div className="gas-price-item">
          <span className="gas-type">Premium</span>
          <span className="gas-price">${prices.premium.toFixed(2)}</span>
        </div>
        <div className="gas-price-item">
          <span className="gas-type">Diesel</span>
          <span className="gas-price">${prices.diesel.toFixed(2)}</span>
        </div>
      </div>
      <p className="gas-prices-disclaimer">*Prices subject to change without notice</p>
    </div>
  )
}

