<template>
  <div class="p-4 max-w-xl">
    <span class="text-lg font-bold">Profile</span>
    <p class="text-gray-400">This is how others will see you on the site.</p>
    <div class="flex flex-col space-y-6 mt-4">
      <div class="space-y-2">
        <span class="text-sm font-medium">Username</span>
        <UInput variant="outline" v-model="value" />
        <p class="text-gray-400">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
      </div>
      <div class="space-y-2">
        <span class="text-sm font-medium">Email</span>
        <UInput variant="outline" v-model="value" />
        <p class="text-gray-400">
          You can manage verified email addresses in your email settings.
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
