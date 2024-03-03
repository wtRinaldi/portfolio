export default defineEventHandler(async (event) => {

    const { store } = getQuery(event)
    const { name } = await readBody(event)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_rt6gMHfrsDCVa576vZvyy9MB1PlnnsYzPf3QNspn&currencies=EUR%2CUSD%2CCAD')

    return {
        // message: `Hi, ${name}!  Welcome to ${store}.`
        message: data
    }
})