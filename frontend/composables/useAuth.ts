export default async function useAuth() {
  const { $api } = useNuxtApp()
  const headers = useRequestHeaders(['cookie'])
  console.log(headers)
  const { data: user } = await useFetch($api('/auth'), { headers, credentials: 'include' })

  return user.value
}