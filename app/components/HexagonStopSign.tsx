'use client'

interface HexagonStopSignProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default function HexagonStopSign({ 
  size = 'medium',
  className = '' 
}: HexagonStopSignProps) {
  // Size configurations
  const sizeConfig = {
    small: {
      width: 60,
      height: 60,
      fontSize: 14,
    },
    medium: {
      width: 140,
      height: 140,
      fontSize: 32,
    },
    large: {
      width: 180,
      height: 180,
      fontSize: 42,
    }
  }

  const config = sizeConfig[size]

  return (
    <div 
      className={`hexagon-stop-sign stop-sign inline-block relative ${className}`}
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`,
      }}
    >
      <svg
        width={config.width}
        height={config.height}
        viewBox="0 0 200 200"
        className="object-contain"
      >
        {/* Outer hexagon */}
        <polygon
          points="100,10 190,55 190,145 100,190 10,145 10,55"
          fill="#DC2626"
          stroke="#FFFFFF"
          strokeWidth="6"
        />
        {/* Inner white border strip */}
        <polygon
          points="100,25 175,62.5 175,137.5 100,175 25,137.5 25,62.5"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="8"
        />
        {/* STOP text */}
        <text
          x="100"
          y="100"
          fontFamily="Arial, sans-serif"
          fontSize={config.fontSize}
          fontWeight="900"
          fill="#FFFFFF"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="2"
        >
          STOP
        </text>
      </svg>
    </div>
  )
}
