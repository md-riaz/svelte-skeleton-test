<script>
	import { navigating } from '$app/stores';
	import Loader from '$lib/components/loader.svelte';
	import { loading } from '$lib/store/loadingStore';
	import { setUserState } from '$lib/store/state.svelte';
	import '../app.css';

	const user = setUserState({ name: 'mdriaz' });

	$: loading.setNavigate(!!$navigating);
	$: loading.setLoading(!!$navigating, 'Loading, please wait...');
</script>

<Loader />

<slot></slot>
