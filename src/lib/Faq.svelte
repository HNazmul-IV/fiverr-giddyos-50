<script lang="ts">
	import { onMount } from 'svelte';

	let openStates: boolean[] = [];

	const toggleAccordion = (index: number) => {
		openStates[index] = !openStates[index];
	};

	onMount(() => {
		openStates = Array(faqs.length).fill(false); // Initialize all FAQs to be closed
		openStates[0] = true; // Initialize the first FAQ to be open
		console.log('🚀 ~ file: Faq.svelte:13 ~ onMount ~ openStates:', openStates);
	});

	let faqs: FAQItem[] = [
		{
			title: 'How Do I Use Website',
			content:
				'Elit est dolor pellentesque tempus sed vulputate. Elit massa sapien feugiat turpis id semper. Penatibus id tempus sagittis morbi imperdiet. Vitae augue eu consectetur sed. Erat urna gravida hendrerit porttitor tristique turpis facilisis nisl quis. Nulla pharetra imperdiet amet arcu tincidunt. Lorem euismod pellentesque scelerisque diam velit amet porttitor pulvinar. Consequat bibendum nunc hac sed massa.'
		},
		{
			title: 'Fames sagittis volutpat id?',
			content:
				'Elit est dolor pellentesque tempus sed vulputate. Elit massa sapien feugiat turpis id semper. Penatibus id tempus sagittis morbi imperdiet. Vitae augue eu consectetur sed. Erat urna gravida hendrerit porttitor tristique turpis facilisis nisl quis. Nulla pharetra imperdiet amet arcu tincidunt. Lorem euismod pellentesque scelerisque diam velit amet porttitor pulvinar. Consequat bibendum nunc hac sed massa.'
		},
		{
			title: 'Posuere sit facilisi velit sagittis?',
			content:
				'Elit est dolor pellentesque tempus sed vulputate. Elit massa sapien feugiat turpis id semper. Penatibus id tempus sagittis morbi imperdiet. Vitae augue eu consectetur sed. Erat urna gravida hendrerit porttitor tristique turpis facilisis nisl quis. Nulla pharetra imperdiet amet arcu tincidunt. Lorem euismod pellentesque scelerisque diam velit amet porttitor pulvinar. Consequat bibendum nunc hac sed massa.'
		},
		{
			title: 'Sagittis venenatis vestibulum?',
			content:
				'Elit est dolor pellentesque tempus sed vulputate. Elit massa sapien feugiat turpis id semper. Penatibus id tempus sagittis morbi imperdiet. Vitae augue eu consectetur sed. Erat urna gravida hendrerit porttitor tristique turpis facilisis nisl quis. Nulla pharetra imperdiet amet arcu tincidunt. Lorem euismod pellentesque scelerisque diam velit amet porttitor pulvinar. Consequat bibendum nunc hac sed massa.'
		},
		{
			title: 'Sagittis venenatis vestibulum?',
			content:
				'Elit est dolor pellentesque tempus sed vulputate. Elit massa sapien feugiat turpis id semper. Penatibus id tempus sagittis morbi imperdiet. Vitae augue eu consectetur sed. Erat urna gravida hendrerit porttitor tristique turpis facilisis nisl quis. Nulla pharetra imperdiet amet arcu tincidunt. Lorem euismod pellentesque scelerisque diam velit amet porttitor pulvinar. Consequat bibendum nunc hac sed massa.'
		}
	];
</script>

<main class="p-16 flex flex-col items-center relative gap-10">
	<section>
		<p class="text-2xl font-extrabold">Frequently Asked Questions</p>
		<p class="text-base">
			Mauris vel et neque dictumst commodo. Vulputate eu tincidunt morbi enim sociis bibendum amet.
		</p>
	</section>
	<div class="flex flex-wrap justify-center gap-3">
		{#each faqs as faq, index}
			<div
				class={`border lg:w-[550px] w-72 rounded-xl p-4 ${openStates[index] ? 'h-auto' : 'h-11'}`}
			>
				<button
					class={`flex justify-between items-center w-full `}
					on:click={() => toggleAccordion(index)}
				>
					<p class="font-normal lg:text-2xl">
						{faq.title}
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 transform transition-transform"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
					</svg>
				</button>

				{#if openStates[index]}
					<div class="p-3">{faq.content}</div>
				{/if}
			</div>
		{/each}
		<section class="ad">
			<div class="flex md:flex-row flex-col items-center text">
				<div class="image">
					<div id="gradient" />
					<img src="https://picsum.photos/600/600" alt="" />
				</div>

				<div class="py-4 md:py-0">
					<p class="text-center">Advertisement Placeholder</p>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	.border {
		border: 1px solid #e2e8f0;
	}
	.ad {
		width: 526px;
		max-width: 100%;
		margin: 0 auto;
	}
	#gradient {
		background-image: linear-gradient(
			204.34deg,
			rgba(45, 43, 183, 0.291) 61.59%,
			rgba(239, 156, 32, 0.3) 107.9%
		);
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		position: absolute;
	}
	.image {
		background-image: linear-gradient(#2d2bb7f7, #ef9c20);
		width: 100%;
		height: 100%;
		position: relative;
		clip-path: polygon(0 0, 100% 0%, 60% 100%, 0% 100%);
	}
	.image img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.text {
		background-image: linear-gradient(#fd6e6a, #ffc600);
	}
	.text p {
		position: relative;
		font-size: 24px;
		display: inline-block;
		font-family: Rubik;
		color: #fff;
		text-align: left;
		max-width: 70%; /* Adjusted max-width for responsiveness */
		margin: 0 auto; /* Center the text horizontally */
	}
	@media (max-width: 768px) {
		.ad {
			height: auto;
			width: 100%;
		}
		.image {
			clip-path: polygon(0 0, 100% 0, 100% 78%, 0 55%);
			height: auto; /* Allow the image to adjust its height based on content */
		}
		.text p {
			font-size: 18px;
			text-align: center;
		}
	}
</style>
