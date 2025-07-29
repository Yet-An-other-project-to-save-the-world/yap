<template>
  <UDropdown :items="items" :popper="{ arrow: true }">
    <div class="flex items-center">
      <UAvatar src="https://www.shadcn-vue.com/avatars/01.png" />
      <icon name="carbon:chevron-sort-down" size="20" />
    </div>
  </UDropdown>
</template>
<script>
import { useLogout } from "~/composables/useLogout";
export default {
  data() {
    return {
      user: null,
      items: [
        [
          {
            label: "Profile",
            icon: "i-heroicons-pencil-square-20-solid",
            to: "/user/profile",
            exact: true,
          },
          {
            label: "Account",
            icon: "i-heroicons-user",
            to: "/user/profile/account",
            exact: true,
          },
        ],
        [
          {
            label: "Logout",
            icon: "i-heroicons-arrow-left-end-on-rectangle",
            shortcuts: ["⌘", "D"],
            click: () => this.logout(),
          },
        ],
      ],
    };
  },
  async mounted() {
    this.user = await useSupabaseClient().auth.getUser();
  },
  methods: {
    async logout() {
      const { logout } = useLogout();
      logout();
    },
  },
  // computed: {
  //     user() {
  //         return useSupabaseClient().auth.user();
  //     }
  // }
};
</script>
