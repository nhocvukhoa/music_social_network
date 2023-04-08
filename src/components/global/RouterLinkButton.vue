<template>
  <router-link
    :to="url"
    class="float-right bg-transparent text-gray-900 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
    >{{ btnText }}</router-link
  >
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  btnText: String,
  url: String,
});

const { btnText, url } = toRefs(props);
</script>
