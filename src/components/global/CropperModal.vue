<template>
  <div class="relative z-10">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full justify-center items-center p-4 py-2">
        <div 
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl 
          transition-all my-8 mt-10 max-w-4xl"
        >
        <div class="bg-white px-4 pt-5 pb-4 p-6">
          <div class="mt-3 text-left">
            <h3 class="text-2xl font-medium leading-6 text-gray-900">Crop Image</h3>
            <div class="flex flex-wrap my-4">
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
            
            <div class="flex justify-center max-w-2xl">
              <Cropper
                ref="cropper"
                :src="uploadedImageLink"
                :stencil-props="{
                  minAspectRatioProp: minAspectRatioProp.width/minAspectRatioProp.height,
                  maxAspectRatioProp: maxAspectRatioProp.width/maxAspectRatioProp.height
                }"
                @change="change"
              ></Cropper>
            </div>
    
            <div class="flex flex-row-reverse pt-4 pb-3">
              <button
                v-if="uploadedImageLink"
                @click="crop"
                type="button"
                class="inline-flex w-full sm:w-1/3 justify-center rounded-md border border-transparent
                bg-blue-600 px-4 py-2 text-white text-base font-medium shadow-sm hover:bg-blue-700
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Crop Image</button>

              <button
                @click="$emit('showModal', false)"
                type="button"
                class="inline-flex w-full sm:w-1/3 justify-center rounded-md border border-transparent
                bg-red-600 px-4 py-2 text-white text-base font-medium shadow-sm hover:bg-red-700
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mr-2">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, toRefs } from 'vue'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

const emit = defineEmits(['cropperImageData', 'showModal'])

const props = defineProps({
  minAspectRatioProp: Object,
  maxAspectRatioProp: Object
})

const { minAspectRatioProp, maxAspectRatioProp } = toRefs(props)

let fileInput = ref(null)
let cropper = ref(null)
let uploadedImageLink = ref(null)
let cropperImageData = {
  file: null,
  imageUrl: null,
  height: null,
  width: null,
  top: null,
  left: null
}

// Get link host image when choose 
const getUploadedImageLink = (e) => {
  const file = e.target.files[0]
  uploadedImageLink.value = URL.createObjectURL(file)
}

// Action button crop image
const crop = () => {
  const { coordinates, canvas } = cropper.value.getResult()

  cropperImageData.file  = fileInput.value.files[0];
  cropperImageData.imageUrl = canvas.toDataURL();
  cropperImageData.height = coordinates.height;
  cropperImageData.width = coordinates.width;
  cropperImageData.top = coordinates.top;
  cropperImageData.left = coordinates.left;

  emit('cropperImageData', cropperImageData)
  emit('showModal', false)
}

</script>
