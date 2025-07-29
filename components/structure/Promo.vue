<template>
  <div
    class="relative bg-primary hover:bg-primary/90 transition-[background] backdrop-blur z-50 app-banner"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <nuxt-link
        to="https://github.com/ryntab/Nuxt-Supabase-Authentication-Template"
        class="focus:outline-none"
        aria-label="Nuxt UI Pro pricing"
        tabindex="-1"
        ><span class="absolute inset-0" aria-hidden="true"></span
      ></nuxt-link>
      <div class="flex items-center justify-between gap-2">
        <div class="lg:flex-1 hidden lg:flex items-center"></div>
        <p class="text-sm font-medium text-white dark:text-gray-900 items-center space-x-2">
          <icon name="mdi:github" size="24"/>
          <span class="font-semibold">Like the project?</span>
          Leave a star!
        </p>
        <div class="flex items-center justify-end lg:flex-1">
          <button
            class="p-1.5 rounded-md inline-flex hover:bg-primary/90"
            aria-label="Close banner"
          >
            <span
              class="i-heroicons-x-mark-20-solid w-5 h-5 text-white dark:text-gray-900"
            ></span>
          </button>
        </div>
      </div>
      <!--]-->
    </div>
  </div>
</template>
