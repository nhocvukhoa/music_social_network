<template>
  <div id="videoDarkOverlay"></div>
	<video autoplay muted loop id="myVideo">
		<source src="../../../public/videos/rock.mp4" type="video/mp4">
	</video>
</template>

<style lang="scss">
#myVideo {
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -2;
}

#videoDarkOverlay {
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: -1;
}
</style>
