<script setup>
import useForm from '~/utilities/form'
const toast = useToast()

definePageMeta({
  layout: 'manager'
})

const route = useRoute()
const {$api} = useNuxtApp()
const headers = useRequestHeaders(['cookie'])
const {data: caracter} = await useFetch($api('/api/caracters/' + route.params.id), {headers, credentials: 'include'})
console.log(caracter.value)

const form = useForm({
  name: caracter.value.caracter.name,
  subtitle: caracter.value.caracter.subtitle,
  smallDesc: caracter.value.caracter.small_desc,
  history: caracter.value.caracter.history
}, toast)

const send = async () => {
  await form.value.put($api('/api/caracters/' + route.params.id))
  toast.add({ title: 'Updated !', timeout: 6000 })
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