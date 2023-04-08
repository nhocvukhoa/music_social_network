<template>
	<div class="bg-green-500 rounded">
		<div id="aplayer"></div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';
import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';

onMounted(() => {
	thePlayer();
})

const thePlayer = () => {
	new APlayer({
    container: document.getElementById('aplayer'),
    audio: [
			{
					name: 'Stomping rock',
					artist: 'AlexGrohl',
					url: '/musics/stomping-rock-four-shots.mp3',
					cover: '/img/account/profile/songs/stomping-rock-four-shots.jpg'
			},
			{
					name: 'Wake up the to the renaissance',
					artist: 'AudioCoffee',
					url: '/musics/wake-up-to-the-renaissance.mp3',
					cover: '/img/account/profile/songs/wake-up-to-the-renaissance.jpg'
			}
		]
});
}
</script>
