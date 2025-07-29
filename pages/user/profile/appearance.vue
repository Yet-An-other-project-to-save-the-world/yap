<template>
  <div class="p-4">
    <span class="text-lg font-bold">Appearance</span>
    <p class="text-gray-400">
      Customize the appearance of the app. Automatically switch between day and
      night themes.
    </p>
    <div class="space-y-4 mt-8">
      <span class="text-md font-bold">Theme Mode Preference</span>
      <div class="flex space-x-4">
        <div class="w-52">
          <div
            @click="setTheme('light')"
            class="items-center rounded-md border-2 border-muted p-1 hover:border-accent"
          >
            <div class="space-y-2 rounded-sm bg-[#ecedef] p-2">
              <div class="space-y-2 rounded-md bg-white p-2 shadow-sm">
                <div class="h-2 w-20 rounded-lg bg-[#ecedef]"></div>
                <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
              </div>
              <div
                class="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm"
              >
                <div class="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
              </div>
              <div
                class="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm"
              >
                <div class="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-52">
          <div
            @click="setTheme('dark')"
            class="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground"
          >
            <div class="space-y-2 rounded-sm bg-slate-950 p-2">
              <div class="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div class="h-2 w-20 rounded-lg bg-slate-400"></div>
                <div class="h-2 w-[100px] rounded-lg bg-slate-400"></div>
              </div>
              <div
                class="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm"
              >
                <div class="h-4 w-4 rounded-full bg-slate-400"></div>
                <div class="h-2 w-[100px] rounded-lg bg-slate-400"></div>
              </div>
              <div
                class="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm"
              >
                <div class="h-4 w-4 rounded-full bg-slate-400"></div>
                <div class="h-2 w-[100px] rounded-lg bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-4 mt-8">
      <span class="text-md font-bold">Theme Accent Preference</span>
      <UtilitiesColorPicker />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    setTheme(theme) {
      useColorMode().preference = theme;
    },
  },
};
</script>
