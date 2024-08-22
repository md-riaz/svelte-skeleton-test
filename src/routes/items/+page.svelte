<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<ul class="max-w-xs flex flex-col">
    {#each data.items as item}
           <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
    {item.title}
  </li>
    {/each}

</ul>