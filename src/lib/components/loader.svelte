<script>
	
	import { loading } from '$lib/store/loadingStore';

	$effect(() => {
		if ($loading.status === 'NAVIGATING') {
			setTimeout(() => {
				if ($loading.status === 'NAVIGATING') {
					$loading.status = 'LOADING';
				}
			}, 100);
		}
	});
</script>

{#if $loading.status === 'LOADING'}
	<div
		class="fixed bottom-0 left-0 right-0 top-12 z-20 flex flex-col items-center justify-center bg-gradient-to-b from-[#d0dde9] to-[#edf0f8]"
	>
		<div
			class="h-20 w-20 animate-spin rounded-full border-4 border-t-4 border-[#b9c6d2] border-t-[#ff3e00]"
		></div>
		{#if $loading.message}
			<p class="mt-4 text-lg font-bold text-gray-700">{$loading.message}</p>
		{/if}
	</div>
{/if}
