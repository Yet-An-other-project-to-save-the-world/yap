<template>
  <div
    class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] z-40"
  >
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>
      <p class="text-sm text-muted-foreground">
        Enter your email below to create your account
      </p>
      <p class="text-sm text-muted-foreground">
        <NuxtLink
          to="/auth/login"
          class="underline underline-offset-4 hover:text-primary"
        >
          Already have an account? Sign In
        </NuxtLink>
      </p>
    </div>
    <div class="grid gap-6">
      <form @submit.prevent="register">
        <div class="grid gap-4">
          <div>
            <label
              class="text-xs font-medium leading-8 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="email"
              >E-mail</label
            >
            <UInput
              v-model="email"
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
              <label
                class="text-xs font-medium leading-8 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="password"
                >Password</label
              >
              <UInput
                v-model="password.value"
                placeholder="Password"
                type="password"
                autocapitalize="none"
                autocorrect="off"
                required
              />
            </div>
            <div v-if="password.value.length > 0">
              <label
                class="text-xs font-medium leading-8 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="confirm-password"
                >Confirm Password</label
              >
              <UInput
                v-model="password.confirm"
                placeholder="Confirm Password"
                type="password"
                autocapitalize="none"
                autocorrect="off"
                required
              />
            </div>
          </div>
          <UButton
            type="submit"
            color="emerald"
            :disabled="!registerValid"
            :loading="loading"
            block
            >Sign Up With Email</UButton
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
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

definePageMeta({
  auth: false,
});

// Get utilities from Nuxt composables
const supabase = useSupabaseClient();
const router = useRouter();
const toast = useToast();

// Component state
const loading = ref(false);
const email = ref("");
const password = reactive({
  value: "",
  confirm: "",
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
const emailValid = computed(() => email.value.length > 0);
const passwordValid = computed(() => password.value.length >= 6);
const passwordMatch = computed(() => password.value === password.confirm && password.value.length > 0);
const registerValid = computed(() => emailValid.value && passwordValid.value && passwordMatch.value);

// Register function
async function register() {
  if (!registerValid.value) return; // Prevent submission if form is invalid
  
  loading.value = true;
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      emailRedirectTo: process.env.NUXT_APP_BASE_URL || '/',
    },
  });

  if (error) {
    // Show an error toast
    toast.add({
      title: 'Registration Error',
      description: error.message,
      icon: 'i-heroicons-x-circle',
      color: 'red'
    });
  } else {
    // Show a success toast
    toast.add({
      title: 'Success!',
      description: "Please check your email to verify your account.",
      icon: 'i-heroicons-check-circle',
      color: 'green'
    });
    // Redirect to the login page
    router.push("/auth/login");
  }

  loading.value = false;
}
</script>