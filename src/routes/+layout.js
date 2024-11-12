import { db } from '$lib/db';

export const ssr = false;
export const csr = true;
export const prerender = false;
export const trailingSlash = 'always';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	const userInfo = await db.user.get('info');

	return {
		userInfo: userInfo ? JSON.parse(userInfo) : {}
	};
}
