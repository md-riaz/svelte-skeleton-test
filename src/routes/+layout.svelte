<script>
	
	import Loader from '$lib/components/loader.svelte';
	import { loading } from '$lib/store/loadingStore';

	import { variables } from '$lib/utils/constants';
	import { ToastProvider } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	
	import { navigating, page } from '$app/state';
	import { pnSaveSubscription } from '$lib/utils/api';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	$effect(() => {
		$inspect(navigating);
		loading.setNavigate(!!navigating.to);
		loading.setLoading(!!navigating.to, 'Loading, please wait...');
	});

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
					const strAppPublicKey =
						'BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo';

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

<svelte:head>
	<title>
		{page?.url?.pathname != '/'
			? `${page?.url?.pathname
					?.slice(1)
					.split('/')
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(' ')} | ${variables.APP_NAME}`
			: variables.APP_NAME}
	</title>
</svelte:head>

<Loader />

<ToastProvider placement="top-end">
	{#if children}
		{@render children()}
	{/if}
</ToastProvider>
