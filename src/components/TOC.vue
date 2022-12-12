<template>
    <p class="px-4 mb-2 font-bold">On This Page</p>
    <ul v-for="heading in headings">
        <li class="border-l-4"
            :class="{
                'border-l-sky-600 bg-sky-100 dark:bg-sky-700 dark:border-l-sky-300 font-semibold': activeId === heading.slug,
                'border-l-slate-200 hover:border-l-sky-600 dark:border-l-gray-600 dark:hover:text-sky-300 dark:hover:border-l-sky-300': activeId !== heading.slug
            }">
            <a :href="`#${heading.slug}`" class="block py-2 pr-4 text-sm hover:underline"
                :class="{
                    'pl-4': heading.depth === 2,
                    'pl-8': heading.depth === 3
                }">
                {{heading.text}}
            </a>
        </li>
    </ul>
</template>

<script lang="ts">

export default {
    props: ['headings'],
    data() {
        return {
           activeId: null
        }
    },
    mounted() {
        this.activeId = this.headings[0].slug;
        const intersectionCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.activeId = entry.target.id;
                }
            });
        }
        const observer = new IntersectionObserver(intersectionCallback, {
            rootMargin: '0px 0px -80% 0px',
            threshold: 1
        });

        this.headings.forEach(heading => {
            const target = document.getElementById(heading.slug);
            observer.observe(target);
        })
    }
}

</script>
