<script setup>
import useAuth from "~/composables/useAuth";

const links = [
    {
      label: 'Dashboard',
      icon: 'i-heroicons-home',
      to: '/manager'
    }, {
      label: 'Personnages',
      icon: 'i-heroicons-user-group',
      to: '/manager/caracters'
    }
  ]


const user = await useAuth()
</script>

<template>
  <div v-if="!user || !user.is_admin">
    Not alowed to this action !
  </div>
  <div v-else class="flex w-full">
    <UVerticalNavigation :links="links" class="relative bg-gray-950 h-[944px] w-1/4 space-y-3 p-5"/>
    <div class="w-full h-full p-5">
      <slot/>
    </div>
  </div>
</template>
