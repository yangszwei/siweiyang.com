<script>
	export let items = [];
</script>

<div class="z-10 flex select-none">
	<div class="mx-auto box-content flex h-14 w-full max-w-4xl items-center px-4 md:px-12">
		<a href="/" class="text-xl hover:text-gray-600">yangszwei.com</a>
		<nav class="ml-auto">
			<ul class="flex items-center space-x-6">
				{#each items as { name, href } (href)}
					<li>
						<a {href} target="_self" class="item px-3 py-2 text-sm font-medium">{name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</div>

<style lang="postcss">
	.item {
		@apply text-gray-900 underline-offset-2 hover:text-gray-600 hover:underline;
	}
</style>
