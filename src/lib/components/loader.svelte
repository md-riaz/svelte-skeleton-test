<script>
    import { loading } from '$lib/store/loadingStore';

    $: if ($loading.status === 'NAVIGATING') {
        setTimeout(() => {
            if ($loading.status === 'NAVIGATING') {
                $loading.status = 'LOADING';
            }
        }, 100);
    }
</script>

{#if $loading.status === 'LOADING'}
    <div class="fixed top-12 left-0 right-0 bottom-0 bg-gradient-to-b from-[#d0dde9] to-[#edf0f8] z-20 flex flex-col items-center justify-center">
        <div class="w-20 h-20 border-4 border-t-4 border-t-[#ff3e00] border-[#b9c6d2] rounded-full animate-spin"></div>
        {#if $loading.message}
            <p class="mt-4 text-lg font-bold text-gray-700">{$loading.message}</p>
        {/if}
    </div>
{/if}