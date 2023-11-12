<script setup>
import useForm from '~/utilities/form'
const props = defineProps(['user'])
const toast = useToast()
const { $api } = useNuxtApp()

const logoutForm = useForm({}, toast)
  const logout = async () => {
    await logoutForm.value.post($api('/auth/sign-out'))
    toast.add({ title: 'You have been logged out', timeout: 6000 })
    props.user.value = null
    location.href = "/d"
  }
</script>

<template>
  <form :action="logout">
    <UButton type="submit">Logout</UButton>
  </form>

</template>