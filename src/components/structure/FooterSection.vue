<template>
  <div class="w-full bg-black text-gray-100">
    <div
      class="container mx-auto max-w-4xl h-full flex flelx-wrap justify-between items-start text-sm p-6 pt-8 pb-4"
    >
      <div class="mb-4">
        <div class="mb-4 font-bold">Quick links</div>
        <router-link :to="{ name: 'login' }" class="block mb-2"
          >Home</router-link
        >
      </div>
      <div class="mb-4">
        <div class="mb-4 font-bold">About our company</div>
        <p class="mb-4 leading-normal">
          123 Main Street<br />
          HoiAn<br />
          SW1 SW1<br />
        </p>
        <p class="text-sm">0965789812</p>
      </div>

			<div class="mb-4">
				<div class="mb-4 font-bold">Rules</div>
				<div class="no-underline hover:underline mb-4">Privacy Policy</div>
				<div class="no-underline hover:underline mb-4">Terms & Conditions</div>
				<div class="no-underline hover:underline">Contact Us</div>
			</div>
    </div>
		<div class="border-t-2">
			<div class="py-2 text-center">&copy;2022 MSN Company. All rights reserved.</div>
		</div>
  </div>
</template>
