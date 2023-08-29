<script>
	import { facebookSvg, instagramSvg, linkdinSvg, tiktokSvg, twitterSvg } from '$assets/svg/layout';
</script>

<footer class="text-[#FFFFFF] pt-28">
	<div class="my-container flex flex-col gap-y-[60px]">
		<div class="max-sm:text-center">
			<h2 class="text-xl md:text-2xl font-medium mb-3">Script</h2>
			<p class=" text-gray-200 text-sm md:text-base max-w-[500px]">
				Mauris vel et neque dictumst commodo. Vulputate eu tincidunt morbi enim sociis bibendum
				amet.
			</p>
		</div>
		<div class="flex flex-wrap justify-between">
			<div class="footer-links-wrappers">
				<h3 class="footer-link-tittle">Platform</h3>
				<ul>
					<li><a href="/" class="footer-link">Platfrom Review</a></li>
					<li><a href="/" class="footer-link">How to use</a></li>
					<li><a href="/" class="footer-link">Trust & Safety</a></li>
					<li><a href="/" class="footer-link">Integrations</a></li>
					<li><a href="/" class="footer-link">Platform status</a></li>
				</ul>
			</div>
			<div class="footer-links-wrappers">
				<h3 class="footer-link-tittle">Why Scripts</h3>
				<ul>
					<li><a href="/" class="footer-link">Why Choose us</a></li>
					<li><a href="/" class="footer-link">Customer StCuies</a></li>
					<li><a href="/" class="footer-link">Customer Success</a></li>
				</ul>
			</div>
			<div class="footer-links-wrappers">
				<h3 class="footer-link-tittle">Customers</h3>
				<ul>
					<li><a href="/" class="footer-link">Success Center</a></li>
					<li><a href="/" class="footer-link">Support Login</a></li>
					<li><a href="/" class="footer-link">Community</a></li>
				</ul>
			</div>
			<div class="footer-links-wrappers">
				<h3 class="footer-link-tittle">Help & Support</h3>
				<ul>
					<li><a href="/" class="footer-link">Help Center</a></li>
					<li><a href="/" class="footer-link">Support Login</a></li>
					<li><a href="/" class="footer-link">Community</a></li>
					<li><a href="/" class="footer-link">Community</a></li>
				</ul>
			</div>
		</div>
		<div class="py-8 md:pb-5 md:pt-10 border-t">
			<div class="flex flex-col md:flex-row items-center justify-between">
				<p class="font-normal mb-3 md:mb-0 md:text-lg">
					©️2023 <span class="text-yellow-300 uppercase">Script </span> |
					<span> All right reserved.</span>
				</p>
				<div class="flex gap-2">
					<a href="/" class="footer-socials-link">
						<img class="w-4 h-4" src={facebookSvg} alt="social-media" />
					</a>
					<a href="/" class="footer-socials-link">
						<img class="w-4 h-4" src={instagramSvg} alt="social-media" />
					</a>
					<a href="/" class="footer-socials-link">
						<img class="w-4 h-4" src={twitterSvg} alt="social-media" />
					</a>
					<a href="/" class="footer-socials-link">
						<img class="w-4 h-4" src={linkdinSvg} alt="social-media" />
					</a>
					<a href="/" class="footer-socials-link">
						<img class="w-4 h-4" src={tiktokSvg} alt="social-media" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	footer {
		background-color: #0a0a0a;
	}
	.footer-links-wrappers {
		@apply flex-shrink-0  text-center md:text-left pb-10 w-1/2 lg:w-1/4;
	}

	.footer-link {
		@apply text-sm text-gray-300 md:text-base;
	}
	.footer-link-tittle {
		@apply text-lg mb-3 md:text-2xl md:mb-6;
	}
	.footer-socials-link {
		@apply inline-block;
	}
</style>
