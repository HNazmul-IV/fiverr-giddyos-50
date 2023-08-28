<script lang="ts">
	import { chessSvg, clockSvg, downloadSvg, eyeSvg, userSvg } from '$assets/svg/layout';
	export let data: DataItem;
</script>

<article class="flex bg-white  rounded-lg flex-col p-5 border gap-y-5">
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
		<img class="h-64 w-full object-cover rounded-xl" src={data.image} alt="" />
	</div>
	<div class="flex gap-2">
		<button class="btn text-[15px]  bg-yellow-400 text-white !py-2">Key System</button>
		<button class=" btn  text-[15px] flex-shrink-0 bg-[#3FBA73] text-white !py-2">Mobile Friendly</button>
	</div>
	<p class="text-xl">{data.post}</p>
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
</article>

<style lang="postcss">
	.small-text {
		@apply text-sm;
	}
</style>
