/* ============================================================================
   Delivery-channel labels — one static chip per output port of the hub.
   The Prompt-1 delivery frame fans into SIX glowing circular ports; n0brains
   ships over six surfaces, so each port gets a label. Labels FADE IN (no
   movement, no connector lines) once the camera settles on the hub at the end,
   pinned to the TOP BORDER of each circle so they read as labelled ports.
     update(progress)  // 0..1 scroll
   ============================================================================ */

// Port centres (x%, y% of viewport) + 3D lean toward the vanishing centre.
// Tuned to the six circles in the final delivery frame (~14.7s).
// y is nudged up from each circle's centre so the chip sits on its TOP border.
const PORTS = [
  { key:'REST',      sub:'',                 color:'#00ff5a', x:30, y:13, rx:  12, ry: -16 }, // top-left
  { key:'WebSocket', sub:'',                 color:'#3aa0ff', x:70, y:13, rx:  12, ry:  16 }, // top-right
  { key:'MCP',       sub:'',                 color:'#b46bff', x:11, y:38, rx:   0, ry: -22 }, // mid-left
  { key:'Webhooks',  sub:'',                 color:'#ffd24a', x:89, y:38, rx:   0, ry:  22 }, // mid-right
  { key:'x402',      sub:'+ agentic.market', color:'#ff2d6b', x:30, y:84, rx: -12, ry: -16 }, // bottom-left
  { key:'CLI',       sub:'pip · pypi',       color:'#33ffd6', x:70, y:84, rx: -12, ry:  16 }, // bottom-right
];

// Labels appear only once the video has essentially STOPPED on the hub — the
// very last frames (prog ≈ 0.975–1.0) — and HOLD. No motion, so they read as
// painted-on port labels, not moving overlays.
const WIN_START = 0.915, WIN_FULL = 0.945;

export function mountChannels(){
  const wrap=document.createElement('div'); wrap.id='chwrap';
  const chips=PORTS.map((p,i)=>{
    const c=document.createElement('div'); c.className='chchip'; c.dataset.i=i;
    c.style.left=p.x+'%'; c.style.top=p.y+'%';
    c.style.setProperty('--cc',p.color);
    c.style.transform=`translate(-50%,-50%) perspective(620px) rotateX(${p.rx}deg) rotateY(${p.ry}deg)`;
    c.innerHTML=`<span class="ch-dot"></span><span class="ch-body"><span class="ch-key">${p.key}</span>${p.sub?`<span class="ch-sub">${p.sub}</span>`:''}</span>`;
    wrap.appendChild(c); return c;
  });
  document.body.appendChild(wrap); injectCSS();

  function update(prog){
    if(innerWidth<=640){ wrap.style.display="none"; return; } else { wrap.style.display=""; }
    const on = prog>=WIN_START;
    wrap.classList.toggle('show', on);
    if(!on){ chips.forEach(c=>c.style.opacity=0); return; }
    const k = Math.max(0, Math.min(1, (prog-WIN_START)/(WIN_FULL-WIN_START)));
    chips.forEach((c,i)=>{
      // gentle staggered fade-in; positions are STATIC (no drift).
      c.style.opacity = Math.max(0, Math.min(1, k*1.4 - i*0.06));
    });
  }
  return { wrap, update };
}

function injectCSS(){
  if(document.getElementById('chcss')) return;
  const s=document.createElement('style'); s.id='chcss'; s.textContent=`
  /* z-index 4: above the video/HUD but BEHIND the final price cards (#final z6),
     so the bottom labels sit behind the Free/Pro cards. */
  #chwrap{position:fixed;inset:0;z-index:4;pointer-events:none;opacity:0;transition:opacity .35s}
  #chwrap.show{opacity:1}
  .chchip{position:absolute;display:flex;align-items:center;gap:8px;
    padding:7px 13px;border-radius:6px;opacity:0;will-change:opacity;
    font-family:var(--mono,"Space Mono",monospace);
    background:linear-gradient(180deg,rgba(8,14,10,.92),rgba(4,7,11,.84));
    border:1px solid color-mix(in srgb,var(--cc) 55%,#0c140f);
    box-shadow:0 0 18px color-mix(in srgb,var(--cc) 40%,transparent),
               0 12px 30px rgba(0,0,0,.6),
               inset 0 1px 0 color-mix(in srgb,var(--cc) 30%,transparent);
    transform-style:preserve-3d;transition:opacity .25s}
  /* scanline so it reads as part of the rendered hub */
  .chchip::after{content:"";position:absolute;inset:0;border-radius:6px;pointer-events:none;
    background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.16) 2px,rgba(0,0,0,.16) 3px);
    mix-blend-mode:overlay;opacity:.5}
  .ch-dot{width:7px;height:7px;border-radius:50%;background:var(--cc);
    box-shadow:0 0 10px var(--cc);flex:0 0 auto;animation:chpulse 1.3s infinite}
  @keyframes chpulse{0%,100%{opacity:1}50%{opacity:.4}}
  .ch-body{display:flex;flex-direction:column;line-height:1.05;transform:translateZ(6px)}
  .ch-key{color:var(--cc);font-size:.78rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;
    text-shadow:0 0 10px color-mix(in srgb,var(--cc) 60%,transparent)}
  .ch-sub{color:#9fb0a8;font-size:.52rem;letter-spacing:.08em;text-transform:uppercase;margin-top:2px}
  @media (max-width:760px){.ch-key{font-size:.62rem}.ch-sub{font-size:.45rem}.chchip{padding:5px 9px}}
  `;
  document.head.appendChild(s);
}
