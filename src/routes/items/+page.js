/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const delay = (/** @type {number | undefined} */ ms) => new Promise((res) => setTimeout(res, ms));

	const rest = await fetch('https://jsonplaceholder.typicode.com/posts', {
		headers: {
			'Authorization': 'application/json',
		},
	});
	const items = await rest.json();

	await delay(5000);

	return {
		items
	};
}
