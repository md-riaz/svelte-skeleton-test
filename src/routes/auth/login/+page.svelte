<script>
	import AuthCard from '$lib/components/containers/AuthCard.svelte';
	import SignInForm from './SignInForm.svelte';
</script>

<div class="flex min-h-screen items-center bg-gray-100 py-16 dark:bg-neutral-800">
	<main class="mx-auto w-full max-w-md p-6">
		<div
			class="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900"
		>
			<AuthCard
				title="Sign In"
				description={`Don't have an account yet?
						<a
							class="font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-none dark:text-blue-500"
							href="#"
						>
							Sign up here
						</a>`}
			>
				<div class="mt-5">
					<!-- Form -->
					<SignInForm />

					<!-- End Form -->
				</div>
			</AuthCard>
		</div>
	</main>
</div>
