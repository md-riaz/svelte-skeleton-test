<script lang="ts">
	import { page } from '$app/stores';

	import { navigating } from '$app/stores';
	import Loader from '$lib/components/loader.svelte';
	import { loading } from '$lib/store/loadingStore';
	import { setUserState } from '$lib/store/state.svelte';

	import { variables } from '$lib/utils/constants';
	import { ToastProvider } from '@skeletonlabs/skeleton-svelte';
	import '../app.css';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();


	setUserState({});

	$effect(() => {
		loading.setNavigate(!!$navigating);
		loading.setLoading(!!$navigating, 'Loading, please wait...');
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
