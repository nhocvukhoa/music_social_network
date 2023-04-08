<template>
  <div id="register">
    <div class="w-full p-6 flex flex-col justify-center items-center">
      <div class="w-full sm:w-2/3 md:w-2/3 lg:w-1/3 bg-white p-8 shadow rounded mb-6">
        <h1 class="mb-6 text-lg text-black font-medium">Let's get rocking!</h1>
        <div class="mb-4">
          <TextInput
            label="First Name"
            :labelColor="false"
            placeholder="Enter your first name..."
            inputType="text"
            v-model:input="firstName"
            error="This is a text error"
          />
        </div>

        <div class="mb-4">
          <TextInput
            label="Last Name"
            :labelColor="false"
            placeholder="Enter your last name..."
            inputType="text"
            v-model:input="lastName"
            error="This is a text error"
          />
        </div>

        <div class="mb-4">
          <TextInput
            label="Email"
            :labelColor="false"
            placeholder="abc@gmail.com"
            inputType="text"
            v-model:input="email"
            error="This is a text error"
          />
        </div>

        <div class="mb-4">
          <TextInput
            label="Password"
            :labelColor="false"
            placeholder="password123?"
            inputType="password"
            v-model:input="password"
            error="This is a text error"
          />
        </div>

        <div class="mb-4">
          <TextInput
            label="Confirm Password"
            :labelColor="false"
            placeholder="password123?"
            inputType="password"
            v-model:input="passwordConfirm"
            error="This is a text error"
          />
        </div>
        <button
          type="submit"
          class="block w-full bg-green-500 text-white rounded-sm mt-3 py-3 text-sm tracking-wide"
        >
          Register
        </button>
      </div>
      <p class="text-center text-md text-white">
        Do you already have an account?
        <router-link
          :to="{ name: 'login' }"
          class="text-blue-500 no-underline hover:underline"
          >Login</router-link
        >
      </p>
    </div>
  </div>
  <VideoDarkOverlay />
</template>

<script setup>
import { ref } from "vue";
import TextInput from "../components/global/TextInput.vue";
import VideoDarkOverlay from "../components/global/VideoDarkOverlay.vue";

let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let password = ref(null);
let passwordConfirm = ref(null);
</script>
