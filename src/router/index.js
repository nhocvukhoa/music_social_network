import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountView.vue'),
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/account/ProfileView.vue')
      },
      {
        path: 'edit-profile',
        name: 'EditProfile',
        component: () => import('../views/account/profile/EditProfileView.vue')
      },
      {
        path: 'add-song',
        name: 'AddSong',
        component: () => import('../views/account/songs/AddSongView.vue')
      },
      {
        path: 'delete-song',
        name: 'DeleteSong',
        component: () => import('../views/account/songs/DeleteSongView.vue')
      },
      {
        path: 'add-youtube-video',
        name: 'AddYoutubeVideo',
        component: () => import('../views/account/videos/AddVideoView.vue')
      },
      {
        path: 'delete-youtube-video',
        name: 'DeleteYoutubeVideo',
        component: () => import('../views/account/videos/DeleteVideoView.vue')
      },
      {
        path: 'add-post',
        name: 'AddPost',
        component: () => import('../views/account/posts/AddPostView.vue')
      },
      {
        path: 'edit-post',
        name: 'EditPost',
        component: () => import('../views/account/posts/EditPostView.vue')
      },
      {
        path: 'posts',
        name: 'ListPosts',
        component: () => import('../views/account/posts/ListPostsView.vue')
      },
      {
        path: 'posts/detail',
        name: 'PostDetail',
        component: () => import('../views/account/posts/PostDetailView.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
