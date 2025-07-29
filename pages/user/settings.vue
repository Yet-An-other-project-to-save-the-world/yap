<template>
  <div class="grid h-full w-full gap-4">
    <div class="flex flex-row items-center justify-between">
      <div>
        <span class="dark:text-white text-gray-700 text-xl font-bold">Your Settings</span>
      </div>
    </div>
    <div class="flex flex-row space-x-4">
      <div class="w-[280px] gap-4 border dark:border-gray-800 border-gray-200 rounded-md p-4">
        <StructureMenu :menus="menus" />
      </div>
      <div class="w-full gap-4 border dark:border-gray-800 border-gray-200 rounded-md p-4">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "user",
});
</script>
<script>
export default {
  data() {
    return {
      menus: [
        [
          {
            label: "General",
            to: "/user/settings/",
            exact: true,
          },
          {
            label: "Notifications",
            to: "/user/settings/notifications",
            exact: true,
          },
          {
            label: "Webhooks",
            to: "/user/settings/webhooks",
            exact: true,
          },
        ],
      ],
    };
  },
};
</script>
