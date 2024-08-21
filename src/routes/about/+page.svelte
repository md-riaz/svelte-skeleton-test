<script>
	import { getUserState } from '$lib/state.svelte';

	let user = getUserState();

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
		{user.name}
		<button onclick={increment}>
			clicks: {count}
		</button>

		<a href="/"> Go to Home</a>
	</main>
</div>
