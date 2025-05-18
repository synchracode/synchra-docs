// @ts-check
import starlight from '@astrojs/starlight'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    site: 'https://synchra.net',
    integrations: [
        icon(),
        starlight({
            title: 'Synchra',
            logo: {
                src: './src/assets/tree.svg',
            },
            sidebar: [
                {
                    label: 'Getting started',
                    items: [
                        {
                            label: 'Getting started',
                            slug: 'getting-started',
                        },
                    ],
                },
                {
                    label: 'Command vars',
                    items: [
                        { label: 'Usage', slug: 'cmd-vars' },
                        { label: 'General', slug: 'cmd-vars/general' },
                        { label: 'Category', slug: 'cmd-vars/category' },
                        { label: 'Accountage', slug: 'cmd-vars/accountage' },
                        { label: 'Followage', slug: 'cmd-vars/followage' },
                        { label: 'Countdown', slug: 'cmd-vars/countdown' },
                        {
                            label: 'Permit manager',
                            slug: 'cmd-vars/permit-manager',
                        },
                        { label: 'Points', slug: 'cmd-vars/points' },
                        { label: 'Gambling', slug: 'cmd-vars/gambling' },
                        { label: 'Quotes', slug: 'cmd-vars/quotes' },
                        {
                            label: 'Random number',
                            slug: 'cmd-vars/random-number',
                        },
                        {
                            label: 'Spotify',
                            slug: 'cmd-vars/spotify',
                        },
                        {
                            label: 'Time',
                            slug: 'cmd-vars/time',
                        },
                        {
                            label: 'Title',
                            slug: 'cmd-vars/title',
                        },
                        {
                            label: 'Weather',
                            slug: 'cmd-vars/weather',
                        },
                        { label: 'Faceit', slug: 'cmd-vars/faceit' },
                    ],
                },
            ],
        }),
    ],
})
