<template>
  <div class="w-screen h-screen relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 100% 100%"
      width="100%"
      height="100%"
      class="absolute topographic-svg"
    >
      <defs>
        <filter id="filter">
          <feSpecularLighting
            result="specOut"
            specularExponent="20"
            lighting-color="#bbbbbb"
          >
            <fePointLight x="50" y="75" z="200" />
          </feSpecularLighting>
          <feComposite
            in="SourceGraphic"
            in2="specOut"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
          />
        </filter>
        <filter
          id="nnnoise-filter"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".00001"
            numOctaves="3"
            seed="1"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale="100"
            specularConstant=".1"
            specularExponent="100"
            lighting-color="#00dc82"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="100" elevation="100"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="#7957a8"
        filter="url(#nnnoise-filter)"
        opacity="0.7"
      ></rect>
    </svg>
    <svg
      class="absolute top-0 left-0 w-full h-full noise-overlay"
      viewBox="0 0 100% 0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2.65"
            numOctaves="1"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0
                                                0 0 0 0 0
                                                0 0 0 0 0
                                                0 0 0 1 0"
            result="colorNoise"
          />
        </filter>
      </defs>
      <rect
        width="100%"
        height="100%"
        filter="url(#noiseFilter)"
        fill="#000000"
        opacity="0.6"
      />
    </svg>
  </div>
</template>

<style scoped>
.topographic-svg {
  z-index: 1;
}
.noise-overlay {
  z-index: 2;
}
</style>
