<script>
	import Icon from '@iconify/svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>楊斯惟 Si-Wei Yang</title>
</svelte:head>

<div class="mx-auto box-content max-w-4xl px-4 py-12 md:px-12">
	<header>
		<h1 class="select text-5xl leading-relaxed">Hi, 我是楊斯惟</h1>
		<p class="text-lg leading-relaxed tracking-wide text-neutral-600">國北護 資訊管理系</p>
	</header>
	<main class="my-8">
		<p class="italic text-neutral-600">(待完成)</p>
	</main>
	<footer>
		<ul class="flex flex-row flex-wrap gap-4">
			{#each data.links ?? [] as link}
				<li>
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						class="block rounded-full p-1 text-2xl transition-colors duration-100
							hover:bg-neutral-300 active:bg-neutral-300"
					>
						<Icon icon={link.icon} style="color: {link.color};" />
					</a>
				</li>
			{/each}
		</ul>
	</footer>
</div>
