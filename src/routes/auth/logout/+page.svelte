<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { db } from '$lib/db';

	// implement logout like clearing dexie db and navigating to /auth/login if db exists
	db.delete({disableAutoOpen: false});

	// navigate to /auth/login
	if (browser) {
		goto('/auth/login');
	}
</script>
