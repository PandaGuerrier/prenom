<template>
  <NuxtLayout :user="user">
    <div class="flex-row my-8 mt-52 w-full h-[500px] z-0">
      <div class="flex w-full h-full justify-center items-center">
        <TitleHero />
      </div>
    </div>

    <div class="flex-row my-8 mt-52 w-full h-[500px] bg-gray-900">
      <div class="flex w-full h-full justify-center items-center">

      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  import TitleHero from "~/pages/components/titleHero.vue";
  import useAuth from "~/composables/useAuth";

  const user = await useAuth()
</script>