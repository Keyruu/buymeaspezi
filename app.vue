<script setup lang="ts">
const { t } = useI18n()

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png'
    }
  ],
  script: [
    {
      src: 'https://sorryihavetodothis.keyruu.de/js/script.js',
      defer: true,
      'data-domain': 'buymeaspezi.com'
    },
  ]
});

useSeoMeta({
  title: t('title'),
  ogTitle: t('title'),
  description: t('description'),
  ogDescription: t('description'),
  ogImage: '/thumbnail.png',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://buymeaspezi.com',
  twitterTitle: t('title'),
  twitterDescription: t('description'),
  twitterImage: '/thumbnail.png',
})
</script>
<template>
  <div class="h-screen flex flex-col">
    <NuxtPage/>
    <Footer/>
  </div>
</template>
