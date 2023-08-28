<script>
	import { facebookSvg, instagramSvg, linkdinSvg, tiktokSvg, twitterSvg } from '$assets/svg/layout';
</script>

<footer class="text-[#FFFFFF] p-16 flex flex-col gap-10">
	<section>
		<p class="text-2xl font-extrabold">Script</p>
		<p class="text-base">
			Mauris vel et neque dictumst commodo. Vulputate eu tincidunt morbi enim sociis bibendum amet.
		</p>
	</section>
	<section class="flex flex-wrap justify-between">
		<div>
			<p class="font-medium text-xl">Platform</p>
			<ul>
				<li>Platfrom Review</li>
				<li>How to use</li>
				<li>Trust & Safety</li>
				<li>Integrations</li>
				<li>Platform status</li>
			</ul>
		</div>
		<div>
			<p class="font-medium text-xl">Why Scripts</p>
			<ul>
				<li>Why Choose us</li>
				<li>Customer Stories</li>
				<li>Customer Success</li>
			</ul>
		</div>
		<div>
			<p class="font-medium text-xl">Customers</p>
			<ul>
				<li>Success Center</li>
				<li>Support Login</li>
				<li>Community</li>
			</ul>
		</div>
		<div>
			<p class="font-medium text-xl">Help & Support</p>
			<ul>
				<li>Help Center</li>
				<li>Support Login</li>
				<li>Community</li>
				<li>Community</li>
			</ul>
		</div>
	</section>
	<p class="border border-gray-500" />
	<section class="flex justify-between">
		<p class="font-normal text-lg">
			©️2023 <span class="text-yellow-300 uppercase">Script</span>|All right reserved.
		</p>
		<div class="flex gap-2">
			<img class="w-4 h-4" src={facebookSvg} alt="social-media" />
			<img class="w-4 h-4" src={instagramSvg} alt="social-media" />
			<img class="w-4 h-4" src={twitterSvg} alt="social-media" />
			<img class="w-4 h-4" src={linkdinSvg} alt="social-media" />
			<img class="w-4 h-4" src={tiktokSvg} alt="social-media" />
		</div>
	</section>
</footer>

<style>
	footer {
		background-color: #0a0a0a;
	}
</style>
