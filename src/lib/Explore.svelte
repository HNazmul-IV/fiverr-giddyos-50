<script>
	import { Icon, icons } from 'flowbite-svelte-icons';
	import { fakeData } from '../DB/data';
	import Card from './Card.svelte';
	import CardAd from './CardAd.svelte';
	import OnOffSwitch from './OnOffSwitch.svelte';
</script>

<section class="">
	<p class="font-medium text-[40px] text-center py-16">Explore Scripts</p>
	<div
		class="my-container 2xl:max-w-[1400px] 3xl:max-w-[1700px] 5xl:max-w-[2100px]  bg-[#F8F8F8] flex flex-col gap-[30px] py-8 md:!p-8 rounded-2xl"
	>
		<div class="flex flex-wrap justify-center md:justify-start gap-[30px] text-secondary-dark">
			<div class="flex items-center gap-[10px]">
				<OnOffSwitch />
				<p class="text-base">Mobile Scripts Only</p>
			</div>
			<div class="flex items-center gap-[10px]">
				<OnOffSwitch />
				<p class="text-base">Hide Paid Scripts</p>
			</div>
			<div class="flex items-center gap-[10px]">
				<OnOffSwitch />
				<p class="text-base">Hide Patched Scripts</p>
			</div>
		</div>
		<div class="flex gap-[30px]">
			<div class="relative w-full">
				<input
					type="text"
					class=" w-full border-gray-200 px-4 h-full py-2 pr-10 focus:outline-none focus:ring-transparent bg-[#FFFFFF24] focus:border-blue-300 focus:bg-white rounded-lg"
					placeholder="Search..."
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
			<select class="h-12 w-40 rounded-xl border-0 px-4 py-2 bg-[#0000000A] text-secondary-dark">
				<option>Latest</option>
				<option>Tranding</option>
				<option>Most </option>
			</select>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 5xl:grid-cols-5 gap-5">
			{#each fakeData as data, index}
				<Card {data} />

				{#if (index + 1) % 5 === 0}
					<CardAd />
				{/if}
			{/each}
		</div>

		<div class="flex justify-center text-secondary-dark flex-wrap gap-2">
			<button class="prev inline-flex pagination-button items-center">
				<Icon name={'chevron-left-outline'} size="sm" class="text-gray-500 mr-2" />
				<span>Prev</span>
			</button>
			{#each ['1', '2', '3', '3', '..', '8'] as data}
				<button class="pagination-button" class:active={data === '2'}>{data}</button>
			{/each}
			<button class="prev inline-flex pagination-button items-center">
				<span>Next</span>
				<Icon name={'chevron-right-outline'} size="sm" class="text-gray-500 ml-2" />
			</button>
		</div>
	</div>
</section>

<style lang="postcss">
	.pagination-button {
		@apply py-1 px-4 rounded bg-zinc-200 text-black hover:bg-zinc-300;
	}
	.pagination-button.active {
		@apply bg-zinc-700 text-white;
	}
</style>
