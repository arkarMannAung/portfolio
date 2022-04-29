<template>
  <div class="w-full h-184 sm:h-208 lg:h-184 bg-silver-gray flex flex-col justify-end">
    <div class="lg:container lg:mx-auto flex flex-col lg:flex-row lg:items-end">
      <div class="flex flex-1 justify-center">
        <div class="w-72 h-72 sm:w-104 sm:h-104 lg:w-112 lg:h-112 rounded-full bg-circle shadow-2xl">
          <div class="relative">
            <div class="absolute left-0 top-56 sm:top-64 lg:left-2 lg:top-60 w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl bg-silver-gray">
              <img class="h-16 sm:h-20 rounded-full p-3 shadow-xl" src="@/assets/images/dart.jpg" alt="">
            </div>
            <div class="absolute right-0 top-52 sm:top-64 lg:left-96 lg:top-52 2-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl bg-silver-gray">
              <img class="h-16 sm:h-20 rounded-full p-3 shadow-xl" src="@/assets/images/javascript.jpg" alt="">
            </div>
            <div class="absolute right-16 sm:right-36 lg:left-80 lg:top-24 w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl bg-silver-gray">
              <img class="h-16 sm:h-20 rounded-sm p-3 shadow-xl" src="@/assets/images/react.png" alt="">
            </div>
            <div class="absolute left-0 top-6 lg:left-0 lg:top-4 2-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl bg-silver-gray">
              <img class="h-16 sm:h-20 rounded-sm p-3 shadow-xl" src="@/assets/images/laravel.png" alt="">
            </div>
            <div class="absolute right-4 top-24 lg:right-40 lg:top-0 2-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl bg-silver-gray">
              <img class="h-16 sm:h-20 rounded-full p-3 shadow-xl" src="@/assets/images/vue.png" alt="">
            </div>
            <div class="absolute left-12 sm:left-16 top-24 sm:top-36 lg:left-20 lg:top-32 2-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl bg-silver-gray">
              <img class="h-16 sm:h-20 rounded-full p-3 shadow-xl" src="@/assets/images/php.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="absolute">
            <img class="h-72 sm:h-104 lg:h-112 pt-24" src="@/assets/images/my_photo.png" alt="">
        </div>
        
      </div>
      <div class="flex flex-1 h-full justify-center lg:items-center pt-6">
        <div class="flex flex-col items-center lg:items-start lg:pl-10 lg:text-left select-none">
          <div class="flex-1 py-2 bg-green-400 w-44 text-sm lg:text-base lg:w-52 rounded-sm font-sans text-center font-bold mb-8 shadow-2xl">Front-End Developer</div>
          <div class="flex-1 h-full text-white text-2xl lg:text-4xl py-1 lg:py-2 tracking-widest font-sans">Talk is cheap.</div>
          <div class="flex-1 h-full text-white text-2xl lg:text-4xl py-1 lg:py-2 tracking-widest font-sans">Show me the code</div>
          <div class="flex-1 h-full text-text-gray text-sm mx-5 lg:mx-0 lg:text-xl pt-5 pb-10 lg:pb-0 lg:pt-10 font-mono tracking-wide">I design and code beautifully simple things.<br>and I Love what I do.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
}
</script>
