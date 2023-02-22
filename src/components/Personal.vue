<template>
    <div id="Personal" class="w-full bg-dark-gray flex flex-col py-20 lg:py-32">
        <div class="container mx-auto text-left text-white px-5 lg:px-0">
            <div class="text-xl lg:text-3xl mb-5 font-sans uppercase">Personal</div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">

                <div class="flex flex-col rounded-3xl bg-silver-gray shadow-lg">
                    <div class="text-center py-2 text-red-500 font-bold">Don't</div>
                    <div class="opacity-30 shadow-lg">
                        <hr>
                    </div>
                    <div class="flex flex-row justify-center py-5 lg:py-8">
                        <div class="flex flex-col items-center">
                            <img class="h-16 rounded-full mx-5" src="@/assets/images/no-smoke.png" alt="">
                            <div class="text-sm font-sans pt-1">No Smoking</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="h-16 rounded-full mx-5" src="@/assets/images/no-beer.png" alt="">
                            <div class="text-sm font-sans pt-1">No Beer</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="h-16 rounded-full mx-5" src="@/assets/images/no-alcohol.png" alt="">
                            <div class="text-sm font-sans pt-1">No Alcohol</div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col rounded-3xl bg-silver-gray shadow-lg">
                    <div class="text-center py-2 text-green-400 font-bold">Do</div>
                    <div class="opacity-30 shadow-lg">
                        <hr>
                    </div>
                    <div class="flex flex-row justify-center py-5 lg:py-8">
                        <div class="flex flex-col items-center">
                            <img class="h-16 rounded-full mx-5" src="@/assets/images/piano.png" alt="">
                            <div class="text-sm font-sans pt-1">Piano</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="h-16 rounded-full mx-5" src="@/assets/images/guiter.png" alt="">
                            <div class="text-sm font-sans pt-1">Guiter</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="h-16 rounded-full mx-5" src="@/assets/images/sing.png" alt="">
                            <div class="text-sm font-sans pt-1">Sing</div>
                        </div>
                    </div>
                    
                    <div class="flex flex-row justify-center pb-5 lg:pb-8">
                        <div class="flex flex-col items-center">
                            <img class="h-16 rounded-full mx-5 bg-white p-1" src="@/assets/images/drive.png" alt="">
                            <div class="text-sm font-sans pt-1">Driving</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="h-16 rounded-full mx-5" src="@/assets/images/game.png" alt="">
                            <div class="text-sm font-sans pt-1">Gaming</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="h-16 rounded-full mx-5" src="@/assets/images/tea.png" alt="">
                            <div class="text-sm font-sans pt-1">Tea</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Personal'
}
</script>