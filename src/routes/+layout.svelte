<script lang="ts">
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<svelte:head>
	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<!-- prettier-ignore -->
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500&family=Zen+Maru+Gothic:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<Navbar>
	<a class="link text-sm" rel="noopener noreferrer" href="https://blog.siweiyang.com/">Blog</a>
</Navbar>

<div class="mt-14">
	<slot />
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-gray-100/80 text-gray-800;
	}
</style>
