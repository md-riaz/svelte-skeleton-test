/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
    ...build, // the app itself
    ...files  // everything in `static`
];

self.addEventListener('install', (event) => {
    // Create a new cache and add all files to it
    async function addFilesToCacheAndSkipWaiting() {
        const cache = await caches.open(CACHE);
        try {
            await cache.addAll(ASSETS);
            await self.skipWaiting();
        }
        catch (error) {
            console.error('Failed to cache:', error);
            for (const asset of ASSETS) {
                try {
                    await cache.add(asset);
                } catch (e) {
                    console.error('Failed to cache asset:', asset, e);
                }
            }
        }
    }

    event.waitUntil(addFilesToCacheAndSkipWaiting());
});

self.addEventListener('activate', (event) => {
    // Remove previous cached data from disk
	async function deleteOldCachesAndClaimClients() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	
		await self.clients.claim();
	}
	
	event.waitUntil(deleteOldCachesAndClaimClients());
});

self.addEventListener('fetch', (event) => {
    // ignore POST requests etc
    if (event.request.method !== 'GET') return;

    async function respond() {
        const url = new URL(event.request.url);
        const cache = await caches.open(CACHE);

        // `build`/`files` can always be served from the cache
        if (ASSETS.includes(url.pathname)) {
            const response = await cache.match(url.pathname);

            if (response) {
                return response;
            }
        }

        // for everything else, try the network first, but
        // fall back to the cache if we're offline
        try {
            const response = await fetch(event.request);

            // if we're offline, fetch can return a value that is not a Response
            // instead of throwing - and we can't pass this non-Response to respondWith
            if (!(response instanceof Response)) {
                throw new Error('invalid response from fetch');
            }

            // Check if the request scheme is http or https
            if (url.protocol === 'http:' || url.protocol === 'https:') {

                if (response.status === 200) {
                    cache.put(event.request, response.clone());
                }

            }

            return response;
        } catch (err) {
            const response = await cache.match(event.request);

            if (response) {
                return response;
            }

            // if there's no cache, then just error out
            // as there is nothing we can do to respond to this request
            throw err;
        }
    }

    event.respondWith(respond());
});

self.addEventListener('push', function (event) {
	try {
		const payload = event.data
			? event.data.json()
			: { title: 'Appreciation Jar', body: 'There is new content in your Appreciation Jar!' }; // Basically a fallback message in case something goes wrong

		if (payload) {
			const { title, ...options } = payload;

			event.waitUntil(sw.registration.showNotification(title, options));
		} else {
			console.warn('No payload for push event', event);
		}

		// TODO: We can also implement analytics for received pushes as well if we want:
		// https://web.dev/push-notifications-handling-messages/#wait-until
	} catch (e) {
		console.warn('Malformed notification', e);
	}
});
