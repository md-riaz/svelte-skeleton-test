<script>
	let { loading = 0, defaultText } = $props();
	import { LoaderCircle } from 'lucide-svelte';

</script>

<button
	type="submit"
	class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
	disabled={loading > 0}
>
	{#if loading}
		<!-- content here -->
		<LoaderCircle class="animate-spin" /> Processing...
	{:else}
		<!-- else content here -->
		{defaultText}
	{/if}
</button>
