<template>
	<TopNavigation />
  <div id="acountView" class="max-w-4xl mx-auto py-4">
		<router-view></router-view>
	</div>
	<FooterSection />
</template>

<script setup>
import TopNavigation from '../components/structure/TopNavigation.vue'
import FooterSection from '../components/structure/FooterSection.vue';
</script>

<style lang="scss" scoped>
#accountView {
	min-height: 70vh;
}
</style>