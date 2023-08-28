<script>
	import { facebookSvg, instagramSvg, linkdinSvg, tiktokSvg, twitterSvg } from '$assets/svg/layout';
</script>

<footer class="text-[#FFFFFF] pt-28">
	<div class="my-container flex flex-col gap-y-[60px]">
		<div>
			<p class="text-2xl font-medium mb-3">Script</p>
			<p class="text-base max-w-[500px]">
				Mauris vel et neque dictumst commodo. Vulputate eu tincidunt morbi enim sociis bibendum
				amet.
			</p>
		</div>
		<div class="flex flex-wrap justify-between">
			<div>
				<h3 class="font-medium text-2xl mb-6">Platform</h3>
				<ul>
					<li>Platfrom Review</li>
					<li>How to use</li>
					<li>Trust & Safety</li>
					<li>Integrations</li>
					<li>Platform status</li>
				</ul>
			</div>
			<div>
				<h3 class="font-medium text-2xl mb-6">Why Scripts</h3>
				<ul>
					<li>Why Choose us</li>
					<li>Customer Stories</li>
					<li>Customer Success</li>
				</ul>
			</div>
			<div>
				<h3 class="font-medium text-2xl mb-6">Customers</h3>
				<ul>
					<li>Success Center</li>
					<li>Support Login</li>
					<li>Community</li>
				</ul>
			</div>
			<div>
				<h3 class="font-medium text-2xl mb-6">Help & Support</h3>
				<ul>
					<li>Help Center</li>
					<li>Support Login</li>
					<li>Community</li>
					<li>Community</li>
				</ul>
			</div>
		</div>
		<div class="pt-14 border-t">
			<div class="flex items-center justify-between">
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
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: #0a0a0a;
	}
</style>
