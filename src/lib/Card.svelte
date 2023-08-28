<script lang="ts">
	import { chessSvg, clockSvg, downloadSvg, eyeSvg, userSvg } from '$assets/svg/layout';
	export let data: DataItem;
</script>

<section class="flex flex-col gap-y-3 px-3 py-2 border">
	<div class="flex justify-start items-center gap-4">
		<img class="w-12 h-12 rounded-lg" src={data.user.image} alt="" />
		<div class="flex flex-col gap-2">
			<div class=" flex items-center gap-[10px]">
				<div class="flex items-center gap-[10px]">
					<img src={userSvg} alt="user.svg" />
					<p class="small-text">{data.user.name}</p>
				</div>
				<div class="flex gap-[10px]">
					<img src={chessSvg} alt="chesssvg" />
					<p class="small-text">{data.user.game}</p>
				</div>
			</div>
			<div class="flex items-center gap-[10px]">
				<img src={clockSvg} alt="clocksvg" />
				<p class="small-text">{data.user.time}</p>
			</div>
		</div>
	</div>
	<div class="">
		<img class="h-64 w-full rounded-xl" src={data.image} alt="" />
	</div>
	<div class="flex gap-2">
		<button class="bg-yellow-300">Key System</button><button class="bg-[#3FBA73]"
			>Mobile Friendly</button
		>
	</div>
	<p class="post-text">{data.post}</p>
	<div class="">
		<div class=" flex items-center gap-[10px]">
			<div class="flex items-center gap-[10px]">
				<img src={downloadSvg} alt="user.svg" />
				<p class="small-text">{data.downloads}</p>
			</div>
			<div class="flex gap-[10px]">
				<img src={eyeSvg} alt="chesssvg" />
				<p class="small-text">{data.views}</p>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		width: 394px;
		height: 508px;
		border-radius: 10px;
		background: #fff;
	}

	button {
		width: 127px;
		height: 34px;
		border-radius: 10px;
		padding: 8px, 15px, 8px, 15px;
	}
	.post-text {
		color: var(--black, #0a0a0a);
		font-family: Aeonik;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.small-text {
		color: var(--secondary-dark, #555);
		font-family: Aeonik;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
</style>
