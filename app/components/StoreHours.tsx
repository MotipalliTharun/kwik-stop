'use client'

import HexagonStopSign from './HexagonStopSign'

export default function StoreHours() {
  const hours = [
    { day: 'Monday', time: '8:00 AM - 9:00 PM' },
    { day: 'Tuesday', time: '8:00 AM - 9:00 PM' },
    { day: 'Wednesday', time: '8:00 AM - 9:00 PM' },
    { day: 'Thursday', time: '8:00 AM - 9:00 PM' },
    { day: 'Friday', time: '8:00 AM - 9:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 8:00 PM' }
  ]

  const now = new Date()
  const currentDay = hours[now.getDay() === 0 ? 6 : now.getDay() - 1]
  
  // Check if currently open based on current day and time
  const currentHour = now.getHours()
  const currentMinutes = now.getMinutes()
  const currentTime = currentHour * 60 + currentMinutes
  
  let isOpen = false
  if (currentDay.day === 'Sunday') {
    const [openTime, closeTime] = currentDay.time.split(' - ')
    const openParts = openTime.match(/(\d+):(\d+)\s*(AM|PM)/)
    const closeParts = closeTime.match(/(\d+):(\d+)\s*(AM|PM)/)
    
    if (openParts && closeParts) {
      let openMin = parseInt(openParts[1]) * 60 + parseInt(openParts[2])
      let closeMin = parseInt(closeParts[1]) * 60 + parseInt(closeParts[2])
      
      if (openParts[3] === 'PM' && openParts[1] !== '12') openMin += 12 * 60
      if (closeParts[3] === 'PM' && closeParts[1] !== '12') closeMin += 12 * 60
      if (openParts[3] === 'AM' && openParts[1] === '12') openMin -= 12 * 60
      if (closeParts[3] === 'AM' && closeParts[1] === '12') closeMin -= 12 * 60
      
      isOpen = currentTime >= openMin && currentTime < closeMin
    }
  } else {
    // For Mon-Sat, closes at 9 PM
    const [openTime] = currentDay.time.split(' - ')
    const openParts = openTime.match(/(\d+):(\d+)\s*(AM|PM)/)
    
    if (openParts) {
      let openMin = parseInt(openParts[1]) * 60 + parseInt(openParts[2])
      if (openParts[3] === 'PM' && openParts[1] !== '12') openMin += 12 * 60
      if (openParts[3] === 'AM' && openParts[1] === '12') openMin -= 12 * 60
      
      const closeMin = 21 * 60 // 9:00 PM = 21:00
      isOpen = currentTime >= openMin && currentTime < closeMin
    }
  }

  return (
    <div className="store-hours-card">
      <div className="store-hours-header">
        <HexagonStopSign size="small" />
        <div>
          <h3>Store Hours</h3>
          <div className={`open-status ${isOpen ? 'open' : 'closed'}`}>
            {isOpen ? '🟢 OPEN NOW' : '🔴 CLOSED'}
          </div>
        </div>
      </div>
      <div className="hours-list">
        {hours.map((hour, index) => (
          <div key={index} className={`hour-item ${hour.day === currentDay.day ? 'current-day' : ''}`}>
            <span className="day">{hour.day}</span>
            <span className="time">{hour.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

