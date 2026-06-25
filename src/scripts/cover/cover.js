import { mountSignalCard } from './signalcard.js';
import { mountChannels } from './channels.js';
const sigcard=mountSignalCard();
const channels=mountChannels();

/* ============================================================================
   n0brains — VIDEO-BACKED RIDE
   Scroll-scrubbed video (currentTime = progress × duration) with the full
   text/HUD layer overlaid and synced to the timeline. The generated video is
   TEXT-FREE; every label here is sharp HTML/CSS on top, editable forever.
   Swap VIDEO_SRC for the final clean render — nothing else changes.
   ============================================================================ */

// Point this at the final clean (text-free) video when ready.
const VIDEO_SRC = '/pipeline_scrub.mp4';

const STAGES=[
 {no:"01",name:["Watchers ","fetch"],desc:"30+ watchers pull raw items — tweets, news, research, on-chain transfers, funding, liquidations, macro — converging into one intake.",meta:'<span class="k">intake</span> · 30+ feeds converging'},
 {no:"02",name:["Relevance ","sieve"],desc:"A mesh screens the flood. Non-crypto and already-seen items splatter against it; only crypto-relevant, unseen items pass.",meta:'<span class="d">blocked</span> non-crypto · <span class="d">blocked</span> already-seen'},
 {no:"03",name:["Ingest ","queue"],desc:"Survivors line up single-file in the buffer. Anything older than 60 minutes evaporates before it can cost an LLM call.",meta:'<span class="d">expire</span> age &gt; 3600s · else <span class="k">queued</span>'},
 {no:"04",name:["Classifier"],desc:"Structured feeds parse deterministically; the rest hit an LLM pool that stamps asset, type, direction, urgency, confidence.",meta:'LLM pool · 15 types · <span class="k">tagged</span>'},
 {no:"05",name:["Validate ","+ normalize"],desc:"A clamp crushes the malformed. Broken JSON, junk or blacklisted assets, and sub-0.4 confidence are ejected; the rest reshaped to one clean form.",meta:'<span class="d">reject</span> conf&lt;0.4 · junk asset · blacklist'},
 {no:"06",name:["Dedup ","collider"],desc:"Duplicate items slam together and merge. Content-hash and exact matches collapse; BGE-M3 semantic twins at 0.92 annihilate.",meta:'content · exact · <span class="d">semantic ≥ 0.92</span>'},
 {no:"07",name:["Enrichment ","core"],desc:"Seven intelligence layers lock into orbit: confidence decay, source accuracy, corroboration, manipulation, wallet DNA, trust, regime, historical edge.",meta:'<span class="k">+7 layers</span> attached'},
 {no:"08",name:["Scoring ","ladder"],desc:"score = source × urgency × decayed-confidence × IC. The item settles onto its band — A+ to D — with expected move and invalidation.",meta:'band A+ / A / B / C / D'},
 {no:"09",name:["Proven ","vault"],desc:"Only types proven per direction and regime — beating BTC, profitable at n≥30, clearing cost — pass as STRONG.",meta:'<span class="k">STRONG earned</span> · else notable / watch / <span class="d">none</span>'},
 {no:"10",name:["Delivery ","hub"],desc:"The survivor is persisted and forward-measured, then forks down six channels — REST, WebSocket, Webhooks, MCP, x402 (Agentic.Market) and a pip-installable CLI.",meta:'<span class="k">persist</span> · measure · broadcast ×6'},
];
const N=STAGES.length;

// Stage → normalized timeline window [start,end] (0..1 of video duration).
// Mapped to the actual beats of "Prompt 1 - HappyHorse1.1.mp4" (15.16s):
// intake 0-4s, sieve ~4s, queue ~5.5, classify(scanner) ~7, normalize ~8,
// dedup(collider) ~9.5, enrich ~10.5, score ~11.5, vault(gold door) ~12.5,
// delivery(5-port hub) ~14s. Edges as progress fractions (t/15.16).
const WINDOWS = [
  [0.00, 0.24],  // 01 watchers / intake
  [0.24, 0.34],  // 02 relevance sieve (magenta hex ~4s)
  [0.34, 0.44],  // 03 ingest queue
  [0.44, 0.52],  // 04 classifier (scanner beam ~7s)
  [0.52, 0.59],  // 05 validate/normalize
  [0.59, 0.67],  // 06 dedup collider (~9.5s)
  [0.67, 0.74],  // 07 enrichment
  [0.74, 0.80],  // 08 scoring
  [0.80, 0.87],  // 09 proven vault (gold door ~12.5s)
  [0.87, 1.00],  // 10 delivery hub (5-port fork ~14s)
];

// ---------- elements ----------
const video=document.getElementById('bg');
const intro=document.getElementById('intro'), final=document.getElementById('final'), load=document.getElementById('load');
const cap=document.getElementById('cap'), tele=document.getElementById('tele');
const cNo=cno,cName=cname,cDesc=cdesc,cMeta=cmeta,ePct=pct;
const railEl=document.getElementById('rail'),pips=[];for(let i=0;i<N;i++){const d=document.createElement('div');d.className='pip';railEl.appendChild(d);pips.push(d);}
document.getElementById('pid').textContent='#'+Math.floor(1000+Math.random()*9000);
const T={src:t_src,asset:t_asset,type:t_type,dir:t_dir,conf:t_conf,score:t_score,conv:t_conv};

