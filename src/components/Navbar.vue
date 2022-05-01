<template>
  <div
    class="fixed z-50 w-full flex flex-col justify-center h-16"
    v-bind:class="bindClass"
  >
    <div class="flex flex-row container mx-auto justify-between">
      <div class="ml-5 lg:ml-0 flex flex-row items-center">
        <div class="">
          <span class="text-white font-sans font-bold text-xl mr-1">Arkar</span
          ><span class="text-text-gray font-sans font-bold text-xl"
            >Mann Aung</span
          >
        </div>
      </div>
      <div class="mr-5 lg:mr-0 flex flex-row items-center">
        <div @click="goto('Education')" class="ml-3 lg:ml-8">
          
        </div>
        <a class="ml-3 lg:ml-8" href="https://www.facebook.com/arkarmannaung">
          <img
            class="w-6 rounded-full text-white bg-white"
            src="@/assets/icons/fb.svg"
            alt=""
          />
        </a>
        <a class="ml-3 lg:ml-8" href="https://t.me/arkarmannaung">
          <img
            class="w-6 rounded-full text-white bg-white"
            src="@/assets/icons/telegram.svg"
            alt=""
          />
        </a>
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
        console.log(
            ' intro ' + this.introY +
            ' introduce ' + this.introduceY +
            ' education ' + this.educationY +
            ' personal ' + this.personalY +
            ' contact ' + this.contactY
        )
        let currentTop = this.windowTop;
        let dark = currentTop>=this.introY && currentTop<this.introduceY || currentTop>=this.educationY && currentTop<this.personalY || currentTop>=this.contactY;
        let silver = false;
        var style;
        if(currentTop>=this.introY && currentTop<this.introduceY || currentTop>=this.educationY && currentTop<this.personalY || currentTop>=this.contactY){
            style = {
                "bg-dark-gray": true,
                "bg-silver-gray": false
            };
        }else{
            style = {
                "bg-dark-gray": false,
                "bg-silver-gray": true
            };
        }
      return style;
    },
  },
};
</script>