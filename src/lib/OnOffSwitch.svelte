<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { HTMLFormAttributes, HTMLInputAttributes } from 'svelte/elements';

	let inputElement: HTMLInputElement;
	const dispatch = createEventDispatcher();

	const onChange: HTMLInputAttributes['on:change'] = () => {
		if (inputElement.checked) {
			dispatch('checked');
		} else {
			dispatch('unChecked');
		}
	};
</script>

<label class="border border-gray-200 bg-[#1D1D1D0A] relative flex w-24 h-7 rounded-xl">
	<div class="absolute inset-0 flex justify-between items-center">
		<input on:change={onChange} type="checkbox" class="sr-only peer" checked />
		<span
			class="peer-checked:bg-red-500 peer-checked:text-white py-1 px-3 text-sm rounded-full transition duration-300"
			>OFF</span
		>
		<span
			class="bg-green-500 text-white py-1 px-3 text-sm rounded-full transition duration-300 peer-checked:bg-transparent peer-checked:text-black"
			>ON</span
		>
	</div>
</label>
