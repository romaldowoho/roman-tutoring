<template>
  <div>
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <!-- Generator: Sketch 53 (72520) - https://sketchapp.com -->
      <title>Roman Tutoring</title>
      <defs>
        <filter
          x="-50.0%"
          y="-50.0%"
          width="200.0%"
          height="200.0%"
          filterUnits="objectBoundingBox"
          id="filter-1"
        >
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          ></feColorMatrix>
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group-2" transform="translate(3.000000, 1.000000)" fill="#92B3BD">
          <g id="Group" filter="url(#filter-1)">
            <rect
              id="Rectangle"
              transform="translate(10.000000, 10.000000) rotate(45.000000) translate(-10.000000, -10.000000) "
              x="8"
              y="-1"
              width="4"
              height="22"
              rx="2"
            ></rect>
            <rect
              id="Rectangle"
              transform="translate(10.000000, 14.000000) rotate(-45.000000) translate(-10.000000, -14.000000) "
              x="8"
              y="3"
              width="4"
              height="22"
              rx="2"
            ></rect>
            <rect
              id="Rectangle"
              transform="translate(14.000000, 14.000000) rotate(45.000000) translate(-14.000000, -14.000000) "
              x="12"
              y="3"
              width="4"
              height="22"
              rx="2"
            ></rect>
            <rect
              id="Rectangle"
              transform="translate(14.000000, 10.000000) rotate(-45.000000) translate(-14.000000, -10.000000) "
              x="12"
              y="-1"
              width="4"
              height="22"
              rx="2"
            ></rect>
          </g>
          <circle id="Oval" cx="12" cy="2" r="1"></circle>
          <circle id="Oval" cx="12" cy="22" r="1"></circle>
          <circle id="Oval" cx="22" cy="12" r="1"></circle>
          <circle id="Oval" cx="2" cy="12" r="1"></circle>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Logo"
};
</script>
