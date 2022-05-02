<template>
  <div
    class="
      fixed
      z-50
      w-full
      flex flex-col
      justify-center
      h-16
      transition-colors
      duration-1500
    "
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
          class="
            hidden
            lg:block
            transition-colors
            duration-1500
            lg:mx-4
            font-sans
            uppercase
            shadow-lg
            cursor-pointer
            hover:bg-gray-500 hover:text-black
            px-3
            py-2
            rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm
            select-none
          "
        >
          Home
        </div>
        <div
          v-bind:class="{'bg-dark-gray': navDark,'bg-silver-gray': !navDark,'text-white': currentNav=='Introduce','text-text-gray': currentNav!='Introduce','font-bold': currentNav=='Introduce'}"
          @click="goto('Introduce')"
          class="
            hidden
            lg:block
            transition-colors
            duration-1500
            lg:mx-4
            font-sans
            uppercase
            shadow-lg
            cursor-pointer
            hover:bg-gray-500 hover:text-black
            px-3
            py-2
            rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm
            select-none
          "
        >
          Portfolio
        </div>
        <div
          v-bind:class="{'bg-dark-gray': navDark,'bg-silver-gray': !navDark,'text-white': currentNav=='Education','text-text-gray': currentNav!='Education','font-bold': currentNav=='Education'}"
          @click="goto('Education')"
          class="
            hidden
            lg:block
            transition-colors
            duration-1500
            lg:mx-4
            font-sans
            uppercase
            shadow-lg
            cursor-pointer
            hover:bg-gray-500 hover:text-black
            px-3
            py-2
            rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm
            select-none
          "
        >
          Education
        </div>
        <div
          v-bind:class="{'bg-dark-gray': navDark,'bg-silver-gray': !navDark,'text-white': currentNav=='Personal','text-text-gray': currentNav!='Personal','font-bold': currentNav=='Personal'}"
          @click="goto('Personal')"
          class="
            hidden
            lg:block
            transition-colors
            duration-1500
            lg:mx-4
            font-sans
            uppercase
            shadow-lg
            cursor-pointer
            hover:bg-gray-500 hover:text-black
            px-3
            py-2
            rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm
            select-none
          "
        >
          Personal
        </div>
        <div
          v-bind:class="{'bg-dark-gray': navDark,'bg-silver-gray': !navDark,'text-white': currentNav=='Contact','text-text-gray': currentNav!='Contact','font-bold': currentNav=='Contact'}"
          @click="goto('Contact')"
          class="
            hidden
            lg:block
            transition-colors
            duration-1500
            lg:mx-4
            font-sans
            uppercase
            shadow-lg
            cursor-pointer
            hover:bg-gray-500 hover:text-black
            px-3
            py-2
            rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm
            select-none
          "
        >
          Contact me
        </div>
      </div>
    </div>
  </div>
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
    goto(refName) {
      var element = document.getElementById(refName);
      //   console.log(element.offsetTop)
      var top = element.offsetTop;
      //   alert(top);
      window.scrollTo(0, top);
    },
    getY() {
      this.introY = document.getElementById("Intro").offsetTop;
      this.introduceY = document.getElementById("Introduce").offsetTop;
      this.educationY = document.getElementById("Education").offsetTop;
      this.personalY = document.getElementById("Personal").offsetTop;
      this.contactY = document.getElementById("Contact").offsetTop;
    },
    onScroll(e) {
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
      return currentNav;
    }
  },
};
</script>