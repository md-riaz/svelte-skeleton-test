<script>
	import { variables } from '$lib/utils/constants';

	import { getUserState } from '$lib/store/state.svelte';

	const user = getUserState();

	console.log('user', user);
	

	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import { X } from 'lucide-svelte';

	let group = $state('plane');
	const lorem =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.';

	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>
<div class="p-4 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800">
    <div class="flex justify-between items-center gap-x-5 sm:gap-x-10">
      <div class="grow">
        <h2 class="text-sm text-gray-600 dark:text-neutral-400">
          By continuing to use this site you consent to the use of cookies in accordance with our 
        </h2>
      </div>
      <button type="button" class="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:focus:bg-white/20 dark:focus:text-white" >
        <span class="sr-only">Dismiss</span>
        <X/>
      </button>
    </div>
  </div>
<!-- Use a single column on small screens; show multiple columns at the medium breakpoit or wider -->
<div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
	<!-- Hide the sidebar on small screens; show at the medium breakpoint or wider -->
	<aside class="hidden md:block">
		(sidebar) - {variables.BASE_API_URI}
	</aside>
	<!-- Remains visible at all breakpoints -->
	<main>
		<Tabs bind:value={group}>
			{#snippet list()}
				<Tabs.Control value="plane">Plane</Tabs.Control>
				<Tabs.Control value="boat">Boat</Tabs.Control>
				<Tabs.Control value="car">Car</Tabs.Control>
			{/snippet}
			{#snippet content()}
				<Tabs.Panel value="plane">Plane Panel - {lorem}</Tabs.Panel>
				<Tabs.Panel value="boat">Boat Panel - {lorem}</Tabs.Panel>
				<Tabs.Panel value="car">Car Panel - {lorem}</Tabs.Panel>
			{/snippet}
		</Tabs>

		<button onclick={increment}>
			clicks: {count}
		</button>

		<a href="/about" class="btn btn-lg bg-lime-600">Go to About</a>
		<a href="/chat" class="btn btn-lg bg-lime-600">Go to Chat</a>
		<a href="/items" class="btn btn-lg bg-lime-600">Go to Items</a>
		<a href="/auth/login" class="btn btn-lg bg-lime-600">Go to Login page</a>

		{#if $user.user}
			<p>Logged in as {$user.user.name}</p>
		{:else}
			<p>Not logged in</p>
		{/if}
	</main>
</div>
