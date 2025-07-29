<template>
  <div class="p-4 max-w-xl">
    <span class="text-lg font-bold">Account</span>
    <p class="text-gray-400">Update your account settings. Set your preferred language and timezone.</p>
    <div class="flex flex-col space-y-6 mt-4">
      <div class="space-y-2">
        <span class="text-sm font-medium">Name</span>
        <UInput variant="outline" v-model="value" />
        <p class="text-gray-400">
          This is the name that will be displayed on your profile and in emails..
        </p>
      </div>
      <div class="space-y-2">
        <span class="text-sm font-medium">Bio</span>
        <UInput variant="outline" v-model="value" />
        <p class="text-gray-400">
          You can @mention other users and organizations to link to them.
        </p>
      </div>
    </div>
    <div class="mt-6 space-x-2">
      <UButton color="black" variant="solid">Update Profile</UButton>
      <UButton color="white" variant="solid">Reset Form</UButton>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
