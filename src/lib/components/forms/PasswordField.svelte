<script>
    import { Eye, EyeOff } from 'lucide-svelte';

    /**
     * @typedef {Object} Props
     * @property {string} id
     * @property {any} label
     * @property {any} value
     * @property {boolean} [required]
     */

    /** @type {Props} */
    let {
        id = 'password',
        label = 'Password',
        value = $bindable(),
        required = false
    } = $props();

    let showPassword = $state(false);
</script>

<div>
    <label for={id} class="block text-sm mb-2">{label}</label>
    <div class="relative">
        <input
            id={id}
            type={showPassword ? 'text' : 'password'}
            required={required}
            bind:value={value}
            class="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        />
        <button
            type="button"
            onclick={() => (showPassword = !showPassword)}
            class="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
            {#if showPassword}
                <EyeOff />
            {/if}
            {#if !showPassword}
                <Eye />
            {/if}
        </button>
    </div>
</div>
