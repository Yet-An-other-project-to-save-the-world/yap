<template>
  <div class="grid h-full w-full gap-4">
    <div class="flex flex-row items-center justify-between">
      <div>
        <span class="dark:text-white text-gray-700 text-xl font-bold">Your Dashboard</span>
      </div>
      <div>
        <UButton
          color="white"
          variant="solid"
          size="sm"
          @click="ui.open.sideDraw = true"
        >
          <template #leading>
            <UBadge size="xs">98</UBadge>
          </template>
          Running Actions
          <template #trailing>
            <icon name="i-heroicons-chevron-right-20-solid" />
          </template>
        </UButton>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div class="grid grid-cols-2 gap-4 border dark:dark:border-gray-800 border-gray-200 border-gray-200 rounded-md p-4">
        <DashboardMetric
          v-for="i in 4"
          :ui="{
            currentValue: randomInt(70, 100),
            previousValue: randomInt(70, 100),
            title: 'Total Sales',
          }"
        />
      </div>
      <div class="grid grid-cols-2 gap-4 border dark:dark:border-gray-800 border-gray-200 border-gray-200  rounded-md p-4">
        <DashboardMetric
          v-for="i in 4"
          :ui="{
            currentValue: randomInt(80, 100),
            previousValue: randomInt(60, 100),
            title: randomMetricTitle(),
          }"
        />
      </div>
      <div
        class="flex flex-col h-autogap-4 border dark:dark:border-gray-800 border-gray-200 border-gray-200 rounded-md p-4 overflow-hidden"
      >
        <div class="overflow-hidden space-y-4">
          <UAlert
            title="Abnomaly Detected!"
            description="User sessions are up 100% in the last hour."
          />
          <UAlert
            title="Heads up!"
            color="white"
            description="This is a description for a very important notice."
          />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col h-autogap-4 border dark:dark:border-gray-800 border-gray-200 border-gray-200 rounded-md p-4 overflow-hidden"
    >
      <div class="h-full">
        <DashboardTable />
      </div>
    </div>
    <USlideover v-model="ui.open.sideDraw">
      <div class="p-4 flex-1 space-y-4 overflow-scroll">
        <DashboardActionsItem v-for="i in 20" :index="i" />
      </div>
    </USlideover>
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
      ui: {
        open: {
          sideDraw: false,
        },
      },
    };
  },
  methods: {
    randomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    randomMetricTitle() {
      const titles = [
        "Total Sales",
        "Total Orders",
        "Total Products",
        "Total Customers",
      ];
      const randomIndex = Math.floor(Math.random() * titles.length);
      return titles[randomIndex];
    },
  },
};
</script>
