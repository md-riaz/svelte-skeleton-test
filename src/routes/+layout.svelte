<script lang="ts">
	import { page } from '$app/stores';

	import { navigating } from '$app/stores';
	import Loader from '$lib/components/loader.svelte';
	import { loading } from '$lib/store/loadingStore';

	import { variables } from '$lib/utils/constants';
	import { ToastProvider } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import '../app.css';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	$effect(() => {
		loading.setNavigate(!!$navigating);
		loading.setLoading(!!$navigating, 'Loading, please wait...');
	});

	onMount(async () => {
		if ('serviceWorker' in navigator) {
			// Service worker supported

			// check if the notification permission already exists
			if (Notification.permission == 'granted') {
				const status = await Notification.requestPermission();

				if (status !== 'granted') {
					alert('Please allow notifications to make sure that the application works.');
				}

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
			}
		}
		// ...
	});
</script>

<svelte:head>
	<title>
		{$page?.url?.pathname != '/'
			? `${$page?.url?.pathname
					?.slice(1)
					.split('/')
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(' ')} | ${variables.APP_NAME}`
			: variables.APP_NAME}
	</title>
</svelte:head>

<Loader />

<ToastProvider placement="top-end">
	{@render children()}
</ToastProvider>
