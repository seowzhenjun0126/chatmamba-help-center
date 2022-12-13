<template>
    <div class="flex items-center self-center gap-1 px-3 py-2 rounded-2xl bg-sky-200/50 dark:bg-slate-600">
        <button @click="setTheme('light')"
            :class="{
                'text-orange-600 dark:text-orange-500': theme === 'light',
                'text-gray-500 dark:text-gray-300': theme !== 'light'
            }">
            <slot name="light-mode"/>
        </button>
        <button @click="setTheme('dark')"
            :class="{
                'text-orange-600 dark:text-orange-500': theme === 'dark',
                'text-gray-500 dark:text-gray-300': theme !== 'dark'
            }">
            <slot name="dark-mode"/>
        </button>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            theme: null
        }
    },
    methods: {
        setTheme(theme: 'light' | 'dark') {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
            localStorage.theme = theme
            this.theme = theme;
        }
    },
    mounted() {
        this.theme = localStorage.theme;
    }
}
</script>
