<script lang="ts">
	import { assets } from '$app/paths';
</script>

<svelte:head>
	<title>楊斯惟 Si-Wei Yang</title>
</svelte:head>

<header class="page-section py-12 sm:py-16 lg:py-24">
	<h1 class="my-6 text-4xl font-medium lg:text-5xl">Hi, 我是楊斯惟。</h1>
	<p class="my-6 max-w-prose text-lg sm:text-xl">
		就讀於國北護資訊管理系，喜歡學習各種軟體相關的技術，擅長網頁開發。
	</p>
	<div class="flex items-center gap-6">
		<a href="https://www.linkedin.com/in/siweiyang02/" target="_blank" rel="noopener noreferrer">
			<img src="{assets}/icons/linkedin.svg" class="social-link" alt="LinkedIn" />
		</a>
		<a href="https://github.com/yangszwei" target="_blank" rel="noopener noreferrer">
			<img src="{assets}/icons/github.svg" class="social-link" alt="GitHub" />
		</a>
		<a href="https://t.me/siweiyang" target="_blank" rel="noopener noreferrer">
			<img src="{assets}/icons/telegram.svg" class="social-link" alt="Telegram" />
		</a>
		<a href="https://music.apple.com/profile/siweiyang" target="_blank" rel="noopener noreferrer">
			<img src="{assets}/icons/apple-music.svg" class="social-link" alt="Apple Music" />
		</a>
	</div>
</header>

<section class="bg-gray-200 py-12">
	<div class="page-section">
		<h2 class="mb-12 text-xl font-medium lg:text-2xl">使用技術</h2>
		<div class="mb-4 grid max-w-prose grid-cols-7 gap-3 sm:grid-cols-8 lg:grid-cols-10">
			<img src="{assets}/icons/js.svg" alt="JS" />
			<img src="{assets}/icons/ts.svg" alt="TS" />
			<img src="{assets}/icons/html.svg" alt="HTML" />
			<img src="{assets}/icons/css.svg" alt="CSS" />
			<img src="{assets}/icons/nodejs.svg" alt="Node.js" />
			<img src="{assets}/icons/go.svg" alt="Go" />
			<img src="{assets}/icons/java.svg" alt="Java" />
			<img src="{assets}/icons/php.svg" alt="PHP" />
			<img src="{assets}/icons/py.svg" alt="Python" />
			<img src="{assets}/icons/svelte.svg" alt="Svelte" />
			<img src="{assets}/icons/tailwind.svg" alt="Tailwind CSS" />
			<img src="{assets}/icons/redis.svg" alt="Redis" />
			<img src="{assets}/icons/mysql.svg" alt="MySQL" />
			<img src="{assets}/icons/mongodb.svg" alt="MongoDB" />
			<img src="{assets}/icons/linux.svg" alt="Linux" />
			<img src="{assets}/icons/docker.svg" alt="Docker" />
			<img src="{assets}/icons/postman.svg" alt="Postman" />
		</div>
	</div>
</section>

<section class="page-section py-12">
	<h2 class="text-xl font-medium lg:text-2xl">專案</h2>

	<div class="grid grid-cols-1 py-12 sm:grid-cols-2 sm:gap-6">
		<div class="py-3">
			<img src="{assets}/portfolio/hokago-web-time.jpg" class="rounded-md border" alt="" />
		</div>
		<div class="py-3">
			<h1 class="mb-4 text-xl font-medium">Ho-kago Web Time 網頁組教學系統</h1>
			<p>
				使用 HTML/CSS/JS + Firebase
				開發，用於社團內部教學，提供課程及作業管理等功能，並內建基礎的編輯器。
			</p>
		</div>
	</div>

	<hr />

	<div class="grid grid-cols-1 py-12 sm:grid-cols-2 sm:gap-6">
		<div class="py-3">
			<img src="{assets}/portfolio/course-query.jpg" class="rounded-md border" alt="" />
		</div>
		<div class="py-3">
			<h1 class="mb-4 text-xl font-medium">北護大課程查詢系統</h1>
			<p>
				使用 SvelteKit 開發，使用 SQLite
				資料庫暫存課程資料以解決學校系統緩慢問題，另提供課表預覽等功能。
			</p>
		</div>
	</div>
</section>

<footer class="flex items-center justify-center gap-3 p-6 text-sm">
	<p class="font-medium">Si-Wei Yang - {new Date().getFullYear()}</p>
	<a href="https://github.com/yangszwei/siweiyang.com">
		<img src="{assets}/icons/github.svg" class="h-5 w-5" alt="Source Code" />
	</a>
</footer>

<style lang="postcss">
	.social-link {
		@apply block h-9 w-9 rounded-full p-1 outline-0 transition-colors duration-100 hover:bg-gray-300 active:bg-gray-300 sm:h-8 sm:w-8;
	}
</style>
