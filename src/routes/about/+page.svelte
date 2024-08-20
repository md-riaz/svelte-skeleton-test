<script>
	const lorem =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.';

	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import Club from 'lucide-svelte/icons/club';
	import Diamond from 'lucide-svelte/icons/diamond';
	import Heart from 'lucide-svelte/icons/heart';
	import Spade from 'lucide-svelte/icons/spade';

	const value = $state(['club']);

	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>

<!-- Use a single column on small screens; show multiple columns at the medium breakpoit or wider -->
<div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
	<!-- Hide the sidebar on small screens; show at the medium breakpoint or wider -->
	<aside class="hidden md:block">(sidebar)</aside>
	<!-- Remains visible at all breakpoints -->
	<main>
		<Accordion {value}>
			<Accordion.Item value="club">
				<!-- Control -->
				{#snippet lead()}<Club size={24} />{/snippet}
				{#snippet control()}Club{/snippet}
				<!-- Panel -->
				{#snippet panel()}{lorem}{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<Accordion.Item value="diamond">
				{#snippet lead()}<Diamond size={24} />{/snippet}
				{#snippet control()}Diamond{/snippet}
				{#snippet panel()}{lorem}{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<Accordion.Item value="heart" disabled>
				{#snippet lead()}<Heart size={24} />{/snippet}
				{#snippet control()}Heart (disabled){/snippet}
				{#snippet panel()}{lorem}{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<Accordion.Item value="spade">
				{#snippet lead()}<Spade size={24} />{/snippet}
				{#snippet control()}Spade{/snippet}
				{#snippet panel()}{lorem}{/snippet}
			</Accordion.Item>
		</Accordion>

		<button onclick={increment}>
			clicks: {count}
		</button>

		<a href="/"> Go to Home</a>
	</main>
</div>
