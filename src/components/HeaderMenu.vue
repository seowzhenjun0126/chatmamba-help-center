<template>
    <button @click="toggleSidebar()" class="flex items-center justify-center w-10 h-10 rounded dark:bg-gray-700">
        <slot name="header-menu-icon"/>
    </button>
</template>

<script lang="ts">
export default {
    data() {
        return {
            menuOpened: false
        }
    },
    methods: {
        toggleSidebar() {
            const sidebar = document.getElementById('left-sidebar');
            if (!this.menuOpened) {
                sidebar.classList.add('mobile-sidebar-toggle');
            } else {
                sidebar.classList.remove('mobile-sidebar-toggle');
            }
            this.menuOpened = !this.menuOpened;
        }
    }
}
</script>
