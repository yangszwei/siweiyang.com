<script>
	import Icon from '@iconify/svelte';

	/** The social links. */
	const social = [
		{ color: '#4267b2', icon: 'mdi:facebook', href: 'https://facebook.com/yangszwei' },
		{ color: '#1da1f2', icon: 'mdi:twitter', href: 'https://twitter.com/yangszwei' },
		{ color: '#333', icon: 'mdi:github', href: 'https://github.com/yangszwei' },
		{ color: '#08C', icon: 'mdi:telegram', href: 'https://t.me/yangszwei' },
		{ color: '#222', icon: 'mdi:email', href: 'mailto:yangszwei@outlook.com' },
	];
</script>

<header class="my-8">
	<h1 class="my-4 text-5xl">Hi, 我是楊斯惟</h1>
	<p class="text-lg text-gray-500">Hi, I'm Si-Wei Yang</p>
</header>

<section>
	<p class="text-gray-700">(TBD)</p>
</section>

<section class="my-8 flex gap-4">
	{#each social as { color, icon, href }}
		<a class="rounded-full p-1 text-2xl hover:bg-gray-300" {href}>
			<Icon {icon} style="color: {color};" />
		</a>
	{/each}
</section>

<style lang="postcss">
	:global(body) {
		@apply mt-16 max-w-4xl px-4 sm:mx-auto;
	}
</style>
