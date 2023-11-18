<script lang="ts">
	import { base } from '$app/paths';
	import { browser } from '$app/environment';

	let elevate = false;

	if (browser) {
		window.addEventListener('scroll', () => (elevate = window.scrollY > 0));
	}
</script>

<nav class:border-b={elevate} class="fixed inset-x-0 top-0">
	<div class:!bg-transparent={!elevate} class="bg-gray-100/90 backdrop-blur">
		<div class="page-section flex h-14 select-none items-center gap-3">
			<!-- Page Title -->
			<a class="mb-1 font-maru text-2xl font-medium" href="{base}/">siweiyang</a>

			<div class="grow"></div>

			<!-- Page Links -->
			<slot />
		</div>
	</div>
</nav>
