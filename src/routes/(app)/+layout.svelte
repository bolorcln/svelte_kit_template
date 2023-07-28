<script lang="ts">
	import { Button, NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import type { LayoutData } from './$types';
	import { enhance } from '$app/forms';

	export let data: LayoutData;
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/" class="font-extrabold">
		My<span class="text-primary-600">App</span>
	</NavBrand>

	<div class="flex md:order-2">
		{#if data.user}
			<form method="POST" action="/?/logout" use:enhance>
				<Button type="submit" size="sm">Log Out</Button>
			</form>
		{:else}
			<div class="flex gap-2">
				<Button href="/signup" color="alternative" size="sm">Sign Up</Button>
				<Button href="/signin" size="sm">Sign In</Button>
			</div>
		{/if}
		<NavHamburger on:click={toggle} />
	</div>

	<NavUl {hidden} class="order-1">
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/about">About</NavLi>
	</NavUl>
</Navbar>

<main class="container mx-auto min-h-screen">
	<slot />
</main>
