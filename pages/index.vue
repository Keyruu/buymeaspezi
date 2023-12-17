<script setup lang="ts">
const amount = ref(1)
const buttonColors = 'text-gray-900 border border-gray-300 rounded-lg ' +
    'hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white ' +
    'dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'

function decrease() {
  if (amount.value > 1) amount.value--
}
</script>

<template>
  <section class="w-screen flex justify-center items-center h-full">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          <span class="wave-text">Paulaner Spezi</span> - {{ $t('tagLine') }}
          <span class="text-[#FFD700]">{{ $t('gold') }}</span>
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          {{ $t('cheesy')}}
        </p>
        <div class="flex flex-row items-center">
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <UButton type="button" color="gray" class="px-5 py-3 text-sm font-medium rounded-s-lg rounded-e-none "
                     @click="decrease">
              -
            </UButton>
            <UButton type="button" color="gray" class="px-5 py-3 text-sm font-medium rounded-none">
              {{ amount }}
            </UButton>
            <UButton type="button" color="gray" class="px-5 py-3 text-sm font-medium rounded-e-lg rounded-s-none"
                     @click="amount++">
              +
            </UButton>
          </div>
          <a target="_blank" :href="`https://paypal.me/lucaskeyruu/${amount}`">
            <UButton icon="i-simple-icons-paypal" class="ml-4 px-5 py-3 rounded-lg text-transparent bg-gradient-to-r
          from-paypal-400 to-paypal-600 hover:from-paypal-500 hover:to-paypal-700">
              {{ $t('paypal') }}
            </UButton>
          </a>
        </div>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img class="object-contain" src="/paulanerspezi.png" alt="mockup">
      </div>
    </div>
  </section>
</template>

<style scoped>
.wave-text {
  background: linear-gradient(
      90deg,
      #efd359, /* Light Yellow */ #df8051, /* Orange */ #d64f60, /* Red */ #ca468f, /* Pink */ #5c4693 /* Purple */
  );
  //background-size: 100% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  //animation: wave-animation 5s ease-in-out infinite;
}

@keyframes wave-animation {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}
</style>
