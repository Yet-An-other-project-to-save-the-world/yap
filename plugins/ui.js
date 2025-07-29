import colors from '#tailwind-config/theme/colors'

const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : null
}

export default defineNuxtPlugin({
    enforce: 'post',


    setup() {
        const appConfig = useAppConfig()

        const root = computed(() => {
            const primary = colors[appConfig.ui.primary]
            const gray = colors[appConfig.ui.gray]

            return `:root {
        ${Object.entries(primary || colors.green).map(([key, value]) => `--color-primary-${key}: ${hexToRgb(value)};`).join('\n')}
        --color-primary-DEFAULT: var(--color-primary-500);

        ${Object.entries(gray || colors.cool).map(([key, value]) => `--color-gray-${key}: ${hexToRgb(value)};`).join('\n')}
        }

        .dark {
          --color-primary-DEFAULT: var(--color-primary-400);
        }
        `
        })

        if (import.meta.client) {
            watch(root, () => {
                window.localStorage.setItem('nuxt-ui-root', root.value)
            })

            appConfig.ui.primary = window.localStorage.getItem('nuxt-ui-primary') || appConfig.ui.primary
            appConfig.ui.gray = window.localStorage.getItem('nuxt-ui-gray') || appConfig.ui.gray
        }

        if (import.meta.server) {
            useHead({
                script: [
                    {
                        innerHTML: `
                if (localStorage.getItem('nuxt-ui-root')) {
                  document.querySelector('style#nuxt-ui-colors').innerHTML = localStorage.getItem('nuxt-ui-root')
                }`.replace(/\s+/g, ' '),
                        type: 'text/javascript',
                        tagPriority: -1
                    }
                ]
            })
        }
    }
})