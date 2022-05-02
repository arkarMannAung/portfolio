<template>
  <Navbar/>
  <div @click="onDrop=false">  
    <Intro/>
    <Introduce/>
    <Resumes/>
    <Personal/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'
import Introduce from '@/components/Introduce.vue'
import Resumes from '@/components/Resumes.vue'
import Personal from '@/components/Personal.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      onDrop: false,
    }
  },
  components: {
    Intro,
    Introduce,
    Resumes,
    Personal,
    Contact,
    Footer,
    Navbar
  }
}
</script>
