<script lang="ts">
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import FAQ_AD_PLACEHOLDER from '../assets/img/faq-ads-placeholder.png';
	let openStates: boolean[] = [];

	const toggleAccordion = (index: number) => {
		openStates[index] = !openStates[index];
	};

	onMount(() => {
		openStates = Array(faqs.length).fill(false); // Initialize all FAQs to be closed
		openStates[0] = true; // Initialize the first FAQ to be open
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

<section class="py-16 relative gap-10">
	<div class="my-container">
		<div class="title">
			<p class="text-4xl font-bold">Frequently Asked Questions</p>
			<p class="text-base mt-5">
				Mauris vel et neque dictumst commodo. Vulputate eu tincidunt morbi enim sociis bibendum
				amet.
			</p>
		</div>

		<div class="accordions mt-16">
			<div class="grid md:grid-cols-2 gap-x-16">
				<div class="left-side-accordion">
					<Accordion class="" flush>
						{#each faqs.slice(0, 2) as data}
							<AccordionItem>
								<span slot="header">{data.title}</span>
								<div class="">
									{data.content}
								</div>
							</AccordionItem>
						{/each}
					</Accordion>
				</div>
				<div class="right-side-accordion">
					<Accordion class="" flush>
						{#each faqs.slice(2) as data}
							<AccordionItem>
								<span slot="header" class="text-secondary-dark">{data.title}</span>
								<div class="">
									{data.content}
								</div>
							</AccordionItem>
						{/each}
					</Accordion>

					<div class="mt-2">
						<img src={FAQ_AD_PLACEHOLDER} class="w-full" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

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
