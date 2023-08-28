<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<nav class="w-full absolute bg-transparent text-white flex items-center justify-around p-4">
	<p class="font-extrabold">Script</p>
	<section class="flex items-center gap-10">
		<div class="flex items-center gap-10">
			<p>Explore</p>
			<p>Trending</p>
			<p>All Releases</p>
			<p>Activity</p>
		</div>
		<div class="relative w-[396px]">
			<input
				type="text"
				class="border-white w-full border px-4 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-300 rounded-lg bg-transparent"
				placeholder="Search games, script ..."
			/>
			<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</div>
		</div>
	</section>
	<section>
		<button>
			<p>Login</p>
		</button>
		<Button class="bg-yellow-300">
			Upload <Icon name="arrow-up-outline" class="w-3.5 h-3.5 ml-2" />
		</Button>
	</section>
</nav>

<style>
</style>
