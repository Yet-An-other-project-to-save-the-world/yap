// composables/useLogout.js
import { useRouter } from '#app';

// import { useSupabaseClient } from '@supabase/supabase-js';

export const useLogout = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const logout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    } else {
      router.push("/auth/login");
    }
  };

  return {
    logout,
  };
};
