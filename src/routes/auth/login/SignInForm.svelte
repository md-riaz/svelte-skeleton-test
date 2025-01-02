<script lang="ts">
	import { goto } from '$app/navigation';
	import InputField from '$lib/components/forms/InputField.svelte';
	import PasswordField from '$lib/components/forms/PasswordField.svelte';
	import SubmitButton from '$lib/components/forms/SubmitButton.svelte';
	import { db, saveUserData } from '$lib/db';
	import { user } from '$lib/store/userState.svelte';
	import { signIn } from '$lib/utils/api';
	import { triggerError } from '$lib/utils/errorHandler';
	import { getContext } from 'svelte';

	let email = $state('');
	let password = $state('');
	let isLoading = $state(0);

	let toastContext = getContext('toast');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isLoading = 1;

		try {
			const resp = await signIn({ email, password });

			console.log('Sign-in response:', resp);

			if (resp.error != 0) {
				// throw error
				throw new Error(resp.msg);
			}

			resp.data.token = resp.token;

			// need to use store for storing user data as context can't be used here
			await saveUserData(resp.data);

			user.auth_token = await db.user.get('auth_token');
			user.services = JSON.parse(await db.user.get('services'));
			user.settings = JSON.parse(await db.user.get('settings'));
			user.info = JSON.parse(await db.user.get('info'));

			// Redirect to the dashboard
			goto('/');
		} catch (error) {
			if (error instanceof Error) {
				triggerError(error.message, toastContext);
			}
		} finally {
			isLoading = 0;
		}
	}
</script>

<form onsubmit={handleSubmit}>
	<div class="grid gap-y-4">
		<!-- Form Group -->
		<InputField id="email" type="email" label="Email" bind:value={email} required />

		<!-- End Form Group -->

		<!-- Form Group -->
		<PasswordField id="password" label="Password" bind:value={password} required />
		<!-- End Form Group -->

		<!-- Submit Button -->
		<SubmitButton loading={isLoading} defaultText="Sign in" />
	</div>
</form>
