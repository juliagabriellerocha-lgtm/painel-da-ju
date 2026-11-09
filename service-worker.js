"use strict";

const CACHE_NAME = "painel-da-ju-v15";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png",
  "./icon-maskable-512.png",
    "./fotos/avatar.jpg",   "./fotos/ju-01.jpg",   "./fotos/ju-02.jpg",   "./fotos/ju-03.jpg",   "./fotos/ju-04.jpg",   "./fotos/ju-05.jpg",   "./fotos/ju-06.jpg",   "./fotos/ju-07.jpg",   "./fotos/ju-08.jpg",   "./fotos/ju-09.jpg",   "./fotos/ju-10.jpg",   "./fotos/ju-11.jpg",   "./fotos/ju-12.jpg",   "./fotos/ju-13.jpg",   "./fotos/ju-14.jpg",   "./fotos/ju-15.jpg",   "./fotos/ju-16.jpg",   "./fotos/ju-17.jpg",   "./fotos/ju-18.jpg",   "./fotos/ju-19.jpg",   "./fotos/ju-20.jpg",   "./fotos/ju-21.jpg",   "./fotos/ju-22.jpg",   "./fotos/ju-23.jpg", 
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
