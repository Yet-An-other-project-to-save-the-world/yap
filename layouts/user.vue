<template>
  <div class="flex flex-col">
    <StructurePromo />
    <div class="relative">
      <StructureAccentsLoadingbar />
      <StructureAccentsGradient />
    </div>
    <div
      class="bg-gradient-to-b dark:from-gray-900 dark:to-primary-400/0 from-gray-200 h-full xl:p-12 duration-150 transition-all"
    >
      <div
        class="fixed inset-0 flex lg:overflow-hidden antialiased font-sans text-gray-700 dark:text-gray-200 select-none dark:bg-gray-950 bg-white xl:mt-20 xl:mx-4 rounded-t-lg shadow-xl"
      >
        <StructureSidebar />
        <div class="flex flex-col w-full overflow-y-scroll">
          <div class="flex flex-row justify-between mt-10 mx-10 static top-0">
            <StructureBreadCrumbs />
            <div>
              <AuthAvatar />
            </div>
          </div>
          <div class="m-10">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>
<style>
/* Webkit Scrollbar */
::-webkit-scrollbar {
  width: 8px; /* Width of the scrollbar */
}

::-webkit-scrollbar-track {
  background: #1e1e1e; /* Dark background for the track */
}

::-webkit-scrollbar-thumb {
  background: #444; /* Dark color for the thumb */
  border-radius: 4px; /* Rounded corners for the thumb */
}

::-webkit-scrollbar-thumb:hover {
  background: #555; /* Slightly lighter color when hovered */
}
</style>
