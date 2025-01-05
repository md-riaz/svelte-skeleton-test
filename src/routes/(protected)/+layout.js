import { goto } from '$app/navigation';
import { user } from '$lib/store/user.svelte';

export const ssr = false;
export const csr = true;
export const prerender = false;
export const trailingSlash = 'always';

export async function load() {

	await user.init();

	if (!user.auth_token) {
		goto('auth/login');
		return;
	}

	console.log(user);
	

	return { user};
}
