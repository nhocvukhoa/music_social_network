<template>
  <div id="register">
    <div class="w-full p-6 flex flex-col justify-center items-center">
      <div class="w-full sm:w-2/3 md:w-2/3 lg:w-1/3 bg-white p-8 shadow rounded mb-6">
        <h1 class="mb-6 text-lg text-black font-medium">Let's get rocking!</h1>
        <div class="mb-4">
          <TextInput
            label="Email"
            :labelColor="false"
            placeholder="abc@gmail.com"
            inputType="text"
            v-model:input="email"
            :error="errors.email ? errors.email[0] : ''"
          />
        </div>

        <div class="mb-4">
          <TextInput
            label="Password"
            :labelColor="false"
            placeholder="password123?"
            inputType="password"
            v-model:input="password"
            :error="errors.password ? errors.password[0] : ''"
          />
        </div>
        <button
          type="submit"
          class="block w-full bg-green-500 text-white rounded-sm mt-3 py-3 text-sm tracking-wide"
          @click="login"
        >
         Login
        </button>
      </div>
      <p class="text-center text-md text-white">
        Don't have an account yet?
        <router-link :to="{ name: 'register' }" class="text-blue-500 no-underline hover:underline"
          >Register</router-link
        >
      </p>
    </div>
  </div>
  <VideoDarkOverlay />
</template>

<script setup>
import { ref } from "vue";
import axios from 'axios';
import TextInput from "../components/global/TextInput.vue";
import VideoDarkOverlay from "../components/global/VideoDarkOverlay.vue";

let errors = ref([]);
let email = ref(null);
let password = ref(null);

const login = async () => {
  errors.value = [];

  try {
    let res = await axios.post('http://127.0.0.1:8000/api/login', {
      email: email.value,
      password: password.value
    })

    console.log(res)
  } catch (err) {
    errors.value = err.response.data.errors
  }
}
</script>
