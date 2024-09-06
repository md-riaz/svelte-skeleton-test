<!-- src/routes/chat/[id]/+page.svelte -->
<script>
	export let chatId;
	export let messages = [
		{ sender: 'Alice', content: 'Hey, how are you?' },
		{ sender: 'You', content: 'I’m good, thanks!' },
		{ sender: 'Alice', content: 'What’s up?' }
	];
	let newMessage = '';

	function sendMessage() {
		if (newMessage.trim()) {
			messages = [...messages, { sender: 'You', content: newMessage }];
			newMessage = '';
		}
	}
</script>

<h1 class="mb-4 text-2xl font-bold">Chat {chatId}</h1>

<div class="chat-history mb-4">
	{#each messages as message}
		<div class="mb-2">
			<strong>{message.sender}:</strong>
			<span>{message.content}</span>
		</div>
	{/each}
</div>

<div class="send-message flex">
	<input
		type="text"
		bind:value={newMessage}
		placeholder="Type a message"
		class="flex-1 rounded-lg border border-gray-300 p-2"
	/>
	<button on:click={sendMessage} class="ml-2 rounded-lg bg-blue-500 p-2 text-white"> Send </button>
</div>
