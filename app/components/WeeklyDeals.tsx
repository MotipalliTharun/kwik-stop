'use client'

import HexagonStopSign from './HexagonStopSign'

export default function WeeklyDeals() {
  const deals = [
    { title: 'Lotto Tickets', price: 'Florida Lottery', originalPrice: 'Scratch-offs & Draws', icon: '🎫' },
    { title: 'Beer', price: '12 Pack & 6 Pack', originalPrice: 'Great Deals', icon: '🍺' },
    { title: 'Wine', price: 'Special Offers', originalPrice: 'Various Brands', icon: '🍷' },
    { title: 'Cigarettes', price: 'All Major Brands', originalPrice: 'Competitive Prices', icon: '🚬' }
  ]

  return (
    <div className="weekly-deals-section">
      <div className="section-header-with-logo">
        <HexagonStopSign size="small" />
        <h2>Weekly Specials</h2>
      </div>
      <div className="deals-grid">
        {deals.map((deal, index) => (
          <div key={index} className="deal-card">
            <div className="deal-icon">{deal.icon}</div>
            <div className="deal-content">
              <h4>{deal.title}</h4>
              <div className="deal-pricing">
                <span className="deal-price">{deal.price}</span>
                <span className="deal-original">{deal.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

