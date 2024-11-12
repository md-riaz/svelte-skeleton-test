<script>
	import { goto } from "$app/navigation";
	import { db } from "$lib/db";


// implement logout like clearing dexie db and navigating to /auth/login
db.delete();

// navigate to /auth/login
goto("/auth/login");
</script>