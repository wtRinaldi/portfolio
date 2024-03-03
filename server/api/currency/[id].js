export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  const { currencyKey } = useRuntimeConfig()

  const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${id}`

  const { data } = await $fetch(uri)

  return data
})