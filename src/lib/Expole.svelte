<script>
	import { fakeData } from '../DB/data';
	import Card from './Card.svelte';
	import CardAd from './CardAd.svelte';
</script>

<main class="p-[30px]">
	<p class="font-medium text-[40px] text-center">Explore Scripts</p>
	<section class="bg-[#F8F8F8] flex flex-col gap-[30px] px-2 py-4">
		<div class="flex flex-wrap justify-center md:justify-start gap-[20px]">
			<div class="flex gap-[10px]">
				<label class="border border-gray-500 shadow-lg relative flex w-[100px] h-7 rounded-xl">
					<input type="checkbox" class="sr-only" checked />

					<div class="absolute inset-0 flex justify-between items-center">
						<span class="btn-text">OFF</span>
						<span class="btn-text">ON</span>
					</div>
				</label>
				<p class="text">Mobile Scripts Only</p>
			</div>
			<div class="flex gap-[10px]">
				<label class="border border-gray-500 shadow-lg relative flex w-[100px] h-7 rounded-xl">
					<input type="checkbox" class="sr-only" checked />

					<div class="absolute inset-0 flex justify-between items-center">
						<span class="btn-text">OFF</span>
						<span class="btn-text">ON</span>
					</div>
				</label>
				<p class="text">Hide Paid Scripts</p>
			</div>
			<div class="flex gap-[10px]">
				<label class="border border-gray-500 shadow-lg relative flex w-[100px] h-7 rounded-xl">
					<input type="checkbox" class="sr-only" />

					<div class="absolute inset-0 flex justify-between items-center">
						<span class="btn-text">OFF</span>
						<span class="btn-text">ON</span>
					</div>
				</label>
				<p class="text">Hide Patched Scripts</p>
			</div>
		</div>
		<div class="flex gap-[30px]">
			<div class="relative w-full">
				<input
					type="text"
					class=" w-full border px-4 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-300 rounded-lg"
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
			<select class="h-12 w-40 rounded-xl px-4 py-3">
				<option>Latest</option>
				<option>Tranding</option>
				<option>Most </option>
			</select>
		</div>
		<!-- ///////////////    map -->
		<div class="flex flex-wrap justify-center gap-[30px]">
			{#each fakeData as data, index}
				<Card {data} />

				{#if (index + 1) % 5 === 0}
					<CardAd />
				{/if}
			{/each}
		</div>
		<nav aria-label="Pagination" class="flex justify-center items-center text-gray-600">
			<a href="#" class="p-2 mr-4 rounded hover:bg-gray-100">
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
			</a> <a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> 1 </a>
			<a href="#" class="px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100">
				2
			</a> <a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> 3 </a>
			<a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> ... </a>
			<a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> 9 </a>
			<a href="#" class="p-2 ml-4 rounded hover:bg-gray-100">
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
	</section>
</main>

<style>
	.text {
		font-size: 16px;
		font-family: Aeonik;
		color: #555;
	}
	.btn-text {
		font-size: 13.5px;
		line-height: 22px;
		font-weight: 500;
		font-family: Aeonik;
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
		background-color: white;
		border-radius: 10px;
	}
</style>
