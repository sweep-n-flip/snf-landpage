'use client'

import { useEffect, useRef } from 'react'

const VIGNETTE = `radial-gradient(ellipse 88% 78% at 50% 50%,
  transparent 36%,
  rgba(6,7,13,0.52) 64%,
  rgba(6,7,13,0.91) 86%)`

export function LandingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let t = 0

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const W = canvas.width
      const H = canvas.height

      ctx.clearRect(0, 0, W, H)
      ctx.lineJoin = 'round'

      // Horizontal contour lines
      const H_SPACE = 44
      const H_AMP_A = 24, H_AMP_B = 11, H_AMP_C = 5
      const hLines  = Math.ceil(H / H_SPACE) + 2

      ctx.strokeStyle = 'rgba(255,255,255,0.07)'
      ctx.lineWidth   = 1

      for (let i = -1; i <= hLines; i++) {
        const baseY = i * H_SPACE
        const p1 = i * 0.73 + 1.8, p2 = i * 1.41 + 0.5, p3 = i * 0.57 + 3.2
        ctx.beginPath()
        for (let x = 0; x <= W; x += 3) {
          const y = baseY
            + Math.sin(x * 0.0075 + t * 0.27 + p1) * H_AMP_A
            + Math.sin(x * 0.0145 + t * 0.14 + p2) * H_AMP_B
            + Math.sin(x * 0.0240 + t * 0.20 + p3) * H_AMP_C
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // Vertical contour lines
      const V_SPACE = 72
      const V_AMP_A = 22, V_AMP_B = 10, V_AMP_C = 5
      const vLines  = Math.ceil(W / V_SPACE) + 2

      ctx.strokeStyle = 'rgba(255,255,255,0.04)'
      ctx.lineWidth   = 1

      for (let j = -1; j <= vLines; j++) {
        const baseX = j * V_SPACE
        const q1 = j * 0.88 + 1.1, q2 = j * 1.23 + 2.7, q3 = j * 0.62 + 0.3
        ctx.beginPath()
        for (let y = 0; y <= H; y += 3) {
          const x = baseX
            + Math.sin(y * 0.0075 + t * 0.22 + q1) * V_AMP_A
            + Math.sin(y * 0.0140 + t * 0.17 + q2) * V_AMP_B
            + Math.sin(y * 0.0230 + t * 0.25 + q3) * V_AMP_C
          y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      t += 0.003
      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
      <div className="absolute inset-0" style={{ background: VIGNETTE }} />
    </div>
  )
}
