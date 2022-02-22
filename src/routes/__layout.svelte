<script>
	import '../style/app.css'
	import '@fontsource/inter/400.css'
	import '@fontsource/inter/700.css'
</script>

<svelte:head>
	<title>Svelte Starter</title>
	<meta name="description" content="Svelte start" />

	<!-- Icons -->
	<meta name="msapplication-TileColor" content="#da532c " />
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="https://res.cloudinary.com/c4co/image/upload/v1638714923/Projects/apple-touch-icon_xwpbc2.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="https://res.cloudinary.com/c4co/image/upload/v1638714923/Projects/favicon-32x32_bbyasm.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="https://res.cloudinary.com/c4co/image/upload/v1638714923/Projects/favicon-16x16_i8wujj.png"
	/>
	<link
		rel="mask-icon"
		href="https://res.cloudinary.com/c4co/image/upload/v1638715109/Projects/safari-pinned-tab_ayqwce.svg"
		color="#000000"
	/>

	<!-- Open Graph -->

	<meta property="og:title" content="Svelte Starter - title" />
	<meta property="og:type" content="Svelte Starter - description" />
	<meta property="og:url" content="https://cn-next-starter.vercel.app/" />
	<meta
		property="og:image"
		content="https://res.cloudinary.com/c4co/image/upload/v1638714592/Projects/opengraph_fl61uv.jpg"
	/>
	<meta property="og:type" content="website" />

	<!-- Twitter -->

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="https://cn-next-starter.vercel.app/" />
	<meta property="twitter:url" content="https://cn-next-starter.vercel.app/" />
	<meta name="twitter:title" content="Svelte Starter - title" />
	<meta name="twitter:description" content="Svelte Starter - description" />
	<meta
		name="twitter:image"
		content="https://res.cloudinary.com/c4co/image/upload/v1638714592/Projects/opengraph_fl61uv.jpg"
	/>

	<!-- App -->

	<meta name="application-name" content="Svelte Starter" />

	<meta name="theme-color" content="#000000" />
	<meta name="mobile-web-app-capable" content="yes" />

	<meta name="msapplication-navbutton-color" content="#000000" />
	<meta name="msapplication-starturl" content="https://cn-next-starter.vercel.app/" />

	<meta name="apple-mobile-web-app-title" content="Svelte Starter" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
</svelte:head>

<slot />
