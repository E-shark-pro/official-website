'use client'

import { useEffect, useState } from 'react'

export default function AnimatedShark() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-96 h-96">
      {/* Main Shark */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out animate-float"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shark Body */}
          <ellipse
            cx="200"
            cy="150"
            rx="120"
            ry="60"
            fill="url(#sharkGradient)"
            className="animate-pulse-slow"
          />
          
          {/* Shark Head */}
          <ellipse
            cx="280"
            cy="150"
            rx="80"
            ry="45"
            fill="url(#sharkGradient)"
          />
          
          {/* Shark Tail */}
          <path
            d="M80 150 L20 120 L40 150 L20 180 Z"
            fill="url(#sharkGradient)"
            className="animate-wiggle"
          />
          
          {/* Dorsal Fin */}
          <path
            d="M180 90 L220 60 L240 110 Z"
            fill="url(#finGradient)"
          />
          
          {/* Pectoral Fins */}
          <ellipse
            cx="160"
            cy="180"
            rx="30"
            ry="15"
            fill="url(#finGradient)"
            transform="rotate(20 160 180)"
          />
          <ellipse
            cx="160"
            cy="120"
            rx="30"
            ry="15"
            fill="url(#finGradient)"
            transform="rotate(-20 160 120)"
          />
          
          {/* Eye */}
          <circle
            cx="300"
            cy="135"
            r="12"
            fill="white"
          />
          <circle
            cx="305"
            cy="135"
            r="8"
            fill="#1e40af"
            className="animate-blink"
          />
          <circle
            cx="307"
            cy="132"
            r="3"
            fill="white"
          />
          
          {/* Mouth */}
          <path
            d="M320 155 Q340 165 320 175"
            stroke="#1e40af"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
          
          {/* Bubbles */}
          <circle cx="350" cy="100" r="4" fill="#60a5fa" opacity="0.6" className="animate-bounce-slow">
            <animate attributeName="cy" values="100;80;100" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="360" cy="120" r="3" fill="#3b82f6" opacity="0.5" className="animate-bounce-slow">
            <animate attributeName="cy" values="120;100;120" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="340" cy="110" r="2" fill="#1d4ed8" opacity="0.7" className="animate-bounce-slow">
            <animate attributeName="cy" values="110;90;110" dur="1.8s" repeatCount="indefinite" />
          </circle>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="sharkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Learning Elements */}
      <div className="absolute top-10 right-10 animate-bounce-slow">
        <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-blue-200">
          <span className="text-2xl">📚</span>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-10 animate-bounce-slow animation-delay-1000">
        <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-orange-200">
          <span className="text-2xl">🎓</span>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 animate-bounce-slow animation-delay-2000">
        <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-blue-200">
          <span className="text-2xl">💡</span>
        </div>
      </div>
    </div>
  )
}
