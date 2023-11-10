<script setup>
  definePageMeta({
    layout: 'manager'
  })

  const { $api } = useNuxtApp()
  const headers = useRequestHeaders(['cookie'])
  const { data: caracters } = await useFetch($api('/api/caracters'), { headers, credentials: 'include' })

  const sort = ref({
    column: 'name',
    direction: 'desc'
  })

  const columns = [{
    key: 'id',
    label: 'ID',
    sortable: true
  }, {
    key: 'name',
    label: 'Name',
    sortable: true
  }, {
    key: 'subtitle',
    label: 'Sous Title',
    sortable: true
  }, {
    key: 'small_desc',
    label: 'Petite description'
  }, {
    key: 'actions'
  }]

  const page = ref(1)
  const pageCount = caracters.value.caracters.length < 10 ? 1 : caracters.value.caracters.length / 10

  const rows = computed(() => {
    return caracters.value.caracters.slice((page.value - 1) * pageCount, (page.value) * pageCount)
  })

  const items = (row) => [
    [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      to: '/manager/caracters/' + row.id
    }], [{
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid'
    }]
   ]

  const selected = ref([])

</script>

<template>
  <NuxtLayout>
    <div class="h-[905px]">
      <UTable v-model:sort="sort" :columns="columns" :rows="caracters.caracters" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }">
        <template #name-data="{ row }">
          <span :class="[selected.find(person => person.id === row.id) && 'text-primary-500 dark:text-primary-400']">{{ row.name }}</span>
        </template>

        <template #actions-data="{ row }">
          <UDropdown :items="items(row)">
            <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
          </UDropdown>
        </template>
      </UTable>
        <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
          <UPagination v-model="page" :page-count="pageCount" :total="caracters.caracters.length"/>
        </div>
    </div>
  </NuxtLayout>
</template>