<script lang="ts">
	import { browser } from '$app/environment';
	import Navbar from '$lib/Navbar.svelte';
	import { register } from 'swiper/element/bundle';
	import '../app.postcss';
</script>

<Navbar />
<slot />
