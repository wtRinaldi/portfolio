export default defineEventHandler(async (event) => {
    const { id } = event.context.params
    const { imageKey } = useRuntimeConfig()

    const uri = 'https://api.unsplash.com/photos?query=test&client_id=OTfLDBVmthQNQp7qW8R8ERB-z3sNaz03pDxSpBNFCQI'

    debugger;

    console.log('server', uri)

    const { data } = await $fetch(uri)

    return data
})