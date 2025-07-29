<template>
  <div class="relative flex flex-col flex-1 overflow-hidden my-4">
    <div class="lg:mt-0 px-2" v-for="menu of menus">
      <UVerticalNavigation :links="menu" />
      <hr class="mx-4 my-4 border-t dark:border-gray-700" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
};
</script>
