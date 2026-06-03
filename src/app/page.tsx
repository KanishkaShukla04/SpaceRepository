'use client'
import { useEffect, useState } from 'react'
const BG_STARS = Array.from({ length: 350 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: Math.random() * 0.1 + 0.03,
  opacity: Math.random() * 0.8 + 0.2,
  delay: Math.random() * 5,
  color: (['white','white','white','white','#aaddff','#ccffee'] as const)[Math.floor(Math.random() * 6)],
}))

const STARS = [
  { id: 'helios',    x: 52, y: 50, name: 'HELIOS',    color: '#FFE87C', size: 14, lines: ['The core of my', 'passion and drive.', 'Always evolving.'],      year: '∞',        glow: true  },
  { id: 'bellatrix', x: 56, y: 28, name: 'BELLATRIX', color: '#88CCFF', size: 9,  lines: ['AI Explorer.', 'Model Builder.', 'Prompt Engineer.'],             year: '2023 – ∞', glow: false },
  { id: 'draco',     x: 75, y: 14, name: 'DRACO',     color: '#AAFFDD', size: 8,  lines: ['Problem Solver.', 'Logic Enthusiast.', 'Code Alchemist.'],        year: '2019 – ∞', glow: false },
  { id: 'regulus',   x: 83, y: 40, name: 'REGULUS',   color: '#CCE0FF', size: 8,  lines: ['Backend Architect.', 'API Craftsman.', 'System Designer.'],       year: '2022 – ∞', glow: false },
  { id: 'polaris',   x: 72, y: 72, name: 'POLARIS',   color: '#FFD700', size: 8,  lines: ['Visionary.', 'Goal Oriented.', 'Impact Driven.'],                 year: '∞',        glow: false },
  { id: 'sirius',    x: 42, y: 76, name: 'SIRIUS',    color: '#FFFFFF', size: 9,  lines: ['Curious Mind.', 'Always Exploring.', 'Forever Learning.'],        year: '2019 – ∞', glow: false },
  { id: 'vega',      x: 24, y: 62, name: 'VEGA',      color: '#AAFFCC', size: 8,  lines: ['Fast Learner.', 'Adapt. Improve.', 'Overcome.'],                  year: '2020 – ∞', glow: false },
]

