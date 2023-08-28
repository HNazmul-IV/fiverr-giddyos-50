<script lang="ts">
</script>

<section class="advertisement">
	<div class="flex flex-col items-center">
		<div class="image">
			<div id="gradient" />
			<img class="rounded-xl" src="https://picsum.photos/600/600" alt="" />
		</div>

		<div class="md:py-4">
			<p class="text-center">Advertisement Placeholder</p>
		</div>
	</div>
</section>

<style>
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
	.advertisement {
		width: 394px;
		height: 508px;
		border-radius: 10px;
		background-image: linear-gradient(#fd6e6a, #ffc600);
	}

	.image {
		width: 100%;
		height: 80%; /* Adjust the height if needed */
		clip-path: polygon(0 0, 100% 0, 100% 78%, 0 55%);
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
	}

	.image img {
		max-height: 100%;
		max-width: 100%;
	}
</style>
