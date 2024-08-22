<script>
	import { navigating } from '$app/stores';
	import { setUserState } from '$lib/store/state.svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';

	const user = setUserState({ name: 'mdriaz' });

	// $: loading.setNavigate(!!$navigating);
	// $: loading.setLoading(!!$navigating, 'Loading, please wait...');
</script>

<!-- <Loader /> -->

{#if $navigating}
	<!-- content here -->
	<span class="navigating" in:fade={{ delay: 1000, duration: 150 }} out:fade={{duration:150}}>
	Navigating to {$navigating?.to?.url.pathname}	
	</span>
{/if}

<slot></slot>
