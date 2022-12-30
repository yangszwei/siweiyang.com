<script>
	import GithubIcon from '@iconify-icons/mdi/github';
	import Icon from '@iconify/svelte';
	import TelegramIcon from '@iconify-icons/mdi/telegram';
	import TwitterIcon from '@iconify-icons/mdi/twitter';

	const links = [
		{ color: '#1da1f2', icon: TwitterIcon, href: 'https://twitter.com/yangszwei' },
		{ color: '#333', icon: GithubIcon, href: 'https://github.com/yangszwei' },
		{ color: '#08C', icon: TelegramIcon, href: 'https://t.me/yangszwei' },
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
					<Icon {icon} style="color: {color};" />
				</a>
			</li>
		{/each}
	</ul>
</header>
