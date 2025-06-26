// @ts-check
import starlight from '@astrojs/starlight'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.synchra.net',
    integrations: [
        icon(),
        starlight({
            title: 'Synchra Docs',
            logo: {
                src: './src/assets/android-chrome-192x192.png',
            },
            favicon: '/favicon.ico',
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
                    autogenerate: { directory: 'cmd-vars' },
                },
            ],
        }),
    ],
})
