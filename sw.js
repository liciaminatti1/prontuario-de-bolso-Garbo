/* Service worker: guarda o app no aparelho para funcionar sem internet.
   Estratégia "rede primeiro": com internet, sempre busca a versão mais nova;
   sem internet, usa a última cópia salva. Ao mudar o conteúdo não é preciso mexer aqui:
   o index.html carrega cada arquivo com ?v=<impressão digital> (ferramentas/gerar-indice.js). */
const CACHE = "prontuario-de-bolso-v9";

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "index.html", "css/estilo.css", "js/registro.js", "js/perfil.js", "js/medicamentos.js", "js/scores.js", "js/calculadoras.js", "js/documentos.js", "js/pacientes.js", "js/app.js", "manifest.webmanifest"])));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    // cache: "no-cache" obriga o navegador a confirmar com o servidor, em vez de usar a cópia HTTP guardada.
    fetch(e.request, { cache: "no-cache" })
      .then(r => { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
