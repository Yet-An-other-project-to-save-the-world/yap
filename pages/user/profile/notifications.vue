<template>
  <div class="p-4">
    <span class="text-lg font-bold">Notification Settings</span>
    <p class="text-gray-400">
      Enable notifications, and select what action items you are notified about.
    </p>
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
    <div class="space-y-4 mt-8">
      <span class="text-lg font-bold">Alert Channels</span>
      <div
        class="flex flex-row items-center border dark:border-gray-800 border-gray-200 rounded-md p-4"
        v-for="channel in channels"
      >
        <UInput
          :padded="false"
          placeholder="Channel URL"
          variant="none"
          class="w-full"
        >
          <template #trailing>
            <UBadge size="xs" color="white" class="mr-2">{{
              channel.type
            }}</UBadge>
            <icon :name="channel.icon" size="20" />
          </template>
        </UInput>
      </div>
    </div>
    <div class="space-y-4 mt-8">
      <span class="text-lg font-bold">Away Response</span>
      <UTextarea
        color="white"
        variant="outline"
        model-value="I'm away from my computer. I can't work. I need some help. I'm tired. I need some help."
      />
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
          text: "New Users",
          description:
            "Receive an email notification when a new user is created.",
        },
        {
          on: false,
          text: "New Orders",
          description:
            "Receive an email notification when a new order is created.",
        },
      ],
      channels: [
        {
          type: "Slack",
          icon: "devicon:slack",
        },
        {
          type: "Outlook",
          icon: "vscode-icons:file-type-outlook",
        },
        {
          type: "Discord",
          icon: "skill-icons:discord",
        },
      ],
    };
  },
};
</script>