const LINES = [
  ['helios', 'bellatrix'], ['bellatrix', 'draco'],
  ['bellatrix', 'regulus'], ['helios', 'regulus'],
  ['helios', 'polaris'], ['helios', 'sirius'],
  ['sirius', 'vega'], ['helios', 'vega'],
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => { setMounted(true) }, [])

  const pos = (id: string) => STARS.find(s => s.id === id)!

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', fontFamily: 'Inter, sans-serif' }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500&display=swap');
        @keyframes twinkle { 0%,100%{opacity:var(--op)} 50%{opacity:0.05} }
        @keyframes pulseRing { 0%,100%{opacity:0.15;transform:scale(1)} 50%{opacity:0.04;transform:scale(1.3)} }
        @keyframes pulseRing2 { 0%,100%{opacity:0.25;transform:scale(1)} 50%{opacity:0.07;transform:scale(1.2)} }
        @keyframes livePulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes signalAnim { from{width:30%} to{width:85%} }
        @keyframes scrollBounce { 0%,100%{opacity:0.2} 50%{opacity:0.6} }
        .pulse-ring { animation: pulseRing 2.5s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .pulse-ring2 { animation: pulseRing2 2.5s ease-in-out infinite 0.5s; transform-origin: center; transform-box: fill-box; }
        .nav-item { opacity: 0.35; cursor: pointer; transition: opacity 0.2s; }
        .nav-item:hover { opacity: 1; }
        .nav-item.active { opacity: 1; }
        .explore-btn:hover { color: rgba(100,255,150,0.95) !important; }
        .explore-btn:hover .arrow { transform: translateX(6px); }
        .arrow { display:inline-block; transition: transform 0.3s; }
        .ficon { color: rgba(255,255,255,0.3); text-decoration:none; font-family:'Space Mono',monospace; font-size:13px; transition:color 0.2s; }
        .ficon:hover { color: rgba(255,255,255,0.85); }
      `}</style>

      {/* Deep space background */}
{/* Background image */}
<div style={{
  position: 'absolute',
  inset: 0,
  backgroundImage: "url('/hero-bg.jpg.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
}} />

{/* Dark overlay so text is readable */}
<div style={{
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.6) 100%)',
}} />
      {/* Green aurora nebula */}
    
      {/* Background twinkling stars */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
  {BG_STARS.map(s => (
    <g key={s.id}>
      <circle cx={s.x} cy={s.y} r={s.r * 2.5} fill={s.color}
        opacity={s.opacity * 0.06}
        style={{ animation:`twinkle ${2.5 + s.delay}s ease-in-out infinite`, animationDelay:`${s.delay}s` }} />
      <circle cx={s.x} cy={s.y} r={s.r} fill={s.color}
        opacity={s.opacity}
        style={{ animation:`twinkle ${2.5 + s.delay}s ease-in-out infinite`, animationDelay:`${s.delay}s` }} />
    </g>
  ))}
</svg>
      {/* Constellation lines + named stars */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Lines */}
        {LINES.map(([a, b], i) => {
          const sa = pos(a); const sb = pos(b)
          const active = hovered === a || hovered === b
          return (
            <line key={i}
              x1={sa.x} y1={sa.y} x2={sb.x} y2={sb.y}
              stroke={active ? 'rgba(150,220,255,0.5)' : 'rgba(150,220,255,0.13)'}
              strokeWidth={active ? 0.12 : 0.06}
              style={{ transition: 'all 0.4s' }}
            />
          )
        })}

        {/* Stars */}
        {STARS.map(star => (
          <g key={star.id} style={{ pointerEvents:'all', cursor:'pointer' }}
            onMouseEnter={() => setHovered(star.id)}
            onMouseLeave={() => setHovered(null)}>
            {star.glow && <>
              <circle cx={star.x} cy={star.y} r="2.8" fill="none" stroke={star.color} strokeWidth="0.05" className="pulse-ring" />
              <circle cx={star.x} cy={star.y} r="1.9" fill="none" stroke={star.color} strokeWidth="0.08" className="pulse-ring2" />
            </>}
            {hovered === star.id && <circle cx={star.x} cy={star.y} r="1.8" fill={star.color} opacity="0.1" />}
            <circle cx={star.x} cy={star.y} r={star.size * 0.09} fill={star.color}
              opacity={hovered === star.id ? 1 : 0.85}
              style={{ transition:'all 0.3s', filter:`drop-shadow(0 0 ${star.glow ? 4 : 1.5}px ${star.color})` }} />
            <circle cx={star.x} cy={star.y} r={star.size * 0.035} fill="white" opacity="0.95" />
          </g>
        ))}
      </svg>

      {/* Star labels — HTML overlay */}
      {STARS.map(star => {
        const offsets: Record<string, [string, string]> = {
          helios:    ['1.5%',  '1.5%'],
          bellatrix: ['1%',    '-7%'],
          draco:     ['1%',    '-6%'],
          regulus:   ['1%',    '1%'],
          polaris:   ['-13%',  '1%'],
          sirius:    ['1%',    '1.5%'],
          vega:      ['-13%',  '-7%'],
        }
        const [ox, oy] = offsets[star.id]
        return (
          <div key={star.id}
            style={{ position:'absolute', left:`${star.x}%`, top:`${star.y}%`, transform:`translate(${ox}, ${oy})`, pointerEvents:'all', cursor:'pointer' }}
            onMouseEnter={() => setHovered(star.id)}
            onMouseLeave={() => setHovered(null)}>
            <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'clamp(8px,0.8vw,12px)', fontWeight:700, letterSpacing:'0.12em', color: star.color, textShadow: hovered === star.id ? `0 0 12px ${star.color}` : 'none', transition:'text-shadow 0.3s' }}>
              {star.name}
            </div>
            {star.lines.map((l, i) => (
              <div key={i} style={{ fontFamily:"'Inter',sans-serif", fontSize:'clamp(7px,0.62vw,10px)', color:'rgba(200,220,255,0.6)', lineHeight:1.5, fontWeight:300 }}>{l}</div>
            ))}
            <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'clamp(7px,0.58vw,9px)', color: star.color, opacity:0.75, marginTop:2 }}>{star.year}</div>
          </div>
        )
      })}

      {/* TOP BAR */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:44, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 24px', borderBottom:'0.5px solid rgba(150,200,255,0.07)', zIndex:100 }}>
        <span style={{ fontFamily:"'Space Mono',monospace", fontSize:13, color:'rgba(255,255,255,0.8)', letterSpacing:'0.2em' }}>HELIOS <span style={{ color:'rgba(100,200,150,0.7)' }}>+</span></span>
        <span style={{ fontFamily:"'Space Mono',monospace", fontSize:11, color:'rgba(255,255,255,0.28)', letterSpacing:'0.15em' }}>CLEAR SKY ·</span>
      </div>

      {/* LEFT NAV */}
      <nav style={{ position:'absolute', left:24, top:'50%', transform:'translateY(-50%)', display:'flex', flexDirection:'column', gap:18, zIndex:100, opacity: mounted ? 1 : 0, transition:'opacity 1s 0.2s' }}>
        {['HOME','ABOUT','PROJECTS','ACHIEVEMENTS','SKILLS','JOURNEY','CONTACT'].map((item, i) => (
          <div key={item} className={`nav-item${i === 0 ? ' active' : ''}`} style={{ display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ fontFamily:"'Space Mono',monospace", fontSize:9, color: i === 0 ? 'rgba(100,220,150,0.8)' : 'rgba(100,200,150,0.6)' }}>0{i+1}</span>
            <span style={{ fontFamily:"'Space Mono',monospace", fontSize:10, color: i === 0 ? 'rgba(100,220,150,0.9)' : 'rgba(255,255,255,0.65)', letterSpacing:'0.12em' }}>{item}</span>
          </div>
        ))}
      </nav>

      {/* HERO TEXT */}
      <div style={{ position:'absolute', left:'clamp(80px,14vw,160px)', top:'50%', transform:'translateY(-50%)', zIndex:50, opacity: mounted ? 1 : 0, transition:'opacity 1s 0.2s', maxWidth:340 }}>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(52px,7.5vw,100px)', fontWeight:300, color:'rgba(255,255,255,0.92)', lineHeight:0.93, letterSpacing:'-0.01em', display:'flex', flexDirection:'column', marginBottom:16 }}>
          <span>Kanishka</span>
          <span>Shukla</span>
        </h1>
        <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'clamp(10px,1vw,13px)', color:'rgba(200,220,255,0.75)', letterSpacing:'0.15em', lineHeight:1.7, marginBottom:14 }}>
          AI SYSTEMS ENGINEER<br />&amp; BACKEND ARCHITECT
        </p>
        <p style={{ fontFamily:"'Inter',sans-serif", fontSize:'clamp(13px,1.05vw,15px)', color:'rgba(180,200,220,0.55)', lineHeight:1.75, fontWeight:300, marginBottom:24 }}>
          I build intelligent systems that solve<br />
          real-world problems. From multi-agent<br />
          architectures to scalable APIs, I turn<br />
          ideas into production-ready solutions.
        </p>
        <button className="explore-btn" style={{ display:'flex', alignItems:'center', gap:10, background:'none', border:'none', fontFamily:"'Space Mono',monospace", fontSize:'clamp(8px,0.75vw,10px)', color:'rgba(200,240,200,0.75)', letterSpacing:'0.2em', cursor:'pointer', padding:0, transition:'color 0.2s' }}>
          EXPLORE MY UNIVERSE <span className="arrow">→</span>
        </button>
      </div>

      {/* QUOTE BOX */}
      <div style={{ position:'absolute', right:24, bottom:110, width:'clamp(150px,13vw,200px)', border:'0.5px solid rgba(150,200,255,0.18)', padding:'14px 16px', zIndex:50 }}>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(11px,0.82vw,13px)', color:'rgba(170,200,255,0.6)', lineHeight:1.65, fontStyle:'italic' }}>
          "We are all stardust,<br />coding our stories in<br />the constellations<br />of infinite possibilities."
        </p>
      </div>


      {/* STATS BAR */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:48, borderTop:'0.5px solid rgba(150,200,255,0.07)', display:'flex', alignItems:'center', padding:'0 20px', gap:28, zIndex:100, background:'rgba(1,6,16,0.65)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, flexShrink:0 }}>
          <div style={{ width:6, height:6, borderRadius:'50%', background:'rgba(100,255,150,0.8)', animation:'livePulse 2s ease-in-out infinite' }} />
          <span style={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:'rgba(255,255,255,0.3)', letterSpacing:'0.15em' }}>LIVE SIGNAL</span>
          <div style={{ width:44, height:2, background:'rgba(255,255,255,0.07)', borderRadius:1, overflow:'hidden' }}>
            <div style={{ height:'100%', background:'rgba(100,255,150,0.5)', animation:'signalAnim 2s ease-in-out infinite alternate' }} />
          </div>
        </div>
        {[['PROJECTS','15+'],['HACKATHONS','10+'],['TECH STACK','20+'],['APIS BUILT','25+'],['MODELS INTEGRATED','10+']].map(([label, val]) => (
          <div key={label} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:1 }}>
            <span style={{ fontFamily:"'Space Mono',monospace", fontSize:8, color:'rgba(255,255,255,0.28)', letterSpacing:'0.1em' }}>{label}</span>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:500, color:'rgba(255,255,255,0.88)', lineHeight:1 }}>{val}</span>
          </div>
        ))}
      </div>

      {/* SCROLL HINT */}
      <div style={{ position:'absolute', bottom:56, left:'50%', transform:'translateX(-50%)', fontFamily:"'Space Mono',monospace", fontSize:9, color:'rgba(255,255,255,0.2)', letterSpacing:'0.2em', display:'flex', alignItems:'center', gap:8, zIndex:100, whiteSpace:'nowrap', animation:'scrollBounce 2.5s ease-in-out infinite' }}>
        ⊙ SCROLL TO NAVIGATE THE STARS
      </div>

      {/* FOOTER SOCIAL ICONS */}
      <div style={{ position:'absolute', bottom:13, right:24, display:'flex', gap:16, zIndex:100 }}>
        <a href="https://github.com/KanishkaShukla04" target="_blank" rel="noreferrer" className="ficon">GH</a>
        <a href="https://linkedin.com/in/kanishkashukla04" target="_blank" rel="noreferrer" className="ficon">in</a>
        <a href="mailto:kanishka@email.com" className="ficon">✉</a>
      </div>

    </div>
  )
}