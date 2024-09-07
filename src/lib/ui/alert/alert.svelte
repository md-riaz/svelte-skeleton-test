<script>

	import { X } from "lucide-svelte";
    
    let {show = false, msg, type='default'} = $$props;

    const dismiss = () => {
        show = false;
    }

</script>

{#if show}

<div class="p-4 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800">
    <div class="flex justify-between items-center gap-x-5 sm:gap-x-10">
      <div class="grow">
        <h2 class="text-sm text-gray-600 dark:text-neutral-400">
          {msg} 
        </h2>
      </div>
      <button onclick={dismiss} type="button" class="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:focus:bg-white/20 dark:focus:text-white" >
        <span class="sr-only">Dismiss</span>
        <X/>
      </button>
    </div>
  </div>
  
{/if}