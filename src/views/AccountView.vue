<template>
	<TopNavigation />
  <div id="acountView" class="max-w-4xl mx-auto">
		<router-view></router-view>
	</div>
</template>

<script setup>
import TopNavigation from '../components/structure/TopNavigation.vue'
</script>

<style lang="scss" scoped>
#accountView {
	min-height: 70vh;
}
</style>