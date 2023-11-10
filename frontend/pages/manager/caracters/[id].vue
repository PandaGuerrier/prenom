<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'manager'
})

const route = useRoute()

const { $api } = useNuxtApp()
const headers = useRequestHeaders(['cookie'])
const { data: caracters } = await useFetch($api('/api/caracters/' + route.params.id), { headers, credentials: 'include' })
console.log(caracters.value)


const state = reactive({
  name: undefined,
  subtitle: undefined,
  smallDesc: undefined,
  history: undefined,
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <NuxtLayout>
    <div class="h-[905px]">
      <UForm :validate="validate" :state="state" class="space-y-4 flex-row" @submit="onSubmit">
        <UFormGroup label="Name" name="name">
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </div>
  </NuxtLayout>
</template>