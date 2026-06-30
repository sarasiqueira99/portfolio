'use client'

import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!
    const cream = '#fafaf8'
    const facades = ['#F4E7CE','#F2D9B6','#EBC79E','#ECAE8E','#E29279','#B6CBD0','#A9C3AE','#F1D396','#EAC2AC','#F6EEDB','#CBD3BF','#DAC4A4']
    const roofs = ['#86958B','#C9784E','#9C9488','#90A6AC','#B98461','#AAB29C','#C2A07A']
    const greens = ['#5E7E55','#6B8B5C','#54744C','#7A9A66']
    const pColors = ['#DD583E','#3E7CB1','#E8A13A','#5B8C5A','#C66F9F','#6E5BA8','#E9D9B8','#1F9E8E']
    const carColors = ['#EFE7D6','#A7B6BC','#DD583E','#7DA0C4','#6E7A72','#E8A13A']

    const GW = 22, GH = 16, FH = 12
    let TW2 = 23, TH2 = 11.5
    let w = 0, h = 0, dpr = 1, s = 1, ox = 0, oy = 0
    let buildings: any[] = [], trees: any[] = [], roadTiles: any[] = [], blockTiles: any[] = [], gardens: any[] = [], agents: any[] = []
    let hover = 0, mouse = { x: -9999, y: -9999, on: false }
    let bob = 0
    let visible = true, last = performance.now()

    let seed = 987654
    const mb = () => {
      seed = seed + 0x6D2B79F5 | 0
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed)
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
      return ((t ^ t >>> 14) >>> 0) / 4294967296
    }

    const shade = (hex: string, f: number) => {
      const n = parseInt(hex.slice(1), 16)
      let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
      return 'rgb(' + Math.min(255, r * f | 0) + ',' + Math.min(255, g * f | 0) + ',' + Math.min(255, b * f | 0) + ')'
    }

    const isRoad = (gx: number, gy: number) => gx % 3 === 0 || gy % 3 === 0

    const gen = () => {
      seed = 987654
      buildings = []; trees = []; roadTiles = []; blockTiles = []; gardens = []; agents = []
      for (let gx = 0; gx < GW; gx++) for (let gy = 0; gy < GH; gy++) {
        if (isRoad(gx, gy)) {
          roadTiles.push({ gx, gy })
          if (mb() < 0.07) trees.push({ gx: gx + (mb() < .5 ? 0.2 : 0.8), gy: gy + (mb() < .5 ? 0.2 : 0.8), r: 7 + mb() * 3, ph: mb() * 6, g: greens[(mb() * greens.length) | 0] })
          continue
        }
        const r = mb()
        if (r < 0.4) {
          gardens.push({ gx, gy })
          const nt = mb() < 0.7 ? (1 + (mb() * 2 | 0)) : 0
          for (let i = 0; i < nt; i++) trees.push({ gx: gx + 0.25 + mb() * 0.5, gy: gy + 0.25 + mb() * 0.5, r: 10 + mb() * 6, ph: mb() * 6, g: greens[(mb() * greens.length) | 0] })
          continue
        }
        let floors = 2 + (mb() * 2 | 0)
        if (mb() < 0.05) floors = 5 + (mb() * 4 | 0)
        const sum = gx + gy
        const fade = Math.max(0, Math.min(1, (sum - 2) / 7))
        const fc = facades[(mb() * facades.length) | 0]
        const pts = []; const np = Math.min(42, 8 + floors * 3)
        for (let i = 0; i < np; i++) pts.push({ u: 0.08 + mb() * 0.84, v: 0.08 + mb() * 0.84, z: mb() })
        const lit = []; for (let f = 0; f < floors; f++) for (let c = 0; c < 2; c++) lit.push(mb() < 0.18)
        buildings.push({ gx, gy, floors, h: floors * FH, facade: fc, roof: roofs[(mb() * roofs.length) | 0], fade, pts, lit, sum })
        blockTiles.push({ gx, gy })
      }
      const nP = 92, nC = 14
      const hRoads: number[] = [], vRoads: number[] = []
      for (let g = 0; g < GH; g++) if (g % 3 === 0) hRoads.push(g)
      for (let g = 0; g < GW; g++) if (g % 3 === 0) vRoads.push(g)
      for (let i = 0; i < nP + nC; i++) {
        const car = i >= nP
        const horiz = mb() < 0.5
        const a: any = { car, col: car ? carColors[(mb() * carColors.length) | 0] : pColors[(mb() * pColors.length) | 0], dir: mb() < 0.5 ? 1 : -1, sp: (car ? (0.85 + mb() * 0.5) : (0.22 + mb() * 0.18)), ph: mb() * 6 }
        if (horiz) { a.axis = 'h'; a.line = hRoads[(mb() * hRoads.length) | 0] + 0.5; a.pos = mb() * GW }
        else { a.axis = 'v'; a.line = vRoads[(mb() * vRoads.length) | 0] + 0.5; a.pos = mb() * GH }
        agents.push(a)
      }
    }

    const layout = () => {
      s = Math.max(0.78, Math.min(1.9, w / 950))
      TW2 = 23; TH2 = 11.5
      ox = w * 0.63 - 2 * TW2 * s
      oy = h * 0.14
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = canvas.getBoundingClientRect(); w = r.width; h = r.height
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); layout()
    }

    const px = (gx: number, gy: number, z: number) => ({ x: ox + (gx - gy) * TW2 * s + Math.cos(bob * 0.7) * 4 * s, y: oy + (gx + gy) * TH2 * s - z * s + Math.sin(bob) * 3 * s })
    const poly = (p: any[], fill: any) => { ctx.beginPath(); ctx.moveTo(p[0].x, p[0].y); for (let i = 1; i < p.length; i++) ctx.lineTo(p[i].x, p[i].y); ctx.closePath(); ctx.fillStyle = fill; ctx.fill() }
    const lp = (a: any, b: any, t: number) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t })
    const bil = (g0: any, g1: any, t0: any, t1: any, u: number, v: number) => lp(lp(g0, g1, u), lp(t0, t1, u), v)
    const faceGrad = (g0: any, g1: any, t1: any, t0: any, botCol: string, topCol: string) => {
      const gr = ctx.createLinearGradient((g0.x + g1.x) / 2, (g0.y + g1.y) / 2, (t0.x + t1.x) / 2, (t0.y + t1.y) / 2)
      gr.addColorStop(0, botCol); gr.addColorStop(1, topCol)
      poly([g0, g1, t1, t0], gr)
    }

    const groundPass = () => {
      ctx.globalAlpha = 1
      for (const t of blockTiles) { const A = px(t.gx, t.gy, 0), B = px(t.gx + 1, t.gy, 0), C = px(t.gx + 1, t.gy + 1, 0), D = px(t.gx, t.gy + 1, 0); poly([A, B, C, D], '#DAD3C0') }
      for (const t of gardens) { const A = px(t.gx, t.gy, 0), B = px(t.gx + 1, t.gy, 0), C = px(t.gx + 1, t.gy + 1, 0), D = px(t.gx, t.gy + 1, 0); poly([A, B, C, D], '#C3CBAE') }
      for (const t of roadTiles) { const A = px(t.gx, t.gy, 0), B = px(t.gx + 1, t.gy, 0), C = px(t.gx + 1, t.gy + 1, 0), D = px(t.gx, t.gy + 1, 0); poly([A, B, C, D], '#C7C1B2') }
    }

    const drawBuilding = (b: any) => {
      const Bt = px(b.gx + 1, b.gy, b.h), Ct = px(b.gx + 1, b.gy + 1, b.h), Dt = px(b.gx, b.gy + 1, b.h), At = px(b.gx, b.gy, b.h)
      const A = px(b.gx, b.gy, 0), B = px(b.gx + 1, b.gy, 0), C = px(b.gx + 1, b.gy + 1, 0), D = px(b.gx, b.gy + 1, 0)
      if (b.fade > 0.03) {
        ctx.globalAlpha = b.fade * 0.5
        poly([{ x: A.x - 4 * s, y: A.y + 3 * s }, { x: B.x - 4 * s, y: B.y + 3 * s }, { x: C.x - 4 * s, y: C.y + 3 * s }, { x: D.x - 4 * s, y: D.y + 3 * s }], 'rgba(74,84,72,0.16)')
        ctx.globalAlpha = b.fade
        faceGrad(B, C, Ct, Bt, shade(b.facade, 0.88), shade(b.facade, 1.05))
        faceGrad(D, C, Ct, Dt, shade(b.facade, 0.74), shade(b.facade, 0.9))
        const rg = ctx.createLinearGradient(At.x, At.y, Ct.x, Ct.y); rg.addColorStop(0, shade(b.roof, 1.1)); rg.addColorStop(1, shade(b.roof, 0.92))
        poly([At, Bt, Ct, Dt], rg)
        if (b.fade > 0.5 && b.floors >= 2) {
          const glassR = 'rgba(150,172,178,0.5)', glassL = 'rgba(132,154,160,0.5)'
          const drawWin = (g0: any, g1: any, t0: any, t1: any, glass: string) => {
            const fl = Math.min(b.floors, 5)
            for (let f = 0; f < fl; f++) { const v0 = (f + 0.34) / fl, v1 = (f + 0.7) / fl
              for (let c = 0; c < 2; c++) { const u0 = c * 0.5 + 0.18, u1 = c * 0.5 + 0.32
                const litI = b.lit[(f * 2 + c) % b.lit.length]
                poly([bil(g0, g1, t0, t1, u0, v0), bil(g0, g1, t0, t1, u1, v0), bil(g0, g1, t0, t1, u1, v1), bil(g0, g1, t0, t1, u0, v1)], litI ? 'rgba(244,202,124,0.85)' : glass)
              }
            }
          }
          drawWin(B, C, Bt, Ct, glassR)
          drawWin(D, C, Dt, Ct, glassL)
        }
        ctx.globalAlpha = b.fade * 0.4; ctx.strokeStyle = shade(b.roof, 1.2); ctx.lineWidth = 1.2 * s; ctx.lineJoin = 'round'
        ctx.beginPath(); ctx.moveTo(At.x, At.y); ctx.lineTo(Bt.x, Bt.y); ctx.lineTo(Ct.x, Ct.y); ctx.lineTo(Dt.x, Dt.y); ctx.closePath(); ctx.stroke()
        ctx.globalAlpha = 1
      }
      if (b.fade < 0.97) {
        const str = (1 - b.fade)
        for (const p of b.pts) { const pp = px(b.gx + p.u, b.gy + p.v, p.z * b.h)
          const a = str * (0.32 + p.z * 0.5) * (1 + 0.5 * hover)
          ctx.fillStyle = 'rgba(108,162,214,' + Math.min(0.9, a).toFixed(2) + ')'
          const sz = 1.7 * s; ctx.fillRect(pp.x, pp.y, sz, sz)
        }
      }
    }

    const drawTree = (t: any) => {
      const base = px(t.gx, t.gy, 0), top = px(t.gx, t.gy, 11)
      ctx.fillStyle = 'rgba(40,55,42,0.13)'; ctx.beginPath(); ctx.ellipse(base.x, base.y, t.r * 0.9 * s, t.r * 0.42 * s, 0, 0, 7); ctx.fill()
      ctx.strokeStyle = '#6B5238'; ctx.lineWidth = 2.4 * s; ctx.beginPath(); ctx.moveTo(base.x, base.y); ctx.lineTo(top.x, top.y); ctx.stroke()
      const sway = Math.sin(bob * 0.9 + t.ph) * 2 * s
      const cx = top.x + sway, cy = top.y - t.r * 0.7 * s, R = t.r * s
      ctx.fillStyle = shade(t.g, 0.8); ctx.beginPath(); ctx.arc(cx - R * 0.4, cy + R * 0.2, R * 0.72, 0, 7); ctx.arc(cx + R * 0.45, cy + R * 0.25, R * 0.66, 0, 7); ctx.fill()
      ctx.fillStyle = t.g; ctx.beginPath(); ctx.arc(cx, cy - R * 0.25, R * 0.82, 0, 7); ctx.fill()
      ctx.fillStyle = shade(t.g, 1.18); ctx.beginPath(); ctx.arc(cx - R * 0.2, cy - R * 0.5, R * 0.4, 0, 7); ctx.fill()
    }

    const agentPos = (a: any) => a.axis === 'h' ? { gx: a.pos, gy: a.line } : { gx: a.line, gy: a.pos }
    const drawAgent = (a: any) => {
      const g = agentPos(a); const p = px(g.gx, g.gy, 0)
      ctx.fillStyle = 'rgba(46,54,44,0.18)'; ctx.beginPath(); ctx.ellipse(p.x, p.y, (a.car ? 9 : 4.2) * s, (a.car ? 4 : 2) * s, 0, 0, 7); ctx.fill()
      if (a.car) {
        const bw = 15 * s; ctx.fillStyle = a.col
        ctx.beginPath(); ctx.moveTo(p.x - bw / 2, p.y - 2.5 * s); ctx.lineTo(p.x, p.y - 6 * s); ctx.lineTo(p.x + bw / 2, p.y - 2.5 * s); ctx.lineTo(p.x, p.y + 1 * s); ctx.closePath(); ctx.fill()
        ctx.fillStyle = shade(a.col, 1.14); ctx.beginPath(); ctx.moveTo(p.x - bw * 0.28, p.y - 4 * s); ctx.lineTo(p.x, p.y - 6.6 * s); ctx.lineTo(p.x + bw * 0.28, p.y - 4 * s); ctx.lineTo(p.x, p.y - 2.6 * s); ctx.closePath(); ctx.fill()
      } else {
        const bobp = Math.abs(Math.sin(bob * 5 + a.ph)) * 1.6 * s
        const bw = 5 * s, bh = 10 * s, by = p.y - bobp
        ctx.fillStyle = a.col
        ctx.beginPath()
        ctx.ellipse(p.x, by - bh * 0.45, bw * 0.55, bh * 0.5, 0, 0, 7); ctx.fill()
        ctx.fillRect(p.x - bw / 2, by - bh * 0.5, bw, bh * 0.5)
        ctx.fillStyle = shade(a.col, 1.22); ctx.beginPath(); ctx.arc(p.x, by - bh - 2.4 * s, 3 * s, 0, 7); ctx.fill()
      }
    }

    let rafId: number
    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000); last = now
      hover += ((mouse.on ? 1 : 0) - hover) * Math.min(1, dt * 3)
      bob += dt * 0.42
      const gspeed = 0.5 + 1.4 * hover
      for (const a of agents) { a.pos += a.dir * a.sp * gspeed * dt; const lim = a.axis === 'h' ? GW : GH; if (a.pos > lim) { a.pos -= lim } if (a.pos < 0) { a.pos += lim } }
      if (!visible) { rafId = requestAnimationFrame(frame); return }
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = cream; ctx.fillRect(0, 0, w, h)
      groundPass()
      const items: any[] = []
      for (const b of buildings) items.push({ s: b.sum + 0.1, fn: () => drawBuilding(b) })
      for (const t of trees) items.push({ s: t.gx + t.gy + 0.2, fn: () => drawTree(t) })
      for (const a of agents) { const g = agentPos(a); items.push({ s: g.gx + g.gy + 0.35, fn: () => drawAgent(a) }) }
      items.sort((p, q) => p.s - q.s)
      for (const it of items) it.fn()
      rafId = requestAnimationFrame(frame)
    }

    const onMove = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.on = true }
    const onLeave = () => { mouse.on = false; mouse.x = -9999; mouse.y = -9999 }
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)
    const ro = new ResizeObserver(() => resize()); ro.observe(canvas)
    const io = new IntersectionObserver(es => { visible = es[0].isIntersecting }, { threshold: 0.01 }); io.observe(canvas)
    resize(); gen(); last = performance.now(); rafId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafId)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
      ro.disconnect(); io.disconnect()
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
      {/* edge fades */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(98deg,#fafaf8 0%,#fafaf8 30%,rgba(250,250,248,.9) 45%,rgba(250,250,248,.45) 58%,rgba(250,250,248,0) 70%)' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '22%', pointerEvents: 'none', background: 'linear-gradient(0deg,#fafaf8 0%,rgba(250,250,248,0) 100%)' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '16%', pointerEvents: 'none', background: 'linear-gradient(180deg,#fafaf8 0%,rgba(250,250,248,0) 100%)' }} />
    </>
  )
}
