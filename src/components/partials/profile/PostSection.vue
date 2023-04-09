<template>
  <div class="mx-auto py-4">
    <div class="flex flex-wrap font-bold text-gray-100">
      <div class="text-gray-900 text-xl">Posts</div>
      <div class="bg-green-500 w-full h-1"></div>
      <div class="w-full mt-4">
        <RouterLinkButton btnText="Add Post" color="green" url="/account/add-post" />
      </div>
    </div>
  </div>

  <div class="flex flex-wrap mb-4">
    <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
      <div class="max-w-sm border rounded-lg shadow">
        <a href="#">
          <img class="rounded-t-lg" src="../../../../public/img/account/profile/card.jpg" alt="" />
        </a>
        <div class="p-2 md:p-4">
          <div class="text-lg">
            <router-link :to="{ name: 'login' }" class="underline text-blue-500 hover:text-blue-600">
              Test title
            </router-link>
          </div>
          <p class="py-2">Location: Test location</p>
          <p class="text-gray-darker text-md">Lorem ...................</p>
          <div class="flex items-center justify-end">
            <router-link :to="{ name: 'login' }"
              class="bg-blue-500 hover:text-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full mr-1">
              Edit Post
            </router-link>
            <router-link :to="{ name: 'login' }"
              class="bg-red-500 hover:text-red-700 text-white text-sm font-bold py-1 px-2 rounded-full">
              Delete Post
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RouterLinkButton from '../../global/RouterLinkButton.vue'
</script>
