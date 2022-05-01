<template>
    <div class="w-full bg-dark-gray flex flex-col justify-center h-16">
       <div class="flex flex-row container mx-auto justify-between">
           <div class="ml-5 lg:ml-0 flex flex-row items-center">
               <div class="hidden lg:block">
                   <span class="text-white font-sans font-bold text-xl mr-1">Arkar</span><span class="text-text-gray font-sans font-bold text-xl">Mann Aung</span>
               </div>
               <div class="text-text-gray font-sans text-sm lg:ml-20">
                   © 2022. All Rights Reserved
               </div>
           </div>
           <div class="mr-5 lg:mr-0 flex flex-row items-center">
               <a class="ml-3 lg:ml-8" href="https://github.com/arkarMannAung">
                   <img class="w-6 rounded-full text-white bg-white" src="@/assets/icons/git.svg" alt="">
               </a>
               <a class="ml-3 lg:ml-8" href="https://www.facebook.com/arkarmannaung">
                   <img class="w-6 rounded-full text-white bg-white" src="@/assets/icons/fb.svg" alt="">
               </a>
               <a class="ml-3 lg:ml-8" href="https://t.me/arkarmannaung">
                   <img class="w-6 rounded-full text-white bg-white" src="@/assets/icons/telegram.svg" alt="">
               </a>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>