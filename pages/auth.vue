<template>
  <div
    class="relative flex min-h-screen flex-col items-center justify-center lg:grid lg:grid-cols-2"
  >
    <!-- Left Panel: Unchanged, but will now behave correctly within the new grid -->
    <div
      class="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r dark:border-zinc-900"
    >
      <div class="absolute inset-0 z-20 bg-zinc-900">
        <HomeScreenNoise class="opacity-90" />
        <HomeScreenGradient />
      </div>
      <div class="relative z-30 flex h-full flex-col justify-between">
        <StructureLogo />
        <div class="my-auto">
          <div class="text-left">
            <HomeGithubBadge />
            <h2 class="text-5xl font-bold text-white relative">
              Nuxt 3 <span class="text-green-400">Supabase</span><br />
              Template
            </h2>
          </div>
        </div>
        <blockquote class="space-y-2">
          <p class="text-lg">
            “Login, logout, login, logout that's pretty much it huh? Not very
            impressive.”
          </p>
          <footer class="text-sm">- Important Developer</footer>
        </blockquote>
      </div>
    </div>

    <!-- Right Panel (The Form): Now with improved responsive behavior -->
    <div
      class="flex w-full items-center p-8 overflow-y-auto lg:justify-center"
    >
      <!-- This inner div constrains the form width on mobile and centers it -->
      <div class="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
