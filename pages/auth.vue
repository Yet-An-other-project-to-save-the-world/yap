<template>
  <div
    class="container relative flex min-h-screen flex-col items-stretch md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <!-- Left Panel: Now properly centered and independent of the right panel's height -->
    <div
      class="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r dark:border-zinc-900"
    >
      <!-- Background elements -->
      <div class="absolute inset-0 z-20 bg-zinc-900">
        <HomeScreenNoise class="opacity-90" />
        <HomeScreenGradient />
      </div>

      <!-- Content container: Uses flexbox to space content vertically -->
      <div class="relative z-30 flex h-full flex-col justify-between">
        <StructureLogo />

        <!-- This div now uses my-auto to vertically center the title -->
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

    <!-- Right Panel (The Form): Now scrollable -->
    <div
      class="relative flex items-center justify-center p-8 overflow-y-auto"
    >
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
// No script changes needed, the fix is purely in the template's CSS classes.
</script>
