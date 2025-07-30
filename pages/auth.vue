<template>
  <!-- Main container: A simple grid on desktop, standard block on mobile. -->
  <div class="lg:grid lg:grid-cols-2 lg:h-screen overflow-x-hidden">
    <!-- Left Panel -->
    <div
      class="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r dark:border-zinc-900"
    >
      <!-- Background elements with a lower z-index to stay in the back -->
      <div class="absolute inset-0 z-0 bg-zinc-900">
        <HomeScreenNoise class="opacity-90" />
        <HomeScreenGradient />
      </div>
      <!-- Content with a higher z-index to be on top of the background -->
      <div class="relative z-10 flex h-full flex-col justify-between">
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

    <!-- Right Panel (The Form) -->
    <div
      class="relative flex min-h-screen flex-col items-center justify-start overflow-y-auto p-8 pt-20 lg:min-h-0 lg:items-center lg:justify-center lg:pt-8"
    >
      <!-- Inner div to constrain form width -->
      <div class="w-full max-w-sm">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
// No script changes needed.
</script>

