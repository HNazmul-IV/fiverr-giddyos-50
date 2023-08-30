<script lang="ts">
	import IMG_HERO_BG from '$assets/img/slider-valonant.png';
	import IMG_AVATAR from '$assets/img/user-avatar.png';
	import HEADER_ADD_PLACEHOLDER from '$assets/img/header-adplace-holder.png';
	import { onMount } from 'svelte';
	import { register, type SwiperContainer, type SwiperSlide } from 'swiper/element/bundle';
	import header_slider_data from './data/headeSliderData';

	let active_slider: (typeof header_slider_data)[0] = header_slider_data[0];
	let headerSliderContainer: SwiperContainer;
	let swiperItem: SwiperSlide;

	$: console.log(active_slider);
	onMount(() => {
		// Registering Svelte Custom Element;
		register();
	});
</script>

<header
	class="max-w-screen h-[600px] md:h-screen bg-cover bg-black/50 bg-blend-soft-light bg-center"
	style="background-image: url({active_slider?.background});"
>
	<div class="h-full">
		<swiper-container
			pagination={true}
			bind:this={headerSliderContainer}
			pagination-clickable={true}
			navigation={true}
			loop={true}
			autoplay={true}
			class="h-full md:h-screen md:py-24"
			on:slidechange={() => {
				active_slider = header_slider_data[headerSliderContainer.swiper.realIndex];
			}}
		>
			{#each header_slider_data as data}
				<swiper-slide class="">
					<div class="my-container 3xl:max-w-[1700px] h-full">
						<div class=" h-full flex flex-col justify-center">
							<div class="flex mb-10 gap-3 justify-center md:justify-start">
								<button class="btn bg-white">🔑 Key </button>
								<button class="btn bg-green-500 text-white">Mobile Friendly</button>
							</div>
							<div class="mb-10 md:w-2/3 text-center md:text-left">
								<h1 class="text-4xl md:text-6xl 3xl:text-9xl text-white font-bold">
									{data.tittle}
								</h1>
							</div>
							<div
								class="flex text-white justify-center md:justify-start gap-x-4 items-center mb-7"
							>
								<div class="">
									<img src={IMG_AVATAR} class="rounded-md inline-block" alt="" />
									<span class="ml-1">{data.username}</span>
								</div>
								<div class="">
									<svg
										class="inline-block"
										width="18"
										height="21"
										viewBox="0 0 18 21"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15.6665 15.087H2.33317V13.9586C2.33068 13.4211 2.50281 12.8972 2.82366 12.4659C3.14452 12.0346 3.59675 11.7191 4.11234 11.567C5.02048 11.3412 5.83599 10.8388 6.44602 10.1291C7.05605 9.41954 7.43042 8.53786 7.51734 7.60613H2.33317V6.79446C2.33498 6.29174 2.48766 5.80115 2.77143 5.38618C3.05521 4.97122 3.45702 4.65099 3.92484 4.46696C5.4665 3.84113 6.4165 3.06113 6.994 0.737792L7.15067 0.106125H7.8015C15.5765 0.106125 15.6665 7.11863 15.6665 7.18946V15.087ZM17.3332 20.087H0.666504V19.2536C0.666504 18.5906 0.929896 17.9547 1.39874 17.4859C1.86758 17.017 2.50346 16.7536 3.1665 16.7536H14.8332C15.4962 16.7536 16.1321 17.017 16.6009 17.4859C17.0698 17.9547 17.3332 18.5906 17.3332 19.2536V20.087Z"
											fill="white"
										/>
									</svg>
									<span class="ml-1">Valorant</span>
								</div>
							</div>
							<div class="text-center md:text-left">
								<button class="inline-flex download-button text-white px-2 py-3 gap-2">
									<span>Download Now</span>

									<svg
										width="27"
										height="26"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											y="0.0869598"
											width="27"
											height="25.8261"
											rx="12.913"
											fill="white"
											fill-opacity="0.1"
										/>
										<path
											d="M16.435 13C16.435 13.178 16.3645 13.356 16.2239 13.4917L11.7964 17.7628C11.5147 18.0345 11.0581 18.0345 10.7766 17.7628C10.495 17.4912 10.495 17.0508 10.7766 16.7791L14.6943 13L10.7767 9.22092C10.4952 8.94923 10.4952 8.50885 10.7767 8.23729C11.0582 7.96547 11.5149 7.96547 11.7965 8.23729L16.224 12.5083C16.3647 12.644 16.435 12.822 16.435 13Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>

	<div />
</header>

<section id="add-placeholder">
	<div class="">
		<img src={HEADER_ADD_PLACEHOLDER} class="w-full" alt="" />
	</div>
</section>

<style lang="postcss">
	.download-button {
		border-radius: 10px;
		background: linear-gradient(135deg, #fd6e6a 0%, #ffc600 100%);
		@apply 3xl:text-2xl 3xl:px-5;
	}
	swiper-container::part(pagination) {
		@apply max-w-[1270px] 3xl:max-w-[1700px] mx-auto   px-5 left-1/2 transform -translate-x-1/2 text-center md:text-left;
	}
	swiper-container::part(bullet) {
		@apply w-3 h-2 rounded bg-white opacity-100 transition-all;
	}
	swiper-container::part(bullet-active) {
		@apply w-10 h-2 rounded bg-white opacity-100 transition-all;
	}
	swiper-container::part(button-prev),
	swiper-container::part(button-next) {
		@apply bg-white p-3 w-5 h-5 rounded-full text-secondary-dark hover:bg-white/80;
	}
</style>