function field(el,v,cls){if(el.textContent!==v){el.textContent=v;el.className=(cls||'')+' g0';requestAnimationFrame(()=>el.className=cls||'');}else el.className=cls||'';}
function setTele(i){
  field(T.src, i>=0?'farcaster':'—');
  field(T.asset, i>=3?'ETH':'—');
  field(T.type, i>=3?'whale_position':'—');
  field(T.dir, i>=3?'bullish':'—', i>=3?'g':'');
  field(T.conf, i>=6?'0.71':(i>=3?'0.66':'—'));
  field(T.score, i>=7?'1.38':'—');
  field(T.conv, i>=8?'STRONG':(i>=7?'pending':'—'), i>=8?'g':(i>=7?'y':''));
}
let cur=-2;
function setStage(i){
  if(i===cur)return; cur=i;
  if(i<0){cap.classList.remove('show');tele.classList.remove('show');return;}
  const s=STAGES[i];
  cNo.textContent='STAGE '+s.no+' / '+N;
  cName.innerHTML=s.name.map((t,k)=>k%2?'<b>'+t+'</b>':t).join('');
  cDesc.textContent=s.desc; cMeta.innerHTML=s.meta;
  cap.classList.add('show'); tele.classList.add('show'); setTele(i);
  pips.forEach((p,k)=>{p.classList.toggle('on',k===i);p.classList.toggle('done',k<i);});
}

// ---------- scroll → progress ----------
const scrollEl=document.getElementById('scroll'); scrollEl.style.height=((N+2)*100)+'vh';
const state={prog:0};
// vanilla scroll -> target (replaces GSAP ScrollTrigger scrub; no deps)
let targetProg=0;
const computeTarget=()=>{const max=document.documentElement.scrollHeight-innerHeight;targetProg=max>0?Math.min(1,Math.max(0,scrollY/max)):0;};
addEventListener('scroll',computeTarget,{passive:true});
addEventListener('resize',computeTarget);computeTarget();

// ---------- video load + scrub ----------
let duration=0, ready=false, seeking=false, wantT=0;
video.src=VIDEO_SRC;
video.addEventListener('loadedmetadata',()=>{ duration=video.duration||15; });
video.addEventListener('canplay',()=>{ ready=true; load&&load.classList.add('gone'); try{video.pause();}catch(e){} });
video.addEventListener('error',()=>{ load&&load.querySelector('span')&&(load.querySelector('span').textContent='video failed to load'); });

// drive currentTime toward the scroll target; coalesce seeks (one in flight)
function applySeek(){
  if(!ready||duration<=0) return;
  const target=Math.min(duration-0.05, Math.max(0, state.prog*duration));
  if(Math.abs(video.currentTime-target)<0.01) return;
  if(seeking){ wantT=target; return; }
  seeking=true; wantT=target;
  const onSeeked=()=>{ video.removeEventListener('seeked',onSeeked); seeking=false;
    if(Math.abs(video.currentTime-wantT)>0.02) applySeek(); };
  video.addEventListener('seeked',onSeeked);
  try{ video.currentTime=wantT; }catch(e){ seeking=false; }
}

// ---------- main loop ----------
function frame(){
  requestAnimationFrame(frame);
  state.prog += (targetProg - state.prog) * 0.12;
  const prog=state.prog;
  applySeek();
  intro.classList.toggle('gone',prog>0.01);
  const finalUp = prog>0.965;
  final.classList.toggle('show',finalUp);
  // once the final card scene is up, hide the lower-third stage caption so the
  // legal disclaimer and the final copy don't collide.
  cap.classList.toggle('cap-hidden', finalUp);

  // which stage window contains prog
  let si=-1; for(let i=0;i<N;i++){ if(prog>=WINDOWS[i][0]&&prog<WINDOWS[i][1]){si=i;break;} }
  if(prog<=0.012) si=-1; if(prog>=1) si=N-1;
  setStage(si);
  sigcard.update(si);     // progressive signal card fills out per stage
  channels.update(prog);  // 3D delivery-channel labels on the final fork
  ePct.textContent=String(Math.round(prog*100)).padStart(2,'0');
}
frame();

// ── Mobile decoder prime ──────────────────────────────────────────────────
// iOS/Android won't decode or seek a <video> that has never played, so on the
// first user gesture we play() then immediately pause() to wake the decoder.
// After that, scroll-scrubbing currentTime works. Runs once.
let primed=false;
function primeVideo(){
  if(primed) return; primed=true;
  const kick=()=>{ try{
    const p=video.play();
    if(p&&p.then) p.then(()=>{ try{video.pause();}catch(e){} }).catch(()=>{});
    else { try{video.pause();}catch(e){} }
  }catch(e){} };
  kick();
  // re-assert the scrub target once decoding is awake
  setTimeout(()=>{ applySeek(); },80);
}
['touchstart','pointerdown','scroll','click','keydown'].forEach(ev=>
  addEventListener(ev, primeVideo, {passive:true, once:true}));
// also try as soon as the video is ready (covers desktop + some mobile autoplay-muted)
video.addEventListener('canplay',()=>{ if(!primed){ try{
  const p=video.play(); if(p&&p.then) p.then(()=>{try{video.pause();}catch(e){}}).catch(()=>{});
}catch(e){} } },{once:true});
