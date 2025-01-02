<script>
    /**
     * @typedef {Object} Props
     * @property {string} [type]
     * @property {string} [value]
     * @property {string} [label]
     * @property {string} [placeholder]
     * @property {string} [id]
     * @property {boolean} [required]
     * @property {string} [errorMessage]
     * @property {string} [helperText]
     * @property {string} [name]
     */

    /** @type {Props} */
    let {
        type = 'text',
        name = 'input',
        value = $bindable(''),
        label = '',
        placeholder = '',
        id = '',
        required = false,
        errorMessage = '',
        helperText = ''
    } = $props();
</script>

<div>
    <label for={id} class="mb-2 block text-sm dark:text-white">{label}</label>
    <div class="relative">
        <input
            {id}
            {type}
            {name}
            bind:value
            {placeholder}
            {required}
            aria-describedby={id + '-helper'}
            class="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        />
    </div>
    {#if errorMessage}
        <p class="mt-2 text-xs text-red-600 dark:text-red-400" id={id + '-helper'}>
            {errorMessage}
        </p>
    {:else if helperText}
        <p class="mt-2 text-xs text-gray-600 dark:text-neutral-400" id={id + '-helper'}>
            {helperText}
        </p>
    {/if}
</div>
