<template>
  <NavBar :user=user />
  <slot />
</template>
<script setup lang="ts">
  import NavBar from '~/pages/components/navBar.vue'
  import '../assets/style/index.css'
  defineProps(['user'])

  useHead({
    title: "Le Prénom"
  })
</script>