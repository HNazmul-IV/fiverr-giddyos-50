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

<style>
	.ad {
		height: 278px;
		width: 100%;
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
		height: 278px;
		position: relative;
		clip-path: polygon(0 0, 100% 0%, 60% 100%, 0% 100%);
	}
	.image img {
		height: 278px;
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
