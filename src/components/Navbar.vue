<template>
  <!-- <div class="fixed bottom-0 font-sans text-white mb-20 ml-20 bg-gray-600 p-5">
    {{currentNav}} {{ windowTop }} {{ personalY }}
  </div> -->
  <div
    class="fixed z-30 w-full flex flex-col justify-center h-16 transition-colors duration-1500"
    v-bind:class="bindClass"
  >
    <div class="flex flex-row container mx-auto justify-between">
      <div class="ml-5 lg:ml-0 flex flex-row items-center">
        <div class="select-none">
          <span class="text-white font-sans font-bold text-xl mr-1">Arkar</span
          ><span class="text-text-gray font-sans font-bold text-xl"
            >Mann Aung</span
          >
        </div>
      </div>
      <div class="mr-5 lg:mr-0 flex flex-row items-center">
        <div
          v-bind:class="{'bg-dark-gray': navDark,'bg-silver-gray': !navDark,'text-white': currentNav=='Home','text-text-gray': currentNav!='Home','font-bold': currentNav=='Home'}"
          @click="goto('Intro')"
          class=" hidden lg:block transition-colors duration-300 lg:mx-4 font-sans uppercase shadow-lg cursor-pointer hover:bg-gray-500 hover:text-black px-3 py-2 rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm select-none"
        >
          Home
        </div>
        <div
          v-bind:class="{'bg-dark-gray': navDark,'bg-silver-gray': !navDark,'text-white': currentNav=='Introduce','text-text-gray': currentNav!='Introduce','font-bold': currentNav=='Introduce'}"
          @click="goto('Introduce')"
          class=" hidden lg:block transition-colors duration-500 lg:mx-4 font-sans uppercase shadow-lg cursor-pointer hover:bg-gray-500 hover:text-black px-3 py-2 rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm select-none"
        >
          Portfolio
        </div>
        <div
          v-bind:class="{'bg-dark-gray': navDark,'bg-silver-gray': !navDark,'text-white': currentNav=='Education','text-text-gray': currentNav!='Education','font-bold': currentNav=='Education'}"
          @click="goto('Education')"
          class=" hidden lg:block transition-colors duration-700 lg:mx-4 font-sans uppercase shadow-lg cursor-pointer hover:bg-gray-500 hover:text-black px-3 py-2 rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm select-none"
        >
          Education
        </div>
        <div
          v-bind:class="{'bg-dark-gray': navDark,'bg-silver-gray': !navDark,'text-white': currentNav=='Personal','text-text-gray': currentNav!='Personal','font-bold': currentNav=='Personal'}"
          @click="goto('Personal')"
          class=" hidden lg:block transition-colors duration-1000 lg:mx-4 font-sans uppercase shadow-lg cursor-pointer hover:bg-gray-500 hover:text-black px-3 py-2 rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm select-none"
        >
          Personal
        </div>
        <div
          v-bind:class="{'bg-dark-gray': navDark,'bg-silver-gray': !navDark,'text-white': currentNav=='Contact','text-text-gray': currentNav!='Contact','font-bold': currentNav=='Contact'}"
          @click="goto('Contact')"
          class=" hidden lg:block transition-colors duration-1500 lg:mx-4 font-sans uppercase shadow-lg cursor-pointer hover:bg-gray-500 hover:text-black px-3 py-2 rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm select-none"
        >
          Contact me
        </div>
        
        <!-- dropdown icon -->
        <div 
          @click="$parent.onDrop =!$parent.onDrop"
          v-bind:class="{'bg-dark-gray': navDark,'bg-silver-gray': !navDark}"
          class="lg:hidden py-1 px-3 transition-colors duration-1500 cursor-pointer rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg"
        >
          <i class="text-white fa-solid fa-bars text-3xl"></i>
        </div>
      </div>
    </div>
  </div>
  
  <!--drop down  -->
  <transition
    enter-active-class="transition ease-custom"
    enter-class="translate-x-100 scale-x-5"
    enter-to-class="translate-x-1/2 scale-x-100"
    leave-active-class="transform ease-custom"
    leave-class="translate-x-0 scale-x-100"
    leave-to-class="-translate-x-1/2 scale-x-0"
  > 
    
    <div 
      v-show="$parent.onDrop"
      class="z-40 fixed h-full w-2/3 duration-1000"
    >
      <div class="flex flex-col">
        <div 
          v-bind:class="bindClass"
          class="h-16 flex flex-col justify-center transition-colors duration-1500"
        >
          <div class="ml-5 lg:ml-0">
            <div class="select-none flex flex-row">
              <span class="text-white font-sans font-bold text-xl mr-1">Arkar</span
              ><span class="text-text-gray font-sans font-bold text-xl"
                >Mann Aung</span
              >
            </div>
          </div>
        </div>
        
      </div>
      <div
      v-bind:class="{'bg-dark-gray': navDark,'bg-silver-gray': !navDark}"
        class="h-full bg-gray-400 flex flex-col"
      >
        <div
          v-bind:class="{'bg-dark-gray': !navDark,'bg-silver-gray': navDark,'text-white': currentNav=='Home','text-text-gray': currentNav!='Home','font-bold': currentNav=='Home'}"
          @click="goto('Intro',true)"
          class="transition-colors duration-300 mx-4 mt-8 mb-4 font-sans uppercase shadow-lg cursor-pointer hover:bg-gray-500 hover:text-black px-3 py-2 rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm select-none text-center"
        >
          Home
        </div>
        <div
          v-bind:class="{'bg-dark-gray': !navDark,'bg-silver-gray': navDark,'text-white': currentNav=='Introduce','text-text-gray': currentNav!='Introduce','font-bold': currentNav=='Introduce'}"
          @click="goto('Introduce',true)"
          class="transition-colors duration-500 mx-4 my-4 font-sans uppercase shadow-lg cursor-pointer hover:bg-gray-500 hover:text-black px-3 py-2 rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm select-none text-center"
        >
          Portfolio
        </div>
        <div
          v-bind:class="{'bg-dark-gray': !navDark,'bg-silver-gray': navDark,'text-white': currentNav=='Education','text-text-gray': currentNav!='Education','font-bold': currentNav=='Education'}"
          @click="goto('Education',true)"
          class="transition-colors duration-700 mx-4 my-4 font-sans uppercase shadow-lg cursor-pointer hover:bg-gray-500 hover:text-black px-3 py-2 rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm select-none text-center"
        >
          Education
        </div>
        <div
          v-bind:class="{'bg-dark-gray': !navDark,'bg-silver-gray': navDark,'text-white': currentNav=='Personal','text-text-gray': currentNav!='Personal','font-bold': currentNav=='Personal'}"
          @click="goto('Personal',true)"
          class="transition-colors duration-1000 mx-4 my-4 font-sans uppercase shadow-lg cursor-pointer hover:bg-gray-500 hover:text-black px-3 py-2 rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm select-none text-center"
        >
          Personal
        </div>
        <div
          v-bind:class="{'bg-dark-gray': !navDark,'bg-silver-gray': navDark,'text-white': currentNav=='Contact','text-text-gray': currentNav!='Contact','font-bold': currentNav=='Contact'}"
          @click="goto('Contact',true)"
          class="transition-colors duration-1500 mx-4 my-4 font-sans uppercase shadow-lg cursor-pointer hover:bg-gray-500 hover:text-black px-3 py-2 rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm select-none text-center"
        >
          Contact me
        </div>

        <div @click="$parent.onDrop=false" class="flex flex-row w-full justify-center items-center mt-6">
          <div 
            class="w-12 h-12 rounded-full flex flex-col bg-gray-300 justify-center cursor-pointer drop-shadow-lg shadow-lg"
          >
            <i class="fa-solid fa-xmark text-xl text-center"></i>
          </div>
        </div>

      </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      windowTop: window.top.scrollY,
      introY: 0,
      introduceY: 0,
      educationY: 0,
      personalY: 0,
      contactY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll, true);
    window.addEventListener("resize", this.getY, true);
    this.getY();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll, true);
    window.removeEventListener("resize", this.getY, true);
  },
  methods: {
    goto(refName,closeDropdown=false) {
      var element = document.getElementById(refName);
      var top = element.offsetTop;
      window.scrollTo(0, top);
      if(closeDropdown){
        this.$parent.onDrop=false;
      }
    },
    getY() {
      this.introY = document.getElementById("Intro").offsetTop;
      this.introduceY = document.getElementById("Introduce").offsetTop;
      this.educationY = document.getElementById("Education").offsetTop;
      this.personalY = document.getElementById("Personal").offsetTop;
      this.contactY = document.getElementById("Contact").offsetTop;
    },
    onScroll(e) {
      this.introY = document.getElementById("Intro").offsetTop;
      this.introduceY = document.getElementById("Introduce").offsetTop;
      this.educationY = document.getElementById("Education").offsetTop;
      this.personalY = document.getElementById("Personal").offsetTop;
      this.contactY = document.getElementById("Contact").offsetTop;
      this.windowTop = window.scrollY;
    },
  },

  computed: {
    top: function () {
      return this.windowTop;
    },
    bindClass: function () {
      let currentTop = this.windowTop;
      var style;
      if (
        (currentTop >= this.introY && currentTop < this.introduceY) ||
        (currentTop >= this.educationY && currentTop < this.personalY) ||
        currentTop >= this.contactY
      ) {
        style = {
          "bg-dark-gray": true,
          "bg-silver-gray": false,
        };
      } else {
        style = {
          "bg-dark-gray": false,
          "bg-silver-gray": true,
        };
      }
      return style;
    },
    navDark: function () {
      let currentTop = this.windowTop;
      var style;
      if (
        (currentTop >= this.introY && currentTop < this.introduceY) ||
        (currentTop >= this.educationY && currentTop < this.personalY) ||
        currentTop >= this.contactY
      ) {
        style = false;
      } else {
        style = true;
      }
      return style;
    },
    currentNav: function() {
      let currentTop = this.windowTop;
      let currentNav = '';
      // Introduce Education Personal Contact
      if(currentTop >= this.introY && currentTop < this.introduceY){
        currentNav = 'Home';
      }else if(currentTop >= this.introduceY && currentTop < this.educationY){
        currentNav = 'Introduce';
      }else if(currentTop >= this.educationY && currentTop < this.personalY){
        currentNav = 'Education';
      }else if(currentTop >= this.personalY && currentTop < this.personalY +200){
        currentNav = 'Personal';
      }else if(currentTop >= this.personalY +200){
        currentNav = 'Contact';
      }
      // console.log('y '+currentTop+ ' nav: '+currentNav);
      // console.log('currentTop '+currentTop+ ' personY: '+ this.personalY);
      return currentNav;
    }
  },
};
</script>