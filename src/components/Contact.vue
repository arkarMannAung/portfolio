<template>
    <div id="Contact" class="w-full bg-silver-gray flex flex-col py-20">
        <div class="flex flex-col lg:flex-row container mx-auto">
            <div class="flex-1 flex flex-col items-center lg:items-start">
                <div class="text-white leading-relaxed lg:leading-loose font-sans text-3xl lg:text-5xl text-center lg:text-left tracking-wider">Let's make something amazing together</div>
                <div class="flex flex-col lg:flex-row items-center">
                    <div class="text-white font-sans text-xl">Start by <span class="text-green-400">saying hi</span></div>
                    <a href="https://m.me/arkarmannaung" class="mt-3 lg:mt-0">
                        <img class="cursor-pointer shadow-lg rounded-full w-14 h-14 bg-dark-gray p-1 ml-4" src="@/assets/images/msg.jpg" alt="">
                    </a>
                </div>
            </div>
            <div class="flex flex-col items-start lg:items-start pl-5 mt-8">
                <div class="font-sans text-text-gray">Information</div>
                <div class="text-text-gray text-left font-sans my-2 text-lg">206 - 3A Baho Road, Sanchaung/Yangon, Myanmar</div>
                <div class="text-white font-sans my-2 text-xl lg:text-2xl">+959 780 132 792</div>
                <div class="text-white font-sans my-2 text-xl lg:text-2xl">mr.arkarmannaung@gmail.com</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>