/** @type {import('./$types').PageLoad} */

export async function load({ parent }) {
	await parent();
	console.log('about page run');

	return {};
}
