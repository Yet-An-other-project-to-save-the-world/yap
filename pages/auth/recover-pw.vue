<template>
  <div
    class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] z-40"
  >
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">Forgot Password</h1>
      <p class="text-sm text-muted-foreground">
        Enter your email and we'll send you a recovery link.
      </p>
      <p class="text-sm text-muted-foreground">
        <NuxtLink
          to="/auth/login"
          class="underline underline-offset-4 hover:text-primary"
        >
          Remembered your password? Sign In
        </NuxtLink>
      </p>
    </div>
    <div class="grid gap-6">
      <form @submit.prevent="sendRecoveryEmail">
        <div class="grid gap-4">
          <div class="space-y-2">
            <div>
              <label
                class="text-xs font-medium leading-8 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
                >E-mail</label
              >
              <UInput
                v-model="email"
                color="white"
                placeholder="name@example.com"
                type="email"
                autocapitalize="none"
                autocomplete="email"
                autocorrect="off"
                required
              />
            </div>
          </div>
          <UButton
            type="submit"
            :disabled="!email"
            :loading="loading"
            color="emerald"
            block
            >Send Recovery Email</UButton
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  auth: false,
});

// Get utilities from Nuxt composables
const supabase = useSupabaseClient();
const toast = useToast();

// Component state
const loading = ref(false);
const email = ref('');

// Send recovery email function
async function sendRecoveryEmail() {
  if (!email.value) return;

  loading.value = true;
  const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: `${window.location.origin}/auth/update-pw`,
  });

  if (error) {
    toast.add({
      title: 'Error',
      description: error.message,
      icon: 'i-heroicons-x-circle',
      color: 'red'
    });
  } else {
    toast.add({
      title: 'Success!',
      description: `A password recovery link has been sent to ${email.value}.`,
      icon: 'i-heroicons-check-circle',
      color: 'green'
    });
  }

  loading.value = false;
}
</script>
