<template>
  <div
    class="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 overflow-hidden"
  >
    <div
      class="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r dark:border-zinc-900 z-40"
    >
      <div class="absolute inset-0 h-full w-full z-30">
        <div
          class="flex h-full justify-center items-center space-x-4 mx-auto z-50"
        >
          <div class="text-left">
            <HomeGithubBadge />
            <h2 class="text-5xl text-white font-bold relative">
              Nuxt 3 <span class="text-green-400">Supabase</span><br />
              Template
            </h2>
          </div>
        </div>
      </div>
      <div
        class="absolute h-full w-full inset-0 z-20 bg-zinc-900 overflow-hidden"
      >
        <HomeScreenNoise class="opacity-90" />
        <HomeScreenGradient />
      </div>
      <StructureLogo />
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">
            “Login, logout, login, logout that's pretty much it huh? Not very
            impressive.”
          </p>
          <footer class="text-sm">- Important Developer</footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8 relative">
      <NuxtPage />
    </div>
  </div>
</template>
