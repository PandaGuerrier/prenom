<template>
  <div class="fixed top-0 left-0 w-full z-40">
    <div class="flex justify-center">
      <nav class="mt-4 w-1/3 h-[50px] animate__animated animate__fadeInDownBig text-gray-400 bg-red-800 backdrop-blur bg-opacity-5 border border-red-400 rounded-full">
        <div class="flex w-full h-full justify-center items-center px-4">
          <div class="space-x-5">
            <UButton
                size="lg"
                variant="ghost"
                label="Le prénom"
                :ui="{ rounded: 'rounded-full' }"/>
            <UButton
                size="lg"
                variant="ghost"
                label="Personnages"
                :ui="{ rounded: 'rounded-full' }"/>
            <UButton
                size="lg"
                variant="ghost"
                label="Synopsis"
                :ui="{ rounded: 'rounded-full' }"/>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
  import useForm from '~/utilities/form'
  const props = defineProps(['user'])
  const toast = useToast()
  const { $api } = useNuxtApp()

  const logoutForm = useForm({}, toast)
  const logout = async () => {
    await logoutForm.value.post($api('/auth/sign-out'))
    toast.add({ title: 'You have been logged out', timeout: 6000 })
    props.user.value = null
    location.reload()
  }
</script>