export default defineNuxtRouteMiddleware(async (to, from) => {

  const config = useRuntimeConfig()
  const { loginRoute, registerRoute, authenticatedBasePath } = config.public.middlewareOptions;
  
  const { meta: toMeta } = to;
  const { auth: toAuth } = toMeta;

  const supabase = useSupabaseClient();
  // const userStore = useUserStore();
  // Returns the current user or false
  const getCurrentUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // Check if session exists
    if (!session) {
      return false;
    }

    // Check if user exists
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      return false;
    }
    const { user } = data;
    return user;
  };

  const user = await getCurrentUser();
  const authenticated = user ? true : false;

  if (to.path === loginRoute && authenticated) {
    return navigateTo(authenticatedBasePath);
  }

  // if (authenticated) {
  //   await userStore.setUser(user);
  // }

  // If page requires authentication
  // And user is not authenticated force login
  if (toAuth || toAuth === undefined) {
    // return !authenticated ? navigateTo('/login') : null
    if (!authenticated) {
      return navigateTo(loginRoute);
    } else {
      return;
    }
  }

  // If page does not require authentication
  // And user is authenticated force home unless [to] is login
  if (!toAuth && authenticated && to.path !== loginRoute) {
    //return navigateTo("/");
  }

  // Prevent inifinite loop
  if (to.path === from.path) {
    return;
  }
});
