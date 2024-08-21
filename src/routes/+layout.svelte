<script>
	import { setUserState } from '$lib/state.svelte';
	import '../app.css';

  const user = setUserState({name: 'mdriaz'});
</script>

<!-- src/routes/+layout.svelte -->
<nav class="bg-gray-800 text-white p-4">
  <a href="/" class="text-xl font-bold">SvelteKit Chat - {user.name}</a>
</nav>

<main class="p-4">
  <slot></slot>
</main>

