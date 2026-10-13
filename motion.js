/* Shared, deterministic scroll choreography. The browser and checks use the same math. */
(function(root){
 const clamp=(x,min=0,max=1)=>Math.max(min,Math.min(max,x));
 const range=(x,a,b)=>clamp((x-a)/(b-a));
 const ease=x=>x*x*(3-2*x);
 function arrival(p){p=clamp(p);const doors=ease(range(p,0,.32));return{doors,roomScale:1+ease(range(p,.05,.66))*.68,tableOpacity:ease(range(p,.49,.7)),tableScale:1.22-.22*ease(range(p,.52,1)),welcomeOpacity:1-range(p,.03,.23),welcomeY:-95*range(p,.03,.28),tableTitleOpacity:ease(range(p,.69,.84)),tableTitleY:50*(1-ease(range(p,.69,.9))),chapter:p<.49?0:1}}
 function menu(p){return Math.min(3,Math.floor(clamp(p)*4))}
 const api={clamp,range,ease,arrival,menu};root.QuelPostoMotion=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
