<template>
  <div class="capitalize">
    <UBreadcrumb :links="crumbs">
      <template #icon="{ link, index, isActive }">
        <icon :name="link.icon" class="w-4 h-4" />
      </template>
    </UBreadcrumb>
  </div>
</template>
<script>
export default {
  methods: {
    getIcon(name) {
      if (name === "dashboard") return "ri:dashboard-fill";
      else if (name === "user") return "iconamoon:profile-fill";
      else if (name === "profile") return "iconamoon:profile-fill";
      else if (name === "actions") return "i-heroicons-queue-list";
      else if (name === "settings") return "ri:settings-3-fill";
      else if (name === "appearance") return "solar:pallete-2-bold";
      else return "ri:dashboard-fill";
    },
  },
  computed: {
    crumbs() {
      let crumbs = this.$route.path
        .split("/")
        .filter((crumb) => crumb !== "");
      crumbs.splice(-1, 1)
      if (crumbs.length === 0) {
        return [];
      }

      // Map the crumbs to breadcrumb objects
      return crumbs.map((crumb, index) => {
        return {
          label: crumb,
          to: "/" + crumbs.slice(0, index + 1).join("/"),
          icon: this.getIcon(crumb),
        };
      });
    },
  },
};
</script>
