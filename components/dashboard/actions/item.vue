<template>
  <div>
    <UAlert class="space-y-2">
      <template #title>
        <div class="flex flex-row items-center space-x-2">
          <UBadge :color="statusColor" class="opacity-100">{{ status }}</UBadge>
          <div>{{ generateTaskName() }}</div>
        </div>
      </template>
      <template #description>
        <pre
          class="bg-gray-900 text-gray-300 border-1 border-gray-600 border p-2 rounded-md mt-2"
          >{{ generatedMessage() }}</pre
        >
      </template>
    </UAlert>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: "Pending",
    };
  },
  props: {
    index: Number,
  },
  mounted() {
    this.generateStatus();
  },
  methods: {
    generateStatus() {
      if (this.index > 0 && this.index < 6) {
        this.status = "Pending";
      } else if (this.index > 10) {
        this.status = "Done";
      } else {
        this.status = "Running";
      }
    },
    generatedMessage() {
      let message = `-- ${this.status} --\n`;
      message += this.generateTaskItems();
      return message;
    },
    generateTaskName() {
      return `Task ID: [${this.index + 1}]`;
    },
    generateTaskItems() {
        const taskItems = [
            "Scrape data from website",
            "Import users to list",
            "Generate reports",
            "Send emails",
            "Update users",
            "Update website content",
        ]
        return taskItems[Math.floor(Math.random() * taskItems.length)];
    }
  },
  computed: {
    statusColor() {
      switch (this.status) {
        case "Pending":
          return "gray";
        case "Running":
          return "orange";
        case "Done":
          return "green";
        case "Failed":
          return "red";
      }
    },
  },
};
</script>
