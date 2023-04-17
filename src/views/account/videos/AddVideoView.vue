<template>
	<div id="addYoutubeVideo" class="container max-w-4xl mx-auto mt-2 px-6">
		<div class="text-gray-900 text-xl">Create Youtebe Video</div>
		<div class="bg-green-500 w-full h-1"></div>

		<div class="flex flex-wrap mt-4 mb-4">
			<div class="w-full px-3 pt-3 sm:pt-0">
				<TextInput
          label="Title"
          placeholder="Cool new video"
          inputType="text"
          error="This is a text error"
          v-model:input="title"
        />
			</div>
		</div>

    <div class="flex mt-4 mb-4">
      <div class="w-full px-3 pt-3 sm:pt-0">
				<TextInput
          label="Video URL"
          placeholder="url..."
          inputType="text"
          error="This is a text error"
          v-model:input="videoCode"
        />
			</div>
    </div>
		
		<div class="flex flex-wrap justify-end mt-4 mb-4">
			<div class="w-full sm:w-1/2 px-3 pt-3 sm:pt-0">
				<SubmitFormButton 
					btnText="Add Video"
					class="bg-green-500 hover:bg-green-700" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import TextInput from '../../../components/global/TextInput.vue';
import SubmitFormButton from '../../../components/global/SubmitFormButton.vue';

let title = ref('')
</script>

<style lang="scss" scoped>
#addYoutubeVideo {
	height: 60vh;
}
</style>
