'use client'

import { useState, useRef, useEffect } from 'react'

export default function MikeyChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'mikey' }>>([
    { text: "Hey there! I'm Mikey, your friendly assistant at Kwik Stop! 👋 How can I help you today?", sender: 'mikey' }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage = { text: inputValue, sender: 'user' as const }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate Mikey's response
    setTimeout(() => {
      const response = getMikeyResponse(inputValue.toLowerCase())
      setMessages(prev => [...prev, { text: response, sender: 'mikey' }])
    }, 1000)
  }

  const getMikeyResponse = (message: string): string => {
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hi there! Welcome to Kwik Stop! 😊 What can I help you with today?"
    }
    if (message.includes('hours') || message.includes('open') || message.includes('close')) {
      return "We're open daily from early morning to late night! For exact hours, please call the store or check our Google Maps listing. ⏰"
    }
    if (message.includes('location') || message.includes('address') || message.includes('where')) {
      return "We're located in Titusville, Florida! Check out our location on Google Maps using the link on our website. We're easy to find! 📍"
    }
    if (message.includes('gas') || message.includes('fuel') || message.includes('pump')) {
      return "Yes! We have gas pumps available. You can fuel up while you shop for all your convenience needs! ⛽"
    }
    if (message.includes('phone') || message.includes('call') || message.includes('contact')) {
      return "For our phone number, please check our Google Maps listing or visit us in person. We'd love to hear from you! 📞"
    }
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! Is there anything else I can help you with? 😊"
    }
    return "That's a great question! For more specific information, I recommend calling the store or visiting us in person. We're here to help! 💙"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chatbot Button */}
      <button
        className={`chatbot-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat with Mikey"
      >
        {!isOpen ? (
          <>
            <span className="chatbot-icon">💬</span>
            <span className="chatbot-name">Mikey</span>
          </>
        ) : (
          <span className="chatbot-close">✕</span>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-avatar">🤖</div>
            <div className="chatbot-header-info">
              <h3>Mikey</h3>
              <p>Kwik Stop Assistant</p>
            </div>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                <div className="message-content">
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask Mikey anything..."
              className="chatbot-input"
            />
            <button onClick={handleSend} className="chatbot-send">
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}

