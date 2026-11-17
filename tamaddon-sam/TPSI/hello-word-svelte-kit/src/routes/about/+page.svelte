<script>
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://svelte.dev/docs/kit">SvelteKit</a> app. You can make your own by typing
		the following into your command line and following the prompts:
	</p>

	<pre>npx sv create</pre>

	<p>
		Tciao
	</p>

	<p>
		The <a href={resolve('/sverdle')}>Sverdle</a> page illustrates SvelteKit's data loading and form handling.
		Try using it with JavaScript disabled!
	</p>
</div>
