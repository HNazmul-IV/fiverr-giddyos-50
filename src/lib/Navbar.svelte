<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { Icon, icons } from 'flowbite-svelte-icons';

	let show_navbar = false;
	// let searchIcon = icons["search-outline"]
</script>

<nav class="w-full absolute bg-transparent text-white p-4 z-[99] max-sm:border-b-2">
	<div class="navbar-container flex items-center justify-between">
		<div class="navbar-brand">
			<h3 class="font-extrabold text-3xl mb-3">Script</h3>
		</div>

		<div
			class="w-full sm:w-auto fixed sm:static h-full sm:h-auto z-[999] bg-black/70 sm:bg-transparent transform backdrop-blur-lg sm:backdrop-blur-0 top-0 left-0 max-sm:!p-8
			{show_navbar ? 'translate-x-0' : '-translate-x-full sm:-translate-x-0'}
			"
		>
			<div class="navbar-item-wrapper relative p-10 sm:p-0">
				<ul class="flex flex-col sm:flex-row">
					<li><a class="py-3 inline-block px-2 xl:px-4" href="/">Explore</a></li>
					<li><a class="py-3 inline-block px-2 xl:px-4" href="/">Trending</a></li>
					<li><a class="py-3 inline-block px-2 xl:px-4" href="/">All Release</a></li>
					<li><a class="py-3 inline-block px-2 xl:px-4" href="/">Activity</a></li>
					<li class="xl:ml-5">
						<div class="relative w-[396px] hidden xl:block">
							<input
								type="text"
								class="border-white w-full border px-4 py-2 pr-10 focus:outline-none focus:ring-0 focus:bg-white/70 focus:placeholder:text-gray-500 focus:border-blue-300 placeholder:text-gray-300 rounded-lg bg-black/30 peer focus:text-black"
								placeholder="Search games, script ..."
							/>
							<div
								class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none peer-focus:text-black"
							>
								<Icon name="search-outline" />
							</div>
						</div>
					</li>
				</ul>

				<button
					on:click={() => (show_navbar = false)}
					class="closer sm:hidden text-white absolute top-10 right-10"
				>
					<svg
						class="w-6 h-6 text-current"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
						/>
					</svg>
				</button>
			</div>
		</div>

		<div class="flex items-center sm:gap-3 flex-shrink-0">
			<label class="border border-gray-400 bg-white/30 relative flex w-16 h-7 rounded-xl">
				<div class="absolute inset-0 flex justify-between items-center">
					<input type="checkbox" class="sr-only peer" checked />
					<span
						class="peer-checked:bg-white text-secondary-dark peer-checked:text-secondary-dark h-7 aspect-square inline-flex items-center justify-center text-sm rounded-full transition duration-300 cursor-pointer"
					>
						<Icon name="sun-outline" tabindex="-1" class="focus:outline-none"  />
					</span>
					<span
						class="bg-zinc-500 text-white h-7 aspect-square inline-flex items-center justify-center text-sm rounded-full transition duration-300 peer-checked:bg-transparent peer-checked:text-secondary-dark cursor-pointer"
					>
						<Icon name="moon-outline" tabindex="-1" class="focus:outline-none" />
					</span>
				</div>
			</label>

			<button class="btn hidden sm:block"> Login </button>
			<Button class="bg-yellow-300 hidden sm:inline-flex">
				Upload <Icon name="arrow-up-outline" class="w-3.5 h-3.5 ml-2" />
			</Button>

			<button on:click={() => (show_navbar = true)}>
				<svg
					class="w-6 h-6 sm:hidden"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
		</div>
	</div>
</nav>

<style>
</style>
