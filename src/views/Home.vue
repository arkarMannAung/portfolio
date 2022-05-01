<template>
  <Navbar/>
  <Intro/>
  <Introduce/>
  <Resumes/>
  <Personal/>
  <Contact/>
  <Footer/>
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
