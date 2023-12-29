<script setup lang="ts">
</script>
<template>
  <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-auto">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">{{ $t('madeBy') }}
        <a href="https://keyruu.de/" class="hover:underline">Keyruu</a>.
    </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://keyruu.de" target="_blank" class="hover:underline me-4 md:me-6">{{ $t('website') }}</a>
        </li>
        <li>
          <a href="https://github.com/Keyruu" target="_blank" class="hover:underline me-4 md:me-6">Github</a>
        </li>
        <li>
          <a href="https://www.instagram.com/neinhieristlucas/"
             target="_blank"
             class="hover:underline me-4 md:me-6">Instagram</a>
        </li>
        <li>
          <NuxtLink href="/imprint" target="_blank" class="hover:underline">{{ $t('imprint') }}</NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
