<script>
	import { variables } from '$lib/utils/constants';

	import { getUserState } from '$lib/store/state.svelte';

	const user = getUserState();

	import { Tabs } from '@skeletonlabs/skeleton-svelte';

	let group = $state('plane');
	const lorem =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.';

	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>


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

		{#if user}
			<p>Logged in as {user.name}</p>
		{:else}
			<p>Not logged in</p>
		{/if}
	</main>
</div>
