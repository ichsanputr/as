export default defineNuxtConfig({
    ssr: true,
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    typescript: false,
static: {
    prefix: true, // Default-nya adalah true
  },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    id: 'theme-css',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/main.css'
                }
            ],
	meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Desa Medalsari adalah portal resmi yang menyediakan informasi terkini tentang kegiatan desa, layanan publik, berita, dan program-program desa. Temukan berita terbaru, kegiatan komunitas, dan akses berbagai layanan publik secara online di Desa Medalsari.'
            }
        ]
        }
    },
    modules: [ '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
    primevue: {
        options: { ripple: true },
        components: {
            exclude: ['Editor']
        }
    },
    build: {
        transpile: ['vuetify'],
        client: false
    },
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
            API_PUBLIC_URL: process.env.API_PUBLIC_URL,
        },
    },
    plugins: [
        { src: '~/plugins/scrollTo.js', mode: 'client' },
    ],
    css: ['vuetify/lib/styles/main.sass', 'primeicons/primeicons.css', '@/assets/styles.scss', '@/assets/main.css'],
});
