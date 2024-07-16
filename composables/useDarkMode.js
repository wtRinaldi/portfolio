const darkMode = reactive({
    isDarkMode: false
})

export const useDarkMode = () => {
    const toggleDarkMode = () => {
        darkMode.isDarkMode = !darkMode.isDarkMode
        console.log('test', darkMode.isDarkMode)
    }

    const isDarkMode = () => {
        return darkMode.isDarkMode
    }

    return [isDarkMode, toggleDarkMode]
}