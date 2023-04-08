<template>
	<div class="container max-w-4xl mx-auto flex">
		<div class="w-1/3">
			<img src="../../../public/img/account/profile/avatar.png" 
				alt="Avatar"
				class="w-full rounded-lg h-auto shadow-lg">
		</div>
		<div class="w-full pl-4">
			<div class="flex">
				<div class="w-1/2">
					<h1 class="text-2xl md:text-4xl text-left text-gray-900">Hoang</h1>
					<span class="text-md text-gray-700">
						<i><b>Hội An, Quảng Nam</b></i>
					</span>
				</div>
				<div class="w-1/2 mt-2">
					<RouterLinkButton btnText="Edit profile"
						color="green"
						url="/account/edit-profile" />
				</div>
			</div>
			<ProfileInfor />
			<ProfileAbout />
		</div>
	</div>
	<SongsSection />
</template>

<script setup>
import RouterLinkButton from '../../components/global/RouterLinkButton.vue';
import SongsSection from '../../components/partials/profile/SongsSection.vue';
import ProfileInfor from '../../components/partials/profile/ProfileInfor.vue'
import ProfileAbout from '../../components/partials/profile/ProfileAbout.vue'
</script>
