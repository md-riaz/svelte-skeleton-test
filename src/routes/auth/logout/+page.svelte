<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { db } from '$lib/db';
	import { signOut } from '$lib/utils/api';
	import { onMount } from 'svelte';

	onMount(() => {
		signOut().finally(() => {
			// implement logout like clearing dexie db and navigating to /auth/login if db exists
			db.delete({disableAutoOpen: false});

			// navigate to /auth/login
			if (browser) {
				goto('/auth/login');
			}
		});
	});
</script>
