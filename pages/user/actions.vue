<template>
  <div class="grid h-full w-full gap-4">
    <div class="flex flex-row items-center justify-between">
      <div>
        <span class="dark:text-white text-gray-700 text-xl font-bold">Your Actions</span>
      </div>
    </div>
    <div
      class="flex flex-col h-autogap-4 border dark:dark:border-gray-800 border-gray-200 border-gray-200 rounded-md p-4 overflow-hidden"
    >
      <div class="h-full">
        <DashboardTable />
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "user",
});
</script>
