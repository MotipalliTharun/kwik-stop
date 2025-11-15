'use client'

export default function PaymentMethods() {
  const methods = [
    { name: 'Cash', icon: '💵' },
    { name: 'Credit Cards', icon: '💳' },
    { name: 'Debit Cards', icon: '🔲' },
    { name: 'Mobile Pay', icon: '📱' }
  ]

  return (
    <div className="payment-methods-card">
      <h3>Payment Methods Accepted</h3>
      <div className="payment-grid">
        {methods.map((method, index) => (
          <div key={index} className="payment-item">
            <span className="payment-icon">{method.icon}</span>
            <span className="payment-name">{method.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

