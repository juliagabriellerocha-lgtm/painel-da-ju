"use strict";

const CACHE_NAME = "painel-da-ju-v25";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png",
  "./icon-maskable-512.png",
    "./fotos/avatar.jpg",   "./fotos/ju-01.jpg",   "./fotos/ju-02.jpg",   "./fotos/ju-03.jpg",   "./fotos/ju-04.jpg",   "./fotos/ju-05.jpg",   "./fotos/ju-06.jpg",   "./fotos/ju-07.jpg",   "./fotos/ju-08.jpg",   "./fotos/ju-09.jpg",   "./fotos/ju-10.jpg",   "./fotos/ju-11.jpg",   "./fotos/ju-12.jpg",   "./fotos/ju-13.jpg",   "./fotos/ju-14.jpg",   "./fotos/ju-15.jpg",   "./fotos/ju-16.jpg",   "./fotos/ju-17.jpg",   "./fotos/ju-18.jpg",   "./fotos/ju-19.jpg",   "./fotos/ju-20.jpg",   "./fotos/ju-21.jpg",   "./fotos/ju-22.jpg",   "./fotos/ju-23.jpg", 
  "./img/exercicios/cable-front-raise-peak.webp",
  "./img/exercicios/cable-front-raise-start.webp",
  "./img/exercicios/chest-press-machine-peak.webp",
  "./img/exercicios/chest-press-machine-start.webp",
  "./img/exercicios/chest-supported-machine-row-peak.webp",
  "./img/exercicios/chest-supported-machine-row-start.webp",
  "./img/exercicios/crunches-peak.webp",
  "./img/exercicios/crunches-start.webp",
  "./img/exercicios/dumbbell-shoulder-press-peak.webp",
  "./img/exercicios/dumbbell-shoulder-press-start.webp",
  "./img/exercicios/hack-squat-peak.webp",
  "./img/exercicios/hack-squat-start.webp",
  "./img/exercicios/hammer-curl-peak.webp",
  "./img/exercicios/hammer-curl-start.webp",
  "./img/exercicios/hip-abduction-peak.webp",
  "./img/exercicios/hip-abduction-start.webp",
  "./img/exercicios/hip-adduction-peak.webp",
  "./img/exercicios/hip-adduction-start.webp",
  "./img/exercicios/hip-thrust-peak.webp",
  "./img/exercicios/hip-thrust-start.webp",
  "./img/exercicios/horizontal-leg-press-peak.webp",
  "./img/exercicios/horizontal-leg-press-start.webp",
  "./img/exercicios/lateral-raise-peak.webp",
  "./img/exercicios/lateral-raise-start.webp",
  "./img/exercicios/leg-curl-peak.webp",
  "./img/exercicios/leg-curl-start.webp",
  "./img/exercicios/leg-extension-peak.webp",
  "./img/exercicios/leg-extension-start.webp",
  "./img/exercicios/leg-press-peak.webp",
  "./img/exercicios/leg-press-start.webp",
  "./img/exercicios/standing-leg-curl-start.webp",
  "./img/exercicios/standing-leg-curl-peak.webp",
  "./img/exercicios/single-leg-press-start.webp",
  "./img/exercicios/single-leg-press-peak.webp",
  "./img/exercicios/machine-preacher-curl-peak.webp",
  "./img/exercicios/machine-preacher-curl-start.webp",
  "./img/exercicios/machine-reverse-fly-peak.webp",
  "./img/exercicios/machine-reverse-fly-start.webp",
  "./img/exercicios/pec-deck-peak.webp",
  "./img/exercicios/pec-deck-start.webp",
  "./img/exercicios/plank-main.webp",
  "./img/exercicios/reverse-grip-lat-pulldown-peak.webp",
  "./img/exercicios/reverse-grip-lat-pulldown-start.webp",
  "./img/exercicios/seated-calf-raise-peak.webp",
  "./img/exercicios/seated-calf-raise-start.webp",
  "./img/exercicios/seated-leg-curl-peak.webp",
  "./img/exercicios/seated-leg-curl-start.webp",
  "./img/exercicios/smith-machine-bent-over-row-peak.webp",
  "./img/exercicios/smith-machine-bent-over-row-start.webp",
  "./img/exercicios/smith-machine-squat-peak.webp",
  "./img/exercicios/smith-machine-squat-start.webp",
  "./img/exercicios/standing-calf-raise-peak.webp",
  "./img/exercicios/standing-calf-raise-start.webp",
  "./img/exercicios/straight-arm-pulldown-peak.webp",
  "./img/exercicios/straight-arm-pulldown-start.webp",
  "./img/exercicios/sumo-squat-peak.webp",
  "./img/exercicios/sumo-squat-start.webp",
  "./img/exercicios/tricep-pushdown-peak.webp",
  "./img/exercicios/tricep-pushdown-start.webp",
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;
  const sdk = url.hostname === "cdn.jsdelivr.net" || url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!sameOrigin && !sdk) return; // dados da conta (Supabase) nunca passam pelo cache
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
        return response;
      }).catch(() => caches.match("./index.html"))
    );
    return;
  }
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(response => {
      if (response.ok || response.type === "opaque") {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      }
      return response;
    }))
  );
});
