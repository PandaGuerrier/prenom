export default async function useAuth() {
  const { $api } = useNuxtApp()
  const headers = useRequestHeaders(['cookie'])
  const { data: user } = await useFetch($api('/auth'), { headers, credentials: 'include' })

  return user.value
}