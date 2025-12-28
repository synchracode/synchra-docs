// @ts-check
import starlight from '@astrojs/starlight'
import umami from '@yeskunall/astro-umami'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.synchra.net',
    integrations: [
        umami({
            id: '74183a31-f5c6-48f2-9ed0-02667780c01e',
            endpointUrl: 'https://a.synchra.net',
        }),
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
                    slug: 'getting-started',
                },
                {
                    label: 'Command vars',
                    autogenerate: { directory: 'cmd-vars' },
                },
                {
                    label: 'Widgets',
                    autogenerate: { directory: 'widgets' },
                },
            ],
        }),
    ],
})
