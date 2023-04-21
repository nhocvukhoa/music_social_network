<template>
  <div id="Register">
    <div class="w-full p-6 flex flex-col justify-center items-center">
      <div class="w-full sm:w-2/3 md:w-2/3 lg:w-1/3 bg-white p-8 shadow rounded mb-6">
        <h1 class="mb-6 text-lg text-black font-medium">Let's get rocking!</h1>

        <div class="mb-4">
          <TextInput
            label="First Name"
            :labelColor="false"
            placeholder="John"
            v-model:input="firstName"
            inputType="text"
            :error="errors.first_name ? errors.first_name[0] : ''"
          />
        </div>

        <div class="mb-4">
          <TextInput
            label="Last Name"
            :labelColor="false"
            placeholder="Doe"
            v-model:input="lastName"
            inputType="text"
            :error="errors.last_name ? errors.last_name[0] : ''"
          />
        </div>

        <div class="mb-4">
          <TextInput
            label="Email"
            :labelColor="false"
            placeholder="john.doe@m.com"
            v-model:input="email"
            inputType="text"
            :error="errors.email ? errors.email[0] : ''"
          />
        </div>

        <div class="mb-4">
          <TextInput
            label="Password"
            :labelColor="false"
            placeholder="password123?"
            v-model:input="password"
            inputType="password"
            :error="errors.password ? errors.password[0] : ''"
          />
        </div>

        <div class="mb-4">
          <TextInput
            label="Confirm Password"
            :labelColor="false"
            placeholder="password123?"
            v-model:input="confirmPassword"
            inputType="password"
          />
        </div>

        <button
          class="block w-full bg-green-500 text-white rounded-sm py-3 text-sm tracking-wide"
          type="submit"
          @click="register"
        >
          Register
        </button>
      </div>

      <p class="text-center text-md text-white">
        Already have an account?
        <router-link
          :to="{ name: 'login' }"
          class="text-blue-500 no-underline hover:underline"
        >
          Login
        </router-link>
      </p>
    </div>
  </div>
  <VideoDarkOverlay />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from '../store/user-store'
import { useRouter } from 'vue-router'
import TextInput from "../components/global/TextInput.vue";
import VideoDarkOverlay from "../components/global/VideoDarkOverlay.vue";

const userStore = useUserStore();
const router = useRouter();

let errors = ref([]);
let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let password = ref(null);
let confirmPassword = ref(null);

const register = async () => {
  errors.value = [];

  try {
    let res = await axios.post("http://127.0.0.1:8000/api/register", {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
    });

    userStore.setUserDetails(res)

    router.push('/account/profile')
  } catch (err) {
    errors.value = err.response.data.errors;
  }
};
</script>
