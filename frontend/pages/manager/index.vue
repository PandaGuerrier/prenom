<script setup>
  definePageMeta({
    layout: 'manager'
  })
</script>
<template>
  <NuxtLayout :name="manager">
    <div class="flex space-x-5">
      <a href="/manager/caracters">
        <UCard>
            Personnages
        </UCard>
      </a>
      <a href="/manager/users">
        <UCard>
          Utilisateurs
        </UCard>
      </a>
    </div>
  </NuxtLayout>

</template>