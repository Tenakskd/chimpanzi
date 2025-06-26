//mathematics to respect,geography to scratch, english to turbowarp,
importScripts("/respect/respect.js");
importScripts("/respect/scratch.js");
importScripts("/respect/turbowarp.js");


const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
