<template>
  <div id="centerCallToAction">
    <div class="px-4 md:w-3/4 lg:w-2/3 mx-auto text-center">
      <h1 class="text-4xl sm:text-5xl md:text-5xl text-center leading-tight text-gray-100 mb-3">
        <b>Music Social Network</b>
      </h1>
      <p class="pt-2 text-xl text-center text-gray-300">Login or Register now and join other like mined
				people all around the world who want to share there music
			</p>
      <p class="py-4 text-xl text-center text-gray-300">Let the music be your guide</p>
    </div>
		<div class="mt-6"></div>
		<div class="md:w-3/4 lg:w-2/5 mx-auto px-4">
			<div class="flex justify-center w-full">
				<router-link class="w-full mr-1 py-2 px-4 bg-green-600 text-white text-center
					font-semibold text-xl sm:text-2xl rounded-lg shadow-md hover:bg-green-500 cursor-pointer
					focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" 
					to="">Login</router-link>
				<router-link class="w-full mr-1 py-2 px-4 bg-blue-600 text-white text-center
					font-semibold text-xl sm:text-2xl rounded-lg shadow-md hover:bg-blue-500 cursor-pointer
					focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" 
					:to="{ name: 'register' }">Register</router-link>
			</div>
		</div>
  </div>
	<VideoDarkOverlay />
</template>

<script setup>
import VideoDarkOverlay from '../../components/global/VideoDarkOverlay.vue';
</script>

<style lang="scss">
#centerCallToAction {
	width: 100%;
	position: absolute;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	z-index: 1;
}
</style>
