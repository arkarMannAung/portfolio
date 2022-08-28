<template>
    <div id="Education" class="text-center bg-silver-gray pt-20 pb-28">
        <div class="container mx-auto text-left text-white px-5 lg:px-0">
            <div class="flex flex-row justify-center pb-10">
                <img class="bg-silver-gray w-1/4 lg:w-1/6" src="@/assets/images/edu.png" alt="">
            </div>

            <div class="text-xl lg:text-3xl mb-5">MY EDUCATION</div>

            <div class="p-5 bg-dark-gray rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl mb-10 lg:mb-12 shadow-lg">
                <!-- Title -->
                <div class="text-sm lg:text-lg mb-2">BACHELOR OF SCIENCE IN MATHEMATICS</div>
                <!-- Body -->
                <div class="text-justify text-sm lg:text-lg text-text-gray">
                    I graduated in 2011 with bsc maths. Since the first year, i was learn about logical, which is very interesting. Maths matters for computer science because it teaches students how to use abstract language, work with algorithms, self-analyze their computational thinking, and accurately modeling real-world solutions. See-
                    <a class="text-green-400" href="#" onclick="window.open('certis/BSC-math.pdf', '_blank', 'fullscreen=yes'); return false;">Certificate</a>
                </div>
            </div>

            <div class="p-5 bg-dark-gray rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl mb-10 lg:mb-12 shadow-lg">
                <!-- Title -->
                <div class="text-sm lg:text-lg mb-2">LEVEL 3 TECHNICIAN DIPLOMA IN CONSTRUCTION</div>
                <!-- Body -->
                <div class="text-justify text-sm lg:text-lg text-text-gray">
                    Following the accreditation of the Technician IVQs in Construction(6165) on the National Qualifications Framework of England, Wales and Northern ireland (NQF), some changes have been made to the qualification, at the request of the office of the Qualifications and Examinations Regulator (Ofqual), the qualifications regulator in England. 
                    <a class="text-green-400" href="#" onclick="window.open('certis/level3/lev3-full.pdf', '_blank', 'fullscreen=yes'); return false;">E-Certificate</a>
                </div>
            </div>

            <div class="p-5 bg-dark-gray rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl mb-10 lg:mb-12 shadow-lg">
                <!-- Title -->
                <div class="text-sm lg:text-lg mb-2">LEVEL 5 ADVANCED TECHNICIAN DIPLOMA IN CIVIL ENGINEERING</div>
                <!-- Body -->
                <div class="text-justify text-sm lg:text-lg text-text-gray">
                    The Level 5 Advanced Technician Diplomas in Civil Engineering focus on advanced engineering. The learner will have the potential to fulfil a role within Engineering that requires a high level of responsibility, for example leading to middle management and/or project management, requiring the use of personal initiative and critical judgement.
                    <a class="text-green-400" href="#" onclick="window.open('certis/level3/lev3-full.pdf', '_blank', 'fullscreen=yes'); return false;">E-Certificate</a>
                </div>
            </div>
            <div class="my-5 h-5"></div>
            <!-- Other Certis -->
            <div class="text-xl lg:text-3xl my-5 uppercase">other certificate</div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">
                
                <div class="p-5 bg-dark-gray rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl mb-10 lg:mb-0 shadow-lg">
                    <!-- Title -->
                    <div class="flex flex-row justify-between">
                        <img class="w-24 lg:w-36 rounded-tl-2xl rounded-bl-sm rounded-tr-sm rounded-br-2xl" src="@/assets/images/y-max.jpg" alt="">
                        <div class="flex-1 flex flex-col justify-between items-start ml-3 lg:ml-6">
                            <div class="text-md lg:text-xl uppercase text-green-400">fundamentals of java</div>
                            <div class="text-xs lg:text-sm text-yellow-600">04 July 2020</div>
                            <div class="text-xs lg:text-sm">Y-Max Training Centre</div>
                            <div 
                                class="border-2 p-1 text-sm rounded-lg cursor-pointer text-green-400 border-green-400"
                                onclick="window.open('certis/y-max.jpg', '_blank', 'fullscreen=yes'); return false;"
                            >Certificate</div>
                        </div>
                    </div>
                </div>
                
                <div class="p-5 bg-dark-gray rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl mb-10 lg:mb-0 shadow-lg">
                    <!-- Title -->
                    <div class="flex flex-row justify-between">
                        <img class="w-24 lg:w-36 rounded-tl-2xl rounded-bl-sm rounded-tr-sm rounded-br-2xl" src="@/assets/images/shizuoka.jpg" alt="">
                        <div class="flex-1 flex flex-col justify-between items-start ml-3 lg:ml-6">
                            <div class="text-md lg:text-xl uppercase text-green-400">Japanese N5 + N4</div>
                            <div class="text-xs lg:text-sm text-yellow-600">2020年　10月　30日</div>
                            <div class="text-xs lg:text-sm">SHIZUOKA JAPANESE LANGUAGE CENTER</div>
                            <div 
                                class="border-2 p-1 text-sm rounded-lg cursor-pointer text-green-400 border-green-400"
                                onclick="window.open('certis/Nihon/n5-n4.jpg', '_blank', 'fullscreen=yes'); return false;"
                            >Certificate</div>
                        </div>
                    </div>
                </div>
                
                <div class="p-5 bg-dark-gray rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl mb-10 lg:mb-0 shadow-lg">
                    <!-- Title -->
                    <div class="flex flex-row justify-between">
                        <img class="w-24 lg:w-36 rounded-tl-2xl rounded-bl-sm rounded-tr-sm rounded-br-2xl" src="@/assets/images/shizuoka.jpg" alt="">
                        <div class="flex-1 flex flex-col justify-between items-start ml-3 lg:ml-6">
                            <div class="text-md lg:text-xl uppercase text-green-400">Japanese N3 Online</div>
                            <div class="text-xs lg:text-sm text-yellow-600">2020年　12月　31日</div>
                            <div class="text-xs lg:text-sm">SHIZUOKA JAPANESE LANGUAGE CENTER</div>
                            <div 
                                class="border-2 p-1 text-sm rounded-lg cursor-pointer text-green-400 border-green-400"
                                onclick="window.open('certis/Nihon/n3-online.jpg', '_blank', 'fullscreen=yes'); return false;"
                            >Certificate</div>
                        </div>
                    </div>
                </div>
                
                <div class="p-5 bg-dark-gray rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl mb-10 lg:mb-0 shadow-lg">
                    <!-- Title -->
                    <div class="flex flex-row justify-between">
                        <img class="w-24 lg:w-36 rounded-tl-2xl rounded-bl-sm rounded-tr-sm rounded-br-2xl" src="@/assets/images/mmit.jpg" alt="">
                        <div class="flex-1 flex flex-col justify-between items-start ml-3 lg:ml-6">
                            <div class="text-md lg:text-xl uppercase text-green-400">PHP WEB DEVELOPER BOOTCAMP</div>
                            <div class="text-xs lg:text-sm text-yellow-600">08 Jan 2021</div>
                            <div class="text-xs lg:text-sm">Myanmar IT Consulting</div>
                            <div 
                                class="border-2 p-1 text-sm rounded-lg cursor-pointer text-green-400 border-green-400"
                                onclick="window.open('certis/mmit.pdf', '_blank', 'fullscreen=yes'); return false;"
                            >Certificate</div>
                        </div>
                    </div>
                </div>

                <div class="p-5 bg-dark-gray rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl mb-10 lg:mb-0 shadow-lg">
                    <!-- Title -->
                    <div class="flex flex-row justify-between">
                        <img class="w-24 lg:w-36 rounded-tl-2xl rounded-bl-sm rounded-tr-sm rounded-br-2xl" src="@/assets/images/jlpt.png" alt="">
                        <div class="flex-1 flex flex-col justify-between items-start ml-3 lg:ml-6">
                            <div class="text-md lg:text-xl uppercase text-green-400">JLPT N4</div>
                            <div class="text-xs lg:text-sm text-yellow-600">2022年　1月　13日</div>
                            <div class="text-xs lg:text-sm">Japanese Language Proficiency Test</div>
                            <div 
                                class="border-2 p-1 text-sm rounded-lg cursor-pointer text-green-400 border-green-400"
                                onclick="window.open('certis/Nihon/jlpt-n4.pdf', '_blank', 'fullscreen=yes'); return false;"
                            >Certificate</div>
                        </div>
                    </div>
                </div>

                <div class="p-5 bg-dark-gray rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl mb-10 lg:mb-0 shadow-lg">
                    <!-- Title -->
                    <div class="flex flex-row justify-between">
                        <img class="w-24 lg:w-36 rounded-tl-2xl rounded-bl-sm rounded-tr-sm rounded-br-2xl" src="@/assets/images/fairway.png" alt="">
                        <div class="flex-1 flex flex-col justify-between items-start ml-3 lg:ml-6">
                            <div class="text-md lg:text-xl uppercase text-green-400">Professional Web Developer Course</div>
                            <div class="text-xs lg:text-sm text-yellow-600">07 May 2022</div>
                            <div class="text-xs lg:text-sm">Fairway Technology</div>
                            <div 
                                class="border-2 p-1 text-sm rounded-lg cursor-pointer text-green-400 border-green-400"
                                onclick="window.open('certis/proweb.jpg', '_blank', 'fullscreen=yes'); return false;"
                            >Certificate</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 mt-10 lg:mt-20">
                <div class="flex flex-row justify-center ">
                    <div 
                        class="rounded-tl-2xl rounded-bl-sm rounded-tr-sm rounded-br-2xl bg-gradient-to-br from-green-400 to-green-600 py-3 px-4 cursor-pointer uppercase　w-44 text-center"
                        onclick="window.open('certis/ARKAR-MANN-AUNG.pdf', '_blank', 'fullscreen=yes'); return false;"
                    >Download CV</div>
                </div>
                <div class="flex flex-row justify-center">
                    <div 
                        class="rounded-tl-2xl rounded-bl-sm rounded-tr-sm rounded-br-2xl bg-gradient-to-br from-red-400 to-red-600 py-3 px-4 cursor-pointer uppercase　w-44 text-center"
                        onclick="window.open('certis/Rirekisho-履歴書-ArkarMannAung.pdf', '_blank', 'fullscreen=yes'); return false;"
                    >履歴書</div>
                </div>
            </div>
            <!-- <div class="flex flex-row justify-center ">
                <div 
                    class="rounded-tl-2xl rounded-bl-sm rounded-tr-sm rounded-br-2xl bg-gradient-to-br from-green-400 to-green-600 py-3 px-4 cursor-pointer uppercase　w-44 text-center"
                    onclick="window.open('certis/ARKAR-MANN-AUNG.pdf', '_blank', 'fullscreen=yes'); return false;"
                >Download CV</div>
            </div>
            <div class="flex flex-row justify-center mt-10 lg:mt-20">
                <div 
                    class="rounded-tl-2xl rounded-bl-sm rounded-tr-sm rounded-br-2xl bg-gradient-to-br from-red-400 to-red-600 py-3 px-4 cursor-pointer uppercase　w-44 text-center"
                    onclick="window.open('certis/Rirekisho-履歴書-ArkarMannAung.pdf', '_blank', 'fullscreen=yes'); return false;"
                >履歴書</div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Resumes',
    methods: {
        open: function(url) {
            // let full = require('@/assets/image');
            alert('full');
            window.open('@/assets/', '_blank').focus();
        }
    }
}
</script>