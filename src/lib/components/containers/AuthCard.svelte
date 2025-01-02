<script>
    /**
     * @typedef {Object} Props
     * @property {string} [title]
     * @property {string} [description]
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { title = '', description = '', children } = $props();

</script>

<div class="p-4 sm:p-7">
    
    <div class="text-center">
        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">{title}</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">{@html description}</p>
    </div>
    {@render children?.()}
</div>
