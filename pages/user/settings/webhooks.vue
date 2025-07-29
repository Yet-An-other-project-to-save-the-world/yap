<template>
  <div class="p-4">
    <span class="text-lg font-bold">Webhook Settings</span>
    <div class="space-y-4 mt-4">
      <div
        v-for="option in options"
        class="flex flex-row items-center border dark:border-gray-800 border-gray-200 rounded-md p-4"
      >
        <UToggle
          color="primary"
          :model-value="option.on"
          @change="option.on = !option.on"
        />
        <span class="ml-4">{{ option.text }}</span>
        <span class="ml-4 text-gray-400">{{ option.description }}</span>
      </div>
    </div>
    <div class="space-y-4 mt-4">
      <div
        class="flex flex-row items-center border dark:border-gray-800 border-gray-200 rounded-md p-4"
        v-for="webhook in webhooks"
      >
        <UInput
          :padded="false"
          placeholder="Webhook URL"
          variant="none"
          class="w-full"
        >
          <template #trailing>
            <UBadge size="xs" :color="webhook.color" class="mr-2">{{
              webhook.type
            }}</UBadge>
            <icon name="material-symbols:webhook" />
          </template>
        </UInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          on: true,
          text: "Send Email",
          description:
            "Send an email notification when a webhook is triggered.",
        },
        {
          on: false,
          text: "Send SMS",
          description: "Send an SMS notification when a webhook is triggered.",
        },
        {
          on: true,
          text: "Send Push Notification",
          description: "Send a push notification when a webhook is triggered.",
        },
        {
          on: false,
          text: "Send Webhook",
          description: "Send a webhook when a webhook is triggered.",
        },
      ],
      webhooks: [
        {
          type: "GET",
        },
        {
          type: "POST",
        },
        {
          type: "PUT",
        },
        {
          type: "DELETE",
        },
      ],
    };
  },
};
</script>
