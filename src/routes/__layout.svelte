<script>
	import '../app.css';
	import { page } from '$app/stores';

	/** The name of the app. */
	const APP_NAME = '楊斯惟 Si-Wei Yang';

	$: title = $page.stuff.title ? `${$page.stuff.title} - ${APP_NAME}` : APP_NAME;
</script>

<svelte:head>
	<title>{title}</title>
	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />
