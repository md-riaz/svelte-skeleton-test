<script lang="ts">
	import { user } from '$lib/store/userState.svelte.js';



	/** @type {{children?: import('svelte').Snippet}} */
	let { children, data } = $props();

	if (data.userInfo.hasOwnProperty('auth_token')) {
		user.auth_token = data.userInfo.auth_token;
		user.services = data.userInfo.services;
		user.settings = data.userInfo.settings;
		user.info = data.userInfo.info;
	}

</script>

{@render children()}