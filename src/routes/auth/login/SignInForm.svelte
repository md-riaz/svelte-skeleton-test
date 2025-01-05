<script>
	import { goto } from '$app/navigation';
	import InputField from '$lib/components/forms/InputField.svelte';
	import PasswordField from '$lib/components/forms/PasswordField.svelte';
	import SubmitButton from '$lib/components/forms/SubmitButton.svelte';
	import { user } from '$lib/store/user.svelte';

	import { fetchUserPolicies, signIn } from '$lib/utils/api';
	import { triggerError } from '$lib/utils/errorHandler';
	import { getContext } from 'svelte';

	let email = $state('mashikur@gmail.com');
	let password = $state('adminadmin');
	let isLoading = $state(0);

	let toastContext = getContext('toast');

	/**
	 * @param {{ preventDefault: () => void; }} e
	 */
	async function handleSubmit(e) {
		e.preventDefault();
		isLoading = 1;

		try {
			const resp = await signIn({ email, password });

			console.log('Sign-in response:', resp);

			if (resp.error != 0) {
				// throw error
				throw new Error(resp.msg);
			}

			const respUser = resp.data.user;

			// Save user data to the store
			await user.setAuthToken(resp.token);
			await user.setServices(resp.data.services);
			await user.setSettings(resp.data.settings);
			await user.setInfo({
				name: respUser.name,
				email: respUser.email,
				notification: respUser.notification,
				owner_id: respUser.owner_id,
				owner_type: respUser.owner_type,
				phone: respUser.phone
			});

			// Fetch user policies and save to db
			if (user.auth_token) {
				const policiesData = await fetchUserPolicies();
				console.log('Policies data:', policiesData);

				await user.setPolicies(policiesData.data);
				
			} else {
				throw new Error('User authentication token is missing');
			}

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

<form onsubmit={handleSubmit} >
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
