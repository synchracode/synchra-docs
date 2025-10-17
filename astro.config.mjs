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
            id: '9157abbf-8bf1-4d5f-82ed-2efad0487764',
            endpointUrl: 'https://a.synchra.net',
        }),
        icon(),
        starlight({
            title: 'Synchra Docs',
            logo: {
                src: './src/assets/android-chrome-192x192.png',
            },
            favicon: './src/assets/favicon.ico',
            sidebar: [
                {
                    label: 'Getting started',
                    slug: 'getting-started',
                },
                {
                    label: 'Phrase matching',
                    autogenerate: { directory: 'phrase-matching' },
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
