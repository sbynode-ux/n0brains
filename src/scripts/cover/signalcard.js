/* ============================================================================
   Progressive SIGNAL CARD
   A floating right-side card that fills out as the packet travels the pipeline.
   Each stage ADDS, EMBELLISHES, or CHANGES fields — exactly as the real
   signal_processor does — ending as the delivered signal object.

   Usage:
     import { mountSignalCard } from './signalcard.js';
     const card = mountSignalCard();           // creates + appends the DOM
     card.update(stageIndex);                  // call every frame with 0..9 (or -1 hidden)

   Works for both the WebGL ride and the video player (pure DOM, no engine deps).
   ============================================================================ */

// The single item we follow (mirrors a real whale_position signal on ETH).
// Each field declares WHICH stage first reveals it, plus optional CHANGES later
// (keyed by the stage at which the value updates → so fields embellish/mutate
// as the packet travels, exactly like the real signal_processor).
const SPEC = [
  { key:'source',    label:'source',      reveal:0, vals:{0:['farcaster','']} },
  { key:'raw',       label:'raw',         reveal:0, vals:{0:['"3 whales long ETH…"','dim']} },
  { key:'ts',        label:'ingested',    reveal:2, vals:{2:['queued · t+0.4s','']} },
  { key:'asset',     label:'asset',       reveal:3, vals:{3:['ETH','hi']} },
  { key:'type',      label:'signal_type', reveal:3, vals:{3:['whale_position','hi']} },
  { key:'direction', label:'direction',   reveal:3, vals:{3:['bullish','g']} },
  { key:'urgency',   label:'urgency',     reveal:3, vals:{3:['medium',''],7:['high','y']} }, // bumped by corroboration
  { key:'confidence',label:'confidence',  reveal:3, vals:{3:['0.66 raw',''],4:['0.71 calibrated','g']} }, // calibrated at validate
  { key:'corrob',    label:'corroborated',reveal:5, vals:{5:['2 sources','g']} },
  { key:'manip',     label:'manipulation',reveal:6, vals:{6:['0.12 low','']} },
  { key:'wallet',    label:'wallet_dna',  reveal:6, vals:{6:['smart_whale','g']} },
  { key:'regime',    label:'regime',      reveal:6, vals:{6:['risk-on','']} },
  { key:'score',     label:'score',       reveal:7, vals:{7:['1.38','g']} },
  { key:'band',      label:'quality_band',reveal:7, vals:{7:['A','g']} },
  { key:'emove',     label:'expected_move',reveal:7,vals:{7:['+2.4%','']} },
  { key:'conviction',label:'conviction',  reveal:8, vals:{8:['pending…','y'],9:['STRONG','strong']} }, // earned at proven gate
];

export function mountSignalCard(){
  const el=document.createElement('div'); el.id='sigcard'; el.innerHTML=`
    <div class="sc-head"><span class="sc-dot"></span><span id="sc-title">incoming item</span></div>
    <div class="sc-rows" id="sc-rows"></div>
    <div class="sc-foot" id="sc-foot">building…</div>`;
  document.body.appendChild(el);
  injectCSS();

  const rowsEl=el.querySelector('#sc-rows'), titleEl=el.querySelector('#sc-title'), footEl=el.querySelector('#sc-foot');
  const rows={};
  for(const f of SPEC){
    const r=document.createElement('div'); r.className='sc-row'; r.dataset.key=f.key;
    r.innerHTML=`<span class="sc-k">${f.label}</span><b class="sc-v">—</b>`;
    rowsEl.appendChild(r); rows[f.key]={el:r,v:r.querySelector('.sc-v'),shown:false,last:''};
  }

  let cur=-2;
  function update(stage){
    if(stage===cur) return; cur=stage;
    if(stage<0){ el.classList.remove('show'); return; }
    el.classList.add('show');

    for(const f of SPEC){
      const row=rows[f.key];
      // reveal
      const visible = stage>=f.reveal;
      row.el.classList.toggle('hidden', !visible);
      if(!visible){ row.shown=false; continue; }
      // pick the latest value whose stage-key <= current stage
      let chosen=null, chosenAt=-1;
      for(const k in f.vals){ const ki=+k; if(ki<=stage && ki>=chosenAt){ chosen=f.vals[k]; chosenAt=ki; } }
      if(chosen){
        const [text,cls]=chosen;
        const changed = row.last!==text;
        row.v.textContent=text;
        row.v.className='sc-v '+(cls||'');
        if(changed){
          // flash: green for new/added, gold for changed/embellished
          const flash = !row.shown ? 'add' : 'chg';
          row.el.classList.remove('add','chg'); void row.el.offsetWidth; row.el.classList.add(flash);
          row.last=text; row.shown=true;
        }
      }
    }

    // header + footer state machine
    if(stage<3){ titleEl.textContent='incoming item'; footEl.textContent='raw · unclassified'; footEl.className='sc-foot'; }
    else if(stage<8){ titleEl.textContent='signal · forming'; footEl.textContent='enriching · scoring'; footEl.className='sc-foot'; }
    else if(stage===8){ titleEl.textContent='signal · at the gate'; footEl.textContent='earning conviction…'; footEl.className='sc-foot y'; }
    else { titleEl.textContent='signal · DELIVERED'; footEl.textContent='persisted · broadcast → REST·WS·Webhooks·MCP·x402'; footEl.className='sc-foot g'; el.classList.add('delivered'); }
    if(stage<9) el.classList.remove('delivered');
  }

  return { el, update };
}

