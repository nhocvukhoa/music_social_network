<template>
  <div>
    <button @click="open =! open" class="bg-transparent hover:bg-green-400 text-white font-semibold hover:text-white
      py-1 px-2 hover:transparent rounded">
        <i class="fa-solid fa-bars fa-xl"></i>
    </button>
    <div v-show="open"
      class="animated slideInDown faster fixed w-full h-full top-0 left-0 flex justify-center backdrop-blur-sm">
        <div class="bg-black absolute w-full h-full opacity-75"></div>
        <div class="my-auto fixed w-80 pt-16">
          <p class="text-center text-white text-2xl font-bold">Menu</p>
          <div class="pt-2">
            <RouterLinkButton btnText="Profile"
              color="green"
              url="/account/profile"
              class="w-full text-center text-lg text-white" />
            <RouterLinkButton btnText="Close"
              color="red"
              url="/account/profile"
              class="w-full text-center text-lg text-white mt-2"
              @click="open =! open" />
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RouterLinkButton from '../global/RouterLinkButton.vue';

let open = ref(false)
</script>
