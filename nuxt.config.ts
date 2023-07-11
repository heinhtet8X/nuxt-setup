// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: process.env.MAIN_APP_NAME,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'bob' }
      ],
      link:[
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap' },
      ],
      script:[
        {
          src: '',

        }
      ]
    }
  },
  css: [
    '@/assets/sass/main.scss',
  ],
  plugins: [{
    src: 'plugins/bootstrap.client',
    mode: 'client'
  }],
  runtimeConfig: { 
    // private
    api: '127.0.0.1:8000',
    
    // public
    public: {  
      name : 'Hello',
    }
  }
})
