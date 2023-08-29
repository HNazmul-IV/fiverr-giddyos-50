<script lang="ts">
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import FAQ_AD_PLACEHOLDER from '../assets/img/faq-ads-placeholder.png';
	import { Icon } from 'flowbite-svelte-icons';
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
								<svelte:fragment slot="arrowup">
									<Icon name="minus-outline" class="focus:outline-none" />
								</svelte:fragment>
								<svelte:fragment slot="arrowdown">
									<Icon name="plus-outline" class="focus:outline-none" />
								</svelte:fragment>
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
								<svelte:fragment slot="arrowup">
									<Icon name="minus-outline" class="focus:outline-none" />
								</svelte:fragment>
								<svelte:fragment slot="arrowdown">
									<Icon name="plus-outline" class="focus:outline-none" />
								</svelte:fragment>

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

<style></style>
