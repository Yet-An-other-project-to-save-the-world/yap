<template>
  <div class="background-gradient opacity-90"></div>
  <div class="background-gradient-2 w-56 right-0 absolute"></div>
</template>
<style scoped>
.background-gradient,
.background-gradient-2 {
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: linear-gradient(20deg, #5effb7, #007a4f);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
    var(--tw-grayscale) var(--tw-invert) var(--tw-sepia) var(--tw-drop-shadow);
  -webkit-mask-image: radial-gradient(
    farthest-side at 20% 50%,
    rgba(0, 0, 0, 0.4),
    transparent
  );
  mask-image: radial-gradient(
    farthest-side at 50% 50%,
    rgba(0, 0, 0, 0.333),
    transparent
  );
}

.background-gradient {
  animation: background-gradient-animation-2 20s infinite;
  top: 50%;
  right: 0;
  transform: translate3d(20%, -50%, 0);
}

.background-gradient-2 {
  animation: background-gradient-animation 8s infinite;
  top: 0;
  left: 0;
  transform: translate3d(50%, -50%, 0);
}

@keyframes background-gradient-animation {
  0% {
    filter: brightness(1) hue-rotate(0deg);
  }

  50% {
    filter: brightness(1.2) hue-rotate(20deg);
  }

  100% {
    filter: brightness(1) hue-rotate(0deg);
  }
}

@keyframes background-gradient-animation-2 {
  0% {
    filter: brightness(1) hue-rotate(0deg) blur(0);
    opacity: 0.4;
    transform: translate3d(50%, -20%, 0);
  }

  50% {
    filter: brightness(1.2) hue-rotate(-30deg) blur(1000);
    opacity: 1;
    transform: translate3d(10%, -50%, 0);
  }

  100% {
    filter: brightness(1) hue-rotate(0deg) blur(0);
    opacity: 0.4;
    transform: translate3d(50%, -20%, 0);
  }
}
</style>