function injectCSS(){
  if(document.getElementById('sigcard-css')) return;
  const s=document.createElement('style'); s.id='sigcard-css'; s.textContent=`
  #sigcard{position:fixed;right:26px;top:50%;transform:translateY(-50%) translateX(20px);z-index:6;
    width:347px;font-family:var(--mono);font-size:.87rem;pointer-events:none;
    background:linear-gradient(180deg,rgba(6,12,9,.82),rgba(4,7,11,.72));
    border:1px solid #16241b;border-left:2px solid var(--accent);border-radius:6px;
    backdrop-filter:blur(10px);box-shadow:0 20px 60px rgba(0,0,0,.5);
    opacity:0;transition:opacity .45s,transform .45s;overflow:hidden}
  #sigcard.show{opacity:1;transform:translateY(-50%) translateX(0)}
  #sigcard.delivered{border-left-color:var(--accent);box-shadow:0 0 50px rgba(0,255,90,.22),0 20px 60px rgba(0,0,0,.5)}
  .sc-head{display:flex;align-items:center;gap:10px;padding:16px 18px 13px;border-bottom:1px solid #16241b;
    font-size:.72rem;letter-spacing:.26em;text-transform:uppercase;color:var(--accent)}
  .sc-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 8px var(--accent);animation:scp 1.4s infinite}
  @keyframes scp{0%,100%{opacity:1}50%{opacity:.35}}
  .sc-rows{padding:11px 18px;display:flex;flex-direction:column}
  .sc-row{display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px dashed #11201a;
    transition:background .4s;align-items:baseline}
  .sc-row.hidden{display:none}
  .sc-k{color:var(--mut);white-space:nowrap}
  .sc-v{color:var(--ink);font-weight:400;text-align:right}
  .sc-v.hi{color:#fff} .sc-v.g{color:var(--accent)} .sc-v.y{color:var(--gold)} .sc-v.dim{color:#5d6b62;font-style:italic}
  .sc-v.strong{color:#001a08;background:var(--accent);padding:1px 8px;border-radius:3px;font-weight:700;letter-spacing:.05em}
  /* field-add flash (green) and field-change flash (gold) */
  .sc-row.add{background:linear-gradient(90deg,transparent,rgba(0,255,90,.16))}
  .sc-row.chg{background:linear-gradient(90deg,transparent,rgba(255,210,74,.16))}
  .sc-foot{padding:13px 18px;border-top:1px solid #16241b;color:var(--mut);font-size:.66rem;letter-spacing:.1em;
    text-transform:uppercase;line-height:1.5}
  .sc-foot.g{color:var(--accent)} .sc-foot.y{color:var(--gold)}
  /* hide the old simpler #tele if present (this card supersedes it) */
  #tele{display:none!important}
  @media (max-width:760px){#sigcard{display:none}}
  `;
  document.head.appendChild(s);
}
