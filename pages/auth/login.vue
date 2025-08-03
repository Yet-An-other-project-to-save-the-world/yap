<template>
  <div
    class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] z-40 relative"
  >
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">Login to your account</h1>
      <p class="text-sm text-muted-foreground">
        Enter your email and password below
      </p>
      <p class="px-8 text-center text-sm text-muted-foreground">
        <NuxtLink
          to="/auth/register"
          class="underline underline-offset-4 hover:text-primary"
        >
          Don't have an account? Sign Up
        </NuxtLink>
      </p>
    </div>
    <div class="grid gap-6">
      <form @submit.prevent="signInWithEmailPassword">
        <div class="grid gap-4">
          <div>
            <label
              class="text-xs font-medium leading-8 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="email"
              >E-mail</label
            >
            <UInput
              v-model="form.email"
              placeholder="name@example.com"
              type="email"
              autocapitalize="none"
              autocomplete="email"
              autocorrect="off"
              required
            />
          </div>
          <div class="space-y-2">
            <div>
              <!-- This new div creates the flex container -->
              <div class="flex justify-between items-center">
                <label
                  class="text-xs font-medium leading-8 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                  >Password</label
                >
                <NuxtLink
                  to="/auth/recover-pw"
                  class="text-xs text-muted-foreground underline underline-offset-4 hover:text-primary"
                  >Forgot the password? Reset it
                </NuxtLink>
              </div>
              <UInput
                v-model="form.password"
                placeholder="Password"
                type="password"
                autocapitalize="none"
                autocomplete="none"
                autocorrect="off"
                required
              />
            </div>
          </div>
          <UButton
            type="submit"
            :disabled="!loginValid"
            :loading="loading"
            color="emerald"
            block
            >Sign In with Email</UButton
          >
        </div>
      </form>
      <div class="relative">
        <UDivider label="Or continue with" />
      </div>
      <div class="flex flex-col space-y-4">
        <UButton
          block
          color="white"
          v-for="provider in providers"
          :key="provider.name"
          @click="provider.auth"
        >
          <template #leading>
            <UIcon :name="provider.icon" class="mr-2 h-4 w-4" />
          </template>
          Sign in with {{ provider.name }}
        </UButton>
      </div>
    </div>
    <p class="px-8 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our
      <a class="underline underline-offset-4 hover:text-primary" href="/terms"
        >Terms of Service</a
      >
      and
      <a class="underline underline-offset-4 hover:text-primary" href="/privacy"
        >Privacy Policy</a
      >.
    </p>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

definePageMeta({
  auth: false,
});

// Get utilities from Nuxt composables
const supabase = useSupabaseClient();
const router = useRouter();
const toast = useToast();

// Component state
const loading = ref(false);
const form = reactive({
  email: "",
  password: "",
});

const providers = [
  {
    name: "Discord",
    icon: "i-ri-discord-fill",
    auth: () => {
      supabase.auth.signInWithOAuth({ provider: "discord" });
    },
  },
];

// Form validation
const loginValid = computed(() => {
  return form.email && form.password;
});

// Sign-in function
async function signInWithEmailPassword() {
  if (!loginValid.value) return;

  loading.value = true;
  const { error } = await supabase.auth.signInWithPassword({
    email: form.email,
    password: form.password,
  });

  if (error) {
    // Show an error toast
    toast.add({
      title: 'Login Error',
      description: error.message,
      icon: 'i-heroicons-x-circle',
      color: 'red'
    });
  } else {
    // Redirect on successful login
    router.push("/");
  }

  loading.value = false;
}
</script>