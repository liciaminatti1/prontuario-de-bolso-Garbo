/* Service worker: guarda o app no aparelho para funcionar sem internet.
   Estratégia "rede primeiro": com internet, sempre busca a versão mais nova;
   sem internet, usa a última cópia salva. Ao mudar o conteúdo não é preciso mexer aqui. */
const CACHE = "prontuario-de-bolso-v1";

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "index.html", "css/estilo.css", "js/registro.js", "js/app.js", "manifest.webmanifest"])));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
