// @ts-check
import starlight from '@astrojs/starlight'
import umami from '@yeskunall/astro-umami'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
    site: 'https://synchra.net',
    base: '/docs',
    integrations: [
        umami({
            id: 'a529a4cc-4f5a-4ed5-84c8-0864c611f15a',
            endpointUrl: 'https://a.synchra.net',
        }),
        icon(),
        starlight({
            title: 'Synchra Docs',
            logo: {
                src: './src/assets/android-chrome-192x192.png',
            },
            favicon: '/favicon.ico',
            plugins: [
                starlightThemeNova({
                    nav: [
                        {
                            label: 'Dashboard',
                            href: 'https://dash.synchra.net',
                        },
                    ],
                }),
            ],
            sidebar: [
                {
                    label: 'Getting started',
                    slug: 'getting-started',
                },
                {
                    label: 'Custom Bot Name',
                    slug: 'custom-bot-name',
                },
                {
                    label: 'Widgets',
                    collapsed: true,
                    autogenerate: { directory: 'widgets' },
                },
                {
                    label: 'Command vars',
                    collapsed: true,
                    autogenerate: { directory: 'cmd-vars' },
                },
            ],
        }),
    ],
})
