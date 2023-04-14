<template>
	<div id="editProfile" class="container max-w-4xl mx-auto mt-2 px-6">
		<div class="text-gray-900 text-xl">Edit Profile</div>
		<div class="bg-green-500 w-full h-1"></div>

		<CropperModal
			v-if="showModal"
			:minAspectRatioProp="{width: 8, height: 8}"
			:maxAspectRatioProp="{width: 8, height: 8}"
			@cropperImageData="setCropperImageData"
			@showModal="showModal = false"
    />

		<div class="flex flex-wrap mt-4 mb-4">
			<div class="w-full sm:w-1/2 px-3">
				<TextInput
					label="First Name"
					:labelColor="false"
					placeholder="Vũ Anh Khoa"
					inputType="text"
					v-model:input="firstName"
					error="This is a text error"
        />
			</div>
			<div class="w-full sm:w-1/2 px-3 pt-3 sm:pt-0">
				<TextInput
					label="Last Name"
					:labelColor="false"
					placeholder="Nguyễn"
					inputType="text"
					v-model:input="lastName"
					error="This is a text error"
        />
			</div>
		</div>

		<div class="flex flex-wrap mt-4 mb-4">
			<div class="w-full sm:w-1/2 px-3">
				<TextInput
					label="Location"
					:labelColor="false"
					placeholder="HoiAn, QuangNam"
					inputType="text"
					v-model:input="location"
					error="This is a text error"
        />
			</div>
		</div>

		<div class="flex flex-wrap mt-4 mb-4">
			<div class="w-full sm:w-1/2 px-3 pt-3 sm:pt-0">
				<DisplayCropperButton 
					label="Profile Image"
					btnText="Update Profile Image"
					@showModal="showModal = true" />
			</div>
		</div>

		<div class="flex flex-wrap mt-4 mb-4">
			<div class="w-full sm:w-1/2 px-3 pt-3 sm:pt-0">
				<CropperImage
					label="Cropper Image"
					:image="image"
				/>
			</div>
		</div>

		<div class="flex flex-wrap mt-4 mb-4">
			<div class="w-full px-3 pt-3 sm:pt-0">
				<TextArea 
					label="description"
					placeholder="Please enter some information here"
					error="This is a text error"
					v-model:description="description"></TextArea>
			</div>
		</div>
		
		<div class="flex flex-wrap justify-end mt-4 mb-4">
			<div class="w-full sm:w-1/2 px-3 pt-3 sm:pt-0">
				<SubmitFormButton 
					btnText="Update Profile"
					class="bg-green-500 hover:bg-green-700" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import CropperImage from '../../components/global/CropperImage.vue'
import TextInput from '../../components/global/TextInput.vue';
import TextArea from '../../components/global/TextArea.vue';
import CropperModal from '../../components/global/CropperModal.vue';
import SubmitFormButton from '../../components/global/SubmitFormButton.vue';
import DisplayCropperButton from '../../components/global/DisplayCropperButton.vue';

let showModal = ref(false)
let firstName = ref(null)
let lastName = ref(null)
let location = ref(null)
let description = ref(null)
let image = ref(null)

const setCropperImageData = (data) => {
  image.value = data.imageUrl
	console.log(data)
}
</script>
