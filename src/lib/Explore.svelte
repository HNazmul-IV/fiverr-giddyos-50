<script>
	import { fakeData } from '../DB/data';
	import Card from './Card.svelte';
	import CardAd from './CardAd.svelte';
	import OnOffSwitch from './OnOffSwitch.svelte';
</script>

<section class="">
	<p class="font-medium text-[40px] text-center py-16">Explore Scripts</p>
	<div class="my-container bg-[#F8F8F8] flex flex-col gap-[30px] md!p-8 rounded-2xl">
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
					class=" w-full border-gray-200 px-4 h-full py-2 pr-10 focus:outline-none focus:ring-transparent  bg-[#FFFFFF24] focus:border-blue-300 focus:bg-white rounded-lg"
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

		<div class="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
			{#each fakeData as data, index}
				<Card {data} />

				{#if (index + 1) % 5 === 0}
					<CardAd />
				{/if}
			{/each}
		</div>
		<nav aria-label="Pagination" class="flex justify-center items-center text-gray-600">
			<a href="/" class="p-2 mr-4 rounded hover:bg-gray-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</a> <a href="/" class="px-4 py-2 rounded hover:bg-gray-100"> 1 </a>
			<a href="/" class="px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100">
				2
			</a> <a href="/" class="px-4 py-2 rounded hover:bg-gray-100"> 3 </a>
			<a href="/" class="px-4 py-2 rounded hover:bg-gray-100"> ... </a>
			<a href="/" class="px-4 py-2 rounded hover:bg-gray-100"> 9 </a>
			<a href="/" class="p-2 ml-4 rounded hover:bg-gray-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</nav>
	</div>
</section>

<style>
	.text {
		font-size: 16px;
		color: #555;
	}
	.btn-text {
		font-size: 13.5px;
		line-height: 22px;
		font-weight: 500;
		text-align: center;
		height: 24px;
		width: 50px;
		transition: background-color 0.3s ease-in-out, border-radius 0.3s linear;
	}
	.absolute span:first-child {
		background-color: red;
		border-radius: 10px;
	}
	input:checked + .absolute span:last-child {
		background-color: #22c55e;
		border-radius: 10px;
	}
	input:checked + .absolute span:first-child {
		background-color: transparent;
		border-radius: 10px;
	}
</style>
