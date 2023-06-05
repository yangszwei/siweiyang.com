<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<svelte:head>
	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navbar items={[{ name: 'Blog', href: 'https://blog.yangszwei.com/' }]} />

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-gray-50 font-sans text-gray-900;
	}
</style>
