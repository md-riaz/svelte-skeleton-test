<script>
	import { goto } from '$app/navigation';
	import { user } from '$lib/store/userState';
	import Alert from '$lib/ui/alert/alert.svelte';
	import SubmitButton from '$lib/ui/form/submitButton.svelte';
	import { variables } from '$lib/utils/constants';

	let email = $state('');
	let password = $state('');
	let isLoading = $state(0);
	let errorMessage = $state('');
	let showError = $derived(errorMessage.length > 0); 
	
	/**
	 * @param {{ preventDefault: () => void; }} e
	 * @throws Error
	 */
	async function signIn(e) {
		e.preventDefault();

		isLoading = 1;

		const formData = {
			email: email,
			password: password,
			platform: navigator.userAgentData.platform
		};

		// Make the API request here
		try {
			// Perform the sign-in API request
			// Replace the placeholder URL with your actual API endpoint
			const response = await fetch(variables.BASE_API_URI + '/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {

				const resp = await response.json();

				if (resp.error != 0) {
					// throw error
					throw new Error(resp.msg);
				}

				resp.data.token = resp.token;

				// need to use store for storing user data as context can't be used here
				user.set(resp.data);

				// Redirect to the dashboard
				goto('/');
			} else {
				throw new Error('Sign-in failed');
			}
		} catch (error) {
			
			if (error instanceof Error) {
				errorMessage = error.message;
				console.log(errorMessage, errorMessage.length);
				
			}
		}

		isLoading = 0;
	}
</script>
{showError}
<div class="flex min-h-screen items-center bg-gray-100 py-16 dark:bg-neutral-800">
	<main class="mx-auto w-full max-w-md p-6">
		<div
			class="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900"
		>
			<div class="p-4 sm:p-7">
				<div class="text-center">
					<h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
					<p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
						Don't have an account yet?
						<a
							class="font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-none dark:text-blue-500"
							href="../examples/html/signup.html"
						>
							Sign up here
						</a>
					</p>
				</div>

				{#if showError}
					 <Alert msg={errorMessage} show={showError} />
				{/if}

				<div class="mt-5">
					<!-- Form -->
					<form onsubmit={signIn}>
						<div class="grid gap-y-4">
							<!-- Form Group -->
							<div>
								<label for="email" class="mb-2 block text-sm dark:text-white">Email address</label>
								<div class="relative">
									<input
										type="email"
										id="email"
										name="email"
										class="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
										required
										aria-describedby="email-error"
										bind:value={email}
									/>
									<div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
										<svg
											class="size-5 text-red-500"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 16 16"
											aria-hidden="true"
										>
											<path
												d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
											/>
										</svg>
									</div>
								</div>
								<p class="mt-2 hidden text-xs text-red-600" id="email-error">
									Please include a valid email address so we can get back to you
								</p>
							</div>
							<!-- End Form Group -->

							<!-- Form Group -->
							<div>
								<div class="flex items-center justify-between">
									<label for="password" class="mb-2 block text-sm dark:text-white">Password</label>
									<a
										class="inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-none dark:text-blue-500"
										href="./">Forgot password?</a
									>
								</div>
								<div class="relative">
									<input
										type="password"
										bind:value={password}
										id="password"
										name="password"
										class="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
										required
										aria-describedby="password-error"
									/>
									<div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
										<svg
											class="size-5 text-red-500"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 16 16"
											aria-hidden="true"
										>
											<path
												d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
											/>
										</svg>
									</div>
								</div>
								<p class="mt-2 hidden text-xs text-red-600" id="password-error">
									8+ characters required
								</p>
							</div>
							<!-- End Form Group -->

							<SubmitButton loading={isLoading} defaultText="Sign in"/>

						</div>
					</form>
					<!-- End Form -->
				</div>
			</div>
		</div>
	</main>
</div>
