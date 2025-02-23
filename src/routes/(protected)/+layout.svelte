<script lang="ts">
	import { pnSaveSubscription } from '$lib/utils/api.js';
	import { strAppPublicKey } from '$lib/utils/constants.js';
	import { onMount } from 'svelte';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children, data } = $props();
	
	$inspect(data.user);

	onMount(async () => {
		if ('serviceWorker' in navigator) {
			// Service worker supported

			// request notification permission
			const status = await Notification.requestPermission();

			if (status !== 'granted') {
				alert('Please allow notifications to make sure that the application works.');
			} else {
				const reg = await navigator.serviceWorker.ready;
				let sub = await reg.pushManager.getSubscription();
				if (!sub) {

					sub = await reg.pushManager.subscribe({
						userVisibleOnly: true,
						applicationServerKey: strAppPublicKey
					});
				}
				console.log(sub);

				// send the subscription to the server
				pnSaveSubscription(sub);
			}
		}
		// ...
	});
</script>

{@render children()}