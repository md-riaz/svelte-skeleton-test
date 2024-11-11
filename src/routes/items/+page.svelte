<script>
	
	/** @type {{data: import('./$types').PageData}} */
	let { data } = $props();
</script>

<ul class="flex max-w-xs flex-col">
	{#each data.items as item}
		<li
			class="-mt-px inline-flex items-center gap-x-2 border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 first:mt-0 first:rounded-t-lg last:rounded-b-lg dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
		>
			{item.title}
		</li>
	{/each}
</ul>
