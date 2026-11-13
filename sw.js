const C='lodamlee-v4';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)).catch(()=>{}))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET')return;
  if(new URL(r.url).origin!==location.origin){return}
  e.respondWith(caches.match(r).then(h=>h||fetch(r).then(res=>{
    const cl=res.clone(); caches.open(C).then(c=>c.put(r,cl).catch(()=>{})); return res;
  }).catch(()=>caches.match('./index.html'))));
});
