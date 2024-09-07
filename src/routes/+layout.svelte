<script>
	import { navigating } from '$app/stores';
	import Loader from '$lib/components/loader.svelte';
	import { loading } from '$lib/store/loadingStore';
	import { setUserState } from '$lib/store/state.svelte';
	import { user as userState } from '$lib/store/userState';
	import '../app.css';

	setUserState(userState);

	$: loading.setNavigate(!!$navigating);
	$: loading.setLoading(!!$navigating, 'Loading, please wait...');
</script>

<Loader />

<slot></slot>
