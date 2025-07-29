<template>
  <div class="hidden lg:flex lg:flex-shrink-0">
    <div
      class="flex flex-col flex-shrink-0 w-56 xl:w-64 min-w-[14rem] max-w-xs border-r dark:border-gray-700 relative"
      style="width: 224px"
    >
      <div class="flex flex-col flex-1 min-h-0 relative">
        <div class="flex items-center justify-stretch px-4 h-14">
          <StructureLogo />
          <UtilitiesColorModeButton />
        </div>
        <StructureMenu :menus="menus" />
      </div>
      <div class="mx-4 mb-2">
        <UButton
          block
          color="black"
          size="sm"
          icon="i-heroicons-arrow-left-end-on-rectangle"
          label="Logout"
          @click="logout"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      actionsOpen: true,
      menus: [
        [
          {
            label: "Dashboard",
            icon: "i-heroicons-home",
            to: "/user/dashboard",
            exact: true,
          },
          {
            label: "Actions",
            icon: "i-heroicons-queue-list",
            to: "/user/actions",
            exact: true,
          },
        ],
        [
          {
            label: "Settings",
            icon: "i-heroicons-cog",
            to: "/user/settings",
            exact: true,
          },
          {
            label: "Profile",
            icon: "i-heroicons-user",
            to: "/user/profile",
            exact: true,
          },
          {
            label: "Theme Options",
            icon: "i-heroicons-swatch",
            to: "/user/profile/appearance",
            exact: true,
          },
        ],
      ],
    };
  },
};
</script>
<style></style>
