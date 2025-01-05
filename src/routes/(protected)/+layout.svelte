<script lang="ts">
	/** @type {{children?: import('svelte').Snippet}} */
	let { children, data } = $props();
	
	$inspect(data.user);
</script>

{@render children()}