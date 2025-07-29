export default defineAppConfig({
    ui: {
        primary: 'emerald',
        gray: 'zinc',
        input: {
            rounder: "rounded-full",
            default: {
                size: 'lg',
                color: 'white',
                variant: 'outline',
                loadingIcon: 'i-heroicons-arrow-path-20-solid',
            },
        },
        button: {
            default: {
                size: 'lg',
            }
        }
    }
})