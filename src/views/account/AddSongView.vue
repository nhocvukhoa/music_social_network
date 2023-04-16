<template>
	<div id="addSong" class="container max-w-4xl mx-auto mt-2 px-6">
		<div class="text-gray-900 text-xl">Add Song</div>
		<div class="bg-green-500 w-full h-1"></div>

		<div class="flex flex-wrap mt-4 mb-4">
			<div class="w-full px-3 pt-3 sm:pt-0">
				<TextInput
          label="Title"
          placeholder="Cool new song"
          inputType="text"
          error="This is a text error"
          v-model:input="title"
        />
			</div>
		</div>

    <div class="flex mt-4 mb-4">
      <div class="w-full px-3 pt-3 m:pt-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold 
          mb-2">Select Image</label>
        <div class="mb-3 w-full">
          <input 
            type="file"
            class="form-control block w-full px-3 py-1.5 text-base font-normal 
              bg-clip-padding text-gray-700 bg-white border border-solid 
            border-gray-400 rounded transition ease-in-out m-0 focus:bg-white
            focus:text-gray-700 focus:border-blue focus:outline-none"
            id="image"
            ref="fileInput"
            @change="getUploadedImageLink">
        </div>
      </div>
    </div>
		
		<div class="flex flex-wrap justify-end mt-4 mb-4">
			<div class="w-full sm:w-1/2 px-3 pt-3 sm:pt-0">
				<SubmitFormButton 
					btnText="Add Song"
					class="bg-green-500 hover:bg-green-700" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import TextInput from '../../components/global/TextInput.vue';
import SubmitFormButton from '../../components/global/SubmitFormButton.vue';

let title = ref('')
</script>

<style lang="scss" scoped>
#addSong {
	height: 60vh;
}
</style>
