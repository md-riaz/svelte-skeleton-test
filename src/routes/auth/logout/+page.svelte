<script>
	import { browser } from '$app/environment';
	import { db } from '$lib/db';

	// implement logout like clearing dexie db and navigating to /auth/login if db exists
	if (db.isOpen()) {
		db.close();
		db.delete();
	}

	// navigate to /auth/login
	if (browser) {
		window.location.href = '/auth/login';
	}
</script>
