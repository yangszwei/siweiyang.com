<script>
	import Icon from '@iconify/svelte';
	import faGithub from '@iconify-icons/fa6-brands/github';
	import faTelegram from '@iconify-icons/fa6-brands/telegram';
	import faTwitter from '@iconify-icons/fa6-brands/twitter';

	const links = [
		{ color: '#1da1f2', icon: faTwitter, href: 'https://twitter.com/yangszwei' },
		{ color: '#333', icon: faGithub, href: 'https://github.com/yangszwei' },
		{ color: '#08C', icon: faTelegram, href: 'https://t.me/siweiyang' },
	];
</script>

<svelte:head>
	<title>楊斯惟 Si-Wei Yang</title>
</svelte:head>

<header class="mx-auto box-content max-w-4xl px-4 py-12 md:px-12">
	<h1 class="text-5xl leading-relaxed">Hi, 我是楊斯惟。</h1>
	<p class="text-lg leading-relaxed tracking-wide text-neutral-600">國北護 資訊管理系</p>
	<ul class="mt-8 flex flex-row flex-wrap gap-4">
		{#each links as { color, icon, href }}
			<li>
				<a
					{href}
					target="_blank"
					rel="noopener noreferrer"
					class="block rounded-full p-1 text-2xl outline-0 transition-colors duration-100 hover:bg-neutral-300 active:bg-neutral-300"
				>
					<Icon {icon} class="h-6 w-6 p-0.5" style="color: {color};" />
				</a>
			</li>
		{/each}
	</ul>
</header>
