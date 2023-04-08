<template>
	<div class="mx-auto py-4">
		<div class="flex flex-wrap font-bold text-gray-100">
			<div class="text-gray-900 text-xl">Youtube Videos</div>
			<div class="bg-green-500 w-full h-1"></div>

			<div class="w-full mt-4">
				<RouterLinkButton class="ml-2 border-red-500 hover:bg-red-500"
					btnText="Delete Youtube Video"
					url="/account/delete-youtube-video"
				/>
				<RouterLinkButton
					btnText="Add Youtube Video"
					color="green"
					url="/account/add-youtube-video" />
			</div>
		</div>

		<div class="flex flex-wrap mb-4">
			<div class="w-full md:w-1/2 lg:w-1/2 my-1 px-1">
				<div class="text-xl text-gray-900">Video title</div>
				<iframe src="https://www.youtube.com/embed/37QioNhPtJQ?autoplay=0" class="w-full h-60"></iframe>
			</div>
		</div>
	</div>
</template>

<script setup>
import RouterLinkButton from '../../global/RouterLinkButton.vue';
</script>
