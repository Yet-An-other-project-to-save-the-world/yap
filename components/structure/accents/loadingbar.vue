<template>
  <div class="loader__container">
    <div class="loader"></div>
    <div class="loader__follower"></div>
  </div>
</template>
<style lang="scss" scoped>
.loader__container {
  @apply bg-primary-600;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.068);
}

.loader {
  @apply bg-primary-300;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  width: 100%;
  transform: translateX(-200%);
  animation: loader 4s infinite ease-in-out;
}

.loader__follower {
  @apply bg-gradient-to-l from-primary-600 to-primary-200;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  width: 100%;
  transform: translateX(-200%);
  animation: loader 4s infinite ease-in-out;
  animation-delay: 1s;
}

@keyframes loader {
  0% {
    width: 0%;
    opacity: 1;
  }
  50% {
    width: 100%;
    opacity: 1;
  }
  60% {
    transform: translateX(200%);
    width: 100%;
    opacity: 0;
  }
  100% {
    width: 0%;
    opacity: 0;
  }
}
</style>
