<script>
	
	import Loader from '$lib/components/loader.svelte';
	import { loading } from '$lib/store/loadingStore';

	import { variables } from '$lib/utils/constants';
	import { ToastProvider } from '@skeletonlabs/skeleton-svelte';
	import '../app.css';
	
	import { navigating, page } from '$app/state';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	$effect(() => {
		$inspect(navigating);
		loading.setNavigate(!!navigating.to);
		loading.setLoading(!!navigating.to, 'Loading, please wait...');
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
