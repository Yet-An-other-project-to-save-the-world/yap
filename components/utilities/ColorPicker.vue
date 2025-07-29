<template>
  <div class="flex flex-row max-w-[220px]">
    <div v-for="color in primaryColors" :key="color.value">
      <UTooltip :text="color.text" class="capitalize" :open-delay="500">
        <UButton
          color="white"
          square
          :ui="{
            color: {
              white: {
                solid:
                  'ring-0 bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800',
                ghost: 'hover:bg-gray-50 dark:hover:bg-gray-800/50',
              },
            },
          }"
          :variant="color === selected ? 'solid' : 'ghost'"
          @click.stop.prevent="setColor(color.value)"
        >
          <span
            class="inline-block w-6 h-6 rounded-lg"
            :style="{ backgroundColor: color.hex }"
          />
        </UButton>
      </UTooltip>
    </div>
  </div>
  <div class="flex flex-row max-w-[220px]">
    <div v-for="color in secondaryColors" :key="color.value">
      <UTooltip :text="color.text" class="capitalize" :open-delay="500">
        <UButton
          color="white"
          square
          :ui="{
            color: {
              white: {
                solid:
                  'ring-0 bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800',
                ghost: 'hover:bg-gray-50 dark:hover:bg-gray-800/50',
              },
            },
          }"
          :variant="color === selected ? 'solid' : 'ghost'"
          @click.stop.prevent="setSecondaryColor(color.value)"
        >
          <span
            class="inline-block w-6 h-6 rounded-lg"
            :style="{ backgroundColor: color.hex }"
          />
        </UButton>
      </UTooltip>
    </div>
  </div>
</template>
<script>
import colors from "#tailwind-config/theme/colors";
export default {
  data() {
    return {
      appConfig: useAppConfig(),
      colorMode: useColorMode(),
    };
  },
  methods: {
    setColor(color) {
      this.appConfig.ui.primary = color;
      window.localStorage.setItem('nuxt-ui-primary', this.appConfig.ui.primary)
    },
    setSecondaryColor(color) {
      this.appConfig.ui.gray = color;
      window.localStorage.setItem('nuxt-ui-gray', this.appConfig.ui.gray)
    },
  },
  computed: {
    colorOptions() {
      return this.appConfig.ui.colors;
    },
    primaryColors() {
      return this.appConfig.ui.colors
        .filter((color) => color !== "primary")
        .map((color) => ({
          value: color,
          text: color,
          hex: colors[color][this.colorMode.value === "dark" ? 400 : 500],
        }));
    },
    secondaryColors() {
      return ["slate", "cool", "zinc", "neutral", "stone"].map((color) => ({
        value: color,
        text: color,
        hex: colors[color][this.colorMode.value === "dark" ? 400 : 500],
      }));
    },
    selected() {
      return this.appConfig.ui.primary;
    },
  },
};
</script>
