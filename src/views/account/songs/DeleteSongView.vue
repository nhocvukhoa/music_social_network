<template>
	<div id="deleteSong" class="container max-w-4xl mx-auto mt-2 px-6">
		<div class="text-gray-900 text-xl">Delete Song</div>
		<div class="bg-red-500 w-full h-1"></div>

    <div class="bg-white rounded px-8 pt-6 pb-8">
      <div class="flex flex-wrap">
        <div class="w-3/4 mr-auto mt-2 text-lg p-1 text-gray-900">
          1. This is a song
        </div>
        <div class="w-1/4 ml-auto p-1">
          <button class="float-right bg-transparent text-gray-900 font-semibold py-2 px-2 border
          border-red-500 rounded hover:text-white hover:bg-red-500">Delete</button>
        </div>
      </div>
    </div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
#deleteSong {
	height: 60vh;
}
</style>
