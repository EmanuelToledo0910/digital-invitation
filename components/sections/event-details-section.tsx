"use client"

import { useState, useEffect } from "react"

export function EventDetailsSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-11-30T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-black text-white py-8 md:py-12 px-4 relative overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
      <div className="absolute top-2 left-0 w-full flex justify-center space-x-8">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-yellow-600 rounded-full opacity-60"></div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif text-yellow-600 mb-6 md:mb-8 lg:mb-12">Cuenta Regresiva</h2>

        <div className="flex justify-center items-center gap-4 md:gap-8 mb-6 md:mb-8">
          <div className="text-center flex-1 max-w-[80px] md:max-w-none">
            <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-600 mb-1 md:mb-2">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm lg:text-lg text-yellow-600 opacity-80">días</div>
          </div>

          <div className="text-center flex-1 max-w-[80px] md:max-w-none">
            <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-600 mb-1 md:mb-2">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm lg:text-lg text-yellow-600 opacity-80">hs</div>
          </div>

          <div className="text-center flex-1 max-w-[80px] md:max-w-none">
            <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-600 mb-1 md:mb-2">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm lg:text-lg text-yellow-600 opacity-80">min</div>
          </div>

          <div className="text-center flex-1 max-w-[80px] md:max-w-none">
            <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-600 mb-1 md:mb-2">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm lg:text-lg text-yellow-600 opacity-80">seg</div>
          </div>
        </div>

        <div className="flex justify-center mb-6 md:mb-8">
          <div className="text-3xl md:text-4xl lg:text-5xl text-yellow-600 animate-heartbeat">♥</div>
        </div>
      </div>

      <div className="absolute bottom-2 left-0 w-full flex justify-center space-x-8">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-yellow-600 rounded-full opacity-60"></div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
    </section>
  )
}
