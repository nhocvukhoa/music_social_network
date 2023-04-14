<template>
	<button class="float-right text-white font-semibold
	hover:text-white py-2 px-4"
    @click="$emit('submit', true)">{{ btnText }}</button>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
	btnText: String,
})

const { btnText } = toRefs(props)
</script>
