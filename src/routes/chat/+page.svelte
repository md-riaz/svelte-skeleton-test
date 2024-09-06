<!-- src/routes/chat/+page.svelte -->
<script>
	export let chats = [
		{ id: 1, name: 'Chat with Alice', lastMessage: 'Hey, how are you?' },
		{ id: 2, name: 'Chat with Bob', lastMessage: 'Let’s catch up later.' },
		{ id: 3, name: 'Chat with Charlie', lastMessage: 'Got the files?' }
	];
</script>

<h1 class="mb-4 text-2xl font-bold">Chats</h1>

<ul class="list-none p-0">
	{#each chats as chat}
		<li class="mb-4 rounded-lg border border-gray-300 p-4 hover:bg-gray-100">
			<a href={`/chat/${chat.id}`} class="block text-lg font-semibold">
				{chat.name}
			</a>
			<p class="text-gray-500">{chat.lastMessage}</p>
		</li>
	{/each}
</ul>
