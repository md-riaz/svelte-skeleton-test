import { db } from "$lib/db";

export const ssr = false;
export const csr = true;
export const prerender = false;
export const trailingSlash = 'always';


export async function load() {
	const userInfo = {};

	// Fetch user info from the database
	userInfo.auth_token = await db.user.get('auth_token');
	userInfo.services = JSON.parse(await db.user.get('services'));
	userInfo.settings = JSON.parse(await db.user.get('settings'));
	userInfo.info = JSON.parse(await db.user.get('info'));

	return {
		userInfo: userInfo ?? {}
	};
}
