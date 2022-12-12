import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import RemarkCallouts from 'remark-callouts';
import { remarkReadingTime } from './remark-reading-time.mjs';
import { s } from 'hastscript';
import vue from "@astrojs/vue";

export default defineConfig({
    site: 'https://help.chatmamba.com',
    integrations: [
        tailwind(),
        vue()
    ],
    markdown: {
        extendDefaultPlugins: true,
        remarkPlugins: [remarkReadingTime, RemarkCallouts],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {
            behavior: 'prepend',
            properties: {
                ariaHidden: true,
                tabIndex: -1,
                class: 'slug'
            },
            content: node => [s('svg', {
                class: 'rehypeSlug-svg',
                viewBox: '0 0 16 16',
                version: '1.1',
                width: '1.5rem',
                height: '1.5rem'
            }, [s('path', {
                fillRule: 'evenodd',
                d: 'M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'
            })])]
        }]]
    }
});
