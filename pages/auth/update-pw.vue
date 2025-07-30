<template>
  <div
    class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] z-40"
  >
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">Update your password</h1>
      <p class="text-sm text-muted-foreground">
        Enter a new password for your account below.
      </p>
    </div>
    <div class="grid gap-6">
      <form @submit.prevent="updatePassword">
        <div class="grid gap-4">
          <!-- Display the user's email, but make it non-editable -->
          <div v-if="userEmail">
            <label
              class="text-xs font-medium leading-8"
              for="email"
              >Email</label
            >
            <UInput
              :model-value="userEmail"
              type="email"
              disabled
            />
          </div>

          <!-- Password input fields -->
          <div class="space-y-2">
            <div>
              <label
                class="text-xs font-medium leading-8 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="password"
                >New Password</label
              >
              <UInput
                v-model="password.value"
                placeholder="New Password"
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
                >Confirm New Password</label
              >
              <UInput
                v-model="password.confirm"
                placeholder="Confirm New Password"
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
            :disabled="!updateValid"
            :loading="loading"
            block
            >Update Password</UButton
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

definePageMeta({
  auth: false, // Allow access without being logged in
});

// Get utilities from Nuxt composables
const supabase = useSupabaseClient();
const router = useRouter();
const toast = useToast();
// Get the user session from the recovery link
const user = useSupabaseUser();

// Component state
const loading = ref(false);
const userEmail = computed(() => user.value?.email);
const password = reactive({
  value: "",
  confirm: "",
});

// Form validation
const passwordValid = computed(() => password.value.length > 6);
const passwordMatch = computed(() => password.value === password.confirm && password.value.length > 0);
const updateValid = computed(() => passwordValid.value && passwordMatch.value);

// Update password function
async function updatePassword() {
  if (!updateValid.value) return;

  loading.value = true;
  const { error } = await supabase.auth.updateUser({
    password: password.value,
  });

  if (error) {
    toast.add({
      title: 'Error updating password',
      description: error.message,
      icon: 'i-heroicons-x-circle',
      color: 'red'
    });
  } else {
    toast.add({
      title: 'Success!',
      description: 'Your password has been updated. Please log in.',
      icon: 'i-heroicons-check-circle',
      color: 'green'
    });
    // Redirect to the login page after successful update
    router.push("/auth/login");
  }

  loading.value = false;
}
</script>
