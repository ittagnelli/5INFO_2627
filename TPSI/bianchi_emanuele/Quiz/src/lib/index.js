// place files you want to import through the `#lib` alias in this folder.
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  compilerOptions: {
    runes: false // Disabilita la modalità Runes per supportare $: ed export let
  },
  kit: {
    adapter: adapter()
  }
};

export default config;