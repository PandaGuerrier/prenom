<script setup>
import useForm from '~/utilities/form'
const toast = useToast()

definePageMeta({
  layout: 'manager'
})

const route = useRoute()
const {$api} = useNuxtApp()
const headers = useRequestHeaders(['cookie'])

const form = useForm({
  name: '',
  subtitle: '',
  smallDesc: '',
  history: ''
}, toast)

const send = async () => {
  await form.value.post($api('/api/caracters/'))
  toast.add({ title: 'Created !', timeout: 6000 })
  navigateTo({ path: '/manager/caracters' })
}
</script>

<template>
  <NuxtLayout>
    <div class="h-[905px]">
      <form @submit.prevent="send" @keydown="form.errors.clear()" class="space-y-5">
        <UFormGroup label="Name" name="name">
          <UInput v-model="form.name" id="name" type="text" required/>
        </UFormGroup>

        <UFormGroup label="Petit sous titre" name="subtitle">
          <UInput v-model="form.subtitle" id="subtitle" type="text" required/>
        </UFormGroup>

        <UFormGroup label="Petite description du personnage" name="smallDesc">
          <UInput v-model="form.smallDesc" id="smallDesc" type="text" required/>
        </UFormGroup>

        <UFormGroup label="Histoire" name="history">
          <UInput v-model="form.history" id="history" type="text" required/>
        </UFormGroup>

        <UButton type="submit">
          Enregister
        </UButton>
      </form>
    </div>
  </NuxtLayout>
</template>