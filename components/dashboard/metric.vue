<template>
  <div class="w-full bg-white rounded-lg shadow dark:bg-gray-900/80 md:p-4">
    <div class="flex justify-between">
      <div>
        <h5
          class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2"
        >
          {{ ui.currentValue }}
        </h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400 text-xs">
          {{ ui.title }}
        </p>
      </div>
      <div
        class="flex items-center px-2.5 py-0.5 text-sm font-semibold text-center"
        :class="percentageColor"
      >
        {{ percentage }} %
        <svg
          class="w-3 h-3 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13V1m0 0L1 5m4-4 4 4"
          />
        </svg>
      </div>
    </div>
    <div id="area-chart"></div>
    <div
      class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
    >
      <div class="flex justify-between items-center pt-5">
        <!-- Button -->
        <UProgress :color="progressColor" :value="percentage" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ui: {
      type: Object,
      required: true,
      default: () => {
        return {
          title: "Metric",
          subtitle: "This is a subtitle",
          currentValue: 0,
          previousValue: 0,
        };
      },
    },
  },
  computed: {
    percentage() {
      return typeof this.ui.currentValue !== "number"
        ? 0
        : Math.round(
            ((this.ui.currentValue - this.ui.previousValue) /
              this.ui.previousValue) *
              100
          );
    },
    percentageColor() {
      if (this.percentage < 10) {
        return "text-red-500";
      } else if (this.percentage > 10) {
        return "text-green-500";
      } else {
        return "text-gray-500";
      }
    },
    progressColor() {
      if (this.percentage < 0) {
        return "red";
      } else if (this.percentage > 0) {
        return "green";
      } else {
        return "orange";
      }
    },
  },
};
</script>
