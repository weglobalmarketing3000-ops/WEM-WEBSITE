const CursorStars=()=>{React.useEffect(()=>{const isTouch=window.matchMedia("(pointer: coarse)").matches;const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(isTouch||reduced)return;if(!document.getElementById("cursor-stars-css")){const css=document.createElement("style");css.id="cursor-stars-css";css.textContent=`
@keyframes cs-trail-twinkle {
  0%   { opacity: .95; transform: translate(-50%, -50%) translateX(var(--cs-drift-x,0)) scale(1); }
  100% { opacity: 0;  transform: translate(-50%, calc(-50% - 14px)) translateX(var(--cs-drift-x,0)) scale(.5); }
}
@keyframes cs-burst-star {
  0%   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% + var(--cs-burst-x,0)), calc(-50% + var(--cs-burst-y,0))) scale(.4); }
}
.cs-trail, .cs-burst {
  position: fixed; pointer-events: none; border-radius: 50%;
  background: radial-gradient(circle, #FFFFFF 0%, #FFF4B8 50%, rgba(255,233,168,.4) 75%, transparent 100%);
  box-shadow: 0 0 4px rgba(255,255,255,.9), 0 0 10px rgba(255,244,184,.6);
  filter: blur(.3px);
  z-index: 9998;
  will-change: transform, opacity;
}
.cs-trail { animation: cs-trail-twinkle 900ms ease-out forwards; }
.cs-burst {
  z-index: 9999;
  background: radial-gradient(circle, #FFFFFF 0%, #FFF4B8 55%, rgba(255,233,168,.3) 80%, transparent 100%);
  box-shadow: 0 0 8px rgba(255,255,255,1), 0 0 18px rgba(255,244,184,.8), 0 0 30px rgba(255,220,130,.4);
  filter: blur(.5px);
  animation: cs-burst-star 1100ms ease-out forwards;
}
.cs-warm {
  background: radial-gradient(circle, #FFF8DC 0%, #FFE9A8 60%, transparent 100%);
  box-shadow: 0 0 5px rgba(255,233,168,.9), 0 0 12px rgba(255,220,130,.5);
}
      `;document.head.appendChild(css)}const MAX=150;const live=new Set;const reap=el=>{el.remove();live.delete(el)};const cap=()=>{while(live.size>=MAX){const first=live.values().next().value;if(!first)break;reap(first)}};const spawnTrail=(x,y)=>{cap();const star=document.createElement("div");star.className="cs-trail"+(Math.random()<.3?" cs-warm":"");const size=4+Math.random()*4;const life=800+Math.random()*400;star.style.width=size+"px";star.style.height=size+"px";star.style.left=x+"px";star.style.top=y+"px";star.style.animationDuration=life+"ms";star.style.setProperty("--cs-drift-x",(Math.random()-.5)*12+"px");document.body.appendChild(star);live.add(star);star.addEventListener("animationend",()=>reap(star))};const spawnBurst=(x,y)=>{const count=8+Math.floor(Math.random()*7);for(let i=0;i<count;i++){cap();const star=document.createElement("div");star.className="cs-burst"+(Math.random()<.3?" cs-warm":"");const size=8+Math.random()*6;star.style.width=size+"px";star.style.height=size+"px";star.style.left=x+"px";star.style.top=y+"px";const angle=Math.PI*2*i/count+(Math.random()-.5)*.4;const dist=30+Math.random()*50;star.style.setProperty("--cs-burst-x",Math.cos(angle)*dist+"px");star.style.setProperty("--cs-burst-y",Math.sin(angle)*dist+"px");document.body.appendChild(star);live.add(star);star.addEventListener("animationend",()=>reap(star))}};let lastSpawn=0;const onMove=e=>{const now=performance.now();if(now-lastSpawn<30)return;lastSpawn=now;spawnTrail(e.clientX,e.clientY)};const onClick=e=>spawnBurst(e.clientX,e.clientY);document.addEventListener("mousemove",onMove,{passive:true});document.addEventListener("click",onClick);return()=>{document.removeEventListener("mousemove",onMove);document.removeEventListener("click",onClick);live.forEach(el=>el.remove());live.clear()}},[]);return null};window.CursorStars=CursorStars;
