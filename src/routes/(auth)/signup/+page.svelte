<script lang="ts">
	import { enhance } from '$app/forms';

	import { Label, Input, Button, Hr } from 'flowbite-svelte';
	import { Github } from 'lucide-svelte';
</script>

<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
	<form method="POST" use:enhance class="flex flex-col space-y-6">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign Up</h3>
		<Label class="space-y-2">
			<span>Username</span>
			<Input type="text" name="username" id="username" required />
		</Label>
		<Label class="space-y-2">
			<span>Password</span>
			<Input type="password" name="password" id="password" required />
		</Label>
		<Button type="submit" class="w-full">Sign up</Button>
		<Hr class="my-8 px-6">or</Hr>
		<Button type="button" href="/api/auth/github" class="w-full">
			<Github class="w-4 h-4" />
			Github
		</Button>
		<p class="text-sm font-light text-gray-500 dark:text-gray-400">
			Already have an account? <a
				href="/signin"
				class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a
			>
		</p>
	</form>
</div>
