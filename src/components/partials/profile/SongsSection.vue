<template>
	<div class="mx-auto py-4">
		<div class="flex flex-wrap font-bold text-gray-100">
			<div class="text-gray-900 text-xl">Songs</div>
			<div class="bg-green-500 w-full h-1"></div>

			<div class="w-full mt-4">
				<RouterLinkButton class="ml-2"
						color="red"
						btnText="Delete Song"
						url="/account/delete-song"
				/>
				<RouterLinkButton
					btnText="Add Song"
					color="green"
					url="/account/add-song" />
			</div>
		</div>
	</div>
	<SongsPlayer />
</template>

<script setup>
import SongsPlayer from './SongsPlayer.vue';
import RouterLinkButton from '../../../components/global/RouterLinkButton.vue';
</script>
