<!-- src/routes/chat/[id]/+page.svelte -->
<script>
	/** @type {{chatId: any, messages?: any}} */
	let { chatId, messages = $bindable([
		{ sender: 'Alice', content: 'Hey, how are you?' },
		{ sender: 'You', content: 'I’m good, thanks!' },
		{ sender: 'Alice', content: 'What’s up?' }
	]) } = $props();
	let newMessage = $state('');

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
	<button onclick={sendMessage} class="ml-2 rounded-lg bg-blue-500 p-2 text-white"> Send </button>
</div>
